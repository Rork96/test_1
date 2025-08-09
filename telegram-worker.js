/*
  Cloudflare Worker to forward contact form submissions to a Telegram bot.

  This worker expects POST requests with a JSON body containing
  { name, email, message } fields.  It constructs a message and
  sends it to the Telegram Bot API.  Keep your bot token and chat
  ID secret by adding them as environment variables when deploying
  the worker (e.g. using Wrangler):

  wrangler secret put BOT_TOKEN
  wrangler secret put CHAT_ID

  The client-side form should post to your worker endpoint with
  a JSON payload.  In this portfolio, the worker URL can be set
  in `index.html` as TELEGRAM_WEBHOOK.  If TELEGRAM_WEBHOOK is
  defined, the contact form will send a JSON request instead of
  using Formspree.
*/
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  try {
    const { name, email, message } = await request.json();
    const BOT_TOKEN = BOT_TOKEN_SECRET; // replace via worker secret
    const CHAT_ID = CHAT_ID_SECRET;     // replace via worker secret
    if (!BOT_TOKEN || !CHAT_ID) {
      return new Response('Bot token or chat ID not set', { status: 500 });
    }
    const text = `New message from portfolio\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });
    if (!res.ok) {
      const err = await res.text();
      return new Response('Telegram API error: ' + err, { status: 500 });
    }
    return new Response('Message sent', { status: 200 });
  } catch (err) {
    return new Response('Error: ' + err.message, { status: 500 });
  }
}