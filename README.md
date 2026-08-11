# 🪟 Sistema de Gestão e Pedidos para Vidraçaria

## 📌 Explicação da Demanda (O Problema)
A empresa apresenta grande dificuldade em desenhar e estruturar projetos personalizados. Atualmente, esse processo é realizado de forma totalmente manual e varia conforme a exigência de cada cliente. 

**Causas e Consequências percebidas:**
- **Lentidão:** A execução manual ocasiona demora na realização dos orçamentos e pedidos.
- **Erro Humano:** Elevado índice de erros na captação dos pedidos, ocasionando atrasos nas entregas.
- **Retrabalho:** Necessidade constante de recalcular orçamentos e refazer ordens de serviço.
- **Prejuízo Financeiro:** Perdas de materiais comprados ou cortados de forma errada (perfis, acessórios e vidros), impactando diretamente o Setor de Compras.

---

## 🎯 Benefícios Esperados
Com a implementação do novo sistema, espera-se alcançar:
- **Redução drástica de perdas:** Evitar a compra de itens errados (perfis e acessórios).
- **Fim do desperdício:** Eliminar o retrabalho na fábrica.
- **Mitigação de erros humanos:** Automação e dupla checagem de dados do pedido.

---

## 💡 A Solução e Funcionalidades (Telas do Sistema)

Para resolver esses problemas, o site da vidraçaria será reestruturado contemplando as seguintes interfaces e fluxos:

### 1. Tela Inicial (Home)
Apresentação da vidraçaria, destaques de serviços prestados e navegação intuitiva para que o usuário encontre o que precisa (box, janelas, espelhos, etc.).

### 2. Tela de Login / Cadastro
Área para o cliente se identificar, consultar o histórico de orçamentos, acompanhar o status dos pedidos e salvar seus endereços de entrega.

### 3. Detalhes do Produto (Index do Produto)
Página dedicada a cada produto específico. Ficará aberta ao usuário sempre que ele quiser ver mais detalhes, incluindo fotos, opções de acabamento, e informações técnicas antes de iniciar a compra.

### 4. Tela de Compra (Checkout e Personalização)
Onde o cliente insere as medidas, escolhe o modelo e preenche os dados do pedido.

### 5. Formulário de Conferência e Confirmação do Pedido ⚠️ *(Core da Solução)*
Assim que o cliente for finalizar a compra, para evitar qualquer erro de digitação ou interpretação, ele receberá um formulário contendo o resumo exato da ordem de serviço:
- **Tipo de vidro**
- **Tipo de modelo (corte/acabamento)**
- **Medidas exatas**
- **Quantidade**
- **Status de Personalização** (Se é projeto personalizado ou padrão)
- **Endereços:** Confirmação de 2 endereços de entrega (se aplicável).

Neste formulário, o cliente deve **confirmar** todas as informações. Caso identifique alguma inconsistência, ele deverá relatar o erro no próprio formulário e enviá-lo de volta para correção.

### 6. Tela de Avaliações
Após a entrega do produto, o cliente poderá avaliar o serviço e o material, gerando prova social para os próximos compradores.

---

## 🔄 Fluxo de Resolução e Casos de Uso

### Caso 1: Pedido Correto ✅
Se o formulário for conferido e não apresentar erros, o pedido segue o fluxo normal para o setor de compras e produção.

### Caso 2: Pedido com Erro Apontado ❌
Se o cliente relatar algum erro:
1. O pedido é pausado.
2. O sistema reestrutura a ordem de serviço com as informações corretas apontadas pelo cliente.

### 🛠️ Procedimento em Caso de Falha de Software
Se o software apresentar alguma falha na reestruturação do pedido (bug):
1. O funcionário da vidraçaria abrirá diretamente o formulário preenchido pelo cliente para localizar o erro.
2. O funcionário reportará a falha técnica diretamente aos desenvolvedores, garantindo que o cliente não seja prejudicado pelo erro do sistema.
