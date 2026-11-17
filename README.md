# SneakerFlow - Sistema de Gestão de Calçados e Despachos

Sistema web para gestão comercial de calçados, com controle de pedidos e despachos semanais (sexta-feira), cadastro e edição de clientes e fornecedores, catálogo de modelos com fotos e histórico de custos, painel financeiro com média de lucro semanal/mensal e gerador de listas formatadas para WhatsApp.

---

## Como Executar

### Pré-requisitos
* Node.js 22+ (utiliza o módulo nativo `node:sqlite`, sem necessidade de instalar dependências externas).

### Opção 1: Windows (Clique Duplo)
Execute o arquivo `iniciar.bat`. Ele iniciará o servidor e abrirá o navegador em `http://localhost:3000`.

### Opção 2: Terminal / PowerShell
```bash
git clone https://github.com/phellipeharry/sneaker-flow.git
cd sneaker-flow
node server.js
```
Acesse no navegador: `http://localhost:3000`

> **Banco de dados genérico:** Na primeira execução, o sistema cria automaticamente o arquivo local `data/calcados.db` com a estrutura completa e registros genéricos de demonstração. O arquivo `.db` e a pasta `public/uploads/` estão no `.gitignore` para garantir que dados reais e pessoais nunca sejam enviados ao repositório.

---

## Principais Funcionalidades

* **Dashboard Financeiro:** Indicadores de valores a receber, faturamento, lucro líquido real, margem percentual, média de lucro semanal e mensal, demonstrativo detalhado (receita, CMV e lucro), gráfico de evolução dos últimos 14 dias e painel de devedores com cobrança via WhatsApp.
* **Pedidos e Despachos Semanais:** Agrupamento automático por sexta-feira de despacho, cadastro de pedidos anteriores (retroativos já despachados), edição completa de pedidos e alternância rápida em 1 clique para status de despacho (`Despachado` / `A Despachar`) e pagamento (`Pago` / `Pendente`).
* **Modelos, Custos e Fotos:** Catálogo de calçados com upload de fotos organizadas por modelo, cor e cano, controle do último preço de custo com data de alteração e vinculação de múltiplos fornecedores.
* **Clientes e Fornecedores:** Cadastro, edição, busca e filtro de contatos com foto/avatar, histórico financeiro e link direto para WhatsApp.
* **Gerador de Lista:** Montagem automática de resumo estruturado em árvore ASCII com totais de caixas, valores e chave Pix pronta para copiar ou enviar via WhatsApp.
* **Configurações e Banco Local:** Personalização da chave Pix e opção de limpeza em 1 clique dos dados iniciais de exemplo.

---

## Tecnologias Utilizadas
* **Backend:** Node.js (HTTP nativo + `node:sqlite` em modo WAL)
* **Frontend:** HTML5, Tailwind CSS e JavaScript puro
