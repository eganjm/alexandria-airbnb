import React from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import config from "./amplifyconfiguration.json";
import './index.css';
import '@aws-amplify/ui-react/styles.css';


// Configure Amplify
Amplify.configure(config);

// Create a root and render the App component
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);