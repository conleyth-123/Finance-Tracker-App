import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from "@clerk/clerk-react";

const PUBISHABLE_KEY =  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBISHABLE_KEY){
  throw new Error("Missing Pub Key");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey ={PUBISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);


