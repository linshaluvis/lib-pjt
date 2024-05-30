import React, { useEffect, useState } from 'react';
import './userhome.css'
import UserNavbar from '../usernavbar/usernavbar'; 
import axios from 'axios';
import SearchForm from '../search/SearchForm';
import { Link,redirect,useNavigate } from 'react-router-dom';



function UserHome() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSearch = (searchResults) => {
    setProducts(searchResults);
  };

  // Fetch initial data or when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get('/api/books/'),
          axios.get('/api/categories/'),
        ]);
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




  return (
      <div>
       
        <UserNavbar/>
        WELCOME User
        <div>
      <SearchForm onSearch={handleSearch} />
      {/* Render products and categories */}
    </div>
  
    </div>
  );
}
export default UserHome;