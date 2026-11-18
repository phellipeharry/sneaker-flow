# SneakerFlow - Sistema de Gestão de Calçados e Despachos

Sistema web responsivo para gestão comercial de calçados no atacado por caixas e grades, com controle de pedidos e despachos semanais (sexta-feira), perfil de produtos com variações de cor vinculadas a fotos, cadastro e edição de clientes e fornecedores, painel financeiro com média de lucro semanal/mensal e gerador de listas limpas para WhatsApp.

---

## Como Executar

### Pré-requisitos
* **Node.js 22+** (utiliza o módulo nativo `node:sqlite`, sem necessidade de instalar dependências externas via `npm`).

### Opção 1: Windows (Clique Duplo)
Execute o arquivo `iniciar.bat`. Ele iniciará o servidor e abrirá o navegador em `http://localhost:3000`.

### Opção 2: Terminal / PowerShell
```bash
git clone https://github.com/phellipeharry/sneaker-flow.git
cd sneaker-flow
node server.js
```
Acesse no navegador: `http://localhost:3000` (caso a porta `3000` esteja ocupada, o servidor inicia automaticamente na porta `3001`).

### Acesso via Celular na Rede Local (Wi-Fi)
Ao iniciar, o servidor exibe automaticamente o endereço IPv4 da rede local no terminal (ex.: `http://192.168.x.x:3000`), permitindo testar e utilizar o sistema diretamente pelo navegador do celular conectado ao mesmo Wi-Fi.

> **Banco de dados genérico e privacidade:** Na primeira execução, o sistema cria automaticamente o arquivo local `data/calcados.db` com a estrutura completa e registros genéricos de demonstração. O arquivo `.db` (`-wal` / `-shm`) e os uploads em `public/uploads/` estão no `.gitignore` para garantir que dados reais e pessoais nunca sejam enviados ao repositório.

---

## Principais Funcionalidades

* **Dashboard Financeiro e Lucratividade:** Indicadores de valores a receber, faturamento, lucro líquido real, margem percentual, média de lucro semanal e mensal, demonstrativo detalhado (faturamento bruto, CMV, lucro líquido e caixas despachadas), gráfico em Canvas dos últimos 14 dias (faturamento x lucro) e painel de clientes pendentes com cobrança rápida via WhatsApp.
* **Pedidos e Despachos Semanais:** Agrupamento automático por sexta-feira de despacho, cadastro de pedidos atuais ou anteriores (retroativos já despachados) com atalhos de data, especificação de **Grade Baixa (34-39)** e **Grade Alta (38-43)** por item, sugestão automática de cores cadastradas no produto, edição completa e alternância em 1 clique para status de entrega (`Despachado` / `A Despachar`), pagamento (`Pago` / `Pendente`) e lista (`Lista pendente` / `Lista feita`).
* **Modelos, Perfil do Produto e Variações de Cor:** Catálogo com vitrine interativa nos cards, cadastro de múltiplas variações (**Cor + Foto**) direto na criação do produto, modal completo de **Perfil do Produto** para alternar fotos por cor, editar dados, vincular/trocar fotos, definir foto de capa, acompanhar histórico do último custo e vincular múltiplos fornecedores.
* **Clientes e Fornecedores:** Cadastro, edição completa (incluindo foto/avatar), busca e filtro por tipo, resumo financeiro por cliente e link direto para WhatsApp.
* **Gerador de Lista Inteligente (Apenas Pendentes):** Lista no seletor exclusivamente os pedidos que ainda não tiveram suas listas feitas (`list_generated = 0`), gera resumo limpo e legível com grades `34-39` / `38-43`, valores e chave Pix, e marca automaticamente o pedido como concluído ao copiar, enviar ou clicar em *Marcar como Feita*.
* **Redirecionamento Universal para WhatsApp:** Utiliza `https://api.whatsapp.com/send` de forma síncrona no clique, abrindo o aplicativo nativo no celular (Android/iOS) ou redirecionando para WhatsApp Desktop / WhatsApp Web no computador (inclusive sem número cadastrado, abrindo o seletor de contatos com o texto pronto).
* **Configurações e Limpeza de Exemplos:** Personalização da chave Pix e titular, além de botão em 1 clique para remover os dados fictícios iniciais sem risco de reinserção automática.

---

## Detalhes Técnicos e Acessibilidade (IHC / WCAG AA)

* **Backend:** Node.js (módulo `node:http` nativo + `node:sqlite` em modo WAL, integridade referencial com `PRAGMA foreign_keys = ON` e migrações automáticas seguras de schema).
* **Principais Rotas da API REST:**
  * `GET /api/dashboard?period=...` — KPIs, lucro líquido, médias semanal/mensal, tendência de 14 dias e devedores.
  * `GET/POST /api/orders`, `GET/PUT/DELETE /api/orders/:id` — gestão completa de pedidos com cálculo de custo e lucro.
  * `PATCH /api/orders/:id/toggle-paid`, `toggle-dispatched`, `list-status` — atualização rápida de status.
  * `GET/POST /api/models`, `GET/PUT/DELETE /api/models/:id`, `POST /api/models/:id/variations`, `PUT/DELETE /api/photos/:id` — catálogo, perfil do produto e variações de cor com upload base64 em `public/uploads/`.
  * `GET/POST /api/contacts`, `GET/PUT/DELETE /api/contacts/:id` — clientes e fornecedores.
  * `GET /api/orders/:id/tree-list`, `POST /api/clear-sample-data`, `GET/POST /api/settings`, `GET /api/quick-dates`.
* **Frontend:** HTML5 semântico, Tailwind CSS, JavaScript modular puro, tipografia `Inter` com `tabular-nums`, favicon SVG adaptativo (`prefers-color-scheme`) e interface limpa sem emojis.
* **Acessibilidade e Usabilidade:** Contraste de cores compatível com **WCAG AA**, semântica **WAI-ARIA** (`role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`, `role="dialog"`, `aria-modal`, `role="status"` / `aria-live="polite"`), associação de `<label for="...">`, `aria-label` em ações com ícone, link *skip-to-content*, anéis de foco `:focus-visible`, gerenciamento de foco em modais e suporte a `prefers-reduced-motion`.
