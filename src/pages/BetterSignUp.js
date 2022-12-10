import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BetterSignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);

    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLIO2uNqMm1p9cLp07akv3EmjMlh8Oxzg",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
          displayName: name,
        }),
      }
    );

    setIsLoading(false);

    if (res.ok) {
      console.log(res);
    } else {
      const data = await res.json();
      let errorMessage = "Auhentication failed";
      if (data?.error?.message) {
        errorMessage = data.error.message;
      }
      alert(errorMessage);
    }

    navigate("/login");
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
        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap items-center px-5 pt-16 pb-24 mx-auto">
            <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
              <h1 className="text-3xl font-medium text-gray-900 title-font">
                Join us today, track your fitness journey forever!
              </h1>
              <p className="mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <form
              onSubmit={signUpSubmitHandler}
              className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto"
            >
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                Sign Up
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
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
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              {!isLoading && (
                <button className="text-white bg-[#3cd157] border-0 my-1 py-2 px-8 focus:outline-none hover:bg-[#35bd4e] rounded text-lg transition-all duration-300 ease-in-out">
                  Sign up
                </button>
              )}
              {isLoading && <p className="text-center">Sending request...</p>}
              <p className="mt-2 text-xs text-center text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-black underline active:text-black hover:text-gray-600"
                >
                  Log in
                </Link>{" "}
                instead.
              </p>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default BetterSignUp;
