import React from 'react'
import b01 from '../assets/img/blog/blog-bg-01.jpg'
import au01 from '../assets/img/blog/blog-author.png'
const Blogs = () => {
  return (
    <>
                  <section class="blog-area gray-bg pt-120 pb-90">
                <div class="container">
                    <div class="row mb-45">
                        <div class="col-xl-6 col-lg-6 col-md-8">
                            <div class="blog-title">
                                <div class="border-title-2">
                                    <h1>News</h1>
                                </div>
                                <div class="about-title">
                                    <h5>Latest News</h5>
                                    <h2>Our Latest News<span>.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-4">
                            <div class="blog-top-btn text-right">
                                <a href="service-details.html" class="thm-btn black-btn">More News</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="blog-item mb-30">
                                <div class="blog-image">
                                    <img src={b01}alt="image_not_found"/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-tag mb-125">
                                        <span>24th.jan</span>
                                    </div>
                                    <div class="blog-text mb-65">
                                        <h2><a href="blog-details.html">Highquality construction Services for you</a></h2>
                                        <p>Reolu ptatem consectetur adipatem sequi nesciunt. Neque voluptatem.Reolu ptatem consectetur adipatem sequi nesciunt. </p>
                                    </div>
                                    <div class="blog-author">
                                        <div class="blog-author-thumb">
                                            <img src={au01} alt="image_not_found"/>
                                        </div>
                                        <h4>Rasalina De wiiamson</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="blog-item mb-30">
                                <div class="blog-image blog-image-2">
                                    <img src={b01} alt="image_not_found"/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-tag blog-tag-2 mb-125">
                                        <span>24th.jan</span>
                                    </div>
                                    <div class="blog-text mb-65">
                                        <h2><a href="blog-details.html">Highquality construction Services for you</a></h2>
                                        <p>Reolu ptatem consectetur adipatem sequi nesciunt. Neque voluptatem.Reolu ptatem consectetur adipatem sequi nesciunt. </p>
                                    </div>
                                    <div class="blog-author">
                                        <div class="blog-author-thumb">
                                            <img src={au01} alt="image_not_found"/>
                                        </div>
                                        <h4>Rasalina De wiiamson</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="blog-item mb-30">
                                <div class="blog-image blog-image-3">
                                    <img src={b01} alt="image_not_found"/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-tag blog-tag-3 mb-125">
                                        <span>24th.jan</span>
                                    </div>
                                    <div class="blog-text mb-65">
                                        <h2><a href="blog-details.html">Highquality construction Services for you</a></h2>
                                        <p>Reolu ptatem consectetur adipatem sequi nesciunt. Neque voluptatem.Reolu ptatem consectetur adipatem sequi nesciunt. </p>
                                    </div>
                                    <div class="blog-author">
                                        <div class="blog-author-thumb">
                                            <img src={au01} alt="image_not_found"/>
                                        </div>
                                        <h4>Rasalina De wiiamson</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Blogs
