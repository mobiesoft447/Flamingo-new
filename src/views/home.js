import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Gallery8 from '../components/gallery8'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Flamingo new</title>
        <meta property="og:title" content="Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <Link to="/" className="home-navlink10">
              <img
                alt="logo"
                src="/flamingo-tissue-1500h.png"
                className="home-image1"
              />
            </Link>
            <Link to="/" className="home-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="home-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="home-link1">
              Wholesale
            </Link>
            <Link to="/mgt" className="home-navlink13">
              Management
            </Link>
            <Link to="/faqs" className="home-navlink14">
              FAQ
            </Link>
            <Link to="/products" className="home-navlink15">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="home-navlink16">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="home-navlink17">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="home-navlink18">
              Wholesale
            </Link>
            <Link to="/mgt" className="home-navlink19">
              Management
            </Link>
            <Link to="/faqs" className="home-navlink20">
              FAQ
            </Link>
            <Link to="/products" className="home-navlink21">
              Products
            </Link>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <Gallery8 rootClassName="gallery8root-class-name"></Gallery8>
      <h1 className="home-text14">Featured Product</h1>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <img
              alt="image"
              src="/pink-12-200x200-200h.jpg"
              className="home-image2"
            />
            <span className="home-text15">
              FLAMINGO ULTRA CUSH 12 SUPER ROLLS
            </span>
          </div>
        </div>
        <div className="home-container14">
          <img
            alt="image"
            src="/pink-24-200x200-200h.jpg"
            className="home-image3"
          />
          <span className="home-text16">
            FLAMINGO ULTRA CUSH 24 SUPER ROLLS
          </span>
        </div>
        <div className="home-container15">
          <img
            alt="image"
            src="/pink-48-200x200-200h.jpg"
            className="home-image4"
          />
          <span className="home-text17">
            FLAMINGO ULTRA CUSH 48 SUPER ROLLS
          </span>
        </div>
        <div className="home-container16">
          <img
            alt="image"
            src="/blue-12-200x200-200h.jpg"
            className="home-image5"
          />
          <span className="home-text18">FLAMINGO ULTRA CUSH 12 PLUS ROLLS</span>
        </div>
      </div>
      <h1 className="home-text19">New Arrivals</h1>
      <div className="home-container17">
        <div className="home-container18">
          <div className="home-container19">
            <img
              alt="image"
              src="/pink-12-200x200-200h.jpg"
              className="home-image6"
            />
            <span className="home-text20">
              FLAMINGO ULTRA CUSH 12 SUPER ROLLS
            </span>
          </div>
        </div>
        <div className="home-container20">
          <img
            alt="image"
            src="/pink-24-200x200-200h.jpg"
            className="home-image7"
          />
          <span className="home-text21">
            FLAMINGO ULTRA CUSH 24 SUPER ROLLS
          </span>
        </div>
        <div className="home-container21">
          <img
            alt="image"
            src="/pink-48-200x200-200h.jpg"
            className="home-image8"
          />
          <span className="home-text22">
            FLAMINGO ULTRA CUSH 48 SUPER ROLLS
          </span>
        </div>
        <div className="home-container22">
          <img
            alt="image"
            src="/blue-12-200x200-200h.jpg"
            className="home-image9"
          />
          <span className="home-text23">FLAMINGO ULTRA CUSH 12 PLUS ROLLS</span>
        </div>
      </div>
      <div className="home-container23">
        <div className="home-container24">
          <div className="home-container25">
            <span className="home-text24">Information</span>
            <Link to="/faqs" className="home-navlink22">
              FAQs
            </Link>
            <Link to="/legal-agg" className="home-navlink23">
              Legal Agreement
            </Link>
            <Link to="/about" className="home-navlink24">
              About Flamingo
            </Link>
            <Link to="/mgt" className="home-navlink25">
              Management
            </Link>
            <Link to="/delivery-info" className="home-navlink26">
              Delivery Information
            </Link>
            <Link to="/priv-pol" className="home-navlink27">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="home-navlink28">
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="home-container26">
            <span className="home-text25">Customer Service</span>
            <Link to="/contact-us" className="home-navlink29">
              Contact Us
            </Link>
            <a
              href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              Returns
            </a>
            <a
              href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              Site Map
            </a>
          </div>
          <div className="home-container27">
            <span className="home-text26">Extras</span>
            <a
              href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              Gift Certificates
            </a>
            <a
              href="https://web.archive.org/web/20180825004643/https://flamingotissue.com/index.php?route=affiliate/account"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              Affiliates
            </a>
            <Link to="/specials" className="home-navlink30">
              Specials
            </Link>
          </div>
          <div className="home-container28">
            <span className="home-text27">My Account</span>
            <a
              href="https://web.archive.org/web/20180825004930/https://flamingotissue.com/index.php?route=account/account"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link6"
            >
              My Account
            </a>
            <a
              href="https://web.archive.org/web/20180825012300/https://flamingotissue.com/index.php?route=account/order"
              className="home-link7"
            >
              Order History
            </a>
            <a
              href="https://web.archive.org/web/20180824233852/https://flamingotissue.com/index.php?route=account/wishlist"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link8"
            >
              Wish List
            </a>
            <a
              href="https://web.archive.org/web/20180824233852/https://flamingotissue.com/index.php?route=account/wishlist"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link9"
            >
              Newsletter
            </a>
          </div>
        </div>
        <div className="home-container29">
          <div className="home-container30"></div>
          <span className="home-text28">
            Copyright © 1965 - 2025 Flamingo Paper Products, Inc. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
