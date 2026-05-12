import { useState, useEffect } from 'react';

const Header = ({ onSearch }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.setAttribute('data-bs-theme', nextDark ? 'dark' : 'light');
  };

  return (
    <header className="main-header">
      <nav className={`navbar navbar-expand-lg py-3 mb-4 ${isDark ? 'navbar-dark' : 'navbar-light'}`} 
           style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}
           aria-label="Main navigation">
        <div className="container-fluid px-0">
          {/* Logo & Branding: Semantic Navigation Link */}
          <div className="navbar-brand-container">
            <a className="navbar-brand d-flex align-items-center fw-bold" href="/" style={{ fontFamily: 'sans-serif', fontSize: '1.5rem' }}>
              <i className="bi bi-star-fill me-2" style={{ 
                background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.8rem'
              }}></i>
              <span style={{ color: isDark ? '#fff' : '#000' }}>SamzHub</span>
            </a>
          </div>

          {/* Mobile Toggle: Visible hamburger icon on all devices */}
          <button className="navbar-toggler d-block border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className={`bi bi-list fs-1 ${isDark ? 'text-white' : 'text-dark'}`}></i>
          </button>

          {/* Primary Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="mainNav">
            <ul className="navbar-nav list-unstyled d-flex align-items-center mb-0">
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#performance" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>Performance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#utp-gateways" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>UTP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#social-media" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>Social</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#llms" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>LLMs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#tech-news" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#video-generation-&-clipper" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>Video</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-uppercase fw-semibold" href="#assistant" style={{ 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.5px',
                  color: isDark ? '#fff' : '#000'
                }}>Assistant</a>
              </li>
            </ul>
          </div>

          {/* Actions: 2 Inline Icons (Profile & Theme Toggle) */}
          <div className="d-flex align-items-center gap-2">
            {/* Profile Icon */}
            <button className={`btn btn-link p-2 text-decoration-none ${isDark ? 'text-white' : 'text-dark'}`} aria-label="Profile">
              <i className="bi bi-person-circle fs-4"></i>
            </button>
            
            {/* Theme Toggle */}
            <button 
              className={`btn btn-link p-2 text-decoration-none ${isDark ? 'text-white' : 'text-dark'}`} 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <i className={`bi ${isDark ? 'bi-moon-stars-fill' : 'bi-sun-fill'} fs-4`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section: Clean & Minimalist */}
      <div className="text-center py-4 my-4 hero-section">
        {/* Badge: Centered, rounded pill */}
        <div className="d-flex justify-content-center mb-4">
          <span className="badge rounded-pill px-4 py-2 fw-medium shadow-sm" style={{ 
            backgroundColor: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(124, 58, 237, 0.05)', 
            color: isDark ? '#d8b4fe' : '#7c3aed',
            border: `1px solid ${isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(124, 58, 237, 0.2)'}`,
            fontSize: '0.9rem'
          }}>
            ✨ Your daily toolkit, beautifully organized
          </span>
        </div>

        {/* Hero Content */}
        <h1 className="fw-bolder mb-3" style={{ 
          letterSpacing: '-1.5px', 
          lineHeight: '1.2',
          color: isDark ? '#fff' : '#000',
          fontSize: 'calc(1.5rem + 3vw)' 
        }}>
          Every tool you need,<br />
          <span style={{ 
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>one click away.</span>
        </h1>
        <p className="mx-auto mb-3 px-3" style={{ 
          maxWidth: '800px', 
          fontSize: '1.15rem', 
          color: isDark ? '#94a3b8' : '#4b5563',
          lineHeight: '1.5'
        }}>
          Experience the ultimate curated dashboard. We've gathered the world's best productivity tools, 
          social platforms, and AI models into one seamless, high-performance workspace designed for you.
        </p>

        {/* Search Bar: Wide, centered, rounded input */}
        <div className="mx-auto mb-4" style={{ maxWidth: '800px' }}>
          <div className="position-relative shadow-lg rounded-pill">
            <i className="bi bi-search position-absolute top-50 translate-middle-y" style={{ 
              left: '25px',
              color: '#a855f7',
              fontSize: '1.2rem',
              zIndex: 5
            }}></i>
            <input 
              type="text" 
              className={`form-control form-control-lg rounded-pill border-0 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}
              placeholder="Search tools by name..."
              onChange={(e) => onSearch(e.target.value)}
              style={{ 
                height: '60px',
                fontSize: '1.15rem',
                paddingLeft: '65px',
                boxShadow: isDark ? '0 0 30px rgba(0, 0, 0, 0.5)' : '0 15px 35px rgba(0, 0, 0, 0.05)'
              }}
            />
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4 pt-2">
          {/* Primary Button */}
          <a href="#performance" className="btn btn-lg px-4 py-2 rounded-pill fw-bold text-white border-0 shadow-lg d-flex align-items-center justify-content-center hero-cta-btn" style={{ 
            background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}>
            Explore tools →
          </a>
          
          {/* Secondary Button */}
          <a href="#llms" className={`btn btn-lg px-4 py-2 rounded-pill fw-bold shadow-lg d-flex align-items-center justify-content-center hero-cta-btn ${isDark ? 'bg-white text-dark' : 'bg-white text-dark border'}`} style={{ 
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            border: isDark ? 'none' : '1px solid #e2e8f0',
            textDecoration: 'none'
          }}>
            Jump to AI
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
