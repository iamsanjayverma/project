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
                    <Accordion.Header>What is the fastest way to cure a dry cough?</Accordion.Header>
                    <Accordion.Body>
                      <p>The fastest way to cure a dry cough depends on the cause of the dry cough. There are several home remedies, like using a humidifier and gargling with saltwater, that provide quick relief. There are also over-the-counter medicines available that provide temporary relief. These medicines are called suppressants and expectorants. But if your cough is persistent or gets worse, visit a doctor. They can find out the root cause and dry cough treatment accordingly.</p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is the main reason for dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>Dry coughs usually happen because of irritation and inflammation in the throat and airways. However, there are other common causes of dry cough like viral infections like cold and flu. It could also be allergies, irritants like smoke and pollution, and even asthma or acid reflux. Moreover, there are certain medications like ACE inhibitors that are used to treat high blood pressure and can induce dry coughs as a side effect. </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the best natural remedy for a dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>One of the best natural remedies for dry cough treatment is honey. Honey has soothing properties that help ease throat irritation and reduce coughing. Mix honey into a glass of warm water or an herbal tea of choice for quick relief from dry cough. You can use a humidifier to add moisture to the air and gargle with salt water if the dry coughing doesn’t stop. We advise you to visit the doctor if the dry coughing doesn’t stop.</p>
                    </Accordion.Body>
                  </Accordion.Item>
               
                 


                </Accordion>

              </div>

              <div className="col-md-6">
              {/* <Accordion defaultActiveKey={['4']} alwaysOpen> */}
              <Accordion>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>What drink is good for cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>One of the best drinks for cough is a herbal tea with honey. The tea can be of your liking, but add a teaspoon of honey. Honey works best with ginger or chamomile to reduce coughing. You can also add lemon for some added vitamin C that soothes the throat. If you are not into teas, you can mix honey with a glass of warm water and lemon juice. Stay hydrated throughout the day to clear the mucus. Try to avoid caffeinated and alcoholic beverages as they can worsen the cough.</p>

                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>How do I stop my dry cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>There are several remedies to stop a dry cough. First and foremost, stay hydrated by drinking plenty of water to soothe the throat and clear the mucus. You can use a humidifier to moisturize your airways. Next, gargle with salt water to reduce the irritation in your throat. You can use honey mixed with warm water or herbal tea to get instant relief. There are also over-the-counter cough suppressants available in the market that can help for a short time.</p>

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