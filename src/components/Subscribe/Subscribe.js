import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.trim();

    // Validate email
    if (!emailValue) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    // Success
    setError("");
    setSubmitted(true);

    // Clear form after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 4000);
  };

  return (
    <section className="subscribe-section" id="subscribe">
      <div className="subscribe-container">

        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="subscribe-content">

          <h2 className="subscribe-title">Subscribe</h2>

          <p className="subscribe-description">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna
          </p>

          {/* =====================================
              SUBSCRIBE FORM
          ====================================== */}

          <form className="subscribe-form" onSubmit={handleSubmit}>

            <div className="input-group">

              {/* EMAIL INPUT */}
              <input type="email" style={{ borderRadius: "8px", width:"100%", padding: "10px 16px", border: "1px solid #ccc",  }} placeholder="Enter your email" value={email} onChange={(e) => {
                setEmail(e.target.value);

                if (error) {
                  setError("");
                }

                if (submitted) {
                  setSubmitted(false);
                }
              }} />

              {/* SUBSCRIBE BUTTON */}
              <button type="submit" className="subscribe-btn">
                <span>Subscribe Now</span>

                <svg
                  width="9"
                  height="11"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L1.5 1.66987L1.5 10.3301L9 6Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

            </div>

            {/* ERROR MESSAGE */}
            {error && <p className="error-message">{error}</p>}

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p className="success-message">
                Thank you for subscribing! We will keep you updated.
              </p>
            )}

          </form>

        </div>

        {/* =====================================
            RIGHT IMAGE
        ====================================== */}

        <div className="subscribe-graphic-wrapper">
          <img
            src="/subscrib_image1.png"
            alt="Subscribe illustration"
            className="subscribe-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Subscribe;