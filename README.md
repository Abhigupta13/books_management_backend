Sure, here's the list of APIs formatted for a README file:

### API Endpoints

1. **Register**
   - **Method:** POST
   - **URL:** `http://localhost:3000/auth/register`
   - **Request Body:**
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```

2. **Login**
   - **Method:** POST
   - **URL:** `http://localhost:3000/auth/login`
   - **Request Body:**
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
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

4. **Upload Books via CSV**
   - **Method:** POST
   - **URL:** `http://localhost:3000/books/upload`
   - **Headers:** `Authorization: Bearer <token>`
   - **Form Data:** `file: <CSV File>`

5. **Get All Books**
   - **Method:** GET
   - **URL:** `http://localhost:3000/books/`

6. **Get Book by ID**
   - **Method:** GET
   - **URL:** `http://localhost:3000/books/:id`

7. **Update a Book**
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

8. **Delete a Book**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/books/:id`
   - **Headers:** `Authorization: Bearer <token>`

Copy and paste the above section into your README file to provide a clear and styled documentation for your API endpoints.