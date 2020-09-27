import React, { useState } from "react";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [text, setText] = useState("");
  const handleChange = lang => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Nav lang={lang} handleChange={handleChange} />
      <h2>Home Page</h2>
      <h2>{t("Thanks.1")}</h2>
      <p>{t("What.home")}</p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <br />
      {text}
    </div>
  );
};

export default Home;
