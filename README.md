### Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Abhigupta13/books_management_backend.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd books_management_backend
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Change DB config**
   `from src/config/config.json`

5. **Run Migrations**

   ```sh
   npx sequelize db:migrate
   ```

6. **Start the Application**

   ```sh
   npm start
   ```

That's it! Your application should now be running on `http://localhost:3000`.

### API Endpoints

1. **Register**
   - **Method:** POST
   - **URL:** `http://localhost:3000/auth/register`
   - **Request Body:**
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123",
       "role" : "user" or "seller"
     }
     ```

2. **Login**
   - **Method:** POST
   - **URL:** `http://localhost:3000/auth/login`
   - **Request Body:**
     ```json
     {
       "email": "john@example.com",
       "password": "password123",
       "role" : "user" or "seller"
     }
     ```

3. **Create a Book**
   - **Method:** POST
   - **URL:** `http://localhost:3000/books/create`
   - **Headers:** `Authorization: Bearer <token>`
   - **Request Body:**
     ```json
     {
       "title": "Book Title",
       "author": "Author Name",
       "price": 19.99,
       "publishedDate": "2023-05-25"
     }
     ```

4. ***Upload Books via CSV***
   - **Method:** POST
   - **URL:** `http://localhost:3000/books/upload`
   - **Headers:** `Authorization: Bearer <token>`
   - **Form Data:** `file: <CSV File>`

5. **Get All Books**
   - **Method:** GET
   - **URL:** `http://localhost:3000/books/`

6. **Get My Books**
   - **Method:** GET
   - **URL:** `http://localhost:3000/books/mybooks`
   - **Headers:** `Authorization: Bearer <token>`

7. **Get Book by ID**
   - **Method:** GET
   - **URL:** `http://localhost:3000/books/:id`

8. **Update a Book**
   - **Method:** PUT
   - **URL:** `http://localhost:3000/books/update/:id`
   - **Headers:** `Authorization: Bearer <token>`
   - **Request Body:**
     ```json
     {
       "title": "Updated Title",
       "author": "Updated Author",
       "price": 29.99,
       "publishedDate": "2023-06-15"
     }
     ```

9. **Delete a Book**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/books/:id`
   - **Headers:** `Authorization: Bearer <token>`

