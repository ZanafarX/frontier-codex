// ===================================
// FRONTIER CODEX - MAIN JAVASCRIPT
// ===================================

// Wait for DOM to be fully loaded
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
            toggle.setAttribute('aria-expanded', 
                navList.classList.contains('mobile-active'));
        });
    }
    
    // Mobile dropdown handling
    dropdownToggles.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentItem = link.closest('.nav-item');
                parentItem.classList.toggle('mobile-open');
            }
        });
    });
    
    // Close mobile menu when clicking outside
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
            
            // Remove active class from all buttons and panels in this container
            container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            container.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
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
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
            searchInput.value = '';
            document.querySelector('.search-results').innerHTML = '';
        }
    });
    
    // Close when clicking outside modal content
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                searchInput.value = '';
                document.querySelector('.search-results').innerHTML = '';
            }
        });
    }
    
    // Perform search on input
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
}

// Build search index from all pages
async function buildSearchIndex() {
    const pages = [
        { url: 'index.html', title: 'Home' },
        { url: 'pages/duncan.html', title: 'Duncan Maddox' },
        { url: 'pages/geography.html', title: 'Geography' },
        { url: 'pages/veil.html', title: 'The Veil & Psionics' },
        { url: 'pages/factions.html', title: 'Factions' },
        { url: 'pages/chronicles.html', title: 'Chronicles' },
        { url: 'pages/supporting.html', title: 'Supporting Cast' },
        { url: 'pages/daily-life.html', title: 'Daily Life' },
        { url: 'pages/economy.html', title: 'Economy & Politics' },
        { url: 'pages/consortium.html', title: 'The Consortium' },
        { url: 'pages/dust-vultures.html', title: 'Dust Vultures' },
        { url: 'pages/redeemers.html', title: 'The Redeemers' },
        { url: 'pages/circle-of-ash.html', title: 'Circle of Ash' },
        { url: 'pages/ironbrands.html', title: 'Ironbrands' }
    ];
    
    searchIndex = [];
    
    for (const page of pages) {
        try {
            const response = await fetch(page.url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Extract text content from main content area
            const mainContent = doc.querySelector('.main-content');
            if (mainContent) {
                const sections = mainContent.querySelectorAll('.content-section, .character-card, .quote-block');
                
                sections.forEach(section => {
                    const title = section.querySelector('.character-name, .section-title, h2, h3');
                    const text = section.textContent.trim();
                    
                    if (text.length > 50) { // Only index substantial content
                        searchIndex.push({
                            url: page.url,
                            pageTitle: page.title,
                            sectionTitle: title ? title.textContent.trim() : page.title,
                            content: text.substring(0, 500) // Store first 500 chars
                        });
                    }
                });
            }
        } catch (error) {
            console.error(`Error indexing ${page.url}:`, error);
        }
    }
}

// Perform search
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
    
    // Search through index
    const results = searchIndex.filter(item => {
        return item.content.toLowerCase().includes(query) ||
               item.sectionTitle.toLowerCase().includes(query) ||
               item.pageTitle.toLowerCase().includes(query);
    });
    
    // Display results
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

// Get excerpt with highlighted search term
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
    
    // Highlight search term
    const regex = new RegExp(`(${query})`, 'gi');
    excerpt = excerpt.replace(regex, '<span class="search-highlight">$1</span>');
    
    return excerpt;
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

function initializeBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) {
        // Create back to top button if it doesn't exist
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);
    }
    
    const button = document.querySelector('.back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for search input
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
    
    // Set initial volume to 50%
    audio.volume = 0.5;
    
    // Check localStorage for saved music state
    const musicEnabled = localStorage.getItem('musicEnabled');
    const musicTime = localStorage.getItem('musicTime');
    
    // Restore previous playback position
    if (musicTime) {
        audio.currentTime = parseFloat(musicTime);
    }
    
    // Set initial state
    if (musicEnabled === 'true') {
        audio.play().catch(err => {
            console.log('Autoplay prevented:', err);
            // Update UI to show music is paused
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
        });
        musicToggle.classList.add('playing');
        musicToggle.classList.remove('paused');
    } else {
        musicToggle.classList.remove('playing');
        musicToggle.classList.add('paused');
    }
    
    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicToggle.classList.add('playing');
                musicToggle.classList.remove('paused');
                localStorage.setItem('musicEnabled', 'true');
            }).catch(err => {
                console.log('Play failed:', err);
            });
        } else {
            audio.pause();
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
            localStorage.setItem('musicEnabled', 'false');
        }
    });
    
    // Save playback position periodically
    audio.addEventListener('timeupdate', () => {
        if (!audio.paused) {
            localStorage.setItem('musicTime', audio.currentTime.toString());
        }
    });
    
    // Reset time when music ends (though it loops)
    audio.addEventListener('ended', () => {
        localStorage.setItem('musicTime', '0');
    });
}