// WebSocket connection manager
// Heartbeat interval management
export function startHeartbeat(ws: WebSocket, interval = 30000) {
  return setInterval(() => ws.ping(), interval);
}
// Reconnection logic with exponential backoff
export function reconnect(url: string, attempt = 0) {
  const delay = Math.min(1000 * Math.pow(2, attempt), 30000);
  setTimeout(() => new WebSocket(url), delay);
}
