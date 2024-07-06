import React from 'react'
import logo from '../../assets/img/logo/logo-02.png';
import footer1 from '../../assets/img/footer/footer-gallery/fg-01.jpg';

const Footer = () => {
  return (
    <>
      <footer>
          <div className="footer-area footer-height pt-40 pb-30">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="footer-left-widget mb-40">
                              <div className="footer-logo">
                                  <img src={logo} alt="logo_not_found"/>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori Excepteur.</p>
                              <div className="footer-social mt-40">
                                  <a href="/"><i className="fab fa-twitter"></i></a>
                                  <a href="/"><i className="fas fa-rss"></i></a>
                                  <a href="/"><i className="fab fa-dribbble"></i></a>
                                  <a href="/"><i className="fab fa-behance"></i></a>
                                  <a href="/"><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6">
                          <div className="footer-widget footer-widget-space mb-40">
                              <h3>contact us</h3>
                              <ul className="footer-info">
                                  <li>
                                      <div className="footer-address mt-20">
                                          <span><i className="fas fa-map-marker-alt"></i></span>
                                          <h5>786/A Romada tower mall Brooklyn, NYC</h5>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="footer-address mt-20">
                                          <span><i className="fas fa-phone-alt"></i></span>
                                          <h5>018- 375878-345</h5>
                                          <h5>9373 93243 - 783</h5>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="footer-address mt-20">
                                          <span><i className="fas fa-envelope-open-text"></i></span>
                                          <h5>info@yourmail.com</h5>
                                          <h5>jobsinfo@webmail.com</h5>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-xl-1 offset-xl-1 col-lg-6 col-md-6 pr-0 mb-40">
                          <div className="footer-widget footer-link">
                              <h3>Quick links</h3>
                              <ul>
                                  <li><a href="/">About us</a></li>
                                  <li><a href="/">Our process</a></li>
                                  <li><a href="/">Contact us</a></li>
                                  <li><a href="/">Our Clients</a></li>
                                  <li><a href="/">Our Team</a></li>
                                  <li><a href="/">Latest News</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-xl-2 offset-xl-1 col-lg-6 col-md-6 pr-0">
                          <div className="footer-widget footer-gallery">
                              <h3>Work Gallery</h3>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-01.jpg"></a> */}
                                  </div>
                              </div>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-02.jpg"></a> */}
                                  </div>
                              </div>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-03.jpg"></a> */}
                                  </div>
                              </div>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-04.jpg"></a> */}
                                  </div>
                              </div>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-05.jpg"></a> */}
                                  </div>
                              </div>
                              <div className="footer-gallery-item">
                                  <div className="footer-gallery-thumb">
                                      <img src={footer1} alt="image_not_found"/>
                                  </div>
                                  <div className="link-img">
                                      {/* <a className="popup-image" href="img/footer/footer-gallery/fg-big-06.jpg"></a> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyright-area pt-20 pb-20">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="copyright-text text-center">
                              <p>Copyright by @ Bildhub - {new Date().getFullYear()}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
