import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { DiClojure } from "react-icons/di";
import { CiMedal } from "react-icons/ci";
import { imgConfig } from '../Image/Background';

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

          <div className="col-md-4">
            <div className="box  mt-5 text-light rounded text-center ">
              <div className="detail-box">
                <CiDeliveryTruck className='icn' />
                <h5 className='fw-bold mt-2'>Fast Delivery </h5>
                <p className='mb-1'> variations of passages of Lorem</p>
                <p>Ipsum available</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box  mt-5 text-light rounded text-center">
              <div className="detail-box ">
                < DiClojure className='icn' />
                <h5 className='fw-bold mt-2'>Free Shiping </h5>
                <p className='text-center mb-1'> variations of passages of Lorem</p>
                <p>Ipsum available</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box  mt-5 text-light rounded text-center">
              <div className="detail-box">
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

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product1} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$75</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product3} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$58</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product2} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
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

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product4} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$85</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product5} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$65</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product6} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
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

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product8} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$85</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product7} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$58</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product9} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
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

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product10} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold mx-2'>Men's Shirt</h5>
                <h6 className='price fs-6 fw-bold mt-1'>$75</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product12} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
                <h5 className='fw-bold'>Women's Dress</h5>
                <h6 className='price2 fs-6 fw-bold mt-1'>$65</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <button className='btn2 text-light fw-bold'>Buy Now</button>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="box1 mt-5">
              <div className='text-center'>
                <img src={imgConfig?.product11} alt="" className='img-box' />
              </div>
              <div className="d-flex mt-5 justify-content-center">
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

      <section className='container mt-5 subscribe'>
        <div className="text-center mt-5">
          <div className="row">

            <div className="col-12">

              <div className='my-5'>
                <div className="heading fw-bold">Subscribe To Get Discount</div>
                <div className='heading fw-bold'>Offers</div>
                <div className='b-content mt-2 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </div>
                <div className='b-content text-secondary'>eiusmod tempor</div>
                <form action="" className='mt-4'>
                  <input type="e-mail" placeholder='Enter Your E-mail' className='e-mail' />
                </form>
                <div className='d-flex mt-2 justify-content-center mt-4'>
                  <button className='btn3 text-light fw-bold'>SUBSCRIBE</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home
