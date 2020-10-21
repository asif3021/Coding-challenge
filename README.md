## Used technology
```bash
* Java Spring Boot 2.2
* Angular 10
* H2 database(In memory database)
```


## Architecture pattern:
```bash
* Backend-Architecture: Microservice architecture
* Front-end Architecture: Component based architecture
```


## Communication protocol
```bash
* Service to service communication, RESTful API.
```


## How to run?
```bash
* Clone this git repository in local repository
* Separately import three project file as maven project, name starts with `assessment` to a `IDE` like `Eclipse` or `Intellij Idea`.
* First run `eureka server` project then run project for `user` and `product`
* Open  `command prompt` or `powershell` inside client-side project folder and run `ng-serve` command
* Open a browser and enter `http://localhost:4200` url.
```


## Necessary api link:
### For user module
```bash
* GET : http://localhost:8200/api/v1/user/get/all
* GET by id: http://localhost:8200/api/v1/user/get/{id} (id =1,2,3....)
* POST: http://localhost:8200/api/v1/user/create
* DELETE by id: http://localhost:8200/api/v1/user/delete/{id} (id =1,2,3....)
* PUT: http://localhost:8200/api/v1/user/update/1
```
### For product module
```bash
* http://localhost:8100/product/list
* http://localhost:8100/product/{id} (id =1,2,3....)
* http://localhost:8100/product/create
* http://localhost:8100/product/delete/{id} (id =1,2,3....)
* http://localhost:8100/product/update/4
```


## Completed task:
```bash
* RESTful CRUD operation with api link mentioned in above using postman.
* Create and read operation with client-side application created by angular 10.
```


## Future task
```bash
* Develop update, detele and enable searchbox in client-side
* Unit test integration
* Implement JWT authentication
```


## For further development: 
```bash
* Multimoduler Architecture for integrating angular environment with Spring Boot.
* Converting development environment into container based application to automate the environment flow. (Using docker,vagrant is perfect example for this use case.)
```
