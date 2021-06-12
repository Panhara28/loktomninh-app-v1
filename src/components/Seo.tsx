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
    <title>{title ? title + " | Loktomninh.com" : "Loktomninh.com"}</title>
    <meta
      name="description"
      content={
        description ||
        "loktomninh is start up selling product online platform in Cambodia."
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
      content={title + " | loktomninh.com"}
    />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta property="og:image" content={`${image}`} />
    )}
    <meta property="og:site_name" content="loktomninh.com" />
    <meta
      property="og:url"
      content={`${canonical ? canonical : "loktomninh.com"}`}
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@loktomninh.com" />
    <meta name="twitter:creator" content="@loktomninh.com" />
    {image && <meta name="twitter:image" content={`${image}`} />}

    {canonical && (
      <link
        rel="canonical"
        href={`${canonical ? canonical : "loktomninh.com"}`}
      />
    )}
  </Head>
);
