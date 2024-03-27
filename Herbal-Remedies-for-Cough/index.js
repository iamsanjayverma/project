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
      "name": "How do I stop coughing at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are certain things you can do to stop coughing at night. Raise your head using extra cushions to decrease post-nasal drip. Use a humidifier to bring moisture to the air, which will make breathing easier. Drink warm fluids, such as tea or water, to calm your throat, and try honey or cough pills for more help. Make sure your bedroom is clear of irritants like dust and pet dander. Use a saline spray to clear your nasal passages before going to bed. Consult a healthcare doctor if you need over-the-counter cough medicine."
      }
    },{
      "@type": "Question",
      "name": "What can I drink to soften a dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drink warm liquids such as tea or broth to soften a dry cough. These beverages can relax your throat and reduce irritation. Adding honey to your drink can also help to coat your throat and relieve coughing. Avoid cold or sweet drinks, as these can trigger your cough. Also, keeping hydrated by drinking enough water throughout the day can keep your throat wet and reduce dry coughing. Visit a doctor if the problem continues."
      }
    },{
      "@type": "Question",
      "name": "What are the home remedies for dry throat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drinking plenty of water helps to stay hydrated and soothes the throat. Using a humidifier in your house can bring moisture to the air and reduce dryness. Gargling with warm salt water is another way to relieve irritation and inflammation. Sucking on throat lozenges or eating honey can provide some relief by covering the throat. Avoiding irritants such as cigarette smoke and staying away from dry conditions will help to prevent further dryness."
      }
    },{
      "@type": "Question",
      "name": "Is honey good for a dry throat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, honey is good for a dry throat. It contains natural calming agents that can help with irritation and discomfort. Honey also provides a protective layer on the throat, which can help with coughing and healing. Honey, either alone or mixed with warm water or tea, can help relieve throat dryness and scratchiness. However, honey shouldn't be given to infants under the age of one year due to the risk of botulism."
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

        <title>Herbal Remedies for Cough: Natural Solutions for Quick Relief</title>
        <meta name="description" content="Discover effective herbal remedies for cough in our informative blog by Kyno Health. Explore natural solutions for quick relief from cough symptoms and support your overall health." data-react-helmet="true" />

        <meta name="keywords" content="" data-react-helmet="true"/>

        <link rel="canonical" href="https://www.kynohealth.com/blog/herbal-remedies-cough"/>
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