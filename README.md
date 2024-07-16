# Codeburger-Front-End

## Descrição

Este é o front-end do projeto Codeburger, uma aplicação de pedidos online para uma hamburgueria.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/IgorTorquatto/Codeburger-Front-End.git
cd Codeburger-Front-End
yarn install
yarn start
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Execute a aplicação

```bash
yarn start
```
A aplicação estará disponível em http://localhost:3000

## Configuração do Backend

### 1. Clone o repositório  do backend

```bash
git clone https://github.com/IgorTorquatto/Codeburger-Back-End.git
cd Codeburger-Back-End
```

### 2. Instale as dependências do backend

```bash
yarn install
```
### 3. Execute o backend

```bash
yarn dev
```

O backend estará disponível em http://localhost:3001

## Estrutura do Projeto

Abaixo está a estrutura de diretórios do projeto com a descrição de cada pasta:

- `public/`: Contém os arquivos públicos da aplicação, como o `index.html`.
- `src/`: Diretório principal do código fonte.
  - `src/assets/`: Contém as imagens do aplicativo.
  - `src/components/`: Contém os componentes reutilizáveis do React.
  - `src/containers/`: Contém as páginas da aplicação.
  - `src/hooks/`: Contém hooks de context.
  - `src/routes/`: Contém os arquivos de configuração das rotas, como `routes.js` e `private-routes.js`.
  - `src/services/`: Contém as configurações da API.
  - `src/styles/`: Contém os estilos globais, como `globalStyles.js`.
  - `src/utils/`: Contém funções úteis, como `formatCurrency`.

- `.gitignore`: Especifica os arquivos e diretórios que devem ser ignorados pelo Git.
- `README.md`: Arquivo de documentação do projeto.
- `package.json`: Contém as dependências e scripts do projeto.
- `yarn.lock`: Arquivo que garante a consistência das dependências instaladas com o Yarn.

## Contribuindo

Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2.  Crie uma nova branch:

```bash
git checkout -b feature/nova-feature
```

3. Commit suas mudanças
   
```bash
git commit -am 'Adiciona nova feature'
```

4. Envie para a branch

```bash
git push origin feature/nova-feature
```

5. Abra um Pull Request
