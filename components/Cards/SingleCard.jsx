"use client";

import Link from "next/link";
import "./card.css";
import React, { useEffect } from "react";
import Eye from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import Heart from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch } from "react-redux";
import { toggleModal, setModalProduct } from "@/redux/utility/modal-slice";

const Card = ({ card, className = "" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const element = document.querySelector(".icon__container--desktop");

    if (element) {
      element.classList.remove("icon__container--desktop");
    }
  }, []);

  const handleModal = () => {
    dispatch(toggleModal());
    dispatch(setModalProduct(card));
  };

  return (
    <div className={`card mb-10 ${className}`}>
      <div className="img__container">
        {/* <img src="/images/1.jpg" className="card__img" /> */}
        <Link href="/">
          <img src={card.thumbnail} className="card__img--1"/>
          <img src={card.images[0]} className="card__img--2" />
          <div className="overlay"></div>
        </Link>

        <div className="icon__container icon__container--desktop">
          <div className="product__icon icon__eye" onClick={handleModal}>
            <Eye />
          </div>
          <div className="product__icon icon__eye">
            <ShoppingCart />
          </div>
          <div className="product__icon icon__eye">
            <Heart />
          </div>
        </div>
      </div>
      <div className="card-content px-5">
        <Link href="/">
          <h2 className="text-2xl">{card.title}</h2>
          <p>${card.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
