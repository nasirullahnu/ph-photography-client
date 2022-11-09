import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {googleLogin, createUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()


    // login with google
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((res) => res.json())
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

//   create user with name, email and password 
const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)
    createUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(e => console.error(e))
}

    return (
        <div className="hero w-full my-20">
      <div className="hero-content ">
        <div className="card flex-shrink-0 py-5 w-full shadow-2xl bg-white">
          <h1 className="text-5xl font-bold text-center text-black">
            Registration!
          </h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                <Link to="/register" className="label-text-alt link link-hover text-black">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
            <button onClick={handleGoogleLogin} className="btn mx-8">
                Google
            </button>
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

export default SignUp;