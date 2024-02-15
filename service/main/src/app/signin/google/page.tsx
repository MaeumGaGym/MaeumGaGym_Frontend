'use client'

import { useEffect } from 'react'

export default function GoogleLogin() {
  let url = ''
  useEffect(() => {
    url = window.location.href
    if (url) {
      opener.postMessage(url.slice(49, 264), 'http://localhost:3000')
      window.close()
    }
  }, [])

  return <p>{url}</p>
}
