import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handlelogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(res => {
          const LoggedInUser = res?.user;
          console.log(LoggedInUser);
          const user = { email };
          
          axios.post('http://localhost:3000/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            if(res.data.success){
              navigate(location?.state ? location?.state : '/')
            }
          })
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body" onSubmit={handlelogin}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                  <p>new ? <Link to='/signup'>Sign up</Link></p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;