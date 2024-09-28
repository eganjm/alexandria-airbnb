import React, { useEffect } from 'react';
import { Authenticator, View, Image } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo2.png';

const CustomSignIn = () => {
   const navigate = useNavigate();

     useEffect(() => {
        
        const checkUserGroup = async () => {
            try {
                // Check if there's a user session
                const session = JSON.parse(localStorage.getItem('userSession'));
                if (session) {
                    // Retrieve group information
                    const cognitoGroup = session.signInDetails.loginId;
                    if (cognitoGroup && cognitoGroup.includes('admin')) {
                        navigate('/admin');
                    } else {
                        navigate('/user');
                    }
                }
            } catch (error) {
                console.error('Error checking user group:', error);
            }
        };

        checkUserGroup();
    }, [navigate]);


    const handleSignIn = async (user) => {
        // Save user session info to localStorage
        localStorage.setItem('userSession', JSON.stringify(user));
        const session = JSON.parse(localStorage.getItem('userSession'));
        const cognitoGroup = session.signInDetails.loginId;
        if (cognitoGroup && cognitoGroup.includes('admin')) {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    };

    return (
        <Authenticator
            components={{
                SignIn: {
                    Header() {
                        return (
                            <View textAlign="center" padding="medium">
                                <Image src={logo} alt="Custom Logo" style={{ maxWidth: '200px' }} />
                            </View>
                        );
                    },
                    Footer() {
                        return null; // Hide the "Forgot Password" and "Create Account" options
                    },
                },
            }}
            hideSignUp
        >

            {({ signOut, user }) => { 
                handleSignIn(user);
                
                return (
                    <main>
                        <div className="App">

                        </div>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                );
            }}
        </Authenticator>
    );
};

export default CustomSignIn;