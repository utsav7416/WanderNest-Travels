import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.scss";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <section className="intro">
          <h1>Refund Policy</h1>
          <p>
            At WanderNest, we value your travel plans. If changes occur, our
            refund policy ensures a transparent and fair resolution.
          </p>
        </section>

        <section className="testimonials">
          <h2>Cancellation by Customer</h2>
          <ul
            style={{
              textAlign: "left",
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "2",
              fontSize: "1.15rem",
            }}
          >
            <li>✔ Full refunds for cancellations made within 24 hours of booking.</li>
            <li>✔ Partial refunds based on the timing of cancellation and partner policies.</li>
            <li>✘ No refunds for no-shows or late cancellations.</li>
          </ul>

          <h2 style={{ marginTop: "40px" }}>Cancellation by WanderNest</h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "2",
              fontSize: "1.15rem",
            }}
          >
            If WanderNest or our partners need to cancel your booking due to unforeseen
            circumstances, you’ll be offered a full refund or alternate travel options
            at no extra cost.
          </p>

          <h2 style={{ marginTop: "40px" }}>How to Request a Refund</h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "2",
              fontSize: "1.15rem",
            }}
          >
            Reach out to us at <strong>wandernest@support.com</strong> with your booking ID
            and details. Our support team will review your request and process refunds
            within <strong>7–10 business days</strong>.
          </p>
        </section>
      </div>
    </>
  );
};

export default RefundPolicy;
