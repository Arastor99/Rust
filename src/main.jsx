import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tabla } from './components/Tabla'
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import ReactGA from 'react-ga';


ReactGA.initialize(import.meta.env.VITE_TRACKINGID);
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Tabla/>
    <Analytics />
    </>
)
