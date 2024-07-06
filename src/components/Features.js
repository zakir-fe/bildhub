import React from 'react'
import f01 from '../assets/img/feature/feature-01.jpg'
import f02 from '../assets/img/feature/feature-02.jpg'
import f03 from '../assets/img/feature/feature-03.jpg'
import fbg from '../assets/img/bg/feature-bg.jpg'

const Features = () => {
  return (
    <>
        <section className="feature-area pt-120 pb-90" style={{ backgroundImage: `url(${fbg})` }}>
            <div className="container">
                <div className="section-title text-center">
                    <div className="border-title">
                        <h1>featured</h1>
                    </div>
                    <h5>featured</h5>
                    <h2>explore the features</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature-single mb-30">
                            <div className="feature-thumb">
                                <img src={f01} alt="image_not_found"/>
                            </div>
                            <div className="feature-text">
                                <h4>explore the features</h4>
                                <h2><a href="/">Interior Design</a></h2>
                                <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature-single mb-30">
                            <div className="feature-thumb">
                                <img src={f02} alt="image_not_found"/>
                            </div>
                            <div className="feature-text">
                                <h4>explore the features</h4>
                                <h2><a href="/">construction</a></h2>
                                <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="feature-single mb-30">
                            <div className="feature-thumb">
                                <img src={f03} alt="image_not_found"/>
                            </div>
                            <div className="feature-text">
                                <h4>explore the features</h4>
                                <h2><a href="/">building repair</a></h2>
                                <p>Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features
