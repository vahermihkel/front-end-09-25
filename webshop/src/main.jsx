import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import {useState, useRef} from "react"; useState    useRef
// import React from "react"; React.useState    React.useRef


// import BLA from "BLA"; ---> import on ainult selles failis
// import "BLA"; ---> import on üle terve rakenduse

// import { BrowserRouter } from "..."; ---> tükk sellest moodulist
// import App from "..."; ---> terve fail

// import BLA from "./"    meie failidest import
// import BLA from "react...."   node_modulest import

// route-miseks / navigeerimiseks:
// 1. npm i react-router-do (node_modulesse sobilikud moodulid)
// 2. impordime BrowserRouteri sealt-samast moodulist
// 3. ümbritseme App faili BrowserRouteriga
// 4. teeme URLi ja HTMLi vahelisi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 02.09 navigeerimine, useState, dünaamiline väljakuvamine
// 04.09 renderdamine+re-renderdamine, arrayd, localStorage, objekt
// 09.09 Dünaamiline CSS, kalkulaatorid, alamkomponendid, event, useRef, 
// 11.09 API päringud, pakiautomaadid (Omniva), makse (EveryPay)
// 16.09 UI library (Bootstrap, MUI, Tailwind)
// 18.09 Category valmis UI library'st, btn, checkbox componentidest, alamkomponentide andmevahetus, context, redux
// kaardirakendus (leaflet), tõlge (React-i18next), serverisse ülespanek (Firebase)
// 23.09 typescript, useParams, unit testing / performance testing
// 25.09 back-end (Java&Spring + PostgreSQL)
// back-endis repsonse timing
// ...... autentimine

// Next.js
// React Native --> mobiilirakendused. Android Studio / xCode
// Redux
// Back-end

// ------------------------------
// Containerid ja Virtualiseerimine?????