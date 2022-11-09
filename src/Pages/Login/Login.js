import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // logIn(email, password)
        // .then(result => {
        //     const user = result.user
        //     console.log(user)
        // })
        // .catch(error => console.error(error))
    }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-15 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          {/* <img className="w-3/4" src={img} alt="" /> */}
        </div>
        <div className="card flex-shrink-0 py-5 w-full max-w-sm shadow-2xl bg-white">
          <h1 className="text-5xl font-bold text-center text-black">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className="form-control mt-6">
                <FaGoogle></FaGoogle>
              <input className="btn btn-primary" type="submit" value="Google" />
            </div>
          </form>
          <p className="text-center text-black">
            New to this site?{" "}
            <Link className="text-orange-500 font-bold" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
