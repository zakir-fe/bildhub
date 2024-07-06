import React from 'react'
import b01 from '../assets/img/brand/brand-01.png'
import b02 from '../assets/img/brand/brand-02.png'
import b03 from '../assets/img/brand/brand-03.png'
import b04 from '../assets/img/brand/brand-04.png'
import b05 from '../assets/img/brand/brand-05.png'

const Brands = () => {
  return (
    <>
        <section className="brand-area gray-bg pt-90 pb-90">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="brand-active owl-carousel">
                                <div className="single-brand">
                                    <a className="partner-logo" href="/">
                                        <img className="before-image" src={b01} alt="image_not_found"/>
                                        <img className="after-image" src={b01} alt="image_not_found"/>
                                    </a>
                                </div>
                                <div className="single-brand">
                                    <a className="partner-logo" href="/">
                                        <img className="before-image" src={b02} alt="image_not_found"/>
                                        <img className="after-image" src={b02} alt="image_not_found"/>
                                    </a>
                                </div>
                                <div className="single-brand">
                                    <a className="partner-logo" href="/">
                                        <img className="before-image" src={b03} alt="image_not_found"/>
                                        <img className="after-image" src={b03} alt="image_not_found"/>
                                    </a>
                                </div>
                                <div className="single-brand">
                                    <a className="partner-logo" href="/">
                                        <img className="before-image" src={b04} alt="image_not_found"/>
                                        <img className="after-image" src={b04} alt="image_not_found"/>
                                    </a>
                                </div>
                                <div className="single-brand">
                                    <a className="partner-logo" href="/">
                                        <img className="before-image" src={b05} alt="image_not_found"/>
                                        <img className="after-image" src={b05} alt="image_not_found"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Brands
