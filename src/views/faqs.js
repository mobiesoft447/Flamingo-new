import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './faqs.css'

const FAQS = (props) => {
  return (
    <div className="faqs-container10">
      <Helmet>
        <title>FAQS - Flamingo new</title>
        <meta property="og:title" content="FAQS - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="faqs-navbar-interactive">
        <Link to="/" className="faqs-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="faqs-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="faqs-desktop-menu">
          <nav className="faqs-links">
            <Link to="/" className="faqs-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="faqs-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="faqs-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="faqs-navlink14">
              Management
            </Link>
            <Link to="/faqs" className="faqs-navlink15">
              FAQ
            </Link>
            <Link to="/products" className="faqs-navlink16">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="faqs-burger-menu">
          <svg viewBox="0 0 1024 1024" className="faqs-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="faqs-mobile-menu">
          <div className="faqs-nav">
            <div className="faqs-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="faqs-logo"
              />
              <div data-thq="thq-close-menu" className="faqs-close-menu">
                <svg viewBox="0 0 1024 1024" className="faqs-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="faqs-navlink17">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="faqs-navlink18">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="faqs-navlink19">
              Wholesale
            </Link>
            <Link to="/mgt" className="faqs-navlink20">
              Management
            </Link>
            <Link to="/faqs" className="faqs-navlink21">
              FAQ
            </Link>
            <Link to="/products" className="faqs-navlink22">
              Products
            </Link>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="faqs-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="faqs-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="faqs-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="faqs-container11">
        <div className="faqs-container12">
          <span className="faqs-text14">FAQs</span>
          <span className="faqs-text15">
            <span className="faqs-text16">Frequently Asked Questions</span>
            <br className="faqs-text17"></br>
            <br className="faqs-text18"></br>
            <br className="faqs-text19"></br>
            <br className="faqs-text20"></br>
            <span className="faqs-text21">
              Is Flamingo Toilet paper septic/sewer safe?
            </span>
            <br className="faqs-text22"></br>
            <br className="faqs-text23"></br>
            <span>
              All toilet paper products manufactured by Flamingo Paper Products,
              Inc. are acceptable for use in standard septic and sewer systems.
            </span>
            <br className="faqs-text25"></br>
            <br className="faqs-text26"></br>
            <br className="faqs-text27"></br>
            <span className="faqs-text28">Ply Related Questions</span>
            <br className="faqs-text29"></br>
            <br className="faqs-text30"></br>
            <br className="faqs-text31"></br>
            <span className="faqs-text32">
              What is the difference between 1 ply and 2 ply toilet paper?
            </span>
            <br className="faqs-text33"></br>
            <br className="faqs-text34"></br>
            <span>
              The difference between 1 ply toilet paper and 2 ply toilet paper
              is the amount of paper layers. 1 ply toilet paper consists of one
              paper layer while 2 ply toilet paper is made with 2 layers of
              paper.
            </span>
            <br className="faqs-text36"></br>
            <br className="faqs-text37"></br>
            <br className="faqs-text38"></br>
            <span className="faqs-text39">
              Does Flamingo Bathroom Tissue have a single ply toilet paper?
            </span>
            <br className="faqs-text40"></br>
            <br className="faqs-text41"></br>
            <span>
              No, Flamingo Paper Products, Inc. does not offer single ply toilet
              paper. All Flamingo toilet paper is 2 ply. Our 2 ply toilet paper
              provides 2 layers of softness, absorbency and strength.
            </span>
            <br className="faqs-text43"></br>
            <br className="faqs-text44"></br>
            <br className="faqs-text45"></br>
            <span className="faqs-text46">
              Is Flamingo Bathroom Tissue septic safe toilet paper?
            </span>
            <br className="faqs-text47"></br>
            <br className="faqs-text48"></br>
            <span>
              Flamingo Paper Products, Inc. toilet paper is acceptable for use
              in standard septic and sewer systems.
            </span>
            <br className="faqs-text50"></br>
            <br className="faqs-text51"></br>
            <br className="faqs-text52"></br>
            <span className="faqs-text53">
              What does septic safe toilet paper mean?
            </span>
            <br className="faqs-text54"></br>
            <br className="faqs-text55"></br>
            <span>
              Septic safe toilet paper means that it&apos;s able to break down
              and dissolve easily so it&apos;s safe for septic systems and
              standard sewers.
            </span>
            <br className="faqs-text57"></br>
            <br className="faqs-text58"></br>
          </span>
        </div>
      </div>
      <div className="faqs-container13">
        <div className="faqs-container14">
          <span className="faqs-text59">Information</span>
          <Link to="/faqs" className="faqs-navlink23">
            FAQs
          </Link>
          <Link to="/legal-agg" className="faqs-navlink24">
            Legal Agreement
          </Link>
          <Link to="/about" className="faqs-navlink25">
            About Flamingo
          </Link>
          <Link to="/mgt" className="faqs-navlink26">
            Management
          </Link>
          <Link to="/delivery-info" className="faqs-navlink27">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="faqs-navlink28">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="faqs-navlink29">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="faqs-container15">
          <span className="faqs-text60">Customer Service</span>
          <Link to="/contact-us" className="faqs-navlink30">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            className="faqs-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            className="faqs-link2"
          >
            Site Map
          </a>
        </div>
        <div className="faqs-container16">
          <span className="faqs-text61">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="faqs-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="faqs-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="faqs-navlink31">
            Specials
          </Link>
        </div>
        <div className="faqs-container17">
          <span className="faqs-text62">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="faqs-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="faqs-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="faqs-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="faqs-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="faqs-container18">
        <div className="faqs-container19"></div>
        <span className="faqs-text63">
          Copyright © 1965 - 2025 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default FAQS
