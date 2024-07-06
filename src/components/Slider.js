import React from 'react'

const Slider = () => {
  return (
    <>
      <section className="slider-area">
            <div className="slider-active">
                <div className="single-slider slider-height pos-rel d-flex align-items-center" data-background="img/bg/slider-bg-01.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8">
                                <div className="slider-content">
                                    <h5 data-animation="fadeInUp" data-delay=".2s">General Contracting</h5>
                                    <h1 data-animation="fadeInUp" data-delay=".4s">Build everything you needs<span>.</span></h1>
                                    <p data-animation="fadeInUp" data-delay=".6s">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inciidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="slider-btn">
                                        <a data-animation="fadeInLeft" data-delay=".6s" className="thm-btn" href="/">Contact us</a>
                                        <a data-animation="fadeInRight" data-delay=".6s" className="thm-btn border-btn" href="/">Free Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider slider-height pos-rel d-flex align-items-center" data-background="img/bg/slider-bg-03.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8">
                                <div className="slider-content">
                                    <h5 data-animation="fadeInUp" data-delay=".2s">General Contracting</h5>
                                    <h1 data-animation="fadeInUp" data-delay=".4s">Build everything you needs<span>.</span></h1>
                                    <p data-animation="fadeInUp" data-delay=".6s">Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inciidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="slider-btn">
                                        <a data-animation="fadeInLeft" data-delay=".6s" className="thm-btn" href="/">Contact us</a>
                                        <a data-animation="fadeInRight" data-delay=".6s" className="thm-btn border-btn" href="/">Free Quote</a>
                                    </div>
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

export default Slider
