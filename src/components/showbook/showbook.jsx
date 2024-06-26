import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './showbook.css'; 
import AdminNavbar from '../adminnavbar/adminnavbar'; 
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';



const Showbook = () => {
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
    const handleDelete = (id, bookName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete "${bookName}"?`);
        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/books/${id}/`)
                .then(response => {
                    // Remove the deleted book from the book list
                    setBooks(books.filter(book => book.id !== id));
                })
                .catch(error => {
                    console.error('Error deleting book:', error);
                });
        }
    };
    

    return (
        <div>
       
    <AdminNavbar/>
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.category_name}</li>
                ))}
            </ul>

            <h1 className='text-center'>Books</h1>
            
            <Grid container spacing={2} direction="row">
                    {books.map(book => (
                        <Grid item xs={12} sm={6} md={4} key={book.id}>
                            <div className="book-item">
                                <div className="book-image">
                                    {book.image && <img src={book.image} alt={book.title} />}
                                </div>
                                <div className="book-details">
                                    <div className="book-title">{book.book}</div>
                                    <div className="book-author">by {book.author}</div>
                                    <div className="book-price">₹ {book.price}</div>
                                    <div className="book-category">Category: {book.category.category_name}</div>
                                    <br></br>
                                    <div className="button-container">
                                        <Link to={`/edit/${book.id}`} className="edit-button">Edit</Link>
                                        <button onClick={() => handleDelete(book.id, book.book)} className="delete-button">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
        </div>
        </div>

    );
}

export default Showbook;
