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
      "name": "What is the best medicine for dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best medicine for dry cough depends on the underlying cause. Cough suppressants like dextromethorphan or codeine provide relief by blocking the cough reflex for non-productive coughs. Decongestants like pseudoephedrine can help if the cough is due to nasal congestion. Menthol lozenges provide temporary relief by soothing the throat. Make sure you consult with a doctor before you start on the medications that are potent and can cause side effects."
      }
    },{
      "@type": "Question",
      "name": "What is the fastest way to stop a dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest way to stop a dry cough depends mainly on the underlying cause. Over-the-counter cough suppressants like dextromethorphan can help calm down the cough reflex. There are also decongestants like pseudoephedrine that can help relieve coughs related to nasal congestion. Menthol lozenges can also help irritation. You must consult a doctor before you start taking any of these medications to get the right dosage and avoid side effects."
      }
    },{
      "@type": "Question",
      "name": "What are the reasons of dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dry coughs can be the result of different factors. The underlying reasons for respiratory infections can be a common cold, flu, allergies, acid reflux, and asthma. Even environmental factors like dry air can make your throat irritated and start coughing. Certain medical conditions like bronchitis and pneumonia can be the cause of dry coughing. Your doctor can diagnose you with the right ailment and recommend you the right medicines."
      }
    },{
      "@type": "Question",
      "name": "What stops coughing naturally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are several natural remedies to help you stop coughing. You must stay hydrated and drink plenty of water and warm drinks like herbal teas. The liquid will help soothe the throat and thin the mucus. You can use a humidifier or inhale steam to moisturize and relax the airways. Moreover, you can gargle with salt water to reduce throat irritation. Mix a teaspoon of honey with warm water and lemon to get instant relief from dry coughing. If all fails, try menthol lozenges or herbal cough drops to help soothe the throat."
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

        <title>Prescription Medications for Dry Cough: What You Need to Know</title>
        <meta name="description" content="Explore essential information about prescription medications for dry cough in our informative blog by Kyno Health. Learn about treatment options and how they can help alleviate symptoms." data-react-helmet="true" />

        <meta name="keywords" content="" data-react-helmet="true"/>

        <link rel="canonical" href="https://www.kynohealth.com/blog/prescription-medications-dry-cough"/>
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