import React from 'react'
import Nav from '../Nav/index'
import Footer from '../Footer/index'
import Hero from './Hero/index'
import Content from './Content/index'
import Faqs from './Faqs/index'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'


function index() {
  const faqscheme = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do you get rid of a cough fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drink plenty of water, herbal tea, or broths to hydrate your throat and thin mucus to relieve a cough as soon as possible. A tea or warm water infused with honey could act as a natural cough suppressant. Coughing can be relieved by moisturizing your airways with hot water by taking a shower or inhaling steam from a bowl of hot water. Resting helps your body to heal itself. Also, over-the-counter medications like cough syrup or drops can provide momentary relief. If your cough doesn't go away or gets worse, visit a doctor."
      }
    },{
      "@type": "Question",
      "name": "What stops coughing naturally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Staying hydrated with water or herbal tea helps soothe the throat and thin mucus, which are home remedies that effectively halt coughing. When added to tea or warm water, honey works as a natural cough suppressant. Taking a warm shower or inhaling steam from hot water can moisturize airways and lessen coughing. Regular sleep helps the body's healing process. Also, natural remedies with anti-inflammatory and calming qualities include eucalyptus, ginger, and peppermint."
      }
    },{
      "@type": "Question",
      "name": "What is the best home drink for cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Warm honey and lemon water are a perfect home remedy for coughs. Honey soothes the throat and suppresses coughs naturally, while vitamin C from lemons strengthens the immune system. Warm water mixed with a tablespoon of honey and fresh lemon juice makes a calming drink that relieves cough symptoms. Also, because of their anti-inflammatory qualities, herbal teas like chamomile or ginger tea can be helpful. Still, in order to thin mucus and reduce irritation in the throat, it's important to stay hydrated with water or clear broths."
      }
    },{
      "@type": "Question",
      "name": "How to use turmeric for cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Make a soothing drink with half a teaspoon of turmeric powder and warm milk to use turmeric for cough relief. The milk has extra calming benefits in addition to helping hide the strong flavor of turmeric. A pinch of black pepper improves the absorption of curcumin, the active component of turmeric. Before going to bed, drink the drink to help ease the symptoms of a cough for a peaceful sleep. As a substitute, turmeric can be included in soups, stews, and herbal drinks to provide more relief."
      }
    }]
  }
  

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqscheme)}
      </script>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11084448289"></script>

        <title>Home Remedies for Dry Cough: Tried and Tested Solutions</title>
        <meta name="description" content="Kyno Health informative blog will provide you with tried and tested home remedies that will relieve your dry cough symptoms and promote healing." data-react-helmet="true" />

        <meta name="keywords" content="" data-react-helmet="true"/>

        <link rel="canonical" href="https://www.kynohealth.com/blog/home-remedies-dry-cough"/>
                     </Helmet>

      <Nav />
      <Hero />
      <Content />
      <Faqs />
      <Footer />
    </>
  )
}





export default index