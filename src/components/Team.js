import React from 'react'

import t01 from '../assets/img/team/team-01.jpg'
import t02 from '../assets/img/team/team-02.jpg'
import t03 from '../assets/img/team/team-03.jpg'
import t04 from '../assets/img/team/team-04.jpg'

const Team = () => {
  return (
    <>
      <section class="team-area pt-120 pb-90 gray-bg">
                <div class="section-title text-center">
                    <div class="border-title">
                        <h1>Team</h1>
                    </div>
                    <h5>Our Team</h5>
                    <h2>Our expert Team</h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="single-team text-center mb-30">
                                <div class="team-thumb">
                                    <img src={t01} alt="image_not_found"/>
                                    <div class="team-icon">
                                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="/"><i class="fab fa-twitter"></i></a>
                                        <a href="/"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="/"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-content text-center">
                                    <h3>rasalina De wilam</h3>
                                    <h5>Enginer</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="single-team text-center mb-30">
                                <div class="team-thumb">
                                    <img src={t02} alt="image_not_found"/>
                                    <div class="team-icon">
                                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="/"><i class="fab fa-twitter"></i></a>
                                        <a href="/"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="/"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-content text-center">
                                    <h3>Mohammad Ziyaul</h3>
                                    <h5>Worker</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="single-team text-center mb-30">
                                <div class="team-thumb">
                                    <img src={t03} alt="image_not_found"/>
                                    <div class="team-icon">
                                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="/"><i class="fab fa-twitter"></i></a>
                                        <a href="/"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="/"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-content text-center">
                                    <h3>Abdur rahim</h3>
                                    <h5>Finencial Head</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="single-team text-center mb-30">
                                <div class="team-thumb">
                                    <img src={t04} alt="image_not_found"/>
                                    <div class="team-icon">
                                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                                        <a href="/"><i class="fab fa-twitter"></i></a>
                                        <a href="/"><i class="fab fa-google-plus-g"></i></a>
                                        <a href="/"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-content text-center">
                                    <h3>Imtiaj hosen babu</h3>
                                    <h5>Site Manager</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Team
