import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser } from '@aws-amplify/auth';
import './App.css';
import FAQList from './FAQList';
import InventoryList from './InventoryList';
import CustomSignIn from './CustomSignIn';
import FAQData from './FAQData';
import SearchBar from './SearchBar';

const App = () => {
  const [authState, setAuthState] = useState('loading');
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // Validate token or check its expiration
          // For simplicity, let's assume it's valid
          setAuthState('authenticated');
        } else {
          await getCurrentUser();
          setAuthState('authenticated');
          localStorage.setItem('authToken', 'your-authentication-token');
        }
      } catch (error) {
        setAuthState('unauthenticated');
      }
    };

    checkAuthStatus();

  }, []);

  const filteredFAQs = FAQData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
          <CustomSignIn />
          <h4 style={{ textAlign: 'center' }}><a href='https://airbnb.com/h/huntington-metro' target='_location'>airbnb.com/huntington-metro</a></h4>
          </>
        } 
        />
        <Route
          path="/user"
          element={
            authState === 'authenticated' ? (
              <>
               <h2 style={{ textAlign: 'center' }}>5950 Grand Pavilion Way, Apt. 308, Alexandria, VA 22303</h2>
               <h3 style={{ textAlign: 'center' }}><a href='https://airbnb.com/h/huntington-metro' target='_location'>airbnb.com/huntington-metro</a></h3>
               <h1>House Guide and FAQ</h1>  
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <FAQList data={filteredFAQs} />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route 
          path="/admin" 
          element={
            authState === 'authenticated' ? 
            <InventoryList /> 
            : 
            <Navigate to="/" />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;