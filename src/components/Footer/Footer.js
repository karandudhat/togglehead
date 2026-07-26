import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top-line"></div>

      <img
        src="/earth.png"
        alt=""
        className="footer-earth"
        aria-hidden="true"
      />

      <div className="footer-container">
        <div className="footer-col footer-contact">
          <h3 className="footer-col-title">Contact us</h3>

          <ul className="contact-list">
            <li>
              <strong>Address:</strong> amet, consetetur sadipscing elitr, sed
              diam
            </li>

            <li>
              <strong>Email id:</strong> eirmod tempor invidunt ut labore et
              dolore
            </li>

            <li>
              <strong>Phone no:</strong> 123456789
            </li>
          </ul>
        </div>

        <div className="footer-col footer-follow">
          <h3 className="footer-col-title">Follow us</h3>

          <div className="social-icons">
            {/* Facebook */}
            <a
              href="#facebook"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H9v3h2.4v8h3.1Z" />
              </svg>
            </a>

            {/* LinkedIn - Matching Reference */}
            <a
              href="#linkedin"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <svg
                className="linkedin-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* White LinkedIn Box */}
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="1.5"
                  fill="currentColor"
                />

                {/* Small dark blue "in" */}
                <rect x="6.2" y="10" width="2.3" height="7" fill="#092852" />

                <circle cx="7.35" cy="7.2" r="1.25" fill="#092852" />

                <path
                  d="M11 10h2.2v1c.5-.7 1.3-1.3 2.7-1.3
      2.5 0 3.3 1.6 3.3 3.8V17H17v-3.2
      c0-1.3 0-2.8-1.7-2.8s-2 1.3-2 2.8V17H11v-7Z"
                  fill="#092852"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#instagram"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#twitter" className="social-icon-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 5.92c-.77.34-1.6.57-2.46.67a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.72 1.04A4.26 4.26 0 0 0 11.78 8.2c0 .33.04.66.11.97A12.1 12.1 0 0 1 3.1 4.7a4.25 4.25 0 0 0 1.32 5.68 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2.8 18.95 12.06 12.06 0 0 0 9.34 20.87c7.85 0 12.14-6.5 12.14-12.14 0-.18 0-.37-.01-.55a8.67 8.67 0 0 0 2.13-2.26Z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#youtube" className="social-icon-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z" />
                <path d="m9.8 15.4 5.8-3.4-5.8-3.4v6.8Z" fill="#092852" />
              </svg>
            </a>

            {/* Quora */}
            <a href="#quora" className="social-icon-btn" aria-label="Quora">
              <span className="quora-letter">Q</span>
            </a>
          </div>
        </div>

        {/* ===================================================
            HEAD OFFICE
        ==================================================== */}

        <div className="footer-col footer-office">
          <h3 className="footer-col-title">Head Office</h3>

         <ul className="head-office-list">

  {/* Location */}
  <li>
    <svg
      className="office-icon location-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.5C7.86 2.5 4.5 5.86 4.5 10c0 5.25 7.5 11.5 7.5 11.5S19.5 15.25 19.5 10C19.5 5.86 16.14 2.5 12 2.5Z" />
      <circle cx="12" cy="10" r="2.8" fill="#092852" />
    </svg>

    <span>
      Lorem ipsum dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut
    </span>
  </li>


  {/* Clock 1 */}
  <li>
    <svg
      className="office-icon clock-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path
        d="M12 7.5V12L15 14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V3.5"
        strokeLinecap="round"
      />
    </svg>

    <span>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
    </span>
  </li>


  {/* Clock 2 */}
  <li>
    <svg
      className="office-icon clock-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path
        d="M12 7.5V12L15 14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V3.5"
        strokeLinecap="round"
      />
    </svg>

    <span>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr
    </span>
  </li>


  {/* Bus */}
  <li>
    <svg
      className="office-icon bus-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {/* Bus Body */}
      <rect
        x="4"
        y="3"
        width="16"
        height="16"
        rx="2"
      />

      {/* Windows */}
      <rect
        x="6"
        y="5"
        width="12"
        height="5"
        rx="1"
        fill="#092852"
      />

      {/* Middle Line */}
      <rect
        x="4"
        y="11"
        width="16"
        height="1.5"
        fill="#092852"
      />

      {/* Wheels */}
      <circle cx="7" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />

      {/* Window Divider */}
      <rect
        x="11.25"
        y="5"
        width="1.5"
        height="5"
        fill="#092852"
      />
    </svg>

    <span>
      Lorem Ipsum asd osdsaweeq Lorem Ipsum
    </span>
  </li>

</ul>
        </div>
      </div>

      {/* =====================================================
          BOTTOM COPYRIGHT BAR
      ====================================================== */}

      <div className="footer-bottom-bar">
        <p>
          © 2021 All Rights Reserved.
          <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
