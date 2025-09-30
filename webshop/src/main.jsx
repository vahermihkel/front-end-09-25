import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartSumContextProvider } from './context/CartSumContextProvider.jsx';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
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
      <CartSumContextProvider>
        <AuthContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

//1.  02.09 navigeerimine, useState, dünaamiline väljakuvamine
//2.  04.09 renderdamine+re-renderdamine, arrayd, localStorage, objekt
//3.  09.09 Dünaamiline CSS, kalkulaatorid, alamkomponendid, event, useRef, 
//4.  11.09 API päringud, pakiautomaadid (Omniva), makse (EveryPay)
//5.  16.09 UI library (Bootstrap, MUI, Tailwind)
//6.  18.09 Category valmis UI library'st, btn, checkbox componentidest, alamkomponentide andmevahetus
//7.  23.09 useImperativeHandle ja forwardRef (modal), context: CartSum
//8.  30.09 context: Cart lõpetada, context: Auth, redux, typescript
//9   02.10 serverisse ülespanek (Firebase), kaardirakendus (leaflet), tõlge (React-i18next), 
//10. 07.10 useParams, unit testing / performance testing
//11. 08.10 back-end (Java&Spring + PostgreSQL) --> andmebaasi külgepanek ja frondi ühendamine
//12. 09.10 korralikud veateated back-endist --> front-end näitab veateadet kui on midagi
//13. 14.10 autentimine (jwt backist fronti, front-end salvestab ja saadab backi tokeni)
//14. 16.10 util, custom hook
//15. 21.10 
//16. 24.10
//17. 27.10
// ------
//18. 13.11 --> lõpuprojekti esitlemine

// back-endis repsonse timing
// ...... autentimine

// Next.js
// React Native --> mobiilirakendused. Android Studio / xCode
// Redux
// Back-end

// ------------------------------
// Containerid ja Virtualiseerimine?????