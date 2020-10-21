# client-side
Used technology:
Java Spring Boot 2.2
Angular 10
H2 database(In memory database)

Architecture pattern:
Backend-Architecture: Microservice architecture
Front-end Architecture: Component based architecture

Communication protocol: Service to service communication, RESTful API.
How to run


Necessary api link:
GET : http://localhost:8200/api/v1/user/get/all
GET by id: http://localhost:8200/api/v1/user/get/{id} (id =1,2,3....)
POST: http://localhost:8200/api/v1/user/create
DELETE by id: http://localhost:8200/api/v1/user/delete/{id} (id =1,2,3....)
PUT: http://localhost:8200/api/v1/user/update/1



http://localhost:8100/product/list
http://localhost:8100/product/{id} (id =1,2,3....)
http://localhost:8100/product/create
http://localhost:8100/product/delete/{id} (id =1,2,3....)
http://localhost:8100/product/update/4



Future plan:
For further development: Multimoduler Architecture for integrating angular environment with Spring Boot.
Converting development environment into container based application to automate the environment flow. (Using docker,vagrant is perfect example for this use case.)