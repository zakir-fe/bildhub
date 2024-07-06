import React from 'react'
import p01 from '../assets/img/project/project-01.jpg'
import p02 from '../assets/img/project/project-02.jpg'
import p03 from '../assets/img/project/project-03.jpg'

const Project = () => {
  return (
    <>
        <section className="project-area pos-rel pt-120 pb-120">
            <div className="container-fluid">
                <div className="section-title text-center mb-100">
                    <div className="border-title">
                        <h1>Project</h1>
                    </div>
                    <h5>Our Project</h5>
                    <h2>project that we complete<span>.</span></h2>
                </div>
                <div className="project-active owl-carousel">
                    <div className="single-project">
                        <div className="project-thumb">
                            <img src={p01} alt="image_not_found"/>
                        </div>
                        <div className="project-text">
                            <div className="project-tag">
                                <h4><a href="/">construction</a></h4>
                            </div>
                            <div className="project-text-box">
                                <h3><a href="/">Rasalina De Wily Resort</a></h3>
                                <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-project">
                        <div className="project-thumb">
                            <img src={p02} alt="image_not_found"/>
                        </div>
                        <div className="project-text">
                            <div className="project-tag">
                                <h4><a href="/">architecture</a></h4>
                            </div>
                            <div className="project-text-box">
                                <h3><a href="/">Rasalina De Wily Resort</a></h3>
                                <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-project">
                        <div className="project-thumb">
                            <img src={p03} alt="image_not_found"/>
                        </div>
                        <div className="project-text">
                            <div className="project-tag">
                                <h4><a href="/">renovation</a></h4>
                            </div>
                            <div className="project-text-box">
                                <h3><a href="/">Rasalina De Wily Resort</a></h3>
                                <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-project">
                        <div className="project-thumb">
                            <img src={p02} alt="image_not_found"/>
                        </div>
                        <div className="project-text">
                            <div className="project-tag">
                                <h4><a href="/">renovation</a></h4>
                            </div>
                            <div className="project-text-box">
                                <h3><a href="/">Rasalina De Wily Resort</a></h3>
                                <p>Rorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Project
