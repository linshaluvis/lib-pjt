import React, { useEffect, useState } from 'react';
import './userhome.css'
import UserNavbar from '../usernavbar/usernavbar'; 
import axios from 'axios';
// import SearchForm from '../search/SearchForm';
import { Link,redirect,useNavigate } from 'react-router-dom';



function UserHome() {
  const [categories, setCategories] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the categories!', error);
            });

        axios.get('http://localhost:8000/api/books/')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
      <div>
       
        <UserNavbar/>
        WELCOME User
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.category_name}</li>
                ))}
            </ul>

            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.book} by {book.author} (Category: {book.category.category_name})
                    </li>
                ))}
            </ul>
        </div>
        </div>

    );
}

 




//   return (
//       <div>
       
//         <UserNavbar/>
//         WELCOME User
//         <div>
//       {/*        <SearchForm onSearch={handleSearch} />
//  */}
//     </div>
  
//     </div>
//   );
// }
export default UserHome;