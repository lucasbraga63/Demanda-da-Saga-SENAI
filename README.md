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

## 🖥️ Detalhamento das Telas e Fluxo de Navegação

Abaixo está o descritivo de como o sistema funcionará na prática, detalhando a jornada do usuário em cada interface do site:

### 1. Tela de Início (Home)
**Como vai funcionar:**
Esta é a vitrine da vidraçaria. O foco aqui é passar credibilidade e direcionar o cliente rapidamente para o que ele precisa.
* **Banner Principal:** Um carrossel com fotos de projetos finalizados (fachadas, boxes, espelhos decorativos) com um botão claro de "Faça seu Orçamento" ou "Compre Agora".
* **Categorias de Produtos:** Ícones ou cards dividindo os serviços (Ex: Box para Banheiro, Janelas, Portas, Espelhos, Vidros Sob Medida). 
* **Index do Produto (Acesso Rápido):** Ao clicar em uma categoria, o usuário é direcionado para a página do produto específico, onde ele poderá ver mais fotos, especificações técnicas (espessura ideal, normas de segurança) e iniciar a personalização.
* **Rodapé:** Informações de contato, redes sociais, CNPJ e endereço físico.

### 2. Tela de Login e Cadastro (Tela Única)
**Como vai funcionar:**
Para evitar que o usuário mude de página e abandone o site, o Login e o Cadastro ocorrerão na mesma tela, divididos lado a lado (em telas maiores) ou por abas (em celulares).
* **Área de Login (Já sou cliente):** Campos simples para E-mail e Senha, com opção de "Esqueci minha senha".
* **Área de Cadastro (Novo por aqui):** Formulário rápido e objetivo pedindo apenas o essencial para a compra: Nome completo, E-mail, Telefone (WhatsApp) e criação de Senha.
* **Comportamento:** Ao tentar finalizar uma compra sem estar logado, o sistema abrirá um *pop-up* (modal) ou redirecionará para esta tela. Após logar ou cadastrar, o usuário volta automaticamente de onde parou.

### 3. Tela de Compras (Personalização e Checkout)
**Como vai funcionar:**
Esta é a tela mais importante do sistema, dividida em duas etapas para garantir que não haja erros na produção:

* **Etapa A: Configuração do Produto**
  O cliente define os detalhes da sua peça:
  * Inserção de **Medidas** (Altura e Largura em milímetros ou centímetros).
  * Seleção do **Tipo de Vidro** (Temperado, Laminado, Comum) e Cor (Incolor, Fumê, Verde).
  * Escolha do **Tipo de Modelo/Corte** (Lapidado, Bisotê, Cantos Moeda).
  * Definição da **Quantidade**.
  * O sistema calcula o preço em tempo real conforme as opções escolhidas.

* **Etapa B: Formulário de Conferência e Confirmação (Check-out)**
  * Assim que o cliente clica em "Finalizar Compra", a tela exibe um resumo gigante e detalhado (O Formulário de Conferência).
  * Ele revisará: *O tipo de vidro, modelo, medidas exatas, quantidade, se é projeto personalizado ou padrão, e os 2 endereços de entrega (Ex: endereço de faturamento e endereço da obra).*
  * **Interação:** O cliente deve marcar uma caixa de seleção dizendo *"Confirmo que as medidas e informações acima estão corretas"*.
  * **Caso haja erro:** Haverá um botão "Encontrei um erro". Ao clicar, abre-se um campo para ele relatar o que está errado e corrigir a informação. O pedido é reestruturado. Se for um erro do próprio software ao gerar o resumo, a equipe de desenvolvimento é acionada internamente e a equipe da vidraçaria usa o relato do cliente para corrigir o pedido manualmente.

### 4. Tela de Avaliações
**Como vai funcionar:**
Essa tela serve para criar prova social (atrair novos clientes) e para a vidraçaria medir a qualidade do seu serviço.
* **Acesso:** O cliente acessa através do seu painel de usuário ou por um link enviado no WhatsApp/E-mail após o pedido constar como "Entregue/Instalado".
* **Sistema de Notas:** O cliente poderá avaliar o produto e o atendimento separadamente, usando um sistema de 1 a 5 estrelas.
* **Comentários e Fotos:** Haverá uma área de texto livre para ele relatar a experiência e um botão para "Anexar Foto do Projeto Pronto".
* **Exibição:** As melhores avaliações, junto com as fotos reais tiradas pelos clientes, serão exibidas automaticamente no *Index do Produto* na Tela de Início, ajudando outros usuários a tomarem a decisão de compra.
