import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

import * as facebookPixelHelper from './facebookPixelHelper'

export const FacebookPixelScript = () => {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!loaded) {
      return
    }

    facebookPixelHelper.pageview()
  }, [pathname, loaded])

  return (
    <div>
      <Script
        id='fb-pixel'
        src='/scripts/facebookPixel.js'
        strategy='afterInteractive'
        onLoad={() => setLoaded(true)}
        data-pixel-id={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}
      />
    </div>
  )
}
