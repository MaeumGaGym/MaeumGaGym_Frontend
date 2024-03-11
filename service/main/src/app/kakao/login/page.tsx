'use client'

import { useEffect } from 'react'

export default function KakaoLogin() {
  let url = ''
  useEffect(() => {
    url = window.location.href
    if (url) {
      opener?.postMessage({
        token: url.match(/code=([^&]*)/)?.[1],
        type: 'kakao',
      }, 'http://localhost:3000')
      window.close()
    }
  }, [])

  return <p>{url}</p>
}
