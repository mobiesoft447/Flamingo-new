import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './priv-pol.css'

const PrivPol = (props) => {
  return (
    <div className="priv-pol-container10">
      <Helmet>
        <title>Priv-Pol - Flamingo new</title>
        <meta property="og:title" content="Priv-Pol - Flamingo new" />
      </Helmet>
      <header data-thq="thq-navbar" className="priv-pol-navbar-interactive">
        <Link to="/" className="priv-pol-navlink10">
          <img
            alt="logo"
            src="/flamingo-tissue-1500h.png"
            className="priv-pol-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="priv-pol-desktop-menu">
          <nav className="priv-pol-links">
            <Link to="/" className="priv-pol-navlink11">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="priv-pol-navlink12">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="priv-pol-navlink13">
              Wholesale
            </Link>
            <Link to="/mgt" className="priv-pol-navlink14">
              Management
            </Link>
            <Link to="/faqs" className="priv-pol-navlink15">
              FAQ
            </Link>
            <Link to="/products" className="priv-pol-navlink16">
              Products
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="priv-pol-burger-menu">
          <svg viewBox="0 0 1024 1024" className="priv-pol-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="priv-pol-mobile-menu">
          <div className="priv-pol-nav">
            <div className="priv-pol-top">
              <img
                alt="image"
                src="/flamingo-tissue-1500h.png"
                className="priv-pol-logo"
              />
              <div data-thq="thq-close-menu" className="priv-pol-close-menu">
                <svg viewBox="0 0 1024 1024" className="priv-pol-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <Link to="/" className="priv-pol-navlink17">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about" className="priv-pol-navlink18">
              About Flamingo
            </Link>
            <Link to="/wholesale" className="priv-pol-navlink19">
              Wholesale
            </Link>
            <Link to="/mgt" className="priv-pol-navlink20">
              Management
            </Link>
            <Link to="/faqs" className="priv-pol-navlink21">
              FAQ
            </Link>
            <Link to="/products" className="priv-pol-navlink22">
              Products
            </Link>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="priv-pol-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="priv-pol-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="priv-pol-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="priv-pol-container11">
        <div className="priv-pol-container12">
          <span className="priv-pol-text14">Privacy Policy</span>
          <div className="priv-pol-container13">
            <span className="priv-pol-text15">
              Flamingo Tissue Privacy Policy
            </span>
            <span>Effective Date: January 2000</span>
            <span>
              This Site is owned, operated and maintained by FLAMINGO PAPER
              PRODUCTS, INC. (“Flamingo Tissue”). At Flamingo Tissue, we
              recognize that visitors to our Site may be concerned about the
              information they provide and how we treat that information. This
              Privacy Policy addresses those concerns. The purpose of the
              Flamingo Tissue Privacy Policy is to describe how the websites and
              mobile applications owned or operated by Flamingo Tissue collect,
              share, and secure information. Before you provide us with any
              personal information or otherwise browse our site, you should read
              through this Privacy Policy completely and make sure that you are
              comfortable with our privacy practices. We may update the Privacy
              Policy from time to time, so please check in occasionally.
            </span>
          </div>
          <div className="priv-pol-container14">
            <span className="priv-pol-text18">Information We Collect</span>
            <span>
              <span>
                At this Site, you may choose to provide Flamingo Tissue with
                information about yourself that is “personally identifiable
                information”. When we use the term “personally identifiable
                information”, we mean information that is collected in
                conjunction with your name. Your use of this Site may provide
                other information about you that is not “personally identifiable
                information”. this information is not collected in conjunction
                with your name. Flamingo Tissue does not collect personally
                identifiable information about you unless you provide it to us
                voluntarily and knowingly. You can visit this Site without
                providing us with personally identifiable information. However,
                if you give us personally identifiable information, such as by
                asking to be put on our mailing list, we may contact you from
                time to time.
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span>
                You may connect with Flamingo Tissue or one of its websites
                through social networking websites, such as Facebook or Twitter.
                If you initiate such a process, such as by “Liking” a Flamingo
                Tissue product on Facebook, you will be allowing Facebook to
                provide us with information from your Facebook profile. Whenever
                submitting information on a social network website you should
                familiarize yourself with their privacy policy and practices.
              </span>
            </span>
          </div>
          <div className="priv-pol-container15">
            <span className="priv-pol-text25">
              How Information is Collected
            </span>
            <span>
              <span>
                By Asking. We may collect some information from you by asking
                that you provide it to us. For example, we may ask you for your
                email address on our website, or require you to provide us with
                information such as your birthday, telephone number, and
                address, so that you can sign up for our rewards programs or
                request a free sample. Personally identifiable information is
                collected from you directly and with your knowledge.
              </span>
              <br></br>
              <br></br>
              <span>
                Cookies. Like many companies, Flamingo Tissue uses “cookie”
                technology on our Site. Cookies are information stored on your
                computer by your browser to save your preferences while you are
                visiting a particular site. When you log in, the cookie tells us
                whether you visited us before or are a new visitor, and it
                enables us to learn which advertisements bring users to our
                website. The cookie doesn&apos;t obtain any personal information
                about you or provide us with any way to contact you. We do use
                the cookie to help us identify site features in which you have
                the greatest interest so that we can provide more of what you
                may want. If you choose, you can set your browser to reject
                cookies or you can manually delete individual or all of the
                cookies on your computer by following your browser’s help file
                directions. However, if you do not enable cookies to be received
                by your web browser, you may have trouble accessing some of the
                pages and certain features on this Site.
              </span>
              <br></br>
              <br></br>
              <span>
                Web Beacons. A web beacon is an electronic file on a Web page
                that allows us to count and recognize users who have visited
                that page. Among other things, a web beacon can be used in
                HTML-formatted email to determine responses to our
                communications and measure their effectiveness – for instance,
                if you get an email from us and click on a link in that email to
                go to our website. You can generally avoid web beacons in email
                by turning off HTML display and displaying only the text portion
                of your email.
              </span>
              <br></br>
              <br></br>
              <span>
                Internet Protocol (IP) Address. As you enter our websites, we
                capture and retain the IP address of the device you are using,
                such as a personal computer or a mobile device.
              </span>
              <br></br>
              <br></br>
              <span>
                Mobile Applications. You may also choose to download mobile
                applications offered by Flamingo Tissue. If you use our mobile
                applications, the mobile application may collect certain
                information automatically, such as the type of mobile device you
                use, the temporary or persistent unique device identifiers
                (sometimes called UDID) and information about the way you use
                the applications. The mobile application may also collect
                certain information you voluntarily provide, such as product
                information when you scan a bar code, and transactional
                information, such as when you make a purchase or respond to an
                offer. Our mobile applications may collect precise information
                about the location of your device, such as when you search for a
                store. However, you must first provide permission through your
                device before the application obtains such location information
                from technologies like GPS, Wi-Fi, or cell tower proximity.
                Mobile service providers may collect device-specific
                information, such as a unique device identifier, when you use
                our Site or one of our mobile applications.
              </span>
            </span>
          </div>
          <div className="priv-pol-container16">
            <span className="priv-pol-text40">
              What We Do with Your Information
            </span>
            <span>
              When you voluntarily sign up on this Site, we add your name, email
              address and street address to our mailing list. If you do not wish
              to receive these mailings, you may request to be removed from our
              mailing list by emailing us at Sales@flamingotissue.com.
              Additionally, if you decide that you do not want to receive
              commercial emails from us, you can “opt-out” from receiving such
              emails by clicking on the “unsubscribe” link provided at the
              bottom of every commercial email. Please note that if you choose
              to opt-out, we will still send you email relating to specific
              products or services that you purchase or sign up for, or email
              that we believe is pertinent to any communication that you have
              sent to us. If you decide at a later time that you would like to
              receive commercial emails from us, you can re-add yourself to our
              communication list. Our Site sometimes includes notices of
              sweepstakes or other promotions we are conducting, and we may
              permit you to send your entry electronically in some cases. If
              that occurs, we will use the information you provide for the
              purpose of conducting the promotion (i.e., to contact you if
              you’re a winner).
            </span>
          </div>
          <div className="priv-pol-container17">
            <span className="priv-pol-text42">How We Share Information</span>
            <span>
              <span>
                We may share information about you with third parties in certain
                circumstances including in the following situations:
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text48">
                Sharing Your Information With Partner Companies.
              </span>
              <span>
                {' '}
                We may ask your permission to share your information with
                carefully selected outside companies when we believe their
                products or services may interest you. You may “opt out” of
                partner offers and programs at any time by updating your User
                Profile, Contacting Us via email at Sales@flamingotissue.com.
                Our partners are prohibited from using your contact information
                for purposes other than presenting relevant offers and programs,
                and they are required to maintain your contact information in
                confidence.
              </span>
              <br></br>
              <br></br>
              <span>·</span>
              <span className="priv-pol-text53">
                {' '}
                Sharing Your Information with Service Providers.
              </span>
              <span>
                {' '}
                We may share information with companies or individuals that
                provide us with services. These services may include, among
                other things, helping us to provide services that you request,
                to create or maintain our databases, to research and analyze the
                people who request products, services, or information from us,
                to prepare and distribute communications, or to respond to
                inquiries.
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text58">
                Law Enforcement and Legal Process.
              </span>
              <span>
                {' '}
                We may report to law enforcement agencies any activities that we
                reasonably believe to be unlawful, or that we reasonably believe
                may aid a law enforcement investigation into unlawful activity.
                In addition, we reserve the right to release your information to
                law enforcement agencies if we determine, in our sole judgment,
                that either you have violated our policies, or the release of
                your information may protect the rights, property, or safety of
                Flamingo Tissue, or another person.
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text63">
                Sharing Your Information as Permitted by Law.
              </span>
              <span>
                {' '}
                We may share your information with others as required by, or
                permitted by, law. This may include sharing your information
                with government entities, or third parties in response to
                subpoenas, court orders, other legal process, or as we believe
                is necessary to exercise our legal rights, to defend against
                legal claims that have been brought against us, or to defend
                against possible legal claims that we determine in our sole
                discretion might be brought against us.
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text68">
                Blogs, Online Postings, and Testimonials.
              </span>
              <span>
                {' '}
                We may decide to allow users to share comments, postings,
                testimonials, or other information. If you choose to submit such
                information to us, the information that you submit may be
                available generally to the public. Information that you provide
                in these areas may be read, collected, and used by others who
                access them.
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text73">Business Transaction.</span>
              <span>
                {' '}
                In the event that we, or any portion of our assets, are acquired
                or we undergo another transaction in our business, your
                information may be transferred to the acquiring company or other
                entity surviving such a transaction.
              </span>
              <br></br>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="priv-pol-text78">Other Third Parties</span>
              <span>
                . We may share non-personal information with other third
                parties. When we do so we may aggregate or de-identify the
                information so that a third party would not be likely to link
                data to you, your computer, or your device. Aggregation means
                that we combine the non-personal information of numerous people
                together so that the data does not relate to any one person.
                De-identify means that we attempt to remove or change certain
                pieces of information that might be used to link data to a
                particular person.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="priv-pol-container18">
            <span className="priv-pol-text82">
              Managing Your Privacy Through Your User Profile
            </span>
            <span>
              We provide you with the ability to exercise certain controls and
              choices regarding how we collect, use and share your personal
              information. By changing your User Profile or contacting us as
              described within this Privacy Policy, you may do the following:
              (1) You may correct, update and delete your registration account;
              (2) You may change your choices for subscriptions, newsletters and
              alerts; (3) You may choose whether to receive offers and
              promotions for our products and services, or products and services
              that we think may be of interest to you; (4) You may choose
              whether we share your contact information with partners so they
              can send you offers and promotions about their products and
              services; (5) You may choose whether to receive interest-based
              advertising; and (6) You may request access to the personal
              information we hold about you and that we amend or delete it and
              we request partners with whom we have shared the information do
              the same. Some web browsers and devices permit you to broadcast a
              preference that you not be “tracked” online. At this time we do
              not modify your experience based upon whether such a signal is
              broadcast.
            </span>
          </div>
          <div className="priv-pol-container19">
            <span className="priv-pol-text84">Security Measures</span>
            <span>
              Flamingo Tissue takes reasonable and appropriate measures to
              secure your personal information once we receive it, and to help
              prevent it from being disclosed to individuals who are not
              described in this policy. While we follow reasonable procedures to
              try to protect the information in our possession, no security
              system is perfect, and we cannot guarantee, and you should not
              expect, that your information will remain secure in all
              circumstances.
            </span>
          </div>
          <div className="priv-pol-container20">
            <span className="priv-pol-text86">
              Notice to California Residents
            </span>
            <span>
              <span>
                If you are a California resident, California Civil Code Section
                1798.83 permits you to request a notice regarding the disclosure
                of your personal information by Flamingo Tissue to partners for
                the partners&apos; direct marketing purposes. If you are a
                California resident and would like a copy of this notice, please
                submit a written request to the following address:
              </span>
              <br></br>
              <br></br>
              <span>Flamingo Paper Products, Inc.</span>
              <br></br>
              <span>P.O. Box 561</span>
              <br></br>
              <span>Salt Lake City, UT 84054</span>
            </span>
          </div>
          <div className="priv-pol-container21">
            <span className="priv-pol-text96">Children</span>
            <span>
              Flamingo Tissue is committed to protecting the online privacy of
              children and making the internet safe. We do not provide products
              and services to children, or knowingly collect or solicit personal
              information from children under 18 years of age. Any communication
              we get that is identified as being from a child under 18 will not
              be kept by Flamingo Tissue. We encourage parents or guardians of
              children under 18 to regularly check and monitor their children’s
              use of email and other activities online.
            </span>
          </div>
          <div className="priv-pol-container22">
            <span className="priv-pol-text98">
              Changes to the Privacy Policy
            </span>
            <span>
              We reserve the right to modify or amend this policy at any time by
              posting the revised privacy policy on our website. Material
              changes will only affect the information we collect after the
              effective date of the change to our privacy policy unless we
              clearly express otherwise.
            </span>
          </div>
        </div>
      </div>
      <div className="priv-pol-container23">
        <div className="priv-pol-container24">
          <span className="priv-pol-text100">Information</span>
          <Link to="/faqs" className="priv-pol-navlink23">
            FAQs
          </Link>
          <Link to="/legal-agg" className="priv-pol-navlink24">
            Legal Agreement
          </Link>
          <Link to="/about" className="priv-pol-navlink25">
            About Flamingo
          </Link>
          <Link to="/mgt" className="priv-pol-navlink26">
            Management
          </Link>
          <Link to="/delivery-info" className="priv-pol-navlink27">
            Delivery Information
          </Link>
          <Link to="/priv-pol" className="priv-pol-navlink28">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="priv-pol-navlink29">
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="priv-pol-container25">
          <span className="priv-pol-text101">Customer Service</span>
          <Link to="/contact-us" className="priv-pol-navlink30">
            Contact Us
          </Link>
          <a
            href="https://web.archive.org/web/20180825010204/https://flamingotissue.com/index.php?route=account/return/add"
            className="priv-pol-link1"
          >
            Returns
          </a>
          <a
            href="https://web.archive.org/web/20180825001909/http://flamingotissue.com/index.php?route=information/sitemap"
            className="priv-pol-link2"
          >
            Site Map
          </a>
        </div>
        <div className="priv-pol-container26">
          <span className="priv-pol-text102">Extras</span>
          <a
            href="https://web.archive.org/web/20180825012304/https://flamingotissue.com/index.php?route=account/voucher"
            className="priv-pol-link3"
          >
            Gift Certificates
          </a>
          <a
            href="https://web.archive.org/web/20181109163624/https://flamingotissue.com/index.php?route=affiliate/login"
            className="priv-pol-link4"
          >
            Affiliates
          </a>
          <Link to="/specials" className="priv-pol-navlink31">
            Specials
          </Link>
        </div>
        <div className="priv-pol-container27">
          <span className="priv-pol-text103">My Account</span>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="priv-pol-link5"
          >
            My Account
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="priv-pol-link6"
          >
            Order History
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="priv-pol-link7"
          >
            Wish List
          </a>
          <a
            href="https://web.archive.org/web/20180824234158/https://flamingotissue.com/index.php?route=account/login"
            className="priv-pol-link8"
          >
            Newsletter
          </a>
        </div>
      </div>
      <div className="priv-pol-container28">
        <div className="priv-pol-container29"></div>
        <span className="priv-pol-text104">
          Copyright © 1965 - 2017 Flamingo Paper Products, Inc. All Rights
          Reserved.
        </span>
      </div>
    </div>
  )
}

export default PrivPol
