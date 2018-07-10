# Creditscore sample app using AngularJS and Java

##### To build executable fat *jar (war)* clone the repository and execute: #####

	mvn clean package

##### To build WebLogic deployable *war* clone the repository and execute: #####

	mvn clean package -Pweblogic

And deploy `target/creditscore-1.0.0.war` to WebLogic JEE application server.