// pages/index.js
export default function Home() {
  return (
    <div style={{
      fontFamily: 'system-ui',
      padding: '40px',
      background: '#0F0F0F',
      color: '#F5E6D3',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#CE3D1F' }}>🤖 Bot Orchestrator v1.0</h1>
      <p>20 bots para RR ALIADOS S.A.S.</p>
      
      <div style={{ background: '#3F0035', padding: '20px', borderRadius: '8px' }}>
        <h2>🔗 API Endpoints</h2>
        <ul>
          <li><code>/api/hermes?bot=cajero&action=check_runway</code></li>
          <li><code>/api/openclaw</code> (POST)</li>
          <li><code>/api/health</code></li>
        </ul>
      </div>
    </div>
  );
}