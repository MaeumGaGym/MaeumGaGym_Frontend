export const getCookie = (name: string) => {
  if (typeof window !== 'object') return
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)')
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}`
}

export const cleanCookie = (name: string) => {
  document.cookie = ''
}
