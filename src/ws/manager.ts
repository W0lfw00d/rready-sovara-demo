// WebSocket connection manager
// Heartbeat interval management
export function startHeartbeat(ws: WebSocket, interval = 30000) {
  return setInterval(() => ws.ping(), interval);
}
