"use client"

import Script from "next/script"
import { useEffect } from "react"
import { initScrollTracking } from "@/lib/analytics"

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = process.env.GOOGLE_ANALYTICS_ID

export function GoogleAnalytics() {
  // Initialize scroll tracking when component mounts
  useEffect(() => {
    const cleanupScrollTracking = initScrollTracking()

    // Cleanup event listener when component unmounts
    return () => {
      if (cleanupScrollTracking) cleanupScrollTracking()
    }
  }, [])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
