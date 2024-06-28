# Task Management System Test

## Overview

This project is a mini-Task Manager application using Spring Boot 3 and React, created as a test for joining the HandsOn Team. It uses Maven Wrapper for build automation and includes both backend and frontend source code.

## Prerequisites

- **Java Development Kit (JDK) 19**: Ensure you have JDK 19 installed.
- **Maven**: This project uses Maven Wrapper, so you do not need to install Maven separately.
- **Git**: Ensure you have Git installed for cloning the repository.

## Project Structure

- **Backend**: Contains the Spring Boot application.
  - **config**: Configuration classes for security and application settings.
  - **controllers**: REST controllers for handling HTTP requests.
  - **models**: Entity classes representing the database tables.
  - **repository**: Repository interfaces for database operations.
  - **services**: Service classes containing business logic.
- **Frontend**: Contains the React application.

## Getting Started

### Cloning the Repository

To clone the repository, run the following command:

```sh
git clone https://github.com/ahmedbnr/TaskManagementSystemTest.git
cd TaskManagementSystemTest
```

### Running the Backend

Navigate to the backend directory:

```sh
cd Backend/TaskManager
```

#### Build and Run the Project

Use Maven Wrapper to build and run the project:

```sh
./mvnw clean install
./mvnw spring-boot:run
```

### Configuration

#### Application Properties

The application runs on `localhost:8443` by default and uses an in-memory H2 database. The relevant configurations are in the `src/main/resources/application.properties` file:

```properties
server.port=8443

# H2 Database configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

### API Endpoints

The backend provides the following API endpoints:

- **GET /api/tasks**: Retrieve all tasks.
- **GET /api/tasks/{id}**: Retrieve a task by ID.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/{id}**: Update an existing task.
- **DELETE /api/tasks/{id}**: Delete a task by ID.

### Swagger Documentation

After starting the application, you can access the Swagger UI for API documentation at:

```
https://localhost:8443/swagger-ui/index.html
```

### Access In-Memory H2-Database Console

You can access the H2-Console at:

```
https://localhost:8443/h2-console
```

### Authentication

The application uses basic authentication with a default in-memory user. The default credentials are:

- **Username**: user
- **Password**: password

### Running the Frontend

Navigate to the frontend directory:

## Additional Information

### Security Configuration

The security configuration ensures CSRF protection, XSS prevention, and secure headers. The application redirects to the Swagger API upon successful login.


### SSL Configuration

The application uses SSL for secure communication. The SSL certificate is stored in the `src/main/resources` directory as `keystore.p12`. The relevant configurations are in the `src/main/resources/application.properties` file:

```properties
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=yourpassword
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=selfsigned
```

By following these instructions, you should be able to clone, build, and run the Task Manager application successfully.
