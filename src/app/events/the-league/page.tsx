'use client';

import React from 'react';
import TheLeague from '@/components/TheLeague';
import Script from 'next/script';

const TheLeaguePage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4CYW9JNJ5Y" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CYW9JNJ5Y');
          `}
        </Script>
      </div>
      <TheLeague />
    </main>
  );
};

export default TheLeaguePage; 