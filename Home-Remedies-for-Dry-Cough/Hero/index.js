import React from 'react'
import { Link } from "react-router-dom";
 

function index() {
  return (

    <>
       <section className="baner-region">
	
  <div className="container">
  <div className="row">
  <div className="col-md-8 col-xs-12">
  <div className='left-side ml-70'>
    <h3>Home Remedies for Dry Cough: Tried and Tested Solutions</h3>    
    <p>Dry coughs are a real inconvenience. They can disrupt your whole day and even keep you up at night. But there are several solutions to keep dry coughing at bay. One is the over-the-top medicine for dry cough, which is readily available in the market. But did you know that you can also find home remedies for cough right in your kitchen? This article talks about some of the best tried and tested home remedies that have stood the test of time through the generations.</p>
<p><strong>Also Read :</strong> <a href="https://www.kynohealth.com/blog/understanding-dry-cough"><strong>Understanding Dry Cough: Causes, Symptoms, and Treatment Options</strong></a></p>

 <Link className="btn btn-warning " to="tel:+919953104104">Call Now</Link>

  </div>
  </div>
  
  
  <div className="col-md-4 col-xs-12">
  <div className='right-side'>
  <div className='aft'>
    <img src='/images/Topology-1.svg'/>
    </div>
    <div className='tag'>
    <img src='/images/tags-1.png'/>
    </div>

    <img src='/images/bnr-img.png' className='bnrimg img-fluid'/>
    
  </div>
  </div>
  </div>   		
  </div>
  </section>
    </>

  )
}

export default index
