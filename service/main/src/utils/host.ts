export const isLocal = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost'
  }
}
