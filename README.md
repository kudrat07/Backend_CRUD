# Node.js Backend API

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js] (v14+ recommended)
- [MongoDB] 
- npm package manager
- VS Code

### Installation

1. Clone the repository:
```bash
  git clone https://github.com/kudrat07/Backend_CRUD.git
```
```bash
   cd Backend_CRUD
   ```

2. Install dependencies:
```bash
   npm install
   ```

3. Open the project folder in VS Code

4. Create a `.env` file in the root directory and add necessary environment variables:

   ```env
   PORT=8080
   DB_URL="mongodb+srv://kudrathussain809:kudrat2002@assignmentdb.u25r3.mongodb.net/?retryWrites=true&w=majority&appName=assignmentDB"
5. Start the server:

 ```bash
   npm start
   ```
   
   Or run in development mode with nodemon:

```bash
   npm run dev
   ```


## API Endpoints

### Create a User

- **Endpoint:** `POST /create`
- **Description:** Creates a new user with validation.
- **Request Body:**
```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age":"24"
  }
  ```
  
- **Response:**
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "user": {
      "id": "12345",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age":24
    }
  }
  ```


### Retrieve All Users

- **Endpoint:** GET /users
- **Description:** Retrieves a list of all users.
- **Response:**
```json
  
  [
    {
      "id": "12345",
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "age":"23"
    },
    {
      "id": "67890",
      "name": "Steve Smith",
      "email": "steve@gmail.com",
      "age":"25"
    }
  ]

  ```
  

### Retrieve a Single User

- **Endpoint:** `GET /user/:id`
- **Description:** Retrieves a single user by ID.
- **Response:**
```json
  {
    "id": "12345",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": "24"
  }
  ```

### Delete a User
- **Endpoint:** `DELETE /user/:id`
- **Description:** Deletes a user by ID.
- **Response:**
  ```json
  {
    "success": true,
    "deletedUser": {
      "_id": "67d515bcb6923f01a6b664ab",
      "name": "tony",
      "email": "test@gmail.com",
      "age": 12
    }
  }
  

### Update a User

- **Endpoint:** `PUT /user/:id`
- **Description:** Updates user details.
- **Request Body:**
  ```json
  {
    "name": "John Updated",
    "email": "johnupdated@example.com",
    "age": "22"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User updated successfully",
    "updatedUser": {
      "id": "12345",
      "name": "John Updated",
      "email": "johnupdated@example.com",
      "age":"22"
    }
  }
  ```



