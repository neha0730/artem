"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import CbamImporterMain from "./cbam-importer";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import FooterOne from "@/components/layout/footers/footer-one";
import "./page-style.css";
import "../homes/home/home.css";

const CbamImporter = () => {
  return (
    <>
      <SEO pageTitle="CBAM Importer" />

      <HeaderOne />
      <CbamImporterMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamImporter;
