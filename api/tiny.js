module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch(e) { return res.status(400).json({ error: 'Invalid JSON' }); }
  }

  const { endpoint, payload } = body || {};
  if (!endpoint || !payload) return res.status(400).json({ error: 'Falta endpoint ou payload' });

  const ALLOWED = ['produtos.pesquisar','produto.obter','pedido.incluir','pedidos.pesquisar','pedido.obter','contato.obter','contatos.pesquisar'];
  if (!ALLOWED.includes(endpoint)) return res.status(400).json({ error: 'Endpoint nao permitido' });

  try {
    const form = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => form.append(k, typeof v === 'object' ? JSON.stringify(v) : String(v)));
    form.append('formato', 'json');

    // Tenta nova URL (Olist) primeiro, depois URL antiga (Tiny)
    const urls = [
      'https://api.tiny.com.br/api2/' + endpoint + '.php',
      'https://erp.olist.com/api2/' + endpoint + '.php'
    ];

    let data, lastText;
    for (const url of urls) {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString()
      });
      lastText = await r.text();
      try {
        data = JSON.parse(lastText);
        break;
      } catch(e) {
        data = null;
      }
    }

    if (!data) return res.status(502).json({ error: 'TINY retornou: ' + lastText });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
