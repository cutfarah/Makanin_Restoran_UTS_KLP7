'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function MakaninPage() {
  const pathname = usePathname()

  useEffect(() => {
    let active = true
    const mount = async () => {
      // The existing Makanin UI/logic is reused unchanged inside a Next.js page shell.
      // This keeps the UTS UI and frontend behavior identical while moving the app to Next.js.
      if (active) await import('../../src/legacy/main.js')
    }
    mount()
    return () => { active = false }
  }, [pathname])

  return <div id="app" />
}
