// React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './showmember.css'; 
import AdminNavbar from '../adminnavbar/adminnavbar';

function MemberDetails() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/memberdetails')
            .then(response => {
                setMembers(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching member details:', error);
            });
    }, []);

    return (
        <div>
       
        <AdminNavbar/>
        <div>
            <h1>Member Details</h1>
            <ul>
            {members.map(member => (
    <li key={member.id}>
        <div>{member.user.first_name}</div>
        <div>{member.user.last_name}</div>
        <div>{member.number}</div>
        <div className="book-image">
            <img src={member.image} alt="Member" />
        </div>
    </li>
))}


            </ul>
        </div>
        </div>

    );
}

export default MemberDetails;
