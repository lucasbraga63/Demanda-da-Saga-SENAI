# 🪟 Sistema de Gestão e Pedidos para Vidraçaria
<a href="https://www.figma.com/design/ZbTOW9FdPPU8OnmRvhsz0h/Untitled?node-id=0-1&t=ixKbmfRZjyeqAccM-1" target="_blank">link para figma</a>

<a href="https://lucasbraga63.github.io/Demanda-da-Saga-SENAI/index.html" target="_blank">link do nosso site solução</a>

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

### Logo da empresa:

<img src="../Demanda-da-Saga-SENAI/FrontEnd/assets/ReadMEAssets/logoEmpresa.png" style="width:200px; heigth: auto;"> 

### 1. Tela de Início (Home)
**Como vai funcionar:**
Esta é a vitrine da vidraçaria. O foco aqui é passar credibilidade e direcionar o cliente rapidamente para o que ele precisa.
* **Banner Principal:** Um carrossel com fotos de projetos finalizados (fachadas, boxes, espelhos decorativos) com um botão claro de "Faça seu Orçamento" ou "Compre Agora".
  
* **Categorias de Produtos:** Ícones ou cards dividindo os serviços (Ex: Box para Banheiro, Janelas, Portas, Espelhos, Vidros Sob Medida).
 
* **Index do Produto (Acesso Rápido):** Ao clicar em uma categoria, o usuário é direcionado para a página do produto específico, onde ele poderá ver mais fotos, especificações técnicas (espessura ideal, normas de segurança) e iniciar a personalização.
  
* **Rodapé:** Informações de contato, redes sociais, CNPJ e endereço físico.

**Representação proxima de como vai ficar:**<br>

<img src="../Demanda-da-Saga-SENAI/FrontEnd/assets/ReadMEAssets/TelaInicial.png" style="width:90%; heigth: auto; border-radius: 7px;">

### 2. Tela de Login e Cadastro (Tela Única)
**Como vai funcionar:**
Para evitar que o usuário mude de página e abandone o site, o Login e o Cadastro ocorrerão na mesma tela, onde erá um @keyframe para fazer a animação da tela de cadastro entrando na frente da tela de login.

* **Área de Login:** Campos simples para E-mail e Senha, com opção de "Esqueci minha senha".
  
* **Área de Cadastro:** Formulário rápido e objetivo pedindo apenas o essencial para a compra: Nome completo, E-mail, Telefone (WhatsApp) e criação de Senha.
  
* **Comportamento:** O cliente só entra e interage com o site quando fizer o login nele

**Representação proxima de como vai ficar:**

<img src="../Demanda-da-Saga-SENAI/FrontEnd/assets/ReadMEAssets/telaLogin.png" style="width:90%; heigth: auto; border-radius: 7px;">

### 3. Tela de Compras
**Como vai funcionar:**
Esta é a tela mais importante do sistema, dividida em duas etapas para garantir que não haja erros na produção:

* **Etapa A: Configuração do Produto**
  O cliente define os detalhes da sua peça:
  
  * Inserção de **Medidas** (Altura e Largura em milímetros ou centímetros).
    
  * Seleção do **Tipo de Vidro** (Temperado, Laminado, Comum) e Cor (Incolor, Fumê, Verde).
    
  * Escolha do **Tipo de Modelo/Corte** (Lapidado, Bisotê, Cantos Moeda).
    
  * Definição da **Quantidade**.
    
  * O sistema calcula o preço em tempo real conforme as opções escolhidas.

* **Etapa B: Formulário de Conferência e Confirmação**
  
  * Assim que o cliente clica em "Finalizar Compra", a tela exibe um resumo gigante e detalhado.
    
  * Ele revisará: *O tipo de vidro, modelo, medidas exatas, quantidade, se é projeto personalizado ou padrão, e os 2 endereços de entrega*
    
  * **Interação:** O cliente deve marcar uma caixa de seleção dizendo *"Confirmo que as medidas e informações acima estão corretas"*.
    
  * **Caso haja erro:** Haverá um botão "Encontrei um erro". Ao clicar, abre-se um campo para ele relatar o que está errado e corrigir a informação. O pedido é reestruturado. Se for um erro do próprio software ao gerar o resumo, a equipe de desenvolvimento é acionada internamente e a equipe da vidraçaria usa o relato do cliente para corrigir o pedido manualmente.

### 4. Tela de Avaliações
**Como vai funcionar:**
Essa tela serve para atrair novos clientes e para a vidraçaria medir a qualidade do seu serviço.

* **Acesso:** O cliente acessa através do menu do site onde ele pode ver todos os feedbacks dos nossos serviços
  
* **Sistema de Notas:** O cliente poderá avaliar o produto e o atendimento separadamente, usando um sistema de 1 a 5 estrelas.
  
* **Comentários e Fotos:** Haverá uma área de texto livre para ele relatar a experiência e um botão para "Anexar Foto do Projeto Pronto".
  
* **Exibição:** As melhores avaliações, junto com as fotos reais tiradas pelos clientes, serão exibidas automaticamente no *Index do Produto* na Tela de Início, ajudando outros usuários a tomarem a decisão de compra.

*5 PLANO DE TESTES — SISTEMA DE PRODUTOS
  
Objetivo

Verificar o funcionamento das funcionalidades do sistema, avaliando principalmente:

Funcionamento dos botões;
Funcionamento dos links;
Exibição de mensagens de erro;
Interface do sistema;
Tempo de resposta das funcionalidades;
Navegação entre telas;
Login;
Cadastro;
Compra de produtos;
Pesquisa de produtos;
Confirmação das informações.
Critérios de Teste
Botões
O botão deve reagir corretamente à ação do usuário.
Cliques repetidos não devem causar erros ou comportamentos inesperados.
Links
Os links devem direcionar para as páginas corretas.
Nenhum link deve estar quebrado.
Mensagens de erro
Mensagens de erro devem aparecer quando informações inválidas forem inseridas.
Campos obrigatórios devem ser identificados quando não forem preenchidos.
Interface
Os elementos devem estar organizados e dimensionados corretamente.
Textos, imagens e botões devem estar visíveis e alinhados.
Tempo de resposta
O sistema deve responder às ações em tempo adequado.
A execução de várias ações consecutivas não deve causar lentidão significativa.
Casos de Teste
CT01 — Botões: Executar ação

Ação: Clicar no botão.

Resposta esperada: O botão deve executar a ação correta.

CT02 — Botões: Cliques consecutivos

Ação: Clicar várias vezes no mesmo botão.

Resposta esperada: O sistema não deve apresentar erros ou comportamentos inesperados.

CT03 — Links: Redirecionamento

Ação: Clicar em um link.

Resposta esperada: O usuário deve ser direcionado para a página correta.

CT04 — Links: Verificação de links

Ação: Acessar todos os links da página.

Resposta esperada: Nenhum link deve estar quebrado.

CT05 — Mensagem de erro: Informações incorretas

Ação: Inserir informações incorretas.

Resposta esperada: O sistema deve exibir uma mensagem de erro.

CT06 — Mensagem de erro: Campos obrigatórios

Ação: Deixar campos obrigatórios em branco.

Resposta esperada: O sistema deve informar quais campos precisam ser preenchidos.

CT07 — Interface: Tamanho dos elementos

Ação: Verificar o tamanho dos elementos da interface.

Resposta esperada: Os elementos devem estar organizados e dimensionados corretamente.

CT08 — Interface: Elementos visuais

Ação: Verificar textos, imagens e botões.

Resposta esperada: Todos os elementos devem estar visíveis e alinhados corretamente.

CT09 — Tempo de resposta: Funcionalidade

Ação: Clicar em uma funcionalidade.

Resposta esperada: O sistema deve responder em um tempo adequado.

CT10 — Tempo de resposta: Ações consecutivas

Ação: Executar várias ações consecutivas.

Resposta esperada: O sistema não deve apresentar lentidão significativa.

CT11 — Telas: Navegação

Ação: Navegar entre as telas.

Resposta esperada: A transição entre as telas deve ocorrer corretamente.

CT12 — Telas: Carregamento

Ação: Abrir cada tela do sistema.

Resposta esperada: Todas as telas devem carregar sem apresentar erros.

Login
CT13 — Login válido

Teste: Login válido.

Entrada: Usuário e senha corretos.

Resposta esperada: O usuário deve conseguir acessar o sistema.

CT14 — Usuário inexistente

Teste: Usuário inexistente.

Entrada: Usuário não cadastrado.

Resposta esperada: O sistema deve impedir o acesso e informar que os dados não são válidos.

Cadastro
CT15 — Cadastro válido

Teste: Cadastro válido.

Entrada: Todos os dados corretos.

Resposta esperada: O cadastro deve ser realizado com sucesso.

CT16 — E-mail inválido

Teste: E-mail inválido.

Entrada: usuario@

Resposta esperada: O sistema deve informar que o formato do e-mail está incorreto.

CT17 — E-mail duplicado

Teste: E-mail já cadastrado.

Entrada: E-mail existente no sistema.

Resposta esperada: O sistema deve informar que o e-mail já está em uso.

Compra do Produto
CT18 — Adicionar produto

Teste: Adicionar produto.

Entrada: Selecionar um produto e clicar em adicionar.

Resposta esperada: O produto deve aparecer no carrinho.

CT19 — Alterar quantidade

Teste: Alterar quantidade do produto.

Entrada: Aumentar a quantidade de 1 para 2.

Resposta esperada: A quantidade e o valor total devem ser atualizados corretamente.

CT20 — Remover produto

Teste: Remover produto.

Entrada: Clicar em remover.

Resposta esperada: O produto deve desaparecer do carrinho.

CT21 — Finalizar compra

Teste: Finalizar compra.

Entrada: Informar dados válidos.

Resposta esperada: A compra deve ser concluída com sucesso.

Pesquisa de Produtos
CT22 — Produto existente

Teste: Pesquisar produto existente.

Entrada: Tênis

Resposta esperada: O sistema deve apresentar produtos correspondentes ou semelhantes à pesquisa.

Confirmação de Informações do Produto
CT23 — Confirmar informações

Teste: Confirmar informações.

Entrada: Cliente confirma que todas as informações estão corretas.

Resposta esperada: O sistema deve registrar a confirmação.

CT24 — Informar erro

Teste: Informar erro nas informações.

Entrada: Cliente marca que encontrou um erro.

Resposta esperada: O sistema deve permitir que o cliente informe o problema encontrado.

CT25 — Erro sem descrição

Teste: Informar erro sem descrição.

Entrada: Cliente marca que encontrou um erro, mas não informa qual.

Resposta esperada: O sistema deve solicitar uma descrição do problema.

CT26 — Descrição extensa

Teste: Inserir descrição muito extensa.

Entrada: Texto que ultrapassa o limite permitido.

Resposta esperada: O sistema deve aceitar o texto até o limite estabelecido ou informar ao usuário qual é o limite permitido.

CT27 — Enviar documento

Teste: Enviar documento preenchido.

Entrada: Documento preenchido corretamente.

Resposta esperada: O documento deve ser enviado com sucesso.

Resumo dos Casos de Teste
ID	Categoria	Teste
CT01	Botões	Executar ação
CT02	Botões	Cliques consecutivos
CT03	Links	Redirecionamento
CT04	Links	Verificação de links
CT05	Mensagem de erro	Informações incorretas
CT06	Mensagem de erro	Campos obrigatórios
CT07	Interface	Tamanho dos elementos
CT08	Interface	Elementos visuais
CT09	Tempo de resposta	Funcionalidade
CT10	Tempo de resposta	Ações consecutivas
CT11	Telas	Navegação
CT12	Telas	Carregamento
CT13	Login	Login válido
CT14	Login	Usuário inexistente
CT15	Cadastro	Cadastro válido
CT16	Cadastro	E-mail inválido
CT17	Cadastro	E-mail duplicado
CT18	Compra	Adicionar produto
CT19	Compra	Alterar quantidade
CT20	Compra	Remover produto
CT21	Compra	Finalizar compra
CT22	Pesquisa	Produto existente
CT23	Confirmação	Confirmar informações
CT24	Confirmação	Informar erro
CT25	Confirmação	Erro sem descrição
CT26	Confirmação	Descrição extensa
CT27	Confirmação	Enviar documento
Resultado Esperado

Ao final da execução dos testes, o sistema deve:

Executar corretamente as ações dos usuários;
Apresentar mensagens de erro adequadas;
Possuir links funcionais;
Apresentar uma interface organizada;
Carregar as telas corretamente;
Responder às ações em tempo adequado;
Permitir login e cadastro conforme as regras estabelecidas;
Permitir a realização de compras;
Permitir a pesquisa de produtos;
Registrar corretamente as confirmações e informações fornecidas pelo usuário.

![Imagem do projeto](ChatGPT%20Image%2016%20de%20ago.%20de%202026%2C%2015_19_13.png)


![Imagem](./ChatGPT%20Image%2018%20de%20ago.%20de%202026%2C%2008_09_30.png)


