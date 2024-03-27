import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import BookAppointmentPage from './components/bookAppointment';
import AdPage from './components/AdPage';
import PageNotFound from './components/PageNotFound';
import BookingConfirm from './components/bookingConfirm';
import Disease from './components/seoPages/disease';
import Test from './components/test';
import DashboardHome from './components/dashboard/DashboardHome';
import AdCMS from './components/Ad_cms/Ad_Cms';
import DiseaseSymptomsTreatment from './components/Disease-Symptoms-Treatment/Disease_Symptoms_Treatment';
import PatientInfoPage from './components/dashboard/sales/PatientInfoPage';
import SalesHome from './components/dashboard/sales/Sales_home';
import TNC from './components/TermsAndConditions';
import RefundPolicy from './components/refund_policy';
import BookAppointment from './components/dashboard/sales/bookAppointment';
// import Services from './components/home_page_v2/Services/index'
// import Meet_our_Doctors from './components/home_page_v2/Meet_our_doctor/index'
import AboutUs from './components/home_page_v2/About_Us/index'
//import Home_v2 from './components/home_v2';
import HomeNew from './components/home_v2';
// 11-08-2023

import DoctorsNearMe from './components/home_page_v2/Doctors-near-me/index';
// import Physician_near_me from './components/home_page_v2/physician-near-me/index';
import DoctorHomeVisitNoida from './components/home_page_v2/Doctor-home-visit-noida/index';
import ScheduleDoctorAppointment from './components/home_page_v2/Schedule-doctor-appointment/index';

import IvTherapy from './components/home_page_v2/Iv-therapy/index';
import TreatmentForBedSore from './components/home_page_v2/Treatment-for-bed-sore/index';
import DoctorOnCallHomeVisit from './components/home_page_v2/Doctor-on-call-home-visit/index';
import TwentyFourHourVisitingDoctor from './components/home_page_v2/Twenty-four-hour-visiting-doctor/index';
import DoctorForFeverTreatment from './components/home_page_v2/Doctor-for-fever-treatment/index';
import DoctorForWeaknessTreatment from './components/home_page_v2/Doctor-for-weakness-treatment/index';
import TreatmentForDizziness from './components/home_page_v2/Treatment-for-dizziness/index';
import TreatmentForVomiting from './components/home_page_v2/Treatment-for-vomiting/index';
import TreatmentForLooseMotion from './components/home_page_v2/Treatment-for-loose-motion/index';
import DoctorForPainManagement from './components/home_page_v2/Doctor-for-pain-management/index';
import BloodPressureDoctor from './components/home_page_v2/Blood-pressure-doctor/index';
import DoctorForHypertension from './components/home_page_v2/Doctor-for-hypertension/index';
import DoctorForStomachIssues from './components/home_page_v2/Doctor-for-stomach-issues/index';
import WoundDressingAtHome from './components/home_page_v2/Wound-dressing-at-home/index';
import IvTreatmentAtHome from './components/home_page_v2/Iv-treatment-at-home/index';
import FullBodyHealthCheckup from './components/home_page_v2/Full-body-health-checkup/index';
import GeneralHealthCheckup from './components/home_page_v2/General-health-checkup/index';
import DoctorForMinorInjuries from './components/home_page_v2/Doctor-for-minor-injuries/index';
import DoctorForAnimalBite from './components/home_page_v2/Doctor-for-animal-bite/index';
import ContactUs from './components/home_page_v2/Contact-Us/index';
import PrivacyPolicy from './components/home_page_v2/privacy-policy/index';
import ReturnPolicy from './components/home_page_v2/return-policy/index';
import TermsConditions from './components/home_page_v2/terms-conditions/index';
import PediatricianAtHomeIn60Minutes from './components/home_page_v2/pediatrician-at-home-in-60-minutes';
import Top10BenefitsofHomeVisitDoctors from './components/home_page_v2/Top-10-benefits-home-visit-doctors/index';

import TipsforFindingtheBestHomeVisitDoctors from './components/home_page_v2/Tips-for-Finding-the-Best-Home-Visit-Doctors/index'
import Blogsection from './components/home_page_v2/Blog/index'
import BenefitsDoctorHomeServicesNoida from './components/home_page_v2/Benefits-Doctor-Home-Services-Noida/index'
import ImportanceSchedulingAttendingDoctorAppointments from './components/home_page_v2/Importance-Scheduling-Attending-Doctor-Appointments/index'
import BenefitsRegularDoctorVisits from './components/home_page_v2/Benefits-Regular-Doctor-Visits/index'
import RoleofGeneralPhysicians from './components/home_page_v2/Role-of-General-Physicians/index'
import TipsToReliefFromHighFever from './components/home_page_v2/Tips-To-Relief-From-High-Fever/index'
import HowtoControlBloodPressure from './components/home_page_v2/How-to-Control-Blood-Pressure/index'
import WhatisDiabetes from './components/home_page_v2/What-is-Diabetes/index'
import FindReliableHomeVisitDoctorsGuide from './components/home_page_v2/Find-Reliable-Home-Visit-Doctors-Guide/index'
import HerbalRemediesforCough from './components/home_page_v2/Herbal-Remedies-for-Cough/index'
import HerbalRemediesforDRYCough from './components/home_page_v2/Home-Remedies-for-Dry-Cough/index'
import PrescriptionMedicationsforDryCough from './components/home_page_v2/Prescription-Medications-for-Dry-Cough/index'
import UnderstandingDryCough from './components/home_page_v2/Understanding-Dry-Cough/index'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route exact path="/" element={<HomeNew />} />
        <Route exact path="/bookAppointment/" element={<BookAppointmentPage />} />
        <Route exact path="/doctor-at-home-in-60-minutes/" element={<AdPage />} />
        <Route exact path='/bookingConfirmed' element={<BookingConfirm />} />
        <Route exact path='/disease' element={<Disease />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path='/internalSite' element={<DashboardHome />} />
        <Route exact path='/terms-and-conditions' element={<TNC />} />
        <Route exact path='/refund-policy' element={ <RefundPolicy /> } />
        <Route path='/dashboard'>
          <Route path='' element={<DashboardHome />} />
          <Route path='sales' element={<SalesHome />} />
          <Route path='patient-information-page' element={<PatientInfoPage />} />
          <Route path='patient-book-appointment' element={<BookAppointment />} />
        </Route>
        {/* <Route exact path='/ad-cms' element={<Ad_CMS />} /> */}
        {/* <Route path='/:id' element={<Disease_symptoms_treatment normal={"id"} />} /> */}
        <Route exact path='/a/b' element={<Home />} />
        {/* <Route  path='/:id' element={<Disease_symptoms_treatment />} /> */}
        <Route path="/ad-cms">
          <Route path='' element={<AdCMS/>} />
          <Route path=':id' element={<AdCMS />} />
        </Route>
        <Route path='/op/Disease-symptoms-treatment'>
          <Route index={true} element={<Home />} />
          <Route index={false} path=':id' element={<DiseaseSymptomsTreatment normal="id" />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/doctors-near-me' element={<DoctorsNearMe />} />
        {/* <Route exact path='/physician-near-me' element={<Physician_near_me />} />         */}
        <Route path='/doctor-home-visit-noida' element={<DoctorHomeVisitNoida />} />
        <Route path='/schedule-doctor-appointment' element={<ScheduleDoctorAppointment />} />
        <Route path='/iv-therapy' element={<IvTherapy />} />
        <Route path='/treatment-for-bed-sore' element={<TreatmentForBedSore />} />
        <Route path='/doctor-on-call-home-visit' element={<DoctorOnCallHomeVisit />} />
        <Route path='/twenty-four-hour-visiting-doctor' element={<TwentyFourHourVisitingDoctor />} />
        <Route path='/doctor-for-fever-treatment' element={<DoctorForFeverTreatment />} />
        <Route path='/doctor-for-weakness-treatment' element={<DoctorForWeaknessTreatment/>} />
        {/* <Route path='/services' element={<Services />} /> */}
        {/* <Route path='/meet_our_doctors' element={<Meet_our_Doctors/>}/> */}
        <Route exact path='/about-us' element={<AboutUs/>}/>
        <Route path='/treatment-for-dizziness' element={<TreatmentForDizziness/>} />
        <Route path='/treatment-for-vomiting' element={<TreatmentForVomiting/>} />
        <Route path='/treatment-for-loose-motion' element={<TreatmentForLooseMotion/>} />
        <Route path='/doctor-for-pain-management' element={<DoctorForPainManagement/>} />
        <Route path='/blood-pressure-doctor' element={<BloodPressureDoctor/>} />
        <Route path='/doctor-for-hypertension' element={<DoctorForHypertension/>} />
        <Route path='/doctor-for-stomach-issues' element={<DoctorForStomachIssues/>} />
        <Route path='/wound-dressing-at-home' element={<WoundDressingAtHome/>} />
        <Route path='/iv-treatment-at-home' element={<IvTreatmentAtHome/>} />
        {/* <Route path='/injection-at-home' element={<InjectionAtHome/>} /> */}
        <Route path='/full-body-health-checkup' element={<FullBodyHealthCheckup/>} />
        <Route path='/general-health-checkup' element={<GeneralHealthCheckup/>} />
        <Route path='/doctor-for-minor-injuries' element={<DoctorForMinorInjuries/>} />
        <Route path='/doctor-for-animal-bite' element={<DoctorForAnimalBite/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/return-policy' element={<ReturnPolicy/>} />
        {/* <Route path='/terms-conditions/' element={<TermsConditions/>} /> */}
        <Route path='/terms-conditions/' element={<TermsConditions/>} />
        <Route path='/pediatrician-at-home-in-60-minutes' element={<PediatricianAtHomeIn60Minutes/>} /> 
    
          <Route path='/blog' element={<Blogsection/>}/> 
<Route path='/blog/top-10-benefits-home-visit-doctors' element={<Top10BenefitsofHomeVisitDoctors/>} /> 
        <Route path='/blog/tips-finding-best-home-visit-doctors' element={<TipsforFindingtheBestHomeVisitDoctors/>} /> 
        <Route path='/blog/doctor-at-home-services-noida'  element={<BenefitsDoctorHomeServicesNoida/>}/> 
        <Route path='/importance-of-doctor-appointments/' element={<ImportanceSchedulingAttendingDoctorAppointments/>} />
        <Route path='/benefits-of-regular-doctor-visits/' element={<BenefitsRegularDoctorVisits/>}/>
        <Route path='/roles-of-a-general-physician/' element={<RoleofGeneralPhysicians/>}/>
        <Route path='/tips-to-relief-from-high-fever/' element={<TipsToReliefFromHighFever/>} />

        <Route path='/how-to-control-blood-pressure' element={<HowtoControlBloodPressure/>}/>
        <Route path='/blog/what-is-diabetes/' element={<WhatisDiabetes/>}/>
        <Route path='/blog/find-reliable-home-visit-doctors-guide/' element={<FindReliableHomeVisitDoctorsGuide/>}/>
        <Route path='/blog/herbal-remedies-cough' element={<HerbalRemediesforCough/>}/>
        <Route path='/blog/home-remedies-dry-cough' element={<HerbalRemediesforDRYCough/>}/>
        <Route path='/blog/prescription-medications-dry-cough' element={<PrescriptionMedicationsforDryCough/>}/>
        <Route path='/blog/understanding-dry-cough' element={<UnderstandingDryCough/>}/>
            
      
      </Routes>
    </BrowserRouter>


    {/* <Footer id="footer-aboutUs" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
