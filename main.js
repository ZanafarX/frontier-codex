// ===================================
// FRONTIER CODEX - MAIN JAVASCRIPT
// Updated with Rules Section Support
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeTabs();
    initializeSearch();
    initializeBackToTop();
    initializeMobileMenu();
    initializeBackgroundMusic();
});

// ===================================
// NAVIGATION
// ===================================

function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(currentPage) || (currentPage === '' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================

function initializeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const dropdownToggles = document.querySelectorAll('.nav-item.has-dropdown > .nav-link');
    
    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            navList.classList.toggle('mobile-active');
            toggle.setAttribute('aria-expanded', navList.classList.contains('mobile-active'));
        });
    }
    
    dropdownToggles.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentItem = link.closest('.nav-item');
                parentItem.classList.toggle('mobile-open');
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-nav') && navList.classList.contains('mobile-active')) {
            navList.classList.remove('mobile-active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ===================================
// TABS
// ===================================

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            const container = button.closest('.tab-container');
            
            container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            container.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            
            button.classList.add('active');
            const activePanel = container.querySelector(`#${tabId}`);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
}


// ===================================
// SEARCH ENGINE v2
// ===================================

let searchIndex = null;
let searchIndexBuilding = false;
let activeCategory = 'all';

// Synonym map — common TTRPG lookup patterns
const SYNONYMS = {
    'fight': ['combat', 'battle', 'attack', 'melee', 'brawl'],
    'combat': ['fight', 'battle', 'attack', 'melee', 'brawl'],
    'attack': ['fight', 'combat', 'strike', 'hit'],
    'magic': ['psionics', 'current', 'discipline', 'powers', 'psionic'],
    'psionics': ['magic', 'current', 'discipline', 'powers', 'psionic', 'mindweaver'],
    'current': ['psionics', 'psionic', 'magic', 'powers', 'veil'],
    'class': ['calling', 'callings', 'role', 'archetype'],
    'calling': ['class', 'callings', 'role', 'archetype'],
    'callings': ['class', 'calling', 'role', 'archetype', 'classes'],
    'monster': ['creature', 'beast', 'enemy', 'bestiary', 'threat'],
    'creature': ['monster', 'beast', 'enemy', 'bestiary', 'threat'],
    'bestiary': ['monster', 'creature', 'beast', 'enemy', 'enemies'],
    'stats': ['attributes', 'statistics', 'ability scores', 'characteristics'],
    'hp': ['health', 'hit points', 'wounds', 'vitality', 'grit'],
    'health': ['hp', 'hit points', 'wounds', 'vitality', 'grit'],
    'grit': ['health', 'hp', 'toughness', 'endurance', 'resolve'],
    'weapon': ['weapons', 'gun', 'guns', 'arms', 'iron', 'firearm'],
    'weapons': ['weapon', 'gun', 'guns', 'arms', 'iron', 'firearms', 'gear'],
    'gun': ['weapon', 'firearm', 'pistol', 'rifle', 'iron', 'revolver'],
    'gear': ['equipment', 'items', 'weapons', 'tools', 'supplies'],
    'equipment': ['gear', 'items', 'weapons', 'tools', 'supplies'],
    'money': ['currency', 'dollars', 'coin', 'economy', 'trade', 'dust'],
    'npc': ['npcs', 'character', 'person', 'ally', 'contact'],
    'gm': ['marshal', 'game master', 'narrator', 'referee'],
    'marshal': ['gm', 'game master', 'narrator', 'referee'],
    'death': ['dying', 'dead', 'kill', 'lethal', 'fatal'],
    'heal': ['healing', 'recovery', 'rest', 'mend', 'cure', 'medicine'],
    'level': ['leveling', 'advance', 'advancement', 'progression', 'experience', 'xp'],
    'map': ['atlas', 'geography', 'region', 'location', 'territory'],
    'location': ['place', 'region', 'settlement', 'town', 'atlas', 'area'],
    'skill': ['skills', 'ability', 'proficiency', 'talent', 'check'],
    'check': ['roll', 'test', 'skill check', 'dice'],
    'roll': ['check', 'dice', 'test', 'resolution'],
    'dice': ['roll', 'check', 'd20', 'd6', 'd10', 'resolution'],
    'veil': ['current', 'psionics', 'supernatural', 'anomaly', 'hum', 'rupture'],
    'faction': ['factions', 'power', 'powers', 'consortium', 'vultures', 'redeemers', 'ironbrands', 'circle of ash'],
    'consortium': ['orvain', 'rails', 'trains', 'scrip', 'corporation', 'industry', 'faction'],
    'vultures': ['dust vultures', 'raiders', 'nomads', 'clans', 'khan', 'faction'],
    'redeemers': ['zealots', 'inquisitor', 'witch-hunter', 'church', 'faith', 'faction'],
    'ironbrands': ['mercenary', 'mercenaries', 'hardsuits', 'contracts', 'guild', 'faction'],
    'circle': ['circle of ash', 'scholars', 'occultist', 'lodges', 'ley lines', 'faction'],
    'salt': ['currency', 'money', 'economy', 'scrip', 'trade', 'ward', 'supernatural'],
    'scrip': ['currency', 'money', 'consortium', 'salt', 'economy'],
    'survival': ['wastes', 'supplies', 'travel', 'danger', 'frontier'],
    'superstition': ['ritual', 'salt line', 'iron', 'threshold', 'mirrors', 'ward'],
};

// Category display labels
const CATEGORY_LABELS = {
    'all': 'All',
    'rules': 'Rules',
    'lore': 'Lore',
    'world': 'World & Atlas',
    'bestiary': 'Bestiary',
    'marshal': "Marshal's Guide",
    'general': 'General',
};

// All site pages and their metadata
function getPageManifest(basePath) {
    return [
        // Home
        { url: basePath + 'index.html', title: 'Home', category: 'general', tags: [] },
        
        // The Frontier (Lore)
        { url: basePath + 'pages/introduction.html', title: 'The World That Was', category: 'lore', tags: ['veil', 'frontier', 'setting', 'world', 'hum', 'rupture', 'history'] },
        { url: basePath + 'pages/five-powers.html', title: 'The Five Powers', category: 'lore', tags: ['factions', 'consortium', 'orvain', 'dust vultures', 'redeemers', 'circle of ash', 'ironbrands', 'mercenary', 'zealots', 'raiders'] },
        { url: basePath + 'pages/life-in-the-wastes.html', title: 'Life in the Wastes', category: 'lore', tags: ['survival', 'salt', 'economy', 'currency', 'scrip', 'superstition', 'geography', 'ash belt', 'thin places', 'civilized rim', 'three rules'] },
        
        // The Drifter (Character Rules)
        { url: basePath + 'rules/ch1-overview.html', title: 'Ch 1: The Long Road', category: 'rules', tags: ['character creation', 'stats', 'callings', 'backgrounds', 'origins'] },
        { url: basePath + 'rules/ch2-overview.html', title: 'Ch 2: The Soul', category: 'rules', tags: ['core mechanics', 'dice', 'skill checks', 'resolution', 'attributes'] },
        { url: basePath + 'rules/ch3-overview.html', title: 'Ch 3: The Armory & Economy', category: 'rules', tags: ['equipment', 'gear', 'economy', 'weapons', 'items', 'currency', 'trade', 'cost rating'] },
        
        // The Law of Lead (Combat Rules)
        { url: basePath + 'rules/ch4-overview.html', title: "Ch 4: The Duelist's Sum", category: 'rules', tags: ['combat', 'fighting', 'damage', 'initiative', 'actions', 'dueling'] },
        { url: basePath + 'rules/ch5-overview.html', title: 'Ch 5: The Count', category: 'rules', tags: ['combat', 'rounds', 'turns', 'action economy', 'timing'] },
        
        // The Current (Psionics Rules)
        { url: basePath + 'rules/ch6-overview.html', title: 'Ch 6: Tearing the Veil', category: 'rules', tags: ['psionics', 'current', 'powers', 'psionic', 'mindweaver', 'tearing', 'veil'] },
        { url: basePath + 'rules/ch7-overview.html', title: 'Ch 7: The Disciplines', category: 'rules', tags: ['disciplines', 'abilities', 'powers', 'talents', 'skills', 'psionic disciplines'] },
        
        // Marshal's Almanac
        { url: basePath + 'rules/ch8-overview.html', title: 'Ch 8: Managing the Nightmare', category: 'marshal', tags: ['gm guide', 'marshal', 'running the game', 'encounters', 'sessions'] },
        { url: basePath + 'rules/ch9-overview.html', title: 'Ch 9: The Atlas', category: 'world', tags: ['locations', 'map', 'geography', 'regions', 'settlements'] },
        { url: basePath + 'rules/ch10-overview.html', title: 'Ch 10: The Bestiary', category: 'bestiary', tags: ['monsters', 'creatures', 'enemies', 'npcs', 'threats'] },
    ];
}

function initializeSearch() {
    const searchButton = document.querySelector('.search-button');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchModal) {
        searchButton.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
            if (!searchIndex && !searchIndexBuilding) {
                buildSearchIndex();
            }
        });
    }
    
    // Keyboard shortcut: Ctrl+K or Cmd+K to open search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchModal) {
                searchModal.classList.add('active');
                searchInput.focus();
                if (!searchIndex && !searchIndexBuilding) {
                    buildSearchIndex();
                }
            }
        }
    });
    
    if (searchClose) {
        searchClose.addEventListener('click', () => closeSearch());
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });
    
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) closeSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 200));
    }
}

function closeSearch() {
    const searchModal = document.querySelector('.search-modal');
    const searchInput = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results');
    
    if (searchModal) searchModal.classList.remove('active');
    if (searchInput) searchInput.value = '';
    if (resultsContainer) resultsContainer.innerHTML = '';
    activeCategory = 'all';
    
    // Reset active pill visually
    const pills = document.querySelectorAll('.search-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    const allPill = document.querySelector('.search-filter-pill[data-category="all"]');
    if (allPill) allPill.classList.add('active');
}

// Build search index by fetching all site pages
async function buildSearchIndex() {
    searchIndexBuilding = true;
    const resultsContainer = document.querySelector('.search-results');
    resultsContainer.innerHTML = '<p class="no-results">Building search index... one moment.</p>';
    
    // Determine base path
    const isInSubfolder = window.location.pathname.includes('/rules/') ||
                          window.location.pathname.includes('/pages/');
    const basePath = isInSubfolder ? '../' : '';
    
    const pages = getPageManifest(basePath);
    searchIndex = [];
    let entryId = 0;
    
    // Fetch all pages in parallel for speed
    const fetchPromises = pages.map(async (page) => {
        try {
            const response = await fetch(page.url);
            if (!response.ok) return [];
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('.main-content');
            if (!mainContent) return [];
            
            const entries = [];
            
            // Index discrete content blocks
            const sections = mainContent.querySelectorAll(
                '.content-section, .character-card, .quote-block, ' +
                '.mechanic-box, .weapon-card, .calling-card, .discipline-card, ' +
                '.npc-card, .talent-card, .stat-card, .example-box, ' +
                '.rules-callout, .quickstart-box, ' +
                '.faction-section, .zone-card, .currency-card, ' +
                '.superstition-item, .rule-block, ' +
                '.tab-panel'
            );
            
            if (sections.length > 0) {
                sections.forEach(section => {
                    const heading = section.querySelector(
                        '.character-name, .section-title, .callout-title, ' +
                        '.faction-title, .zone-title, .currency-name, ' +
                        '.superstition-name, .rule-title, .tab-title, ' +
                        'h2, h3, h4, h5'
                    );
                    const text = section.textContent.trim().replace(/\s+/g, ' ');
                    if (text.length > 30) {
                        entries.push({
                            id: entryId++,
                            url: page.url,
                            page: page.title,
                            category: page.category,
                            section: heading ? heading.textContent.trim() : page.title,
                            content: text.substring(0, 1500),
                            tags: page.tags || []
                        });
                    }
                });
            }
            
            // Always also index full-page text so nothing falls through cracks
            const fullText = mainContent.textContent.trim().replace(/\s+/g, ' ');
            if (fullText.length > 30) {
                entries.push({
                    id: entryId++,
                    url: page.url,
                    page: page.title,
                    category: page.category,
                    section: page.title + ' (Full Page)',
                    content: fullText.substring(0, 3000),
                    tags: page.tags || []
                });
            }
            
            return entries;
        } catch (err) {
            // Silently skip — likely local file:// CORS issue
            return [];
        }
    });
    
    const allResults = await Promise.all(fetchPromises);
    searchIndex = allResults.flat();
    searchIndexBuilding = false;
    
    if (searchIndex.length === 0) {
        resultsContainer.innerHTML =
            '<p class="no-results">Could not build search index. If testing locally, use a local server (<code>python -m http.server</code>).</p>';
    } else {
        resultsContainer.innerHTML = '';
        renderCategoryFilters();
        console.log(`Search index built: ${searchIndex.length} entries from ${pages.length} pages.`);
    }
}

// Render category filter pills
function renderCategoryFilters() {
    let filterBar = document.querySelector('.search-filters');
    if (filterBar) return;
    
    const searchContent = document.querySelector('.search-content');
    const searchInput = document.querySelector('.search-input');
    if (!searchContent || !searchInput) return;
    
    filterBar = document.createElement('div');
    filterBar.className = 'search-filters';
    
    const cats = new Set(searchIndex.map(e => e.category));
    
    const order = ['all', 'rules', 'lore', 'world', 'bestiary', 'marshal', 'general'];
    order.forEach(cat => {
        if (cat !== 'all' && !cats.has(cat)) return;
        const pill = document.createElement('button');
        pill.className = 'search-filter-pill' + (cat === 'all' ? ' active' : '');
        pill.setAttribute('data-category', cat);
        pill.textContent = CATEGORY_LABELS[cat] || cat;
        pill.addEventListener('click', () => {
            activeCategory = cat;
            filterBar.querySelectorAll('.search-filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            performSearch();
        });
        filterBar.appendChild(pill);
    });
    
    searchInput.insertAdjacentElement('afterend', filterBar);
}

// ===================================
// SEARCH ALGORITHM
// ===================================

function tokenize(str) {
    return str.toLowerCase()
        .replace(/[^\w\s'-]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length >= 2);
}

function expandWithSynonyms(tokens) {
    const expanded = new Set(tokens);
    tokens.forEach(token => {
        if (SYNONYMS[token]) {
            SYNONYMS[token].forEach(syn => expanded.add(syn));
        }
    });
    return expanded;
}

function scoreEntry(entry, queryTokens, expandedTokens, rawQuery) {
    const titleLower = (entry.section + ' ' + entry.page).toLowerCase();
    const contentLower = entry.content.toLowerCase();
    const tagsLower = (entry.tags || []).join(' ').toLowerCase();
    const queryLower = rawQuery.toLowerCase().trim();
    
    let score = 0;
    
    // 1. Exact phrase match (huge bonus)
    if (titleLower.includes(queryLower)) score += 100;
    if (contentLower.includes(queryLower)) score += 40;
    if (tagsLower.includes(queryLower)) score += 50;
    
    // 2. Per-token scoring
    let titleHits = 0;
    let contentHits = 0;
    let tagHits = 0;
    let synonymHits = 0;
    
    queryTokens.forEach(token => {
        if (titleLower.includes(token)) {
            titleHits++;
            score += 25;
        }
        if (contentLower.includes(token)) {
            contentHits++;
            score += 10;
        }
        if (tagsLower.includes(token)) {
            tagHits++;
            score += 20;
        }
    });
    
    // 3. Synonym expansion hits (lower weight)
    expandedTokens.forEach(syn => {
        if (!queryTokens.includes(syn)) {
            if (titleLower.includes(syn)) {
                synonymHits++;
                score += 8;
            }
            if (contentLower.includes(syn)) {
                synonymHits++;
                score += 3;
            }
            if (tagsLower.includes(syn)) {
                synonymHits++;
                score += 6;
            }
        }
    });
    
    // 4. All query tokens present bonus
    if (queryTokens.length > 1 && titleHits === queryTokens.length) score += 30;
    if (queryTokens.length > 1 && contentHits === queryTokens.length) score += 15;
    
    // 5. Require at least some match
    if (titleHits === 0 && contentHits === 0 && tagHits === 0 && synonymHits === 0) {
        return 0;
    }
    
    // 6. Penalize full-page entries slightly so section-level matches rank higher
    if (entry.section.includes('(Full Page)')) score -= 5;
    
    return score;
}

function performSearch() {
    const input = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results');
    const rawQuery = input.value.trim();
    
    if (!rawQuery || rawQuery.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    if (!searchIndex || searchIndex.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">Search index is still loading...</p>';
        return;
    }
    
    const queryTokens = tokenize(rawQuery);
    const expandedTokens = expandWithSynonyms(queryTokens);
    
    // Score and filter
    let results = searchIndex
        .map(entry => ({
            ...entry,
            score: scoreEntry(entry, queryTokens, [...expandedTokens], rawQuery)
        }))
        .filter(entry => entry.score > 0);
    
    // Apply category filter
    if (activeCategory !== 'all') {
        results = results.filter(e => e.category === activeCategory);
    }
    
    // Sort by score descending, deduplicate by page+section
    results.sort((a, b) => b.score - a.score);
    
    // Deduplicate — keep highest-scoring entry per unique page+section
    const seen = new Set();
    results = results.filter(r => {
        const key = r.url + '|' + r.section;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <p class="no-results">
                No results found for "<strong>${escapeHTML(rawQuery)}</strong>."
                Try different keywords or broaden your search.
            </p>
            <div class="search-suggestions">
                <p class="suggestions-label">Common searches:</p>
                <div class="suggestion-chips">
                    <button class="suggestion-chip" data-query="combat">Combat</button>
                    <button class="suggestion-chip" data-query="character creation">Character Creation</button>
                    <button class="suggestion-chip" data-query="psionics">Psionics</button>
                    <button class="suggestion-chip" data-query="weapons">Weapons</button>
                    <button class="suggestion-chip" data-query="bestiary">Bestiary</button>
                    <button class="suggestion-chip" data-query="callings">Callings</button>
                </div>
            </div>
        `;
        bindSuggestionChips();
        return;
    }
    
    // Render results (max 15)
    const count = Math.min(results.length, 15);
    const categoryBadge = (cat) => {
        const label = CATEGORY_LABELS[cat] || cat;
        return `<span class="search-category-badge category-${cat}">${label}</span>`;
    };
    
    let html = `<p class="search-result-count">${results.length} result${results.length !== 1 ? 's' : ''} found</p>`;
    
    html += results.slice(0, count).map(result => {
        const excerpt = getExcerpt(result.content, rawQuery, queryTokens);
        // Clean up section display name
        const sectionDisplay = result.section.replace(' (Full Page)', '');
        return `
            <div class="search-result-item">
                <div class="search-result-header">
                    ${categoryBadge(result.category)}
                    <h3 class="search-result-title">
                        <a href="${result.url}">${escapeHTML(result.page)}</a>
                    </h3>
                </div>
                <p class="search-result-section">${escapeHTML(sectionDisplay)}</p>
                <p class="search-result-excerpt">${excerpt}</p>
            </div>
        `;
    }).join('');
    
    if (results.length > count) {
        html += `<p class="search-more">Showing ${count} of ${results.length} results. Refine your search for more specific results.</p>`;
    }
    
    resultsContainer.innerHTML = html;
}

function getExcerpt(text, rawQuery, queryTokens) {
    const lowerText = text.toLowerCase();
    const lowerQuery = rawQuery.toLowerCase();
    
    // Try to center excerpt on the best match
    let bestIndex = lowerText.indexOf(lowerQuery);
    
    if (bestIndex === -1) {
        for (const token of queryTokens) {
            bestIndex = lowerText.indexOf(token);
            if (bestIndex !== -1) break;
        }
    }
    
    if (bestIndex === -1) bestIndex = 0;
    
    const windowSize = 250;
    const start = Math.max(0, bestIndex - 80);
    const end = Math.min(text.length, start + windowSize);
    let excerpt = text.substring(start, end).replace(/\s+/g, ' ');
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    // Highlight all query tokens
    queryTokens.forEach(token => {
        const regex = new RegExp(`(${escapeRegex(token)})`, 'gi');
        excerpt = excerpt.replace(regex, '<span class="search-highlight">$1</span>');
    });
    
    return excerpt;
}

function bindSuggestionChips() {
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const input = document.querySelector('.search-input');
            input.value = chip.getAttribute('data-query');
            performSearch();
        });
    });
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

function initializeBackToTop() {
    let button = document.querySelector('.back-to-top');
    
    if (!button) {
        button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);
    }
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// BACKGROUND MUSIC PLAYER
// ===================================

function initializeBackgroundMusic() {
    const musicToggle = document.querySelector('.music-toggle');
    const audio = document.getElementById('background-music');
    
    if (!musicToggle || !audio) return;
    
    audio.volume = 0.5;
    
    const musicEnabled = localStorage.getItem('musicEnabled');
    const musicTime = localStorage.getItem('musicTime');
    
    if (musicTime) {
        audio.currentTime = parseFloat(musicTime);
    }
    
    if (musicEnabled === 'true') {
        audio.play().catch(err => {
            console.log('Autoplay prevented:', err);
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
        });
        musicToggle.classList.add('playing');
        musicToggle.classList.remove('paused');
    } else {
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('paused');
    }
    
    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicToggle.classList.add('playing');
                musicToggle.classList.remove('paused');
                localStorage.setItem('musicEnabled', 'true');
            }).catch(err => console.log('Play failed:', err));
        } else {
            audio.pause();
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
            localStorage.setItem('musicEnabled', 'false');
        }
    });
    
    audio.addEventListener('timeupdate', () => {
        if (!audio.paused) {
            localStorage.setItem('musicTime', audio.currentTime.toString());
        }
    });
    
    audio.addEventListener('ended', () => {
        localStorage.setItem('musicTime', '0');
    });
}
