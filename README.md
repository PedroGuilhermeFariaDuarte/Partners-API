# Partners-API

Uma api para a busca de um parceiro ou para os parceiros mais proximos a você.

## Sobre

A api "Partners" foi criada  para oferecer a qualquer cliente uma resposta padronizada e um acesso bem simplificado.

### Funcionalidades suportadas ###
- Informe a sua localização
- Visuzalie todos os parceiros proximos a você de uma maneira extremanente rapida  
- Procure por um parceiro em especifico

### Tecnologias utilzadas ###
- [Node.JS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/pt-BR/)
- [MongoDB](https://www.mongodb.com/)

### Tecnologias utilzadas como cliente para testes ###
- [Insomnia](https://insomnia.rest/)


# Vamos começar

Antes de começarmos a enviar requisições para a API primeiro temos que instalar as suas depedências.

No windows você pode usar o gerênciador de pacotes [Chocolatey](https://chocolatey.org/) para instalar quase todas as dependências!

Caso você tenha optado pelo Chocolatey, segue o passo a passo :

 para as peguntas que o chocolatey for fazer, responda com a letra 'Y' em maiusculo.

No seu terminal de prefêrencia, aberto como adminstador

digite o seguinte comando para instalar o node:
  ```bash
    choco install node:lts
  ```

agoro digite o seguinte comando para instalar o yarn:
  ```bash
    choco install yarn
  ```

Pronto, as intalações com o chocolatey chegou ao fim.

Caso você tenha optado por instalar sem o Chocolatey, segue o link das dependências:

  1. [Node.JS](https://nodejs.org/en/download/)
  2. [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
  
 #### Instalando o servidor de banco de dados
 
 Para realizar a instalação acesse [Este link](https://www.mongodb.com/try/download/community?tck=docs_server), você será redirecionado
 para pagina de instalação do MongoDB, durante a instalação o instalador irar pergunta como você deseja rodar o banco de dados, por padrão
 ele roda como um 'Serviço Windows' no S.O Windows, e sem usuario e senha, caso você opte por colocar usuario e senha anote esse dados, pois
 será necessario para que a API possar consultar os registros.
 
 Com o servidor instalado, você pode usar a 'GUI'  [MongoDB Compass](https://www.mongodb.com/try/download/compass) para se conectar ao
 e visualizar todos os dados e realizar as operações de 'CRUD'.
 
 Caso tenha alguma duvida ou sofrido algum problema durante as instalações [Help](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


### Configurando a API

Agora que todas as dependencias foram instaladas, vamos configurar a API para que ela possa rodar e acessar o banco de dados corretamente.

Caso você ja tenha feito o clone deste projeto, na sua raiz, acesso o arquivo .env em uma IDE ou Editor de texto de sua preferência, recomendo o
[Visual Studio Code](https://code.visualstudio.com/Download).

Com o arquivo .env aberto, você irar encontrar os seguintes pares chave/valor:
```env
  # API
  API_HOST = 3333

  # DATABASE
  DATABASE_USERNAME = root
  DATABASE_PASSWORD = root
  DATABASE_NAME = partner
  DATABASE_HOST = 127.0.0.1
  DATABASE_PORT = 27017
```

os pares DATABASE_* recebem os dados de conexão com o servidor de banco de dados onde:
  ```env
  DATABASE_USERNAME = Caso você tenha configurado um usuario, insira o usuario aqui
  DATABASE_PASSWORD = Caso você tenha configurado uma sennha, insira a senha aqui
  DATABASE_NAME = Nome do banco de dados de sua prefêrencia
  DATABASE_HOST = O Host que o servidor está rodando, por padrão é no localhost/127.0.0.1
  DATABASE_PORT = A porta de acesso ao servidor, por parão é 27017
  ```

Caso você tenha configurado um usuario e senha, acesse a pasta **src**, vá para a pasta ***database** e abra o arquivo **index.js**

Com src/database/index.js aberto, no seguinte trecho de codigo :

```javascript
    init() {
        try {
            mongoose.connect(`mongodb://${this.host}:${this.port}`, {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                dbName: this.dbname,
                /*
                INSIRA AS SEGUINTES PROPRIEDADES:
                user: this.username,
                pass: this.password                
                */
            });
        } catch (error) {
            console.log(`Houve um erro ao tentar estabelecer uma conex~
            ao com o banco de dados - erro: ${error.message}`);
        }
    }
```

Salve o arquivo e feche, não realize mais nenhum tipo de alteração.

È possivel alterar a porta onde a API ficara visivel, onde:
  ```env
       API_HOST = Insira a porta em que a API ficará acessivel, por padrão é na porta 3333 em localhost
  ``` 

#### Instalando as depedencias internas da API:

Para realizar as demais instalações vamos acessar a raiz da pasta por um terminal de sua preferência.

Com o terminal aberto, vamos começar o processo de instalação:

```bash
   yarn install
```
Após o fim da instalação, se você desejar, certifique-se que o servidor de banco de dados esteja rodando e execute o seguinte comando:

```bash
    yarn dev:data
```

Será salvo no banco de dados todos os registros necessarios para começar a testar a API, mas caso prefira, a inserção de um registro
personalizado pode ser feita manualmente.


# Como usar

Abaixo você encontrará todas as informações necessarias para começar a usar a Partner API.


### Rotas
A api irar responder as seguintes rotas.

    - `/partners/create`
    - `/partners/ID DO PARCEIRO`
    - `/patners/`

Todas as rotas irão retornar um JSON contendo uma mensagem, os dados solicitados e o codigo de resposta>

Por exemplo, veja o json retornado para a rota \partners\5efe73b9e30c6208b0f8875e

```json
{
  "message": "Parceiro encontrado com sucesso!",
  "partner": {
    "_id": "5efe73b9e30c6208b0f8875e",
    "tradingName": "Bar do teste",
    "ownerName": "Usuario de teste",
    "document": "73.068.991/0001-18",
    "coverageArea": {
      "coordinates": [
        [
          [
            [
              -38.6577,
              -3.7753
            ],
            [
              -38.63212,
              -3.81418
            ],
            [
              -38.61925,
              -3.82873
            ],
            [
              -38.59762,
              -3.84004
            ],
            [
              -38.58727,
              -3.84345
            ],
            [
              -38.58189,
              -3.8442
            ],
            [
              -38.57667,
              -3.84573
            ],
            [
              -38.56706,
              -3.85015
            ],
            [
              -38.56637,
              -3.84937
            ],
            [
              -38.56268,
              -3.84286
            ],
            [
              -38.56148,
              -3.83772
            ],
            [
              -38.55881,
              -3.82411
            ],
            [
              -38.55577,
              -3.81507
            ],
            [
              -38.55258,
              -3.80674
            ],
            [
              -38.54968,
              -3.80222
            ],
            [
              -38.53406,
              -3.79495
            ],
            [
              -38.52894,
              -3.77718
            ],
            [
              -38.52517,
              -3.76313
            ],
            [
              -38.53118,
              -3.76203
            ],
            [
              -38.53968,
              -3.76126
            ],
            [
              -38.54577,
              -3.76151
            ],
            [
              -38.55344,
              -3.76102
            ],
            [
              -38.56327,
              -3.76029
            ],
            [
              -38.58118,
              -3.75907
            ],
            [
              -38.60079,
              -3.75423
            ],
            [
              -38.60671,
              -3.74772
            ],
            [
              -38.61787,
              -3.7431
            ],
            [
              -38.62577,
              -3.7472
            ],
            [
              -38.63332,
              -3.7496
            ],
            [
              -38.65049,
              -3.76057
            ],
            [
              -38.6577,
              -3.7753
            ]
          ]
        ]
      ],
      "_id": "5efe73b9e30c6208b0f8875f",
      "type": "MultiPolygon"
    },
    "address": {
      "coordinates": [
        -23.5035777,
        -46.4155391
      ],
      "_id": "5efe73b9e30c6208b0f88760",
      "type": "Point"
    },
    "__v": 0
  },
  "code": 200
}
```
#### Explicando a estrutura da resposta

Toda rota segue o mesmo padrão de resposta em caso de sucesso com a requisição, com essa resposta sendo um JSON com 3(trÊs) propriedades:

    1. Message
    2. Partner
    3. Code
    
A primeira propriedade **Message**, contêm uma mensagem descrevendo o sucesso do que foi solicitado, por exemplo *Parceiro encontrado com sucesso*.

A segundo propriedade **Partner**, contêm um objeto ou um array de objetos, esses objetos representam o parceiro solitado/encontrado, veja o exemplo acima.

A terceira e ultíma propriedade, representa o status da requisição seguindo o padrão do protocolo HTTP, mesmo que a requisição a API tenha sido efetuado com sucesso (200) caso o conteudo solicitado não seja encontrado o codigo (Code) retornado será de 404.
    

#### Enviando uma requisição para uma rota
Para realizar uma requisição para a Partner API você pode usar o cliente **Insomnia**

Neste repositorio você irar encontrar um arquivo JSON para importa dentro do insomnia, este json contêm as rotas e seus parametros pré-configurados.

Caso nao queira usar o insomnia, fica a vontade para usar o cliente de sua preferencia.

Fim
