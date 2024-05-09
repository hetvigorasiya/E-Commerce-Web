import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { DiClojure } from "react-icons/di";
import { CiMedal } from "react-icons/ci";

const Blog = () => {
  return (
    <>
    <section>
       <div className="about">
        <div className='container'>
            <div className="row">

              <div className="col-12">
                <div className='text-center fw-bold text-light heading py-4'>Blog List</div>
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

    </>
  )
}

export default Blog
