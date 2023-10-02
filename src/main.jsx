import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="92620762245-482esebrakdl68qsoo8dfc0fm1k2qlm5.apps.googleusercontent.com" scopes={['email']}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
