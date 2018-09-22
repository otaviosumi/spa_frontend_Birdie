# spa_frontend_Birdie

## Objetivo

Desenvolver uma SPA que preencha os seguintes requisitos:

* Dado um título, consultar por produtos na nossa base de dados
* Mostrar informações desse produto, tais como:
  * Marca
  * Categoria
  * Fotos
  * Outras especificações
 
 ## API para uso:
 
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

## Para utilizar a aplicação:
Para utilizar no modo de desenvolvimento (única forma atualmente) é necessário dar o seguinte comando (dentro da pasta do projeto):

```ng serve -o ```

## Recursos:
Foi utilizado um minicurso de [Angular](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course) para aderir aos conhecimentos prévios de html e javascrip

|Ferramenta   |Versão|
|-------------|------|
|npm          |3.5.2 |
|nodejs       |10.10.0|
|angular-cli  |6.2.3  |
### Sobre Angular-CLI
|Pacote             |         Versão|
|--------------------|----------------|
|@angular-devkit/architect    |0.8.3|
|@angular-devkit/core         |0.8.3|
|@angular-devkit/schematics   |0.8.3|
|@schematics/angular          |0.8.3|
|@schematics/update           |0.8.3|
|rxjs                         |6.2.2|
|typescript                   |2.9.2|
