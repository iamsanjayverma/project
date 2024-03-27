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
      "name": "What is the fastest way to cure a dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest way to cure a dry cough depends on the cause of the dry cough. There are several home remedies, like using a humidifier and gargling with saltwater, that provide quick relief. There are also over-the-counter medicines available that provide temporary relief. These medicines are called suppressants and expectorants. But if your cough is persistent or gets worse, visit a doctor. They can find out the root cause and dry cough treatment accordingly."
      }
    },{
      "@type": "Question",
      "name": "What is the main reason for dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dry coughs usually happen because of irritation and inflammation in the throat and airways. However, there are other common causes of dry cough like viral infections like cold and flu. It could also be allergies, irritants like smoke and pollution, and even asthma or acid reflux. Moreover, there are certain medications like ACE inhibitors that are used to treat high blood pressure and can induce dry coughs as a side effect."
      }
    },{
      "@type": "Question",
      "name": "What is the best natural remedy for a dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One of the best natural remedies for dry cough treatment is honey. Honey has soothing properties that help ease throat irritation and reduce coughing. Mix honey into a glass of warm water or an herbal tea of choice for quick relief from dry cough. You can use a humidifier to add moisture to the air and gargle with salt water if the dry coughing doesn’t stop. We advise you to visit the doctor if the dry coughing doesn’t stop."
      }
    },{
      "@type": "Question",
      "name": "What drink is good for cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One of the best drinks for cough is a herbal tea with honey. The tea can be of your liking, but add a teaspoon of honey. Honey works best with ginger or chamomile to reduce coughing. You can also add lemon for some added vitamin C that soothes the throat. If you are not into teas, you can mix honey with a glass of warm water and lemon juice. Stay hydrated throughout the day to clear the mucus. Try to avoid caffeinated and alcoholic beverages as they can worsen the cough."
      }
    },{
      "@type": "Question",
      "name": "How do I stop my dry cough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are several remedies to stop a dry cough. First and foremost, stay hydrated by drinking plenty of water to soothe the throat and clear the mucus. You can use a humidifier to moisturize your airways. Next, gargle with salt water to reduce the irritation in your throat. You can use honey mixed with warm water or herbal tea to get instant relief. There are also over-the-counter cough suppressants available in the market that can help for a short time."
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

        <title>Understanding Dry Cough: Causes, Symptoms, and Treatment Options</title>
        <meta name="description" content="Kyno Health offers an informative blog on dry cough symptoms, causes, and treatment options. Gain the knowledge you need to manage this common disease." data-react-helmet="true" />

        <meta name="keywords" content="" data-react-helmet="true"/>
        <link rel="canonical" href="https://www.kynohealth.com/blog/understanding-dry-cough"/>
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