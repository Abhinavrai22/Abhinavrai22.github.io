import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Add Navigate
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import NewsArticle from './NewsArticle';

export default function App() {
  let [lang, setLanguage] = useState('hi');
  let [search, setSearch] = useState('');

  let changeLanguage = (data) => {
    setLanguage(data);
  };

  let changeSearch = (data) => {
    setSearch(data);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}></Navbar>
        <Routes>
          {/* Redirect root path "/" to the General section */}
          <Route path="/" element={<Navigate to="/general" />} /> {/* Add this line */}
          
          <Route path="general" element={<Home q='General' lang={lang} search={search} />} />
          <Route path="science" element={<Home q='Science' lang={lang} search={search} />} />
          <Route path="sports" element={<Home q='Sports' lang={lang} search={search} />} />
          <Route path="business" element={<Home q='Business' lang={lang} search={search} />} />
          <Route path="technology" element={<Home q='Technology' lang={lang} search={search} />} />
          <Route path="medical" element={<Home q='Medical' lang={lang} search={search} />} />
          <Route path="bollywood" element={<Home q='Bollywood' lang={lang} search={search} />} />
          <Route path="music" element={<Home q='Music' lang={lang} search={search} />} />
          <Route path="crime" element={<Home q='Crime' lang={lang} search={search} />} />
          <Route path="hollywood" element={<Home q='Hollywood' lang={lang} search={search} />} />
          <Route path="weather" element={<Home q='Weather' lang={lang} search={search} />} />
          <Route path="jokes" element={<Home q='Jokes' lang={lang} search={search} />} />
        </Routes>
        <NewsArticle />
        <Footer />
      </BrowserRouter>
    </>
  );
}
