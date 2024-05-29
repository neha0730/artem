"use client";
import Link from "next/link";
import React, { useState } from "react";

const ResponsiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  const [activeMenus, setActiveMenus] = useState(null);
  const actives = (value) =>
      setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
      value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>
      <ul>
        <li className="menu-item ">
          <Link href="#">Home</Link>

          <a
            className={`mean-expand ${activeIcon("home")}`}
            onClick={() => active("home")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Pages</Link>

          <a
            className={`mean-expand ${activeIcon("pages")}`}
            onClick={() => active("pages")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Services</Link>
          <ul className="sub-menu" style={activeSubMenu("services")}>
            <li>
              <Link href="/services">Services 01</Link>
            </li>
            <li>
              <Link href="/services-two">Services 02</Link>
            </li>
            <li>
              <Link href="/services/panel-installation">Services Details</Link>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon("services")}`}
            onClick={() => active("services")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Project</Link>

          <a
            className={`mean-expand ${activeIcon("project")}`}
            onClick={() => active("project")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Blog</Link>

          <a
            className={`mean-expand ${activeIcon("blog")}`}
            onClick={() => active("blog")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Contact</Link>

          <a
            className={`mean-expand ${activeIcon("contact")}`}
            onClick={() => active("contact")}
          ></a>
        </li>
      </ul>
    </>
  );
};      

export default ResponsiveMenu;
