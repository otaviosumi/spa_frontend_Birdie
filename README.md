# spa_frontend_Birdie

## Objetivo

Desenvolver uma SPA que preencha os seguintes requisitos:

* Dado um título, consultar por produtos na nossa base de dados
* Mostrar informações desse produto, tais como:
  * Marca
  * Categoria
  * Fotos
  * Outras especificações
 
 ## Como rodar o npm:
 
 Navege até a pasta chamada spa-birdie dentro da pasta do projeto:
 
 ```cd spa-birdie```
 
 Insira o comando:
 
 ```npm start```
 
 ## API utilizada:
 
URL Base: `http://35.199.65.245/`

Token: `88c4f286bfa68445eb170e6d159b35f74e98847b`
  
## Busca de oferta por título:

`http://35.199.65.245/?token=<token>&title=<title>`

Exemplo:

`http://35.199.65.245/?token=88c4f286bfa68445eb170e6d159b35f74e98847b&title=Lavadora%20de%20Roupas%20Samsung%20WF106U4SA%20Branca%20com%20Display%20Digital,%20Eco%20Bubble%20e%20Programas%20de%20Lavagem%20-%2010,1Kg%27`

## Busca de detalhes da oferta por sku + retailer:

`http://35.199.65.245/?token=<token>&retailer=<retailer>&sku=<sku>&source=retailers`

Exemplo:

`http://35.199.65.245/getproduct/?token=88c4f286bfa68445eb170e6d159b35f74e98847b&source=retailers&retailer=casasbahia&sku=1866351`


## Recursos utilizados:
Foi utilizado um minicurso de [React](https://www.youtube.com/watch?v=MhkGQAoc7bc) para aderir aos conhecimentos prévios de html e javascrip

|Ferramenta   |Versão|
|-------------|------|
|npm          |3.5.2 |
|nodejs       |10.10.0|
|react        |6.2.3  |



