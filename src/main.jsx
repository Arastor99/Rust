import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tabla } from './components/Tabla'
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import { inject } from "@vercel/analytics";

inject();
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Tabla/>
    <Analytics mode={'production'} />    
    </>
)
