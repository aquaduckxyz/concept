import React from 'react';
import Head from 'next/head';

const SITE_ROOT = 'https://' + (process.env.VERCEL_URL || 'concept.aquaduck.xyz');

const Meta = () => {
  return (
    <Head>
      {/* 
        <!-- HTML Meta Tags --> */}
      <title>AQUADUCK</title>
      <meta
        name="description"
        content="A x-chain bridge platform supporting the XRP Ledger and the EVM Sidechain"
      />
      <meta name="msapplication-TileColor" content="#000000" />

      {/*         <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={`${SITE_ROOT}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="AQUADUCK" />
      <meta
        property="og:description"
        content="A x-chain bridge platform supporting the XRP Ledger and the EVM Sidechain"
      />
      <meta property="og:image" content={`${SITE_ROOT}/og-image.png`} />

      {/*         <!-- Twitter Meta Tags --> */}
      <meta name="twitter:site" content="@aquaduckxyz" />
      <meta name="twitter:creator" content="@aquaduckxyz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={`${SITE_ROOT}`} />
      <meta property="twitter:url" content={`${SITE_ROOT}`} />
      <meta name="twitter:title" content="AQUADUCK" />
      <meta
        name="twitter:description"
        content="A x-chain bridge platform supporting the XRP Ledger and the EVM Sidechain"
      />
      <meta name="twitter:image" content={`${SITE_ROOT}/og-image.png`} />
    </Head>
  );
};

export default Meta;
