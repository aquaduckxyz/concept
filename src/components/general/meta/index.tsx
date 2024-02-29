//------------------------------------------------------------------------------
/*

    This file is part of the Crossmark Application: 
    https://github.com/crossmarkio/core

    Copyright (c) 2024, Crossmark International Inc.

    This file is distributed under a non-disclosure aggreement (NDA). This 
    permission notice is to remain unaltered and appear in all copies.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby DENIED.

    THE  SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH  REGARD  TO  THIS  SOFTWARE  INCLUDING  ALL  IMPLIED  WARRANTIES  OF
    MERCHANTABILITY  AND  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY  SPECIAL ,  DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER  RESULTING  FROM  LOSS  OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION  OF  CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/
//==============================================================================

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
