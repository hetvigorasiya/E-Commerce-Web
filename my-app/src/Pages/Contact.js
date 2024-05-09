import React from 'react'

const Contact = () => {
  return (
    <>
    <section>
       <div className="about">
        <div className='container'>
            <div className="row">

              <div className="col-12">
                <div className='text-center fw-bold text-light heading py-4'>About us</div>
              </div>

            </div>
          </div>
       </div>

       <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full mt-5">
                     <form>
                        <input type="text" placeholder="Enter Yoyr Full Name" name="name" required="" className='input mb-4'/>
                        <input type="email" placeholder="Enter Your E-mail Address" name="email" required="" className='input mb-4' />
                        <input type="text" placeholder="Enter Subject" name="subject" required="" className='input mb-4' />
                        <textarea placeholder="Enter Your Message" required="" className='textarea py-3 mb-3'></textarea>
                        <div className='d-flex justify-content-center'>
                          <input type="submit" value="Submit" className='btn1 fw-bold text-light'/>
                        </div>
                     </form>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </>
  )
}

export default Contact
