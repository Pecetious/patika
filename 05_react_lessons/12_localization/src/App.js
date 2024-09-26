import { useState, useEffect } from "react";
import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
const messages = {
  "tr-TR": {
    title: "merhaba dünya",
    description: "{count} yeni mesajınız var",
  },
  "en-US": {
    title: "hello world",
    description: "You have {count} new messages",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale")
  const defaultLocale = isLocale ? isLocale : navigator.language 
  const [locale, setLocale] = useState(defaultLocale);
  useEffect(()=>{
    localStorage.setItem("locale",locale)
  },[locale])
  return (
    <div className="App">
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={defaultLocale}>
        <FormattedMessage id="title" />
        <p>
        <FormattedMessage id="description" values={{count: 3}}/>

        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
