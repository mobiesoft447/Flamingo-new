import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './legal-agg.css'

const LegalAgg = (props) => {
  return (
    <div className="legal-agg-container10">
      <Helmet>
        <title>Legal-agg - Flamingo new</title>
        <meta property="og:title" content="Legal-agg - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="legal-agg-navbar-interactive">
        <Link to="/" className="legal-agg-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="legal-agg-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="legal-agg-desktop-menu">
          <nav className="legal-agg-links">
            <Link to="/" className="legal-agg-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="legal-agg-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="legal-agg-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="legal-agg-navlink14">
              Management
            </Link>
            <Link to="/faqs" className="legal-agg-navlink15">
              FAQ
            </Link>
            <Link to="/products" className="legal-agg-navlink16">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="legal-agg-burger-menu">
          <svg viewBox="0 0 1024 1024" className="legal-agg-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="legal-agg-mobile-menu">
          <div className="legal-agg-nav">
            <div className="legal-agg-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="legal-agg-logo"
              />
              <div data-thq="thq-close-menu" className="legal-agg-close-menu">
                <svg viewBox="0 0 1024 1024" className="legal-agg-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="legal-agg-navlink17">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="legal-agg-navlink18">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="legal-agg-navlink19">
              Wholesale
            </Link>
            <Link to="/mgt" className="legal-agg-navlink20">
              Management
            </Link>
            <Link to="/faqs" className="legal-agg-navlink21">
              FAQ
            </Link>
            <Link to="/products" className="legal-agg-navlink22">
              Products
            </Link>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="legal-agg-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="legal-agg-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="legal-agg-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="legal-agg-container11">
        <div className="legal-agg-container12">
          <span className="legal-agg-text14">Legal Agreement</span>
          <div className="legal-agg-container13">
            <span className="legal-agg-text15">
              Flaming Paper Products, Inc.® Legal Statement:
            </span>
            <span>
              IMPORTANT! PLEASE READ THIS LEGAL STATEMENT CAREFULLY BEFORE USING
              THIS SITE. Your use of this Site and the information available on
              this Site is subject to the following terms and conditions:
            </span>
          </div>
          <div className="legal-agg-container14">
            <span className="legal-agg-text17">Site Ownership</span>
            <span>
              This site is owned, operated and maintained by FLAMINGO PAPER
              PRODUCTS, INC. (“Flamingo Tissue”) and has been created for your
              information, education, entertainment and communication. This site
              and all perceptible components hereof, including without
              limitation text, software, scripts, graphics, photos, sounds,
              music, videos, and interactive features are copyrighted by
              Flamingo Tissue.
            </span>
          </div>
          <div className="legal-agg-container15">
            <span className="legal-agg-text19">Restrictions on Use</span>
            <span>
              This Site is available only for your personal, non-commercial use.
              You may not copy, reproduce, republish, post, distribute, transmit
              or modify in any way all or any part of this Site. You affirm that
              you are either more than 18 years of age, or an emancipated minor,
              or possess legal parental or guardian consent, and are fully able
              and competent to enter into the terms, conditions, obligations,
              affirmations, representations, and warranties set forth in this
              Legal Statement, and to abide by and comply with this Legal
              Statement. In any case, you affirm that you are over the age of
              13, as this Site is not intended for children under 13. If you are
              under 13 years of age, then please do not use the
              www.FlamingoTissue.com Site.
            </span>
          </div>
          <div className="legal-agg-container16">
            <span className="legal-agg-text21">Trademark Notice</span>
            <span>
              All names, logos and trademarks are the property of Flamingo Paper
              Products, Inc. and Flamingo Tissue and you may not use any of such
              materials for any purpose without the express written agreement of
              Flamingo Paper Products, Inc.
            </span>
          </div>
          <div className="legal-agg-container17">
            <span className="legal-agg-text23">
              Disclosure and Use of Your Communications
            </span>
            <span>
              Postings to this site and electronic mail delivered to Flamingo
              Tissue are not confidential and Flamingo Tissue shall not be
              liable for any use or disclosure thereof. All communications and
              any attached files you send to this site or to Flamingo Tissue by
              electronic mail may be used by Flamingo Tissue for any purpose
              whatsoever, commercial or otherwise, without compensation.
            </span>
          </div>
          <div className="legal-agg-container18">
            <span className="legal-agg-text25">Site Access</span>
            <span>
              Flamingo Tissue hereby grants you permission to use this Site as
              set forth in this Legal Statement, provided that your use of this
              Site is solely for your personal, noncommercial use. You may not
              copy or distribute any part of this Site in any medium without
              Flamingo Tissue&apos;s prior written authorization. In addition,
              you may not alter or modify any part of this Site other than as
              may be reasonably necessary to use this Site for its intended
              purpose.
            </span>
          </div>
          <div className="legal-agg-container19">
            <span className="legal-agg-text27">
              Content Submitted to this Site
            </span>
            <span>
              <span>
                By submitting content to and through this Site, you are
                responsible for the following: (1) you are at least 13 years
                old; (2) you are the owner of the content; (3) the content is
                truthful and accurate; (4) the content will not cause injury to
                any person or entity; (5) the content does not infringe someone
                else’s copyright, trademark, proprietary rights or rights of
                publicity and privacy; (6) the content does not violate a law,
                statute, ordinance or regulation; (7) the content would not
                reasonably be considered to be defamatory, libelous, hateful,
                racially or religiously biased or offensive or harassing to
                another party; (8) you were not paid to submit the content; (9)
                the content does not contain references to other websites, email
                addresses, contact information or phone numbers; (10) if the
                content contains the likeness or name of an identifiable person,
                you have that person’s permission to include their likeness/name
                in the content you are submitting; and (11) the content does not
                contain computer viruses, worms or other potentially damaging
                programs or files.
              </span>
              <br></br>
              <br></br>
              <span>
                For any content that you submit, you grant Flamingo Tissue a
                perpetual, irrevocable, royalty-free, transferable right and
                license to use, copy, modify, delete in its entirety, adapt,
                publish, translate, create derivative works from and/or sell
                and/or distribute such content and/or incorporate such content
                into any form, medium or technology throughout the world without
                compensation to you. You also hereby grant each user of the Site
                a non-exclusive license to access your content through the Site,
                and to use, reproduce, distribute, prepare derivative works of,
                display and perform such content as permitted through the
                functionality of the Site as provided for in this Legal
                Statement.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span>
                All content that you submit may be used at Flamingo
                Tissue&apos;s sole discretion. Flamingo Tissue reserves the
                right to change, condense or delete any content on this website
                that Flamingo Tissue deems, in its sole discretion, to violate
                the content guidelines or any other provision of this Legal
                Statement. Flamingo Tissue does not guarantee that you will have
                any recourse through Flamingo Tissue to edit or delete any
                content you have submitted. Product ratings and written comments
                are generally posted within two to four business days. However,
                Flamingo Tissue reserves the right to remove or to refuse to
                post any submission for any reason. You acknowledge that you,
                not Flamingo Tissue, are responsible for the contents of your
                submission.
              </span>
            </span>
          </div>
          <div className="legal-agg-container20">
            <span className="legal-agg-text37">
              Claims of Copyright Infringement
            </span>
            <span>
              Flamingo Tissue does not permit copyright infringing activities
              and infringement of intellectual property rights on this Site and
              will remove content if properly notified that such content
              infringes another&apos;s intellectual property rights. Flamingo
              Tissue reserves the right to remove content without prior notice.
              We will also terminate your access to this Site, if you are
              determined to be a repeat infringer. A repeat infringer is someone
              who has been notified of infringing activity more than twice
              and/or has had submitted content removed from this Site more than
              twice. Flamingo Tissue also reserves the right to decide whether
              the content is appropriate and complies with this Legal Statement
              for violations other than copyright infringement, including but
              not limited to pornography, obscene or defamatory material, or
              excessive length. Flamingo Tissue may remove such content and/or
              terminate your access for uploading such material in violation of
              this Legal Statement at any time, without prior notice and at its
              sole discretion. If you believe that your content has been copied
              in a way that constitutes copyright infringement, you may submit a
              notification pursuant to Title 17, United States Code, Section
              512(c)(2) by providing our Copyright Agent the following
              information: (1) an electronic or physical signature of the person
              authorized to act on behalf of the owner of the copyright
              interest; (2) an identification or description of the copyrighted
              work that you claim has been infringed; (3) an identification or
              description of where the material that you claim is infringing is
              located on this Site; (4) your address, telephone number, and
              email address; (5) a statement by you that you have a good faith
              belief that the disputed use is not authorized by the copyright
              owner, its agent, or the law; and (6) a statement by you, made
              under penalty of perjury, that the above information in your
              notice is accurate and that you are the copyright owner or
              authorized to act on the copyright owner&apos;s behalf. Please
              contact us at info@flamingotissue.com for Notice of claims of
              copyright infringement on the Site.
            </span>
          </div>
          <div className="legal-agg-container21">
            <span className="legal-agg-text39">Jurisdiction</span>
            <span>
              The products referred to in this Site are available in the United
              States and Canada and may not be available in your country. This
              Site is controlled and operated by Flamingo Tissue from the United
              States and Flamingo Tissue makes no representation that the
              information and materials in this Site, including without
              limitation the information, performance claims and other materials
              promoting the products identified herein, are applicable or
              available for use in other countries. Also, some software from
              this Site may be subject to export controls imposed by the United
              States Government and may not be downloaded or otherwise exported
              or re-exported into (or to a national or resident of) any country
              to which the U.S. has placed an embargo. If you download or use
              the software, you represent and warrant that you are not located
              in, or under the control of, or a national of any such country or
              on any such list.
            </span>
          </div>
          <div className="legal-agg-container22">
            <span className="legal-agg-text41">DISCLAIMER OF WARRANTIES</span>
            <span>
              FLAMINGO TISSUE MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING
              THE ACCURACY, RELIABILITY OR COMPLETENESS OF THE CONTENT (E.G.
              TEXT AND IMAGES) OF THIS SITE. TO THE EXTENT PERMISSIBLE BY LAW,
              FLAMINGO TISSUE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY
              AND FITNESS FOR A PARTICULAR PURPOSE. FURTHER, FLAMINGO TISSUE
              DOES NOT WARRANT THAT THIS SITE OR THE SERVER THAT MAKES IT
              AVAILABLE ARE FREE OF COMPUTER &quot;VIRUSES.&quot;
            </span>
          </div>
          <div className="legal-agg-container23">
            <span className="legal-agg-text43">Limitation of Liability</span>
            <span>
              Flamingo Tissue will not be liable for damages of any kind,
              including without limitation special or consequential damages,
              arising out of your access to, or inability to access, this Site
              or your use of, or reliance upon, this Site or the content hereof.
              In addition, Flamingo Tissue has no duty to update this Site or
              the content hereof and Flamingo Tissue will not be liable for any
              failure to update such information. Further, Flamingo Tissue is
              neither responsible nor liable for your use of other web sites
              which you may access via certain links within this Site. These
              links and other &quot;resources&quot; referenced on this Site are
              provided merely as a public service to users of the World Wide Web
              and inclusion in our Site does not constitute an endorsement by or
              affiliation with Flamingo Tissue.
            </span>
          </div>
          <div className="legal-agg-container24">
            <span className="legal-agg-text45">Purpose of this Site</span>
            <span>
              The contents of this Site are for informational purposes only, and
              are not intended as medical advice. For medical care and advice,
              you should consult your physician or health care provider on a
              regular basis. If you have any problem which concerns you, consult
              your physician immediately.
            </span>
          </div>
          <div className="legal-agg-container25">
            <span className="legal-agg-text47">
              Changes to Legal Statement and Monitoring of Content
            </span>
            <span>
              The contents of this Site are for informational purposes only, and
              are not intended as medical advice. For medical care and advice,
              you should consult your physician or health care provider on a
              regular basis. If you have any problem which concerns you, consult
              your physician immediately.
            </span>
          </div>
        </div>
      </div>
      <div className="legal-agg-container26">
        <div className="legal-agg-container27">
          <span className="legal-agg-text49">Information</span>
          <Link to="/faqs" className="legal-agg-navlink23">
            FAQs
          </Link>
          <Link to="/legal-agg" className="legal-agg-navlink24">
            Legal Agreement
          </Link>
          <Link to="/about" className="legal-agg-navlink25">
            About Flamingo
          </Link>
          <Link to="/mgt" className="legal-agg-navlink26">
            Management
          </Link>
          <Link to="/delivery-info" className="legal-agg-navlink27">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="legal-agg-navlink28">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="legal-agg-navlink29">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="legal-agg-container28">
          <span className="legal-agg-text50">Customer Service</span>
          <Link to="/contact-us" className="legal-agg-navlink30">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            className="legal-agg-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            className="legal-agg-link2"
          >
            Site Map
          </a>
        </div>
        <div className="legal-agg-container29">
          <span className="legal-agg-text51">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="legal-agg-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="legal-agg-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="legal-agg-navlink31">
            Specials
          </Link>
        </div>
        <div className="legal-agg-container30">
          <span className="legal-agg-text52">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="legal-agg-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="legal-agg-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="legal-agg-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="legal-agg-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="legal-agg-container31">
        <div className="legal-agg-container32"></div>
        <span className="legal-agg-text53">
          Copyright © 1965 - 2017 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default LegalAgg
