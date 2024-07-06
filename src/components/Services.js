import React from 'react'

import s01 from '../assets/img/icon/s01.png'
import s02 from '../assets/img/icon/s02.png'
import s03 from '../assets/img/icon/s03.png'
import s04 from '../assets/img/icon/s04.png'
import s05 from '../assets/img/icon/s05.png'
import s06 from '../assets/img/icon/s06.png'

const Services = () => {
  return (
    <>
      <section class="services-area gray-bg pt-120 pb-90">
        <div class="container">
            <div class="section-title text-center">
                <div class="border-title">
                    <h1>Services</h1>
                </div>
                <h5>Our Services</h5>
                <h2>we are expert in</h2>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s01} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>Architeture</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box active text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s02} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>construction</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s03} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>Equipment</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s04} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>Renovation</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s05} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>Sanitary</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="services-box text-center mb-30">
                        <div class="services-box-thumb mb-25">
                            <img src={s06} alt="image_not_found"/>
                        </div>
                        <div class="services-box-text">
                            <h2>Isalation</h2>
                            <p>Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit, sed do.</p>
                            <a class="sevices-btn" href="/">Read More <i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
