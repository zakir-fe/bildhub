import React from 'react'
import { Link } from 'react-router-dom'
const Title = (props) => {
  return (
    <>
      <section className="page-title-area pt-160 pb-160" data-overlay="8" style={{ backgroundImage: `url(${props.bg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="page-title text-center">
                        <div className="border-title">
                            <h1>Services</h1>
                        </div>
                        <h1>About us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">About us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Title
