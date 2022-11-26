import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const signinHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLIO2uNqMm1p9cLp07akv3EmjMlh8Oxzg",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let errorMessage = "Incorrect email or password";
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        authCtx.displayName(data.displayName);

        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);

        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <div className="h-screen bg-gray-300">
        <header className="w-10">
          <Link
            className="font-sans text-4xl font-bold cursor-pointer hoverFillSignUp hover:bg-left"
            to="/"
          >
            TRACKr
          </Link>
        </header>
        <section className="text-gray-600">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-10 text-center">
              <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                Welcome back to TRACKr!
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep.
              </p>
            </div>
            <form
              onSubmit={signinHandler}
              className="flex flex-col items-center w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:space-x-4 sm:space-y-0 sm:px-0"
            >
              <div className="relative">
                <label
                  htmlFor="email"
                  className="ml-3 text-sm leading-7 text-gray-600"
                >
                  E-mail
                </label>
                <br />
                <input
                  ref={emailRef}
                  type="text"
                  id="email"
                  name="email"
                  className="w-[16.1rem] ml-[0.6rem] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-sm leading-7 text-gray-600"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  name="password"
                  className="w-[97%] mb-5 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {!loading && (
                <button className="ml-[35.3rem] text-white bg-[#3cd157] border-0 py-2 px-8 focus:outline-none hover:bg-[#35bd4e] rounded text-lg transition-all duration-300 ease-in-out">
                  Login
                </button>
              )}
              {loading && <p className="text-center">Sending request...</p>}
              <br />
              <p className="mt-1 text-xs text-center text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-black underline active:text-black hover:text-gray-600"
                >
                  Sign up
                </Link>{" "}
                here.
              </p>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Login;
