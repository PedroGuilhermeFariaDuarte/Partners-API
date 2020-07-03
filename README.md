# Partners-API

Uma api para a busca de um parceiro ou para os parceiros mais proximos a você.

## Sobre

A api "Partners" foi criada  para oferecer a qualquer cliente uma resposta padronizada e um acesso bem simplificado.

### Funcionalidades suportadas ###
- Informe a sua localização
- Visuzalie todos os parceiros proximos a você de uma maneira extremanente rapida  
- Procure por um parceiro em especifico

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

È possivel alterar o host onde a API irár rodar,onde:
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
    


