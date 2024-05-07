import React from 'react'
import { imgConfig } from '../Image/Background'

const Products = () => {
  return (
    <>
    <section>
       <div className="about">
        <div className='container'>
            <div className="row">

              <div className="col-12">
                <div className='text-center fw-bold text-light heading py-4'>Product Grid</div>
              </div>

            </div>
          </div>
       </div>
      </section>

      <section className='container mt-5'>

        <div className="col-12 text-center heading fw-bold">Our <span className='product'>products</span></div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$75</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product3} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$58</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product2} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$80</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product4} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$85</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product5} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$65</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product6} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$65</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product8} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$85</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product7} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$58</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product9} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Dress</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$75</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product10} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$75</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product12} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$65</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product11} alt="" className='img-box' />
              </div>
              <div class="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$90</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Products
