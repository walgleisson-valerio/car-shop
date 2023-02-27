# CarShop

Este projeto consiste no desenvolvimento de uma API com `CRUD` para gerenciar uma concessionária de veículos

Nele foi aplicado os princípios da Programação Orientada a Objetos (`POO`) com `Typescript`. O banco de dados utilizado foi o `MongoDB`, através do framework do `mongoose`.

> ⚠️ Este projeto foi realizado durante o curso de desenvolvimento da [Trybe](https://www.betrybe.com/). Portanto, a configuração inicial, e alguns arquivos necessários para a entrega e avaliação do desempenho da pessoa estudante, foram feitos pela própria escola. O desenvolvimento deste projeto por parte das pessoas estudantes, como eu, foram feitos dentro da pasta `src`. Mas se quiser tirar mais dúvidas, fique a vontade para clicar [aqui](https://github.com/walgleisson-valerio/car-shop/commits/main) e dá uma olhadinha no histórico de commits 😉.
> 

### 🛠️ Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/pt/docs/)
- [Node.js](https://nodejs.org/pt-br/docs/)
- [Express](https://expressjs.com/pt-br/)
- [Mongo DB](https://www.mongodb.com/docs/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [Docker](https://docs.docker.com/)

[⬆️](#carshop)

### ⚡ Como Executar

- Para executar esse projeto, você deve clonar esse repositório. Para isso, execute o comando abaixo:

```bash
git clone git@github.com:walgleisson-valerio/car-shop.git
```

- Entre na pasta criada

```sh
cd car-shop
```

<details>
<summary><strong>💻 Rodando Localmente</strong></summary>

- Instale as dependências, caso existam, com:
    
    ```sh
    npm install
    ```
   
> Dentro do arquivo `package.json`existem alguns scripts úteis para desenvolvimento. Não se esqueça de dar um conferida nele caso se interesse 😉.

[⬆️](#carshop)
</details>

<details>
<summary><strong>🐳 Rodando com Docker</strong></summary>

- ⚠️ Importante ⚠️
    
    ⚠️ Seu **docker-compose** precisa estar na versão **1.29** ou **superior**. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.
    
- Lembre-se de parar o mongo se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers.
- Rode os serviços do `node` e `mongo` com o comando:
    
    ```sh
    docker-compose up -d
    ```
    

> Esses serviços irão inicializar um container chamado car_shop e outro chamado car_shop_db.
> 

- A partir daqui você pode rodar o container `car_shop`, responsável pela execução do servidor node, via CLI ou abri-lo no VS Code.
    
    ```sh
    docker exec -it car_shop bash
    ```
    
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Instale as dependências, caso existam, com:
    
    ```sh
    npm install
    ```

> ⚠️ Atenção ⚠️ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json`devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec`citado acima.

[⬆️](#carshop)
</details>

---

Desenvolvido por [Walgleisson Valerio](https://github.com/walgleisson-valerio)
