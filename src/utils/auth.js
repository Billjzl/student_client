const TokenKey = "Admin-Token";

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
}

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
}
