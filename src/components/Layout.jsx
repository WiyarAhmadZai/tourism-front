import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="sk-spinner sk-spinner-wave">
          <div className="sk-rect1"></div>
          <div className="sk-rect2"></div>
          <div className="sk-rect3"></div>
          <div className="sk-rect4"></div>
          <div className="sk-rect5"></div>
        </div>
      </div>
      
      <div className="layer"></div>
      
      {/* Header */}
      <header>
        <div id="top_line">
          <div className="container">
            <div className="row">
              <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
              <div className="col-6">
                <ul id="top_links">
                  <li><a href="login.html">Sign in</a></li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                  <li><a href="https://1.envato.market/ryzjQ" target="_parent">Purchase this template</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div id="logo_home">
                <h1><a href="index.html" title="City tours travel template">City Tours travel template</a></h1>
              </div>
            </div>
            <nav className="col-9">
              <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
              <div className="main-menu">
                <div id="header_menu">
                  <img src="/src/assets/img/logo_sticky.png" width="160" height="34" alt="City tours" />
                </div>
                <a href="#" className="open_close" id="close_in"><i className="icon_set_1_icon-77"></i></a>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="all_tours_list.html">Tours</a>
                  </li>
                  <li>
                    <a href="all_hotels_list.html">Hotels</a>
                  </li>
                  <li>
                    <a href="all_transfer_list.html">Transfers</a>
                  </li>
                  <li>
                    <a href="all_restaurants_list.html">Restaurants</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact_us_1.html">Contact</a>
                  </li>
                </ul>
              </div>
              <ul id="top_tools">
                <li>
                  <a href="javascript:void(0);" className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                </li>
                <li>
                  <a href="cart.html"><i className="icon_bag_alt"></i><strong>3</strong></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="revealed">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Need help?</h3>
              <a href="tel://004542344599" id="phone">+45 423 445 99</a>
              <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>
            </div>
            <div className="col-md-3">
              <h3>About</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Terms and condition</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Discover</h3>
              <ul>
                <li><a href="#">Community blog</a></li>
                <li><a href="#">Tour guide</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3>Settings</h3>
              <div>
                <span>English</span>
              </div>
              <div>
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="social_footer">
                <ul>
                  <li><a href="#0"><i className="bi bi-instagram"></i></a></li>
                  <li><a href="#0"><i className="bi bi-whatsapp"></i></a></li>
                  <li><a href="#0"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#0"><i className="bi bi-twitter-x"></i></a></li>
                  <li><a href="#0"><i className="bi bi-youtube"></i></a></li>
                </ul>
                <p>© Citytours 2024</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Other fixed elements */}
      <div id="toTop"></div>
    </div>
  );
};

export default Layout;