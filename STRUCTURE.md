# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node LTS](https://nodejs.org/en/)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

### Como rodar na minha máquina?

- Clone o projeto `git clone https://github.com/PLSR12/multi-brand-webapp.git`
- Rode `npm install`
- Rode `npm start`
- Pronto 🎉

## MultiBrand WebApp Site

### Estrutura do projeto

- `./pages`: É onde se encontra as principais página da aplicação.

- `./routes` : É onde se encontra as rotas da aplicação no arquivo `./routes/index.tsx`

- `./models` : Aonde estão os models para interfaces de tipagem.

- `./services`: Aonde está a conexão com a API usando o Axios.

- `./context` : Aonde estão os contextos globais da aplicação
