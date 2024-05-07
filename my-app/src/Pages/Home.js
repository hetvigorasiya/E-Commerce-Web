import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { DiClojure } from "react-icons/di";
import { CiMedal } from "react-icons/ci";
import { arrival, back, imgConfig } from '../Image/Background';

const Home = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <div className="detail-box">
                <h1 className='mb-1 b-heading fw-bold'>Sale 20% Off</h1>
                <h1 className='b-heading2 fw-bold text-dark'>On Everything</h1>
                <p className='mt-3 b-content'>
                  Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                </p>
                <button className='btn1 fw-bold text-light mt-3'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' container pt-5 '>

        <div className="col-12 text-center heading fw-bold">Why Shop With Us</div>

        <div className="row">

          <div class="col-md-4">
            <div class="box  mt-5 text-light rounded text-center ">
              <div class="detail-box">
                <CiDeliveryTruck className='icn' />
                <h5 className='fw-bold mt-2'>Fast Delivery </h5>
                <p className='mb-1'> variations of passages of Lorem</p>
                <p>Ipsum available</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="box  mt-5 text-light rounded text-center">
              <div class="detail-box ">
                < DiClojure className='icn' />
                <h5 className='fw-bold mt-2'>Free Shiping </h5>
                <p className='text-center mb-1'> variations of passages of Lorem</p>
                <p>Ipsum available</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="box  mt-5 text-light rounded text-center">
              <div class="detail-box">
                <CiMedal className='icn' />
                <h5 className='fw-bold mt-2'>Best Quality </h5>
                <p className='mb-1'> variations of passages of Lorem</p>
                <p>Ipsum available</p>
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
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>
          
        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>
          
        </div>

        <div className="row">

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box'/>
              </div>
              <div class="d-flex mt-5">
                <h5 className='fw-bold px-4'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold'>$75</h6>
              </div>
            </div>
          </div>
          
        </div>

      </section>

    </>
  )
}

export default Home
