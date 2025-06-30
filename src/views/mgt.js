import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mgt.css'

const Mgt = (props) => {
  return (
    <div className="mgt-container10">
      <Helmet>
        <title>Mgt - Flamingo new</title>
        <meta property="og:title" content="Mgt - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="mgt-navbar-interactive">
        <Link to="/" className="mgt-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="mgt-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="mgt-desktop-menu">
          <nav className="mgt-links">
            <Link to="/" className="mgt-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="mgt-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="mgt-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="mgt-navlink14">
              Management
            </Link>
            <Link to="/faqs" className="mgt-navlink15">
              FAQ
            </Link>
            <Link to="/products" className="mgt-navlink16">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="mgt-burger-menu">
          <svg viewBox="0 0 1024 1024" className="mgt-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="mgt-mobile-menu">
          <div className="mgt-nav">
            <div className="mgt-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="mgt-logo"
              />
              <div data-thq="thq-close-menu" className="mgt-close-menu">
                <svg viewBox="0 0 1024 1024" className="mgt-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="mgt-navlink17">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="mgt-navlink18">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="mgt-navlink19">
              Wholesale
            </Link>
            <Link to="/mgt" className="mgt-navlink20">
              Management
            </Link>
            <Link to="/faqs" className="mgt-navlink21">
              FAQ
            </Link>
            <Link to="/products" className="mgt-navlink22">
              Products
            </Link>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="mgt-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="mgt-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="mgt-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="mgt-container11">
        <div className="mgt-container12">
          <span className="mgt-text14">Management</span>
          <span className="mgt-text15">
            <span className="mgt-text16">Freddie Cesar —</span>
            <span> </span>
            <span className="mgt-text18">CEO</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="mgt-container13">
            <img
              alt="image"
              src="/flamingo-tissue-1500h.png"
              className="mgt-image2"
            />
          </div>
          <span className="mgt-text20">
            <span className="mgt-text21">
              Dennis R. Perry — President and Chief Technical Officer
            </span>
            <br className="mgt-text22"></br>
          </span>
          <div className="mgt-container14">
            <img
              alt="image"
              src="/management-1-200h.jpg"
              className="mgt-image3"
            />
            <span className="mgt-text23">
              Dennis R. Perry joined Flamingo Tissue, a Flamingo Paper Products,
              Inc. in 2000 and serves today as President and Chief Technical
              Officer. Before becoming CEO of Flamingo Paper Products, Inc. in
              June 2012, Dennis served as Senior Vice President, and Business
              Marketing Strategist from2005-2012. Dennis holds a B.S., in Civil
              Engineering and a Masters in Industrial Engineering.
            </span>
          </div>
          <span className="mgt-text24">
            Vincent Chen — Chief Financial Officer
          </span>
          <div className="mgt-container15">
            <img
              alt="image"
              src="/management-2-200h.jpg"
              className="mgt-image4"
            />
            <span className="mgt-text25">
              Vincent Chen joined Flamingo Tissue, a Flamingo Paper Products,
              Inc. in 2015 and serves today as Chief Financial Officer. Prior to
              joining Flamingo Paper Products, Inc., Vince held various roles at
              some of the largest accounting firms in the world. Vince holds a
              B.S. in Accounting and a Masters in Accounting.
            </span>
          </div>
          <span className="mgt-text26">
            Giovanni L. Russo — EVP of Sales Marketing
          </span>
          <div className="mgt-container16">
            <img
              alt="image"
              src="/management-3-200h.jpg"
              className="mgt-image5"
            />
            <span className="mgt-text27">
              Giovanni L. Russo joined Flamingo Tissue, a Flamingo Paper
              Products, Inc. in January 1995 as our Executive Vice President of
              Sales Marketing and has over 30-years of experience in the Paper
              industry. Giovanni brings extensive sales and management
              experience along with diverse industry experience. Furthermore,
              Giovanni has experience in the hospitality industry having served
              as the EVP of Sales for a large US Hotel Chain. Giovanni holds a
              B.S. in Sales and Marketing and a Masters in Finance.
            </span>
          </div>
          <span className="mgt-text28">
            Samantha Alexa López — VP, Operations
          </span>
          <div className="mgt-container17">
            <img
              alt="image"
              src="/management-4-200h.jpg"
              className="mgt-image6"
            />
            <span className="mgt-text29">
              Samantha Alexa López joined Flamingo Tissue, a Flamingo Paper
              Products, Inc. in 2010 and serves as Vice President of Operations.
              Prior to joining Flamingo Tissue, Sam has extensive experience in
              operations leadership, logistics, and finance roles in both
              household products and personal &amp; health care products
              industries. Sam holds a Bachelor of Science in Management and
              Finance.
            </span>
          </div>
          <span className="mgt-text30">
            Sofia Fernández-García — VP, Human Resources
          </span>
          <div className="mgt-container18">
            <img
              alt="image"
              src="/management-5-200h.jpg"
              className="mgt-image7"
            />
            <span className="mgt-text31">
              Sofia Fernández-García joined Flamingo Tissue, a Flamingo Paper
              Products, Inc. in 2014 and serves as the Vice President of Human
              Resources. Sofia brings a wealth of human resource experience from
              leading organizations in various industries including
              Manufacturing, Retail Banking, and Hospitality Industries. Prior
              to Joining Flamingo Tissue, Sofia served as a top Human Resources
              executive for various leading companies where she focused on
              leading and championing change, strategic HR development, talent
              acquisition &amp; management, program and benefits enhancement,
              and communications. Sofia holds a B.S. in Human Resource
              Management.
            </span>
          </div>
          <span className="mgt-text32">
            Christopher Moore Johnson — General Manager
          </span>
          <div className="mgt-container19">
            <img
              alt="image"
              src="/management-6-200h.jpg"
              className="mgt-image8"
            />
            <span className="mgt-text33">
              MollyElizabeth DeCosta joined Flamingo Tissue, a Flamingo Paper
              Products, Inc. in January 2015 as our Vice President of
              International Sales. Moly has over 15-years’ of experience in the
              Paper industry. Molly brings a wealth of International Sales
              experience from her various leadership roles in the lodging
              industry, having served as the Director of International Sales for
              a large US based international hotel chains. Molly holds a B.A. in
              Sales and Marketing.
            </span>
          </div>
          <span className="mgt-text34">
            Molly Elizabeth DeCosta — VP, International Sales
          </span>
          <div className="mgt-container20">
            <img
              alt="image"
              src="/management-7-200h.jpg"
              className="mgt-image9"
            />
            <span className="mgt-text35">
              MollyElizabeth DeCosta joined Flamingo Tissue, a Flamingo Paper
              Products, Inc. in January 2015 as our Vice President of
              International Sales. Moly has over 15-years’ of experience in the
              Paper industry. Molly brings a wealth of International Sales
              experience from her various leadership roles in the lodging
              industry, having served as the Director of International Sales for
              a large US based international hotel chains. Molly holds a B.A. in
              Sales and Marketing.
            </span>
          </div>
        </div>
      </div>
      <div className="mgt-container21">
        <div className="mgt-container22">
          <span className="mgt-text36">Information</span>
          <Link to="/faqs" className="mgt-navlink23">
            FAQs
          </Link>
          <Link to="/legal-agg" className="mgt-navlink24">
            Legal Agreement
          </Link>
          <Link to="/about" className="mgt-navlink25">
            About Flamingo
          </Link>
          <Link to="/mgt" className="mgt-navlink26">
            Management
          </Link>
          <Link to="/delivery-info" className="mgt-navlink27">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="mgt-navlink28">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="mgt-navlink29">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="mgt-container23">
          <span className="mgt-text37">Customer Service</span>
          <Link to="/contact-us" className="mgt-navlink30">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            className="mgt-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            className="mgt-link2"
          >
            Site Map
          </a>
        </div>
        <div className="mgt-container24">
          <span className="mgt-text38">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="mgt-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="mgt-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="mgt-navlink31">
            Specials
          </Link>
        </div>
        <div className="mgt-container25">
          <span className="mgt-text39">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="mgt-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="mgt-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="mgt-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            target="_blank"
            rel="noreferrer noopener"
            className="mgt-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="mgt-container26">
        <div className="mgt-container27"></div>
        <span className="mgt-text40">
          Copyright © 1965 - 2025 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default Mgt
