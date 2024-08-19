// "use client";

// import { useEffect, useState } from "react";
// import backgroundImg from "../assets/images/backgroundImg.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation } from "../redux/slices/usersApiSlice";
// import { setCredentials } from "../redux/slices/AuthSlice";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, { isLoading }] = useLoginMutation();
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (userInfo) {
//       navigate("/");
//     }
//   }, [navigate, userInfo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate("/");
//     } catch (err) {
//       toast.error(err?.data?.message || err.data);
//     }
//   };

//   return (
//     <div
//       className="flex min-h-screen items-center justify-center bg-gray-100"
//       style={{
//         backgroundImage: `url(${backgroundImg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
//         <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-medium mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               autoComplete="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               autoComplete="current-password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//             />
//           </div>
//           {isLoading && <>Loading...</>}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//           >
//             Login
//           </button>
//           <p className="text-sm text-center mt-4">
//             Do not have an account?{" "}
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/slices/usersApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
// import FadeLoader from "react-spinners/FadeLoader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming login function returns a Promise that resolves with the response data
      const res = await login({ email, password });

      // Check for successful login and presence of token in response
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      } else {
        // Handle unsuccessful login (e.g., display error message)
        toast.error(res.data?.message || "Login failed");
        return; // Exit the function if login fails
      }

      const headers = {
        "Content-Type": "application/json", // Assuming JSON data
      };

      // Add Authorization header only if token is present
      if (localStorage.getItem("token")) {
        headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      }

      dispatch(setCredentials({ ...res.data }));
      navigate("/");
    } catch (err) {
      toast.error("Invalid Email or Password");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg shadow-md px-8 py-12 w-[90%] md:w-1/3">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Login to view more information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {isLoading ? (
            <div className="text-center mt-4">
              {/* <FadeLoader
                color={"#3498db"}
                size={80}
                className="mx-auto block"
              />{" "} */}

              <p>Loading</p>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full rounded-md bg-orange-500 py-2 text-center text-white font-bold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:offset-2 focus:ring-blue-500"
              disabled={!email || !password}
            >
              Login
            </button>
          )}

          <div className="text-center mt-2">
            <p>
              Not Registered?{" "}
              <span>
                {" "}
                <Link to="/register" className="text-gray-500 hover:underline">
                  SignUp
                </Link>{" "}
              </span>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
