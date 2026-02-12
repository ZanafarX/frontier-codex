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
// SEARCH FUNCTIONALITY
// ===================================

let searchIndex = null;

function initializeSearch() {
    const searchButton = document.querySelector('.search-button');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchModal) {
        searchButton.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
            if (!searchIndex) {
                buildSearchIndex();
            }
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchModal.classList.remove('active');
            searchInput.value = '';
            document.querySelector('.search-results').innerHTML = '';
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            document.querySelector('.search-results').innerHTML = '';
        }
    });
    
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                searchInput.value = '';
                document.querySelector('.search-results').innerHTML = '';
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
}

// Build search index from all pages
async function buildSearchIndex() {
    // Determine base path based on current location
    const isInRulesFolder = window.location.pathname.includes('/rules/');
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    
    let basePath = '';
    if (isInRulesFolder || isInPagesFolder) {
        basePath = '../';
    }
    
    // =====================================================
    // FIX: Populate all site pages so search can index them
    // =====================================================
    const pages = [
        // Main pages
        { url: basePath + 'index.html', title: 'Home' },
        
        // Lore / World pages
        { url: basePath + 'pages/introduction.html', title: 'Introduction: The Bleeding Frontier' },
        { url: basePath + 'pages/five-powers.html', title: 'Introduction: The Five Powers' },
		{ url: basePath + 'pages/life-in-the-wastes.html', title: 'Introduction: Life in the Wastes' },
        // Rules - Player's Trail
        { url: basePath + 'rules/ch1-overview.html', title: 'Ch 1: The Long Road (Character Creation)' },
        { url: basePath + 'rules/ch2-overview.html', title: 'Ch 2: Grit & Grime (Core Mechanics)' },
        { url: basePath + 'rules/ch3-overview.html', title: 'Ch 3: Blood & Iron (Combat)' },
        { url: basePath + 'rules/ch4-overview.html', title: 'Ch 4: Dust & Dollars (Equipment & Economy)' },
        { url: basePath + 'rules/ch5-overview.html', title: 'Ch 5: The Current (Psionics)' },
        { url: basePath + 'rules/ch6-overview.html', title: 'Ch 6: The Callings' },
        { url: basePath + 'rules/ch7-overview.html', title: 'Ch 7: The Disciplines' },
        
        // Rules - Marshal's Almanac
        { url: basePath + 'rules/ch8-overview.html', title: "Ch 8: Managing the Nightmare" },
        { url: basePath + 'rules/ch9-overview.html', title: 'Ch 9: The Atlas' },
        { url: basePath + 'rules/ch10-overview.html', title: 'Ch 10: The Bestiary' },
    ];
    
    searchIndex = [];
    
    // Show a loading indicator while indexing
    const resultsContainer = document.querySelector('.search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = '<p class="no-results">Building search index... please wait.</p>';
    }
    
    for (const page of pages) {
        try {
            const response = await fetch(page.url);
            if (!response.ok) continue;
            
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            const mainContent = doc.querySelector('.main-content');
            if (mainContent) {
                // Expanded selectors to catch rules content
                const sections = mainContent.querySelectorAll(
                    '.content-section, .character-card, .quote-block, ' +
                    '.mechanic-box, .weapon-card, .calling-card, .discipline-card, ' +
                    '.npc-card, .talent-card, .stat-card, .example-box, ' +
                    '.rules-callout, .quickstart-box'
                );
                
                sections.forEach(section => {
                    const title = section.querySelector(
                        '.character-name, .section-title, .callout-title, h2, h3, h4, h5'
                    );
                    const text = section.textContent.trim();
                    
                    if (text.length > 50) {
                        searchIndex.push({
                            url: page.url,
                            pageTitle: page.title,
                            sectionTitle: title ? title.textContent.trim() : page.title,
                            content: text.substring(0, 500)
                        });
                    }
                });
                
                // Fallback: if no sections matched, index the whole page content
                if (sections.length === 0) {
                    const fullText = mainContent.textContent.trim();
                    if (fullText.length > 50) {
                        searchIndex.push({
                            url: page.url,
                            pageTitle: page.title,
                            sectionTitle: page.title,
                            content: fullText.substring(0, 1000)
                        });
                    }
                }
            }
        } catch (error) {
            console.error(`Error indexing ${page.url}:`, error);
        }
    }
    
    // Clear loading message once indexing is done
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }
    
    console.log(`Search index built: ${searchIndex.length} entries from ${pages.length} pages.`);
}

function performSearch() {
    const query = document.querySelector('.search-input').value.toLowerCase().trim();
    const resultsContainer = document.querySelector('.search-results');
    
    if (!query || query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    if (!searchIndex) {
        resultsContainer.innerHTML = '<p class="no-results">Building search index...</p>';
        return;
    }
    
    const results = searchIndex.filter(item => {
        return item.content.toLowerCase().includes(query) ||
               item.sectionTitle.toLowerCase().includes(query) ||
               item.pageTitle.toLowerCase().includes(query);
    });
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No results found. Try different keywords.</p>';
        return;
    }
    
    const resultsHTML = results.slice(0, 10).map(result => {
        const excerpt = getExcerpt(result.content, query);
        return `
            <div class="search-result-item">
                <h3 class="search-result-title">
                    <a href="${result.url}">${result.pageTitle} - ${result.sectionTitle}</a>
                </h3>
                <p class="search-result-excerpt">${excerpt}</p>
            </div>
        `;
    }).join('');
    
    resultsContainer.innerHTML = resultsHTML;
}

function getExcerpt(text, query) {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text.substring(0, 200) + '...';
    
    const start = Math.max(0, index - 100);
    const end = Math.min(text.length, index + query.length + 100);
    let excerpt = text.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';
    
    const regex = new RegExp(`(${query})`, 'gi');
    excerpt = excerpt.replace(regex, '<span class="search-highlight">$1</span>');
    
    return excerpt;
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
