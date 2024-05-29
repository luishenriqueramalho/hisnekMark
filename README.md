# Catálogo de Produtos - React Native com TypeScript

Este projeto é um aplicativo de catálogo de produtos desenvolvido em React Native com TypeScript, utilizando GraphQL para comunicação com um backend fictício e AWS Amplify para autenticação de usuários. O aplicativo lista produtos, permite a visualização detalhada de cada um e simula a adição de produtos a um carrinho de compras.

## Descrição do Teste

Desenvolva um aplicativo que simule um catálogo de produtos com as seguintes funcionalidades:

### Requisitos Funcionais

**Tela de Listagem de Produtos:**

- Exibir uma lista de produtos com imagem, título e preço.
- Redirecionar o usuário para a tela de detalhes ao tocar em um produto.

**Tela de Detalhes do Produto:**

- Mostrar imagem, título, descrição e preço do produto.
- Incluir um botão para simular a adição do produto ao carrinho de compras.

**Tela de Carrinho de Compras:**

- Listar os produtos adicionados ao carrinho com suas quantidades.
- Incluir o total geral baseado nos itens do carrinho.

### Requisitos Técnicos

- Utilizar GraphQL para gerenciar a comunicação com um servidor backend fictício (mockando as respostas do GraphQL).
- Armazenar e gerenciar o estado do aplicativo (por exemplo, itens do carrinho) usando o contexto do React ou uma biblioteca de gerenciamento de estado à sua escolha.
- Utilizar AWS Amplify para autenticação de usuários.
- Desenvolver o aplicativo usando TypeScript.

### Desejável

- Design responsivo e intuitivo.
- Animações para transições entre telas ou ao adicionar itens ao carrinho.
- Testes unitários para componentes críticos.

## Instruções de Configuração

### Pré-requisitos

- Node.js
- npm ou yarn
- AWS Amplify CLI
- Expo CLI (opcional, para desenvolvimento mais fácil)

### Passos para Configuração

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/luishenriqueramalho/hisnekMark.git
   cd hisnekMark
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn install
   ```

3. **Configure o AWS Amplify:**

   ```sh
   amplify init
   amplify add auth
   amplify push
   ```

4. **Inicie o aplicativo:**
   ```sh
   npm start
   # ou
   yarn start
   ```
