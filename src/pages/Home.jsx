  return (
    <Layout>
      {/* Hero Section - Carousel */}
      <div id="carousel-home" className="hero-section">
        <div className="owl-carousel owl-theme">
          <div className="owl-slide cover" style={{backgroundImage: "url(/src/assets/img/slides/slide_home_3.jpg)"}}>
            <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  <div className="col-lg-8 static">
                    <div className="slide-text white">
                      <h2 className="owl-slide-animated owl-slide-title">Discover<br />Afghanistan's Hidden Treasures</h2>
                      <p className="owl-slide-animated owl-slide-subtitle">
                        Experience the rich history, stunning landscapes, and warm hospitality of Afghanistan
                      </p>
                      <div className="owl-slide-animated owl-slide-cta">
                        <a className="btn_1" href="all_tours_list.html" role="button">Explore Tours</a>
                        <a className="btn_1 outline" href="#featured-tours" role="button">View Packages</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-slide cover" style={{backgroundImage: "url(/src/assets/img/slides/slide_home_2.jpg)"}}>
            <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
              <div className="container">
                <div className="row justify-content-center justify-content-md-end">
                  <div className="col-lg-8 static">
                    <div className="slide-text text-end white">
                      <h2 className="owl-slide-animated owl-slide-title">Breathtaking<br />Mountain Landscapes</h2>
                      <p className="owl-slide-animated owl-slide-subtitle">
                        Journey through the majestic Hindu Kush mountains and pristine valleys
                      </p>
                      <div className="owl-slide-animated owl-slide-cta">
                        <a className="btn_1" href="all_tours_list.html" role="button">Book Adventure</a>
                        <a className="btn_1 outline" href="#featured-tours" role="button">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-slide cover" style={{backgroundImage: "url(/src/assets/img/slides/slide_home_1.jpg)"}}>
            <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  <div className="col-lg-8 static">
                    <div className="slide-text white">
                      <h2 className="owl-slide-animated owl-slide-title">Ancient<br />Cultural Heritage</h2>
                      <p className="owl-slide-animated owl-slide-subtitle">
                        Explore millennia-old monuments and experience authentic Afghan culture
                      </p>
                      <div className="owl-slide-animated owl-slide-cta">
                        <a className="btn_1" href="all_tours_list.html" role="button">Start Journey</a>
                        <a className="btn_1 outline" href="#featured-hotels" role="button">Find Accommodations</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="icon_drag_mobile"></div>
      </div>

      <div className="container">
        <div className="white_bg">
        <div className="margin_60">
          <div className="row small-gutters categories_grid">
            <div className="col-sm-12 col-md-6">
              <a href="all_tours_list.html">
                <img src="/src/assets/img/img_cat_home_1.jpg" alt="" className="img-fluid" />
                <div className="wrapper">
                  <h2>Special Offers</h2>
                  <p>1150 Locations</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row small-gutters mt-md-0 mt-sm-2">
                <div className="col-sm-6">
                  <a href="all_tours_list.html">
                    <img src="/src/assets/img/img_cat_home_2.jpg" alt="" className="img-fluid" />
                    <div className="wrapper">
                      <h2>Tours</h2>
                      <p>800 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="all_hotels_list.html">
                    <img src="/src/assets/img/img_cat_home_3.jpg" alt="" className="img-fluid" />
                    <div className="wrapper">
                      <h2>Hotels</h2>
                      <p>650 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 mt-sm-2">
                  <a href="all_restaurants_list.html">
                    <img src="/src/assets/img/img_cat_home_4.jpg" alt="" className="img-fluid" />
                    <div className="wrapper">
                      <h2>Restaurants</h2>
                      <p>1132 Locations</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin_60">
        <div className="main_title">
          <h2>Paris <span>Top</span> Tours</h2>
          <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
        </div>

        <div className="owl-carousel owl-theme list_carousel tours_carousel add_bottom_30">
          <div className="item">
            <div className="tour_container">
              <div className="ribbon_3 popular"><span>Popular</span></div>
              <div className="img_container">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_1.jpg" width="800" height="533" className="img-fluid" alt="Arc Triomphe tour" />
                  <div className="short_info">
                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="tour_title">
                <h3><strong>Arc Triomphe</strong> tour</h3>
                <div className="rating">
                  <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container">
              <div className="ribbon_3 popular"><span>Popular</span></div>
              <div className="img_container">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_2.jpg" width="800" height="533" className="img-fluid" alt="Notredame tour" />
                  <div className="short_info">
                    <i className="icon_set_1_icon-43"></i>Churches<span className="price"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="tour_title">
                <h3><strong>Notredame</strong> tour</h3>
                <div className="rating">
                  <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container">
              <div className="ribbon_3 popular"><span>Popular</span></div>
              <div className="img_container">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_3.jpg" width="800" height="533" className="img-fluid" alt="Versailles tour" />
                  <div className="badge_save">Save<strong>30%</strong></div>
                  <div className="short_info">
                    <i className="icon_set_1_icon-44"></i>Historic Buildings<span className="price"><sup>$</sup>48</span>
                  </div>
                </a>
              </div>
              <div className="tour_title">
                <h3><strong>Versailles</strong> tour</h3>
                <div className="rating">
                  <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container">
              <div className="ribbon_3"><span>Top rated</span></div>
              <div className="img_container">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_4.jpg" width="800" height="533" className="img-fluid" alt="Pompidue tour" />
                  <div className="badge_save">Save<strong>20%</strong></div>
                  <div className="short_info">
                    <i className="icon_set_1_icon-30"></i>Walking tour<span className="price"><sup>$</sup>36</span>
                  </div>
                </a>
              </div>
              <div className="tour_title">
                <h3><strong>Pompidue</strong> tour</h3>
                <div className="rating">
                  <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container">
              <div className="ribbon_3"><span>Top rated</span></div>
              <div className="img_container">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_14.jpg" width="800" height="533" className="img-fluid" alt="Tour Eiffel" />
                  <div className="short_info">
                    <i className="icon_set_1_icon-28"></i>Skyline tours<span className="price"><sup>$</sup>42</span>
                  </div>
                </a>
              </div>
              <div className="tour_title">
                <h3><strong>Tour Eiffel</strong> tour</h3>
                <div className="rating">
                  <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center add_bottom_30">
          <a href="all_tours_list.html" className="btn_1">View all Tours</a>
        </p>

        <hr className="mt-5 mb-5" />

        <div className="main_title">
          <h2>Paris <span>Top</span> Hotels</h2>
          <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
        </div>

        <div className="owl-carousel owl-theme list_carousel hotels_carousel add_bottom_30">
          <div className="item">
            <div className="hotel_container">
              <div className="ribbon_3 popular"><span>Popular</span></div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_1.jpg" width="800" height="533" className="img-fluid" alt="Park Hyatt Hotel" />
                  <div className="score"><span>7.5</span>Good</div>
                  <div className="short_info hotel">
                    <span className="price"><sup>$</sup>59</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3><strong>Park Hyatt</strong> Hotel</h3>
                <div className="rating">
                  <i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star-empty"></i>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="#" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container">
              <div className="ribbon_3 popular"><span>Popular</span></div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_2.jpg" width="800" height="533" className="img-fluid" alt="Mariott Hotel" />
                  <div className="score"><span>9.0</span>Superb</div>
                  <div className="short_info hotel">
                    <span className="price"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3><strong>Mariott</strong> Hotel</h3>
                <div className="rating">
                  <i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star-empty"></i>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="#" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container">
              <div className="ribbon_3"><span>Top rated</span></div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_3.jpg" width="800" height="533" className="img-fluid" alt="Lumiere Hotel" />
                  <div className="score"><span>9.5</span>Superb</div>
                  <div className="short_info hotel">
                    <span className="price"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3><strong>Lumiere</strong> Hotel</h3>
                <div className="rating">
                  <i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star-empty"></i>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="#" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container">
              <div className="ribbon_3"><span>Top rated</span></div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_4.jpg" width="800" height="533" className="img-fluid" alt="Novelle Hotel" />
                  <div className="score"><span>7.5</span>Good</div>
                  <div className="short_info hotel">
                    <span className="price"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3><strong>Novelle</strong> Hotel</h3>
                <div className="rating">
                  <i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star-empty"></i>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="javascript:void(0);" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container">
              <div className="ribbon_3"><span>Top rated</span></div>
              <div className="img_container">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_5.jpg" width="800" height="533" className="img-fluid" alt="Louvre Hotel" />
                  <div className="score"><span>8.0</span>Good</div>
                  <div className="short_info hotel">
                    <span className="price"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title">
                <h3><strong>Louvre</strong> Hotel</h3>
                <div className="rating">
                  <i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star voted"></i><i className="icon-star-empty"></i>
                </div>
                <div className="wishlist">
                  <a className="tooltip_flip tooltip-effect-1" href="#" title="Add to wishlist">+<span className="tooltip-content-flip"><span className="tooltip-back">Add to wishlist</span></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center nopadding">
          <a href="all_hotels_list.html" className="btn_1">View all Hotels</a>
        </p>
      </div>

      <div className="white_bg">
        <div className="margin_60">
          <div className="main_title">
            <h2>Plan <span>Your Tour</span> Easly</h2>
            <p>
              Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
            </p>
          </div>
          <div className="row feature_home_2">
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_1.svg" alt="" width="75" height="75" />
              <h3>Itineraries studied in detail</h3>
              <p>Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_2.svg" alt="" width="75" height="75" />
              <h3>Room and food included</h3>
              <p> Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram ex.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_3.svg" alt="" width="75" height="75" />
              <h3>Everything organized</h3>
              <p>Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
            </div>
          </div>

          <div className="banner_2">
            <div className="wrapper d-flex align-items-center opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.3)" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
              <div>
                <h3>Your Perfect<br />Tour Experience</h3>
                <p>Activities and accommodations</p>
                <a href="all_tours_list.html" className="btn_1">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin_60">
        <div className="main_title">
          <h2>Lates <span>Blog</span> News</h2>
          <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure><img src="/src/assets/img/news_home_1.jpg" alt="" />
                <figcaption><strong>28</strong>Dec</figcaption>
              </figure>
              <ul>
                <li>Mark Twain</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Pri oportere scribentur eu</h4>
              <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure><img src="/src/assets/img/news_home_2.jpg" alt="" />
                <figcaption><strong>28</strong>Dec</figcaption>
              </figure>
              <ul>
                <li>Jhon Doe</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Duo eius postea suscipit ad</h4>
              <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure><img src="/src/assets/img/news_home_3.jpg" alt="" />
                <figcaption><strong>28</strong>Dec</figcaption>
              </figure>
              <ul>
                <li>Luca Robinson</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Elitr mandamus cu has</h4>
              <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
            </a>
          </div>
          <div className="col-lg-6">
            <a className="box_news" href="blog.html">
              <figure><img src="/src/assets/img/news_home_4.jpg" alt="" />
                <figcaption><strong>28</strong>Dec</figcaption>
              </figure>
              <ul>
                <li>Paula Rodrigez</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Id est adhuc ignota delenit</h4>
              <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
            </a>
          </div>
        </div>
        <p className="btn_home_align"><a href="blog.html" className="btn_1 rounded">View all news</a></p>
      </div>
      </div>
    </Layout>
  );