import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="221017514620-u92vs7m1sc2n294j2pv2s1i00gnm77jm.apps.googleusercontent.com" scopes={['email']}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
