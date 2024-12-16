import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/homepage" element={<HomePage />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/SafetyEducation" element={<SafetyEducation />} />
        <Route path="/OnlineService" element={<OnlineService />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/ApiDoc" element={<ApiDoc />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/ContactUs" element={<ContactUs />} /> */}
      </Routes>
    </>
  );
};

export default App;
