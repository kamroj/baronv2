import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetecotr from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js'

import './index.scss';
import App from './App';

i18n
  .use(initReactI18next) 
  .use(LanguageDetecotr)
  .use(HttpApi)
  .init({
    fallbackLng: "pl",
    detection: {
      lookupCookie: 'i18nextlng',
      order: ['cookie', 'localStorage', 'htmlTag'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
