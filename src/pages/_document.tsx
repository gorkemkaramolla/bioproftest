import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='overflow-x-hidden'>
      <Head />
      <body className='text-gray-700  font-sans bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
