'use client'

import { isLocal } from '@/utils'
import { useEffect } from 'react'

export default function GoogleLogin() {
  let url = ''
  const origin = isLocal() ? 'http://localhost:3000' : 'https://maeumgagym-main-stag.xquare.app'
  useEffect(() => {
    url = window.location.href
    if (url) {
      opener?.postMessage(
        {
          token: url.match(/access_token=([^&]*)/)?.[1],
          type: 'google',
        },
        origin
      )
      window.close()
    }
  }, [])

  return <p>{url}</p>
}
