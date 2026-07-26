import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { title: 'Qualifications', items: ['Certification Level 1', 'Certification Level 2', 'Diploma Program', 'Graduation Exam'] },
    { title: 'Organizations', items: ['Partner Institutions', 'Registered Bodies', 'Affiliated Universities'] },
    { title: 'Research & Analysis', items: ['Market Reports', 'Academic Papers', 'Industry Insights'] },
    { title: 'Lorem ipsum', items: ['Sub Item 1', 'Sub Item 2', 'Sub Item 3'] },
    { title: 'Lorem ipsum', items: ['Sub Item 1', 'Sub Item 2'] },
  ];

  // Search Index Data
  const searchableContent = [
    { category: 'Qualifications', title: 'Certification Level 1', link: '#examinations' },
    { category: 'Qualifications', title: 'Certification Level 2', link: '#examinations' },
    { category: 'Qualifications', title: 'Diploma Program', link: '#examinations' },
    { category: 'Qualifications', title: 'Graduation Exam', link: '#examinations' },
    { category: 'Upcoming Examinations', title: '02th October 2014 - Level 1 Exam', link: '#examinations' },
    { category: 'Upcoming Examinations', title: 'Nov-Dec 2016 - Level 2 Exam', link: '#examinations' },
    { category: 'Upcoming Examinations', title: 'Ongoing this year - Level 3 (Grad)', link: '#examinations' },
    { category: 'Organizations', title: 'Partner Institutions & Registered Bodies', link: '#home' },
    { category: 'Research', title: 'Market Reports & Industry Insights', link: '#home' },
    { category: 'FAQ', title: 'How does an investor gain access to MF Utility?', link: '#faq' },
    { category: 'FAQ', title: 'Will investors be able to have multiple Common Account Numbers?', link: '#faq' },
  ];

  // Filter results based on search query
  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchableContent.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <div className="header-logo">
          <a href="#home" className="logo-text">LOGO</a>
        </div>

        {/* Right-aligned Navigation & Actions Group */}
        <div className="header-right-group">
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className="nav-item dropdown-parent"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="nav-link"
                    onClick={() => toggleDropdown(idx)}
                    aria-expanded={activeDropdown === idx}
                  >
                    <span>{item.title}</span>
                    <svg className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {activeDropdown === idx && (
                    <div className="dropdown-menu">
                      <ul>
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <a href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setActiveDropdown(null)}>
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Controls (Search & Enrolment CTA) */}
          <div className="header-actions">
            {/* Search Trigger */}
            <button 
              className={`search-btn ${searchOpen ? 'active' : ''}`} 
              onClick={() => {
                const newSearchState = !searchOpen;
                setSearchOpen(newSearchState);
                if (newSearchState) {
                  setMobileMenuOpen(false);
                } else {
                  setSearchQuery('');
                }
              }} 
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Enrolment Button (Desktop) */}
            <a href="#enrolment" className="enrolment-btn desktop-only">
              Enrolment
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => {
                const newMenuState = !mobileMenuOpen;
                setMobileMenuOpen(newMenuState);
                if (newMenuState) {
                  setSearchOpen(false);
                  setSearchQuery('');
                }
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Live Search Bar & Realtime Results */}
      {searchOpen && (
        <div className="search-expand-bar animate-fade-in">
          <div className="container search-bar-inner">
            <div className="search-input-wrapper">
              <svg className="search-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Type to search exams, qualifications, FAQs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus 
                className="search-input-field"
              />
              {searchQuery && (
                <button className="clear-query-btn" title="Clear text" onClick={() => setSearchQuery('')}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>

            {/* Sleek User-Friendly Close Action Button */}
            <button 
              className="close-search-btn" 
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              aria-label="Close search bar"
            >
              <span>Close</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Live Search Results Dropdown */}
          {searchQuery.trim() !== '' && (
            <div className="search-results-overlay">
              <div className="container">
                <div className="search-results-card">
                  {filteredResults.length > 0 ? (
                    <ul className="search-results-list">
                      {filteredResults.map((res, rIdx) => (
                        <li key={rIdx} className="search-result-item">
                          <a 
                            href={res.link} 
                            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                          >
                            <span className="result-category-badge">{res.category}</span>
                            <span className="result-title">{res.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="no-results-msg">
                      <p>No results found for "<strong>{searchQuery}</strong>". Try searching for <em>exam</em>, <em>level</em>, or <em>qualification</em>.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              <ul className="mobile-menu-list">
                {navItems.map((item, idx) => (
                  <li key={idx} className="mobile-nav-item">
                    <button 
                      className="mobile-nav-header" 
                      onClick={() => toggleDropdown(idx)}
                    >
                      <span>{item.title}</span>
                      <svg className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`} width="12" height="7" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {activeDropdown === idx && (
                      <ul className="mobile-sub-list">
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <a 
                              href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`} 
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mobile-drawer-cta">
                <a 
                  href="#enrolment" 
                  className="enrolment-btn full-width" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enrolment
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
