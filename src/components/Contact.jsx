import React from "react";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  //   const [lang, setLang] = useState("mm");
  return (
    <div>
      <Nav lang={i18n.language} />
      <h2>Contact Page</h2>
      <h2>{t("Thanks.1")}</h2>
      <p>{t("What.contact")}</p>
      <h1>hello</h1>
    </div>
  );
};

export default Contact;
