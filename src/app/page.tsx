import HomeContent from '@/components/HomeContent'
import Script from 'next/script'

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    <HomeContent/>
    </main>
  )
}
