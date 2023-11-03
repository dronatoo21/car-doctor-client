import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const URL = `http://localhost:3000/bookings?email=${user?.email}`;
    axios.get(URL, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // useEffect(() => {
    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(data => setBookings(data))
    // }, [])

    const handleDelete = id => {
      const proceed = confirm('Are you sure you want to delete this booking');
      if(proceed){
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
              alert('Deleted successfully'); 
              const remaining = bookings.filter(booking => booking._id !== id)
              setBookings(remaining);
            }
          })  
      }
    }

    const handleConfirm = id => {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({status: 'confirm'})
      })
      .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
              const remaining = bookings.filter(booking => booking._id !== id)
              const updated = bookings.find(booking => booking._id === id)
              updated.status = 'confirm'
              const newBookings = [updated, ...remaining]
              setBookings(newBookings)
            }
          })  
    }

    return (
        <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Image</th>
                    <th>Service</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row */}
                  {
                    bookings?.map(booking => <BookingRow  handleConfirm={handleConfirm}  handleDelete={handleDelete} key={booking._id} booking={booking}></BookingRow>)
                  }
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default Bookings;