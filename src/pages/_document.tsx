import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Christian values in a benefits plan you can trust." />
        {/* Google Fonts: Montserrat and Lora */}
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <title>Imago Dei Insurance Advisors</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}