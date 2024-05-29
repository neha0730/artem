"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import CbamDeclarantsMain from "./cbam-declarants";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import "./page-style.css";
import "../homes/home/home.css";

const CbamDeclarants = () => {
  return (
    <>
      <SEO pageTitle="CBAM Importer" />

      <HeaderOne />
      <CbamDeclarantsMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamDeclarants;
