
'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from '../lib/ThemeContext'
import SplashScreen from './UI/SplashScreen'
import Navigation from './UI/Navigation'


function PortfolioContent() {
  const [showSplash, setShowSplash] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (!mounted) return null

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <>
          <Navigation />
        </>
      )}
    </>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}

