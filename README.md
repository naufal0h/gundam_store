#database

--bash

npx sequelize-cli model:generate --name member --attributes name:string,type:string

npx sequelize-cli model:generate --name costumer --attributes name:string,email:string,address:string,memberID:integer

npx sequelize-cli model:generate --name product --attributes name:string,price:integer,image:string,stock:integer

npx sequelize-cli model:generate --name order --attributes name_order:string,costumerId:integer


npx sequelize-cli model:generate --name orderproduct --attributes orderId:integer,productId:integer
