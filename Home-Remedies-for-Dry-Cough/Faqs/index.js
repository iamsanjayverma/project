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
                    <Accordion.Header>How do you get rid of a cough fast?</Accordion.Header>
                    <Accordion.Body>
                      <p>Drink plenty of water, herbal tea, or broths to hydrate your throat and thin mucus to relieve a cough as soon as possible. A tea or warm water infused with honey could act as a natural cough suppressant. Coughing can be relieved by moisturizing your airways with hot water by taking a shower or inhaling steam from a bowl of hot water. Resting helps your body to heal itself. Also, over-the-counter medications like cough syrup or drops can provide momentary relief. If your cough doesn't go away or gets worse, visit a doctor.</p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What stops coughing naturally?</Accordion.Header>
                    <Accordion.Body>

                      <p>Staying hydrated with water or herbal tea helps soothe the throat and thin mucus, which are home remedies that effectively halt coughing. When added to tea or warm water, honey works as a natural cough suppressant. Taking a warm shower or inhaling steam from hot water can moisturize airways and lessen coughing. Regular sleep helps the body's healing process. Also, natural remedies with anti-inflammatory and calming qualities include eucalyptus, ginger, and peppermint.</p>
                    </Accordion.Body>
                  </Accordion.Item>
               
                 


                </Accordion>

              </div>

              <div className="col-md-6">
              {/* <Accordion defaultActiveKey={['4']} alwaysOpen> */}
              <Accordion>

              <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the best home drink for cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>Warm honey and lemon water are a perfect home remedy for coughs. Honey soothes the throat and suppresses coughs naturally, while vitamin C from lemons strengthens the immune system. Warm water mixed with a tablespoon of honey and fresh lemon juice makes a calming drink that relieves cough symptoms. Also, because of their anti-inflammatory qualities, herbal teas like chamomile or ginger tea can be helpful. Still, in order to thin mucus and reduce irritation in the throat, it's important to stay hydrated with water or clear broths.</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How to use turmeric for cough?</Accordion.Header>
                    <Accordion.Body>

                      <p>Make a soothing drink with half a teaspoon of turmeric powder and warm milk to use turmeric for cough relief. The milk has extra calming benefits in addition to helping hide the strong flavor of turmeric. A pinch of black pepper improves the absorption of curcumin, the active component of turmeric. Before going to bed, drink the drink to help ease the symptoms of a cough for a peaceful sleep. As a substitute, turmeric can be included in soups, stews, and herbal drinks to provide more relief.</p>

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