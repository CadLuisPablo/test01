import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import esES from "./../lang/es-ES.json";
import enUS from "./../lang/en-US.json";

/****************
 * LANG Context *
 ****************/
const LangContext = React.createContext();

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", navigator.language);
}

let localeDefault;
let messageDefault;
const lang = localStorage.getItem("lang");

if (lang) {
  switch (lang) {
    case "en-US":
      messageDefault = enUS;
      localeDefault = "en-US";
      break;

    case "es-ES":
      messageDefault = esES;
      localeDefault = "es-ES";
      break;

    default:
      localeDefault = "en-US";
      messageDefault = enUS;
  }
}

const LangProvider = ({ children }) => {
  const [isMessage, setMessage] = useState(messageDefault);
  const [isLocale, setLocale] = useState(localeDefault);

  const setLang = (lang) => {
    switch (lang) {
      case "en-US":
        setMessage(enUS);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;

      case "es-ES":
        setMessage(esES);
        setLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;

      default:
        setMessage(enUS);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <LangContext.Provider value={{ setLang: setLang }}>
      <IntlProvider locale={isLocale} messages={isMessage}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
