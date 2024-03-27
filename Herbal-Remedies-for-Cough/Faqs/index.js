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
                    <Accordion.Header>How do I stop coughing at night?</Accordion.Header>
                    <Accordion.Body>
                      <p>There are certain things you can do to stop coughing at night. Raise your head using extra cushions to decrease post-nasal drip. Use a humidifier to bring moisture to the air, which will make breathing easier. Drink warm fluids, such as tea or water, to calm your throat, and try honey or cough pills for more help. Make sure your bedroom is clear of irritants like dust and pet dander. Use a saline spray to clear your nasal passages before going to bed. Consult a healthcare doctor if you need over-the-counter cough medicine. </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What can I drink to soften a dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>Drink warm liquids such as tea or broth to soften a dry cough. These beverages can relax your throat and reduce irritation. Adding honey to your drink can also help to coat your throat and relieve coughing. Avoid cold or sweet drinks, as these can trigger your cough. Also, keeping hydrated by drinking enough water throughout the day can keep your throat wet and reduce dry coughing. Visit a doctor if the problem continues.</p>
                    </Accordion.Body>
                  </Accordion.Item>
               
                 


                </Accordion>

              </div>

              <div className="col-md-6">
              {/* <Accordion defaultActiveKey={['4']} alwaysOpen> */}
              <Accordion>

              <Accordion.Item eventKey="2">
                    <Accordion.Header>What are the home remedies for dry throat?</Accordion.Header>
                    <Accordion.Body>

                      <p>Drinking plenty of water helps to stay hydrated and soothes the throat. Using a humidifier in your house can bring moisture to the air and reduce dryness. Gargling with warm salt water is another way to relieve irritation and inflammation. Sucking on throat lozenges or eating honey can provide some relief by covering the throat. Avoiding irritants such as cigarette smoke and staying away from dry conditions will help to prevent further dryness.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Is honey good for a dry throat?</Accordion.Header>
                    <Accordion.Body>

                      <p>Yes, honey is good for a dry throat. It contains natural calming agents that can help with irritation and discomfort. Honey also provides a protective layer on the throat, which can help with coughing and healing. Honey, either alone or mixed with warm water or tea, can help relieve throat dryness and scratchiness. However, honey shouldn't be given to infants under the age of one year due to the risk of botulism.</p>

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