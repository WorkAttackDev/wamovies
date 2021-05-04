import Head from "next/head";
import React from "react";

const MetaTags: React.FC = () => {
  return (
    <Head>
      <title>WorkAttack Movies</title>
      <meta name='title' content='WorkAttack Movies' />
      <meta
        name='description'
        content='Um site catalogo de fimes demostrativo criado pelo WorkAttack Dev Team.'
      />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://workattackangola.com' />
      <meta property='og:title' content='WorkAttack Movies' />
      <meta
        property='og:description'
        content='Um site catalogo de fimes demostrativo criado pelo WorkAttack Dev Team.'
      />
      <meta property='og:image' content='/images/screenshot.png' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://workattackangola.com' />
      <meta property='twitter:title' content='WorkAttack Movies' />
      <meta
        property='twitter:description'
        content='Um site catalogo de fimes demostrativo criado pelo WorkAttack Dev Team.'
      />
      <meta property='twitter:image' content='/images/screenshot.png' />
    </Head>
  );
};

export default MetaTags;
