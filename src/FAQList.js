import React from 'react';
import FAQItem from './FAQItem';
import '@aws-amplify/ui-react/styles.css'
import { signOut } from '@aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import './FAQData.css';

  const FAQList = ({ data }) => {
    
    const navigate = useNavigate();
    const handleSignOut = async () => {
      try {
        await signOut();
        localStorage.removeItem('userSession'); // Clear the user session from local storage
        navigate('/'); // Redirect to the main Authenticator at the / route
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    return ( 
      <div className="App">
            <div className="faq-list">
              {data.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
                ))}
            </div> 
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  };

export default FAQList;