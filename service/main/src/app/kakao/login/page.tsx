'use client'

import { isLocal } from '@/utils'
import { useEffect } from 'react'

export default function KakaoLogin() {
  let url = ''
  const origin = isLocal() ? 'http://localhost:3000' : 'https://maeumgagym-main-stag.xquare.app'
  useEffect(() => {
    url = window.location.href
    if (url) {
      opener?.postMessage(
        {
          token: url.match(/code=([^&]*)/)?.[1],
          type: 'kakao',
        },
        origin
      )
      window.close()
    }
  }, [])

  return <p>{url}</p>
}
