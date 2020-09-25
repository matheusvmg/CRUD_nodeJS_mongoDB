<h1 align="center">CRUD nodeJS<img src="https://img.icons8.com/color/48/000000/nodejs.png"/></h1>

## Sobre:bulb:
Esse projeto partiu de uma simples ideia de estudo com o objetivo de realizar operações CRUD no banco de dados noSQL MongoDB.

`CRUD - CREATE, READ, UPDATE e DELETE`

## Funcionamento:pushpin:
Com a aplicação você consegue cadastrar um usuário, listar todos os usuários do banco, atualizar algum valor de um campo ou deletar um determinado usuário, tudo isso com a ajuda do insomnia, pois ele vai nos ajudar a ser o client-side da nossa aplicação.

<h2 align="center">Tecnologias e recursos utilizados</h2>
<h3 align="center">NodeJS</h3>
<h3 align="center">Express</h3>
<h3 align="center">Mongoose</h3>
<h3 align="center">MongoDB</h3>
<h3 align="center">Insomnia</h3>
<h3 align="center">MongoDB Compass Comunity</h3>
<h3 align="center">Visual Studio Code</h3>

## Instalação

#### Antes de rodar a alplicação a alguns recursos e programas que precisamos ter instalados :warning:
<h3>Nodejs :heavy_check_mark:</h3>
<h3>MongoDB :heavy_check_mark:</h3>
<h3>Insomnia :heavy_check_mark:</h3>
<h3>Visual Studio Code :heavy_check_mark:</h3>
<br />

`First things First`

1. Instale o mongoDB e configure [clique aqui](https://medium.com/@NetoVieiraLeo/instalando-e-configurando-o-mongodb-no-windows-b1d4e1e58911)
2. Instale o nodeJS [clique aqui](https://nodejs.org/pt-br/download/)
3. Instale o mongoDB Compass Comunity [clique aqui](https://www.mongodb.com/try#atlas.)
4. Instale o insomnia (caso seu computador não seja 64 bits instale o Postman) [clique aqui para o insomnia](https://insomnia.rest/download/) ou [clique aqui para o postman](https://www.postman.com/downloads/)
5. Instale o ambiente de desenvolvido preferido, irei colocar o vscode aqui pois usei este para codar [clique aqui](https://code.visualstudio.com/download)

## Vamos botar a mão na massa?:muscle:
Bom depois de instalado e configurado o ambiente estamos prontos para colocar a mão na massa. Finalmente uhulll:raised_hands:
<br />
- Primeiro clone esse repositório na sua máquina local (ou baixe em um arquivo zipado)
- Antes de tudo instale todos os pacotes e módulos necessários para a aplicação funcionar, para isso digite o comando `npm install`.
- Abra o projeto no vscode e inicie o servidor no cmd ou terminal de sua preferência (pode ser o do vscode também) com `npm dev` ou `yarn dev` (caso você se pergunte por quê "dev"?, está assim pois ele vai executar um script que já está configurado la no nosso package.json, debaixo dos panos ele está executando o comando `nodemon index.js`)
- Após nosso servidor está rodando, execute o servidor do mongoDB na sua máquina. Abra o cmd ou terminal e digite o comando `mongod` e logo em seguida ele irá iniciar o servidor do mongoDB.
- Não se preocupe minimize esses dois prompt's de comando e não feche eles.
- Após isso abra o Insomnia ou Postman para servir como client da nossa aplicação.
- Se você quiser ter certeza que está sendo conectado com o banco de dados e ter uma resposta visual abra o MongoDB Compass Comunity
- Antes de realizar as operações de `CRUD` se certifique que o banco de dados esteja criado.
- Você pode criar um banco de dados via `GUI` com o MongoDB Compass Comunity (recomendo se não que ter trabalho, é mais fácil).
Ou você pode criar através do terminal via esse comandos: <br /> `mongo` isso irá abrir a linha de comando do mongoDB
<br /> `use usuarios` - ele irá criar em memória o banco de dados usuarios e já estará usuando ele 
<br /> `db.createCollection('usuarios')`- cria a coleção usuarios. Pronto seu banco está criado
- Depois de criado o banco a aplicação pode ser usada normalmente.
- Operação de criar usuario: no insomnia crie um novo ambiente (enviroment) e crie as seguinte requisições `listar usuarios` , `cadastrar usuario`, `deletar usuario` e `atualizar usuario`.
- Após a criação dos requests no insomnia, utlize as rotas para realizar as requisições e respostas, essas são:
`https://localhost:3333` - rota padrão <br />
`https://localhost:3333/listar-usuarios` - lista todos os usuários (método GET) <br />
`https://localhost:3333/cadastrar-usuario` - cadastra um usuário (necessário utilizar método POST com body em json)
`https://localhost:3333/atualizar-usuario/:id`- atualiza um usuário (necessário utilizar método PUT com body em json)
`https://localhost:3333/deletar-usuario/:id` - exclui um usuário (método DELETE)

## Dúvidas?:raising_hand:
Entre em contato comigo : <br /> <label><img src="https://img.icons8.com/fluent/40/000000/instagram-new.png"/><a href="https://instagram.com/matheusgoes.dev">@matheusgoes.dev</a></label>
<br />
<label><img src="https://img.icons8.com/officel/40/000000/linkedin.png"/><a href="https://www.linkedin.com/in/matheus-vin%C3%ADcius-meirelles-g%C3%B3es-5b8058aa/">Matheus Vinícius Meirelles Góes</a></label>
<p align="center">:octocat:</p>
