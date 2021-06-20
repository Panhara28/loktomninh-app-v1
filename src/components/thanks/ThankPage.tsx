import Link from "next/link";
import React from "react";

export function ThankPage() {
  return (
    <div className="view">
      <div className="container">
        <img
          className="thankYou"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82974/yep.png"
        />
        <p className="tagline">
          Wahoo! Thanks for purchase our products. We will contact you soon by
          your phone number. Keep looking for our products in our website and
          app.
        </p>
      </div>
      <div className="actions">
        <Link href="/">
          <a className="button">Go Shopping</a>
        </Link>
        <p className="description">
          "Loktomninh bringing more product into Cambodia."
        </p>
      </div>
    </div>
  );
}
