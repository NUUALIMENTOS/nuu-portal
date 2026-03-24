module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { endpoint, payload } = req.body;
  const ALLOWED = ['produtos.pesquisar','produto.obter','pedido.incluir','pedidos.pesquisar','pedido.obter','contato.obter','contatos.pesquisar'];
  if (!ALLOWED.includes(endpoint)) return res.status(400).json({ error: 'Endpoint not permitido' });
  try {
    const form = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => form.append(k, typeof v === 'object' ? JSON.stringify(v) : v));
    form.append('formato', 'json');
    const tinyRes = await fetch('https://api.tiny.com.br/api2/' + endpoint + '.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form.toString() });
    return res.status(200).json(await tinyRes.json());
  } catch (err) { return res.status(500).json({ error: err.message }); }
};
