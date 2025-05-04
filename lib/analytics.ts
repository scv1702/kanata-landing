"use client"

// Define Google Analytics event types
export type GAEventType = "enroll" | "scroll" | "email_submit"

// Function to send events to Google Analytics
export function sendGAEvent(eventType: GAEventType, eventParams?: Record<string, string | number | boolean>) {
  // Check if window and gtag are available (client-side)
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag is added by the GA script
    window.gtag("event", eventType, eventParams)
    console.log(`GA Event sent: ${eventType}`, eventParams)
  }
}

// Track enrollment clicks
export function trackEnrollClick(source: string) {
  sendGAEvent("enroll", {
    source,
    timestamp: new Date().toISOString(),
  })
}

// Track scroll depth
export function initScrollTracking() {
  if (typeof window === "undefined") return

  const scrollDepths = [25, 50, 75, 90]
  const scrollDepthsReached: number[] = []

  const calculateScrollPercentage = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0
  }

  const handleScroll = () => {
    const scrollPercentage = calculateScrollPercentage()

    scrollDepths.forEach((depth) => {
      if (scrollPercentage >= depth && !scrollDepthsReached.includes(depth)) {
        scrollDepthsReached.push(depth)
        sendGAEvent("scroll", {
          scroll_depth: depth,
          page_url: window.location.href,
          timestamp: new Date().toISOString(),
        })
      }
    })
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}

// Track email submission
export function trackEmailSubmit(email: string) {
  sendGAEvent("email_submit", {
    email_domain: email.split("@")[1] || "unknown",
    timestamp: new Date().toISOString(),
  })
}
