
# Meeting Room Manager

> An app for creating and managing meeting rooms. The front-end was made using Typescript and Angular,
> and banck-end was made using Java with Spring-boot. Database host in H2.

## Prerequisites

> - An IDE of your choice
> - **Node** with version greater than or equal to 8.1 - [Node Donwload](https://nodejs.org/pt-br/download/)
> - **NPM**  with version greater than or equal to 5.6 - [Npm Donwload](https://www.npmjs.com/package/download)
> - **Angular** with version greater than or equal to 12.0.3 - **npm install -g @angular/cli**
> - **Java** with version greater than or equal to 8 - [Java Donwload](https://www.java.com)

## Installation

> - Clone this project in your machine with the command:
> ```
> 	git clone https://github.com/caiomcs04/meeting-room-manager.git
> ```

## Execution back-end in localhost

> - Open **meeting-room-manager/back-end** folder using an IDE of your choice
>
> - Load marven changes in build.gradle file if your IDE doesn't do it automatically
>
> - Run MeetingroomApplication(~/back-end/src/main/java/com/digital/crud/meetingroom/meetingroom)
>
> - After starting the service go to [H2 memory bank](http://localhost:8085/h2)
>
> - Change **JDBC URL** to **jdbc:h2:~/meetingroom_db**
>
> ![Captura de tela de 2021-07-03 13-24-10](https://user-images.githubusercontent.com/66964367/124360783-082acc80-dc02-11eb-944c-58aabe735d21.png)
>
> - Then press conect to get access to memory bank
>
> - You can execute any crud using an API develoment plataform of your choice
>
> - Or you can use [Swagger](http://localhost:8083/swagger-ui.html#/) as well
> 
>![Captura de tela de 2021-07-23 10-37-18](https://user-images.githubusercontent.com/66964367/126790188-93fd690c-46e5-483e-a05b-acf029ebf548.png)

## Execution Angular app

>Access your terminal project folder:
> ```
> 	cd [Your Project folder name]
> ```
> Than access the **frontendSantander** folder:
> ```
> 	cd [frontendSantander]
> ```
> Already the application's folder in your terminal, type the following command to install the node-modules:
> ```
> 	npm install
> ```


## Functionalities

> - Localhost
> You will be able to test all functionalities in [Swagger](http://localhost:8082/swagger-ui.html#/) 
> And also will be able to check the data base in [H2](http://localhost:8082/h2)

> - Heroku
> You will be able to test all functionalities in [Swagger](https://peoplea-dio-api.herokuapp.com/swagger-ui.html) 
> And also will be able to check the data base in [H2](https://peoplea-dio-api.herokuapp.com/h2)

## Contribution

> - To contribute to this project, fork this project, make the changes you want and create a pull request.

## Authors

> - **Caio Moreira de Carvalho Sampaio** - [Linkedin](https://www.linkedin.com/in/caio-sampaio-b02a3669/) | [Email](caio6c@yahoo.com.br)

## Special thanks 

> Digital Innovation One and Satander Bank for the fullstack scholarship opportunity
