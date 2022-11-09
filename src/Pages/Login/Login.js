import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin, logIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(error => console.error(error))
  };

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

  return (
    <div className="hero w-full my-20">
      <div className="hero-content ">
        <div className="card flex-shrink-0 py-5 w-full shadow-2xl bg-white">
          <h1 className="text-5xl font-bold text-center text-black">
            Login now!
          </h1>
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

export default Login;
