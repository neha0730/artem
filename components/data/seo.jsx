"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - A solution to CBAM & Carbon leakage";
  }, []);
};

export default SEO;
