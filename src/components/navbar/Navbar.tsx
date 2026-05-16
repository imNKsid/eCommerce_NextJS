"use client";

import { ICONS } from "@/assets/icons";
import Image from "next/image";
// import { Link } from "react-router-dom";
import Link from "next/link";
import "./Navbar.css";
import { useNavbarAction } from "./useNavbarAction";

export const Navbar = () => {
  const { menu, updateMenu } = useNavbarAction();

  // --- The Factory Function ---
  // This returns a function to be used as an event handler
  const _handleMenuItemClick = (
    category: "shop" | "men" | "women" | "kids",
  ) => {
    return () => {
      updateMenu(category);
    };
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Image src={ICONS.logo_icon} alt="" height={8 * 24} width={8 * 48} />
      </div>
      <ul className="nav-menu">
        <li onClick={_handleMenuItemClick("shop")}>
          <Link style={{textDecoration: 'none'}} href="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={_handleMenuItemClick("men")}>
          <Link style={{textDecoration: 'none'}} href="/mens">Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={_handleMenuItemClick("women")}>
          <Link style={{textDecoration: 'none'}} href="/womens">Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={_handleMenuItemClick("kids")}>
          <Link style={{textDecoration: 'none'}} href="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link href="/login">
          <button>Login</button>
        </Link>
        <Link href="/cart">
          <Image src={ICONS.cart_icon} alt="" height={40} width={40} />
          <div className="nav-cart-count">0</div>
        </Link>
      </div>
    </div>
  );
};
