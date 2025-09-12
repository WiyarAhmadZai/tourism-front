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
                  <li><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                  <li><a href="wishlist.html" id="wishlist_link">Wishlist</a></li>
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
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Home <i className="icon-down-open-mini"></i></a>
                    <ul>
                      <li><a href="index.html">Owl Carousel Slider</a></li>
                      <li><a href="index_25.html">KenBurns Slider</a></li>
                      <li><a href="index_22.html">Home items with Carousel</a></li>
                      <li><a href="index_23.html">Home with Search V2</a></li>
                      <li className="third-level"><a href="javascript:void(0);">Revolution slider <strong className="badge badge-danger">New!</strong></a>
                        <ul>
                          <li><a href="index_24.html">Default slider</a></li>
                          <li><a href="index_20.html">Basic slider</a></li>
                          <li><a href="index_14.html">Youtube Hero</a></li>
                          <li><a href="index_15.html">Vimeo Hero</a></li>
                          <li><a href="index_17.html">Full Screen <strong className="badge badge-danger">New!</strong></a></li>
                          <li><a href="index_21.html">Full Screen Slicey <strong className="badge badge-danger">New!</strong></a></li>
                          <li><a href="index_16.html">Carousel</a></li>
                          <li><a href="index_19.html">Mailchimp Newsletter</a></li>
                          <li><a href="index_18.html">Fixed Caption</a></li>
                        </ul>
                      </li>
                      <li><a href="index_12.html">Layer slider</a></li>
                      <li><a href="index_2.html">With Only tours</a></li>
                      <li><a href="index_3.html">Single image</a></li>
                      <li><a href="index_4.html">Header video</a></li>
                      <li><a href="index_7.html">With search panel</a></li>
                      <li><a href="index_13.html">With tabs</a></li>
                      <li><a href="index_5.html">With map</a></li>
                      <li><a href="index_6.html">With search bar</a></li>
                      <li><a href="index_8.html">Search bar + Video</a></li>
                      <li><a href="index_9.html">With Text Rotator</a></li>
                      <li><a href="index_10.html">With Cookie Bar (EU law)</a></li>
                      <li><a href="index_11.html">Popup Advertising</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Tours <i className="icon-down-open-mini"></i></a>
                    <ul>
                      <li><a href="all_tours_list.html">All tours list</a></li>
                      <li><a href="all_tours_grid.html">All tours grid</a></li>
                      <li><a href="all_tours_grid_masonry.html">All tours Sort Masonry</a></li>
                      <li><a href="all_tours_map_listing.html">All tours map listing</a></li>
                      <li><a href="single_tour.html">Single tour page</a></li>
                      <li><a href="single_tour_with_gallery.html">Single tour with gallery</a></li>
                      <li className="third-level"><a href="javascript:void(0);">Single tour fixed sidebar</a>
                        <ul>
                          <li><a href="single_tour_fixed_sidebar.html">Single tour fixed sidebar</a></li>
                          <li><a href="single_tour_with_gallery_fixed_sidebar.html">Single tour 2 Fixed Sidebar</a></li>
                          <li><a href="cart_fixed_sidebar.html">Cart Fixed Sidebar</a></li>
                          <li><a href="payment_fixed_sidebar.html">Payment Fixed Sidebar</a></li>
                          <li><a href="confirmation_fixed_sidebar.html">Confirmation Fixed Sidebar</a></li>
                        </ul>
                      </li>
                      <li><a href="single_tour_working_booking.html">Single tour working booking</a></li>
                      <li><a href="cart.html">Single tour cart</a></li>
                      <li><a href="payment.html">Single tour booking</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Hotels <i className="icon-down-open-mini"></i></a>
                    <ul>
                      <li><a href="all_hotels_list.html">All hotels list</a></li>
                      <li><a href="all_hotels_grid.html">All hotels grid</a></li>
                      <li><a href="all_hotels_grid_masonry.html">All hotels Sort Masonry</a></li>
                      <li><a href="all_hotels_map_listing.html">All hotels map listing</a></li>
                      <li><a href="single_hotel.html">Single hotel page</a></li>
                      <li><a href="single_hotel_working_booking.html">Single hotel working booking</a></li>
                      <li><a href="single_hotel_contact.html">Single hotel contact working</a></li>
                      <li><a href="cart_hotel.html">Cart hotel</a></li>
                      <li><a href="payment_hotel.html">Booking hotel</a></li>
                      <li><a href="confirmation_hotel.html">Confirmation hotel</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Transfers <i className="icon-down-open-mini"></i></a>
                    <ul>
                      <li><a href="all_transfer_list.html">All transfers list</a></li>
                      <li><a href="all_transfer_grid.html">All transfers grid</a></li>
                      <li><a href="all_transfer_grid_masonry.html">All transfers Sort Masonry</a></li>
                      <li><a href="single_transfer.html">Single transfer page</a></li>
                      <li><a href="cart_transfer.html">Cart transfers</a></li>
                      <li><a href="payment_transfer.html">Booking transfers</a></li>
                      <li><a href="confirmation_transfer.html">Confirmation transfers</a></li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);" className="show-submenu">Restaurants <i className="icon-down-open-mini"></i></a>
                    <ul>
                      <li><a href="all_restaurants_list.html">All restaurants list</a></li>
                      <li><a href="all_restaurants_grid.html">All restaurants grid</a></li>
                      <li><a href="all_restaurants_grid_masonry.html">All restaurants Sort Masonry</a></li>
                      <li><a href="all_restaurants_map_listing.html">All restaurants map listing</a></li>
                      <li><a href="single_restaurant.html">Single restaurant page</a></li>
                      <li><a href="payment_restaurant.html">Booking restaurant</a></li>
                      <li><a href="confirmation_restaurant.html">Confirmation restaurant</a></li>
                    </ul>
                  </li>
                  <li className="megamenu submenu">
                    <a href="javascript:void(0);" className="show-submenu-mega">Bonus<i className="icon-down-open-mini"></i></a>
                    <div className="menu-wrapper">
                      <div className="row">
                        <div className="col-lg-4">
                          <h3>Header styles</h3>
                          <ul>
                            <li><a href="index.html">Default transparent</a></li>
                            <li><a href="header_2.html">Plain color</a></li>
                            <li><a href="header_3.html">Plain color on scroll</a></li>
                            <li><a href="header_4.html">With socials on top</a></li>
                            <li><a href="header_5.html">With language selection</a></li>
                            <li><a href="header_6.html">With lang and conversion</a></li>
                            <li><a href="header_7.html">With full horizontal menu</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Footer styles</h3>
                          <ul>
                            <li><a href="index.html">Footer default</a></li>
                            <li><a href="footer_2.html">Footer style 2</a></li>
                            <li><a href="footer_3.html">Footer style 3</a></li>
                            <li><a href="footer_4.html">Footer style 4</a></li>
                            <li><a href="footer_6.html">Footer style 6</a></li>
                            <li><a href="footer_7.html">Footer style 7</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Shop section</h3>
                          <ul>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-single.html">Shop single</a></li>
                            <li><a href="shopping-cart.html">Shop cart</a></li>
                            <li><a href="checkout.html">Shop Checkout</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="megamenu submenu">
                    <a href="javascript:void(0);" className="show-submenu-mega">Pages<i className="icon-down-open-mini"></i></a>
                    <div className="menu-wrapper">
                      <div className="row">
                        <div className="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="general_page.html">General page</a></li>
                            <li><a href="tourist_guide.html">Tourist guide</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="faq_2.html">Faq smooth scroll</a></li>
                            <li><a href="pricing_tables.html">Pricing tables</a></li>
                            <li><a href="gallery_3_columns.html">Gallery 3 columns</a></li>
                            <li><a href="gallery_4_columns.html">Gallery 4 columns</a></li>
                            <li><a href="grid_gallery_1.html">Grid gallery</a></li>
                            <li><a href="grid_gallery_2.html">Grid gallery with filters</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li><a href="contact_us_1.html">Contact us 1</a></li>
                            <li><a href="contact_us_2.html">Contact us 2</a></li>
                            <li><a href="blog_right_sidebar.html">Blog</a></li>
                            <li><a href="blog.html">Blog left sidebar</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="invoice.html" target="_blank">Invoice</a></li>
                            <li><a href="404.html">404 Error page</a></li>
                            <li><a href="site_launch/index.html">Site launch / Coming soon</a></li>
                            <li><a href="timeline.html">Tour timeline</a></li>
                            <li><a href="page_with_map.html"><i className="icon-map"></i>  Full screen map</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Elements</h3>
                          <ul>
                            <li><a href="footer_2.html"><i className="icon-columns"></i> Footer with working newsletter</a></li>
                            <li><a href="icon_pack_1.html"><i className="icon-inbox-alt"></i> Icon pack 1 (1900)</a></li>
                            <li><a href="icon_pack_2.html"><i className="icon-inbox-alt"></i> Icon pack 2 (100)</a></li>
                            <li><a href="icon_pack_3.html"><i className="icon-inbox-alt"></i> Icon pack 3 (30)</a></li>
                            <li><a href="icon_pack_4.html"><i className="icon-inbox-alt"></i> Icon pack 4 (200)</a></li>
                            <li><a href="icon_pack_5.html"><i className="icon-inbox-alt"></i> Icon pack 5 (360)</a></li>
                            <li><a href="shortcodes.html"><i className="icon-tools"></i> Shortcodes</a></li>
                            <li><a href="newsletter_template/newsletter.html" target="blank"><i className=" icon-mail"></i> Responsive email template</a></li>
                            <li><a href="admin.html"><i className="icon-cog-1"></i> Admin area</a></li>
                            <li><a href="html_rtl/index.html"><i className="icon-align-right"></i>  RTL Version</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ul id="top_tools">
                <li>
                  <a href="javascript:void(0);" className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                </li>
                <li>
                  <div className="dropdown dropdown-cart">
                    <a href="#0" data-bs-hover="dropdown" className="cart_bt"><i className="icon_bag_alt"></i><strong>3</strong></a>
                    <ul className="dropdown-menu" id="cart_items">
                      <li>
                        <div className="image"><img src="/src/assets/img/thumb_cart_1.jpg" alt="image" /></div>
                        <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                      </li>
                      <li>
                        <div className="image"><img src="/src/assets/img/thumb_cart_2.jpg" alt="image" /></div>
                        <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                      </li>
                      <li>
                        <div className="image"><img src="/src/assets/img/thumb_cart_3.jpg" alt="image" /></div>
                        <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                        <a href="#" className="action"><i className="icon-trash"></i></a>
                      </li>
                      <li>
                        <div>Total: <span>$120.00</span></div>
                        <a href="cart.html" className="button_drop">Go to cart</a>
                        <a href="payment.html" className="button_drop outline">Check out</a>
                      </li>
                    </ul>
                  </div>
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
              <div className="styled-select">
                <select name="lang" id="lang">
                  <option value="English" selected>English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Russian">Russian</option>
                </select>
              </div>
              <div className="styled-select">
                <select name="currency" id="currency">
                  <option value="USD" selected>USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="RUB">RUB</option>
                </select>
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
      
      <div className="search-overlay-menu">
        <span className="search-overlay-close"><i className="icon_set_1_icon-77"></i></span>
        <form role="search" id="searchform" method="get">
          <input value="" name="q" type="text" placeholder="Search..." />
          <button type="submit"><i className="icon_set_1_icon-78"></i></button>
        </form>
      </div>
      
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="small-dialog-header">
          <h3>Sign In</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">Login with Facebook</a>
            <a href="#0" className="social_bt google">Login with Google</a>
            <div className="divider"><span>Or</span></div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" id="email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" id="password" value="" />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-start">
                <label className="container_check">Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-end"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <div className="text-center"><input type="submit" value="Log In" className="btn_login" /></div>
            <div className="text-center">
              Don't have an account? <a href="javascript:void(0);">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                <i className="icon_mail_alt"></i>
              </div>
              <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
              <div className="text-center"><input type="submit" value="Reset Password" className="btn_1" /></div>
            </div>
          </div>
        </form>
      </div>
      
      <div id="style-switcher">
        <h2>Color Switcher <a href="#"><i className="icon_set_1_icon-65"></i></a></h2>
        <div>
          <ul className="colors" id="color1">
            <li><a href="#" className="default" title="Defaul"></a></li>
            <li><a href="#" className="aqua" title="Aqua"></a></li>
            <li><a href="#" className="green_switcher" title="Green"></a></li>
            <li><a href="#" className="orange" title="Orange"></a></li>
            <li><a href="#" className="blue" title="Blue"></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;