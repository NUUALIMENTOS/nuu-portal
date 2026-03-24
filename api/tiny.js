<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NUU Alimentos — Portal de Pedidos B2B</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f7f6f2;
      color: #222;
    }
    .hidden { display: none !important; }

    header {
      background: #fff;
      border-bottom: 1px solid #ddd;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      font-size: 20px;
      font-weight: 700;
    }
    .brand span { color: #4b8b1e; }

    .login-wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
    }
    .login-card {
      width: 100%;
      max-width: 420px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 2px 8px rgba(0,0,0,.04);
    }
    .login-card h1 {
      margin: 0 0 6px;
      font-size: 20px;
      text-align: center;
    }
    .login-card p {
      margin: 0 0 24px;
      text-align: center;
      color: #666;
    }
    label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      margin: 14px 0 6px;
      color: #555;
      text-transform: uppercase;
    }
    input {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 14px;
      outline: none;
      background: #fff;
    }
    button {
      cursor: pointer;
      border: none;
      border-radius: 10px;
      padding: 12px 16px;
      font-weight: 700;
      font-size: 14px;
    }
    .btn-primary {
      width: 100%;
      margin-top: 18px;
      background: #3f7e12;
      color: #fff;
    }
    .btn-outline {
      background: #fff;
      border: 1px solid #ccc;
    }
    .helper {
      margin-top: 16px;
      font-size: 12px;
      color: #666;
      line-height: 1.5;
      background: #fafafa;
      border: 1px solid #e7e7e7;
      border-radius: 12px;
      padding: 14px;
    }
    .error {
      margin-top: 14px;
      font-size: 13px;
      color: #b00020;
      white-space: pre-wrap;
    }

    .app {
      min-height: 100vh;
    }
    .topbar-right {
      display: flex;
      gap: 12px;
      align-items: center;
      font-size: 14px;
      color: #666;
    }

    .tabs {
      display: flex;
      gap: 10px;
      padding: 14px 24px 0;
    }
    .tab {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 999px;
      padding: 10px 16px;
      font-size: 14px;
    }
    .tab.active {
      border-color: #3f7e12;
      color: #3f7e12;
      font-weight: 700;
    }

    .layout {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 0;
      padding: 12px 0 0;
      min-height: calc(100vh - 84px);
    }
    .catalog {
      padding: 18px 24px 24px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
    }
    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 16px;
      padding: 16px;
      min-height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .emoji {
      font-size: 28px;
      margin-bottom: 8px;
    }
    .title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .unit {
      font-size: 13px;
      color: #666;
      margin-bottom: 12px;
      text-transform: uppercase;
    }
    .price {
      font-size: 18px;
      font-weight: 700;
      color: #3f7e12;
      margin-bottom: 6px;
    }
    .minqty, .stock {
      font-size: 13px;
      color: #666;
      margin-bottom: 4px;
    }
    .stock.ok {
      color: #3f7e12;
    }
    .sidebar {
      background: #f3f1ec;
      border-left: 1px solid #ddd;
      padding: 20px;
    }
    .sidebar h3 {
      margin-top: 0;
      font-size: 18px;
    }
    .cart-empty {
      color: #777;
      text-align: center;
      padding: 40px 10px;
    }
    .cart-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .cart-item {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 12px;
    }
    .cart-item-title {
      font-weight: 700;
      margin-bottom: 6px;
    }
    .cart-controls {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
    .small-btn {
      width: 32px;
      height: 32px;
      padding: 0;
      border-radius: 8px;
      border: 1px solid #ccc;
      background: #fff;
    }
    .qty {
      min-width: 28px;
      text-align: center;
      font-weight: 700;
    }
    .cart-total {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #ddd;
      font-size: 16px;
      font-weight: 700;
    }
    .toolbar {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }
    .toolbar input {
      max-width: 260px;
    }

    @media (max-width: 1024px) {
      .layout { grid-template-columns: 1fr; }
      .sidebar { border-left: none; border-top: 1px solid #ddd; }
    }
  </style>
</head>
<body>
  <div id="loginView" class="login-wrap">
    <div class="login-card">
      <h1>NUU <span style="color:#4b8b1e;">ALIMENTOS</span></h1>
      <p>Portal de Pedidos B2B</p>

      <label for="token">Token Tiny ERP</label>
      <input id="token" type="text" placeholder="Cole seu token aqui" />

      <label for="cnpj">CNPJ da empresa</label>
      <input id="cnpj" type="text" placeholder="00.000.000/0000-00" />

      <label for="email">E-mail do responsável</label>
      <input id="email" type="email" placeholder="contato@empresa.com.br" />

      <button id="loginBtn" class="btn-primary">Acessar catálogo →</button>

      <div class="helper">
        <strong>Como obter seu token Tiny:</strong> Acesse o Tiny ERP → Configurações → Token de acesso à API. Cole o token acima para sincronizar produtos e enviar pedidos automaticamente.
      </div>

      <div id="loginError" class="error"></div>
    </div>
  </div>

  <div id="appView" class="app hidden">
    <header>
      <div class="brand">NUU <span>ALIMENTOS</span></div>
      <div class="topbar-right">
        <span id="cnpjLabel"></span>
        <button id="logoutBtn" class="btn-outline">Sair</button>
      </div>
    </header>

    <div class="tabs">
      <button class="tab active" data-cat="Todos">Todos</button>
      <button class="tab" data-cat="Produtos">Produtos</button>
    </div>

    <div class="layout">
      <main class="catalog">
        <div class="toolbar">
          <input id="searchInput" type="text" placeholder="Buscar produto" />
        </div>
        <div id="productsGrid" class="grid"></div>
      </main>

      <aside class="sidebar">
        <h3>PEDIDO ATUAL</h3>
        <div id="cartEmpty" class="cart-empty">Nenhum item adicionado</div>
        <div id="cartList" class="cart-list"></div>
        <div id="cartTotal" class="cart-total hidden">Total: R$ 0,00</div>
      </aside>
    </div>
  </div>

  <script>
    const PROXY = '/api/tiny';

    let token = '';
    let cnpj = '';
    let email = '';
    let activeCat = 'Todos';
    let products = [];
    let cart = {};

    const loginView = document.getElementById('loginView');
    const appView = document.getElementById('appView');
    const loginError = document.getElementById('loginError');
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const cnpjLabel = document.getElementById('cnpjLabel');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartList = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');

    function brl(v) {
      return Number(v || 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }

    function saveSession() {
      localStorage.setItem('nuu_portal_session', JSON.stringify({ token, cnpj, email }));
    }

    function loadSession() {
      try {
        const raw = localStorage.getItem('nuu_portal_session');
        if (!raw) return false;
        const data = JSON.parse(raw);
        token = data.token || '';
        cnpj = data.cnpj || '';
        email = data.email || '';
        return !!token;
      } catch {
        return false;
      }
    }

    function clearSession() {
      localStorage.removeItem('nuu_portal_session');
    }

    async function tinyCall(endpoint, payload) {
      const r = await fetch(PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endpoint, payload: { token, ...payload } })
      });

      const text = await r.text();

      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error(text);
      }
    }

    function normalizeProducts(data) {
      console.log('TINY PRODUTOS RAW:', data);

      const rawList = data?.retorno?.produtos || [];

      return rawList.map((item, i) => {
        const p = item?.produto || item || {};

        const nome =
          p.nome ||
          p.descricao ||
          p.descricao_complementar ||
          p.nome_fantasia ||
          'Produto sem nome';

        const preco =
          p.preco ??
          p.preco_venda ??
          p.precoVenda ??
          p.valor ??
          p.valor_venda ??
          0;

        const unidade =
          p.unidade ||
          p.un ||
          p.sigla_unidade ||
          'UN';

        const categoria =
          p.categoria ||
          p.descricao_categoria ||
          'Produtos';

        return {
          id: p.id || p.codigo || p.sku || String(i + 1),
          name: String(nome),
          price: Number(String(preco).replace(',', '.')) || 0,
          unit: String(unidade).toUpperCase(),
          cat: categoria || 'Produtos',
          stock: true,
          minQty: 1,
          image: '📦'
        };
      });
    }

    async function loadProducts() {
      const data = await tinyCall('produtos.pesquisa', {
        pesquisa: '',
        situacao: 'A',
        pagina: 1
      });

      if (data?.erro) {
        throw new Error(data.erro);
      }

      products = normalizeProducts(data);
      renderProducts();
    }

    function getFilteredProducts() {
      const q = searchInput.value.trim().toLowerCase();

      return products.filter(p => {
        const catOk = activeCat === 'Todos' || p.cat === activeCat || activeCat === 'Produtos';
        const searchOk = !q || p.name.toLowerCase().includes(q);
        return catOk && searchOk;
      });
    }

    function renderProducts() {
      const list = getFilteredProducts();

      if (!list.length) {
        productsGrid.innerHTML = '<div style="color:#666;">Nenhum produto encontrado.</div>';
        return;
      }

      productsGrid.innerHTML = list.map(p => `
        <div class="card">
          <div>
            <div class="emoji">${p.image}</div>
            <div class="title">${escapeHtml(p.name)}</div>
            <div class="unit">${escapeHtml(p.unit)}</div>
            <div class="price">${brl(p.price)}</div>
            <div class="minqty">mín. ${p.minQty} unidade</div>
            <div class="stock ok">✓ Disponível</div>
          </div>
          <button class="btn-outline" onclick="addToCart('${String(p.id).replace(/'/g, "\\'")}')">+ Adicionar</button>
        </div>
      `).join('');
    }

    function getProductById(id) {
      return products.find(p => String(p.id) === String(id));
    }

    function addToCart(id) {
      const p = getProductById(id);
      if (!p) return;
      if (!cart[id]) cart[id] = 0;
      cart[id] += 1;
      renderCart();
    }

    function changeQty(id, delta) {
      if (!cart[id]) return;
      cart[id] += delta;
      if (cart[id] <= 0) delete cart[id];
      renderCart();
    }

    function renderCart() {
      const ids = Object.keys(cart);

      if (!ids.length) {
        cartEmpty.classList.remove('hidden');
        cartList.innerHTML = '';
        cartTotal.classList.add('hidden');
        cartTotal.textContent = 'Total: R$ 0,00';
        return;
      }

      cartEmpty.classList.add('hidden');

      let total = 0;

      cartList.innerHTML = ids.map(id => {
        const p = getProductById(id);
        if (!p) return '';
        const qty = cart[id];
        const sub = p.price * qty;
        total += sub;

        return `
          <div class="cart-item">
            <div class="cart-item-title">${escapeHtml(p.name)}</div>
            <div>${brl(p.price)} · ${escapeHtml(p.unit)}</div>
            <div class="cart-controls">
              <button class="small-btn" onclick="changeQty('${String(id).replace(/'/g, "\\'")}', -1)">−</button>
              <div class="qty">${qty}</div>
              <button class="small-btn" onclick="changeQty('${String(id).replace(/'/g, "\\'")}', 1)">+</button>
            </div>
          </div>
        `;
      }).join('');

      cartTotal.classList.remove('hidden');
      cartTotal.textContent = 'Total: ' + brl(total);
    }

    function escapeHtml(str) {
      return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }

    async function doLogin() {
      loginError.textContent = '';

      token = document.getElementById('token').value.trim();
      cnpj = document.getElementById('cnpj').value.trim();
      email = document.getElementById('email').value.trim();

      if (!token) {
        loginError.textContent = 'Cole o token do Tiny.';
        return;
      }

      try {
        await loadProducts();
        saveSession();
        cnpjLabel.textContent = cnpj;
        loginView.classList.add('hidden');
        appView.classList.remove('hidden');
      } catch (err) {
        loginError.textContent = 'Erro ao carregar catálogo:\n' + (err?.message || err);
      }
    }

    function logout() {
      clearSession();
      token = '';
      cnpj = '';
      email = '';
      products = [];
      cart = {};
      document.getElementById('token').value = '';
      document.getElementById('cnpj').value = '';
      document.getElementById('email').value = '';
      appView.classList.add('hidden');
      loginView.classList.remove('hidden');
      renderCart();
    }

    document.getElementById('loginBtn').addEventListener('click', doLogin);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    searchInput.addEventListener('input', renderProducts);

    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.cat || 'Todos';
        renderProducts();
      });
    });

    window.addToCart = addToCart;
    window.changeQty = changeQty;

    if (loadSession()) {
      document.getElementById('token').value = token;
      document.getElementById('cnpj').value = cnpj;
      document.getElementById('email').value = email;
      cnpjLabel.textContent = cnpj;
      loadProducts()
        .then(() => {
          loginView.classList.add('hidden');
          appView.classList.remove('hidden');
        })
        .catch(() => {
          clearSession();
        });
    }
  </script>
</body>
</html>
