import React from "react";
import Accordion from 'react-bootstrap/Accordion';



function index() {

  return (
    <>

      <section className="nine-fold">
        <div className="container">
          <h5>questions for kyno</h5>
          <div className="ml-70">
            <h2>FAQs</h2>
          </div>

          <div className="mlt fqs">
            <div className="row">

              <div className="col-md-6">
                {/* <Accordion defaultActiveKey={['0']} alwaysOpen> */}

                <Accordion>

                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the best medicine for dry cough?</Accordion.Header>
                    <Accordion.Body>
                      <p>The best medicine for dry cough depends on the underlying cause. Cough suppressants like dextromethorphan or codeine provide relief by blocking the cough reflex for non-productive coughs. Decongestants like pseudoephedrine can help if the cough is due to nasal congestion. Menthol lozenges provide temporary relief by soothing the throat. Make sure you consult with a doctor before you start on the medications that are potent and can cause side effects.</p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the fastest way to stop a dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>The fastest way to stop a dry cough depends mainly on the underlying cause. Over-the-counter cough suppressants like dextromethorphan can help calm down the cough reflex. There are also decongestants like pseudoephedrine that can help relieve coughs related to nasal congestion. Menthol lozenges can also help irritation. You must consult a doctor before you start taking any of these medications to get the right dosage and avoid side effects.</p>
                    </Accordion.Body>
                  </Accordion.Item>
               
                 


                </Accordion>

              </div>

              <div className="col-md-6">
              {/* <Accordion defaultActiveKey={['4']} alwaysOpen> */}
              <Accordion>

              <Accordion.Item eventKey="2">
                    <Accordion.Header>What are the reasons of dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>Dry coughs can be the result of different factors. The underlying reasons for respiratory infections can be a common cold, flu, allergies, acid reflux, and asthma. Even environmental factors like dry air can make your throat irritated and start coughing. Certain medical conditions like bronchitis and pneumonia can be the cause of dry coughing. Your doctor can diagnose you with the right ailment and recommend you the right medicines.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What stops coughing naturally?</Accordion.Header>
                    <Accordion.Body>

                      <p>There are several natural remedies to help you stop coughing. You must stay hydrated and drink plenty of water and warm drinks like herbal teas. The liquid will help soothe the throat and thin the mucus. You can use a humidifier or inhale steam to moisturize and relax the airways. Moreover, you can gargle with salt water to reduce throat irritation. Mix a teaspoon of honey with warm water and lemon to get instant relief from dry coughing. If all fails, try menthol lozenges or herbal cough drops to help soothe the throat.</p>

                    </Accordion.Body>
                  </Accordion.Item>
           
                
                </Accordion>
              </div>
            </div>
            </div>
            </div>
      </section>


    </>
  );
}

export default index