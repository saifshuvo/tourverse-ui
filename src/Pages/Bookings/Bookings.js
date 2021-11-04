import React, { useEffect, useState } from 'react';
import useAuths from '../../Hooks/useAuths';
import './Bookings.css';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const {user} = useAuths();

    useEffect(() => {
        fetch(`http://localhost:7000/bookings/`)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);

    return (
        <section id="bookings">
            <h2 className="text-5xl mb-10">All of your bookings</h2>
            <div className="container mx-auto">
                <div className="grid">
                    <table style={{"width": "100%"}} id="resort-table"> 
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Resort Name</th>
                            <th className="w-1/4">Image</th>
                            <th>Location</th>
                            <th>price</th>
                            <th>Cancel</th>
                        </tr>

                        {
                            bookings.map(booking => 
                            <tr>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{booking.name}</td>
                                <td><img src={booking.img} alt="" /></td>
                                <td>{booking.location}</td>
                                <td>{booking.price}</td>
                                
                                <td><button className="px-4 py-1 bg-red-700 text-white">Cancel</button></td>

                            </tr>
                            )
                        }

                    </table>
                </div>
            </div>
        </section>
    );
};

export default Bookings;