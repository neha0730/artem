import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <>
      <ul>
        <li className="menu-item-has-children">
          <Link href="#">WHY ARTEM</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/cbam-declarants">CBAM Declarants </Link>
            </li>
            <li>
              <Link href="/cbam-importer">CBAM Importer</Link>
            </li>
            <li>
              <Link href="#">CBAM Installation</Link>
            </li>
            <li>
              <Link href="#">CBAM accredited Verifier</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">PRODUCT</Link>
          <ul className="sub-menu">
            <li>
              <Link href="#">CBAM Reporting</Link>
            </li>
            <li>
              <Link href="#">CBAM CEMS System</Link>
            </li>
            <li>
              <Link href="#">CBAM Virtual Verification</Link>
            </li>
            <li>
              <Link href="#">CBAM Studies</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/">CBAM</Link>
          <ul className="sub-menu">
            <li>
              <Link href="#">What is CBAM</Link>
            </li>
            <li>
              <Link href="#">CBAM Obligations</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/">ABOUT US</Link>
          <ul className="sub-menu">
            <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="#">Team</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link href="/">CONTACT</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
