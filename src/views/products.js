import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './products.css'

const Products = (props) => {
  return (
    <div className="products-container10">
      <Helmet>
        <title>Products - Flamingo new</title>
        <meta property="og:title" content="Products - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="products-navbar-interactive">
        <Link to="/" className="products-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="products-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="products-desktop-menu">
          <nav className="products-links">
            <Link to="/" className="products-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="products-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="products-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="products-navlink14">
              Management
            </Link>
            <Link to="/faqs" className="products-navlink15">
              FAQ
            </Link>
            <Link to="/products" className="products-navlink16">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="products-burger-menu">
          <svg viewBox="0 0 1024 1024" className="products-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="products-mobile-menu">
          <div className="products-nav">
            <div className="products-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="products-logo"
              />
              <div data-thq="thq-close-menu" className="products-close-menu">
                <svg viewBox="0 0 1024 1024" className="products-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="products-navlink17">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="products-navlink18">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="products-navlink19">
              Wholesale
            </Link>
            <Link to="/mgt" className="products-navlink20">
              Management
            </Link>
            <Link to="/faqs" className="products-navlink21">
              FAQ
            </Link>
            <Link to="/products" className="products-navlink22">
              Products
            </Link>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="products-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="products-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="products-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="products-container11">
        <div className="products-container12">
          <img
            alt="image"
            src="/blue-12-200x200-200h.jpg"
            className="products-image2"
          />
          <span className="products-text14">
            FLAMINGO ULTRA CUSH 12 PLUS ROLLS
          </span>
          <span>
            Our 550 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Plus
            Rolls has 10% more sheets than our leading competitors.
          </span>
        </div>
        <div className="products-container13">
          <img
            alt="image"
            src="/pink-12-200x200-200h.jpg"
            className="products-image3"
          />
          <span className="products-text16">
            FLAMINGO ULTRA CUSH 12 SUPER ROLLS
          </span>
          <span>
            Our 750 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Super
            Rolls has 50% more sheets than our regular Plus Rolls.
          </span>
        </div>
        <div className="products-container14">
          <img
            alt="image"
            src="/blue-24-228x228-200h.jpg"
            className="products-image4"
          />
          <span className="products-text18">
            FLAMINGO ULTRA CUSH 24 PLUS ROLLS
          </span>
          <span>
            Our 550 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Plus
            Rolls has 10% more sheets than our leading competitors.
          </span>
        </div>
      </div>
      <div className="products-container15">
        <div className="products-container16">
          <img
            alt="image"
            src="/pink-24-200x200-200h.jpg"
            className="products-image5"
          />
          <span className="products-text20">
            FLAMINGO ULTRA CUSH 24 SUPER ROLLS
          </span>
          <span>
            Our 750 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Super
            Rolls has 50% more sheets than our regular Plus Rolls.
          </span>
        </div>
        <div className="products-container17">
          <img
            alt="image"
            src="/blue-48-228x228-200h.jpg"
            className="products-image6"
          />
          <span className="products-text22">
            FLAMINGO ULTRA CUSH 48 PLUS ROLLS
          </span>
          <span>
            Our 550 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Plus
            Rolls has 10% more sheets than our leading competitors.
          </span>
        </div>
        <div className="products-container18">
          <img
            alt="image"
            src="/pink-48-500x500-200h.jpg"
            className="products-image7"
          />
          <span className="products-text24">
            FLAMINGO ULTRA CUSH 48 SUPER ROLLS
          </span>
          <span>
            Our 750 sheets DOUBLE-PLY Flamingo Bathroom Tissue is an
            ecologically advanced premium toilet paper that is double layered,
            soft, strong, highly absorbent and septic safe. One Flamingo Super
            Rolls has 50% more sheets than our regular Plus Rolls.
          </span>
        </div>
      </div>
      <div className="products-container19">
        <div className="products-container20">
          <span className="products-text26">Information</span>
          <Link to="/faqs" className="products-navlink23">
            FAQs
          </Link>
          <Link to="/legal-agg" className="products-navlink24">
            Legal Agreement
          </Link>
          <Link to="/about" className="products-navlink25">
            About Flamingo
          </Link>
          <Link to="/mgt" className="products-navlink26">
            Management
          </Link>
          <Link to="/delivery-info" className="products-navlink27">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="products-navlink28">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="products-navlink29">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="products-container21">
          <span className="products-text27">Customer Service</span>
          <Link to="/contact-us" className="products-navlink30">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            target="_blank"
            rel="noreferrer noopener"
            className="products-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            target="_blank"
            rel="noreferrer noopener"
            className="products-link2"
          >
            Site Map
          </a>
        </div>
        <div className="products-container22">
          <span className="products-text28">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="products-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="products-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="products-navlink31">
            Specials
          </Link>
        </div>
        <div className="products-container23">
          <span className="products-text29">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="products-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="products-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="products-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="products-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="products-container24">
        <div className="products-container25"></div>
        <span className="products-text30">
          Copyright © 1965 - 2025 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default Products
