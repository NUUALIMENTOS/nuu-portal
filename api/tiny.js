module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;

    if (typeof body === 'string') {
      body = JSON.parse(body);
    }

    const { endpoint, payload } = body || {};

    if (!endpoint || !payload) {
      return res.status(400).json({ error: 'Falta endpoint ou payload' });
    }

    const allowed = [
      'produtos.pesquisa',
      'produto.obter',
      'pedido.incluir',
      'pedidos.pesquisa',
      'pedido.obter',
      'contato.obter',
      'contatos.pesquisa'
    ];

    if (!allowed.includes(endpoint)) {
      return res.status(400).json({ error: 'Endpoint nao permitido: ' + endpoint });
    }

    const form = new URLSearchParams();

    for (const [k, v] of Object.entries(payload)) {
      form.append(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
    }

    form.append('formato', 'json');

    const tinyRes = await fetch('https://api.tiny.com.br/api2/' + endpoint + '.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: form.toString()
    });

    const text = await tinyRes.text();

    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).json({
      error: 'Proxy error',
      detail: err && err.message ? err.message : String(err)
    });
  }
};
