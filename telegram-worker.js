export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Use POST', { status: 405 });
    }
    const data = await request.json().catch(() => ({}));
    const name = data.name || 'Anon';
    const email = data.email || 'N/A';
    const message = data.message || '';
    const text = `📨 New Portfolio Message\n👤 ${name}\n✉️ ${email}\n—\n${message}`;
    const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`;
    const body = { chat_id: env.CHAT_ID, text };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return new Response('Telegram error', { status: 500 });
    }
    return new Response('OK', { status: 200 });
  }
}
