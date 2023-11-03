import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {

    const item = useLoaderData();
    const {_id , title, price, img} = item
    const {user} = useContext(AuthContext);

    const handleBookServivce = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const order = {
        customerName : name,
        img,
        email,
        date,
        service : title,
        service_id : _id,
        price: price
      }
      console.log(order);

      fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('successfully booked service')
        }
      })
    }

    return (
        <div>
            <h2>Booked : {title}</h2>     
            <form className="card-body" onSubmit={handleBookServivce}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due ammount</span>
                  </label>
                  <input type="text" defaultValue={"$ " + price} name="password" className="input input-bordered" required />
                </div>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
              </form>       
        </div>
    );
};

export default Checkout;