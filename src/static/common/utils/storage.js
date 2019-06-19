import Cookies from 'js-cookie'

export function setCookie(key, value) {
  return Cookies.set(key, value)
}

export function getCookie(key) {
  return Cookies.get(key)
}

export function clearCookie(key) {
  return Cookies.remove(key)
}
