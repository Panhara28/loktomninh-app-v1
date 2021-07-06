import React from "react";
import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  image,
}) => (
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="bonik" />
    <meta name="application-name" content="bonik" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <title>{title ? title + " | Loktomninh.com" : "Loktomninh.com"}</title>
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta property="og:image" content={`${image}`} />
    )}
    <meta
      name="description"
      content={
        description ||
        `  
        Loktomninh is a start up online store platform that offers a wide range of
        products for the needs of customers in Cambodia. You can
        easily purchase your order using our App. loktomninh buy your
        product here.`
      }
    />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content={title ? title + " | Loktomninh.com" : "Loktomninh.com"}
    />
    <meta
      name="og:description"
      property="og:description"
      content={
        description ||
        `  
      Loktomninh is a start up online store platform that offers a wide range of
      products for the needs of customers in Cambodia. You can
      easily purchase your order using our App. loktomninh buy your
      product here.`
      }
    />

    <meta property="og:site_name" content="loktomninh.com" />
    <meta
      property="og:url"
      content={`${canonical ? canonical : "loktomninh.com"}`}
    />

    {canonical && (
      <link
        rel="canonical"
        href={`${canonical ? canonical : "loktomninh.com"}`}
      />
    )}
  </Head>
);
