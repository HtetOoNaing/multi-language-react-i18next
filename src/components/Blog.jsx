import React from "react";
import Nav from "./Nav";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  //   if (localStorage.getItem("code")) {
  //     console.log(localStorage.getItem("code"));
  //   }
  return (
    <div>
      <Nav lang={i18n.language} />
      <h2>Blog Page</h2>
      <h2>{t("Thanks.1")}</h2>
      <p>{t("What.blog")}</p>
    </div>
  );
};

export default Blog;
