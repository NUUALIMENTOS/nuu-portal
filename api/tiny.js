module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON' });
    }
  }

  const { endpoint, payload } = body || {};
  if (!endpoint || !payload) {
    return res.status(400).json({ error: 'Falta endpoint ou payload' });
  }

  const ALLOWED = [
    'produtos.pesquisa',
    'produto.obter',
    'pedido.incluir',
    'pedidos.pesquisa',
    'pedido.obter',
    'contato.obter',
    'contatos.pesquisa'
  ];

  if (!ALLOWED.includes(endpoint)) {
    return res.status(400).json({ error: 'Endpoint nao permitido: ' + endpoint });
  }

  try {
    const form = new URLSearchParams();

    Object.entries(payload).forEach(([k, v]) => {
      form.append(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
    });

    form.append('formato', 'json');

    const tinyRes = await fetch('https://api.tiny.com.br/api2/' + endpoint + '.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    });

    const text = await tinyRes.text();

    try {
      return res.status(200).json(JSON.parse(text));
    } catch (e) {
      return res.status(502).json({ error: 'TINY retornou: ' + text });
    }
  } catch (err) {
    console.error('ERRO /api/tiny:', err);
    return res.status(500).json({ error: String(err && err.message ? err.message : err) });
  }
};
