"use client";

// https://codepen.io/HanGPIIIErr/pen/GRVzBVq - converting into this

import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/SearchOutlined";
import Heart from "@mui/icons-material/FavoriteBorderOutlined";
import User from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import X from "@mui/icons-material/CloseOutlined";
import Link from "next/link";
import "./navigation.css";
import { usePathname } from "next/navigation";
import { temp } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();

  const dispatch = useDispatch();

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/accessories", label: "Accessories" },
    { href: "/blog", label: "Blog" },
    { href: "/pages", label: "Pages" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    // dispatch(temp("Store working"));
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden mr-4"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <Menu size={24} />
          </button>
          <Link href="/" className="text-2xl font-bold color-primary">
            LOGO
          </Link>
        </div>

        {/* Middle Section - Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-700 nav-link ${
                path === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search size={20} className="text-gray-700 nav-link" />
          </button>
          <button aria-label="Wishlist">
            <Heart size={20} className="text-gray-700 nav-link" />
          </button>
          <button aria-label="User Profile">
            <User size={20} className="text-gray-700 nav-link" />
          </button>
          <button aria-label="Shopping Cart">
            <ShoppingCart size={20} className="text-gray-700 nav-link" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {/* {isMobileMenuOpen && ( */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white mobile-menu shadow-lg ${
          isMobileMenuOpen ? "active" : ""
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold color-primary">
              LOGO
            </Link>
            <button onClick={toggleMobileMenu} aria-label="Close Mobile Menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-12">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 nav-link ${
                  path === link.href ? "active" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navigation;
