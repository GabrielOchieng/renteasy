// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import Sidebar from "./Sidebar";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useLogoutMutation } from "../redux/slices/usersApiSlice";
// import { logOut } from "../redux/slices/AuthSlice";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home"); // Default active item
//   const { userInfo } = useSelector((state) => state.auth);

//   const userId = userInfo?.user._id;

//   const items = [
//     {
//       name: "Home",
//       url: "/",
//     },
//     {
//       name: "Rentals",
//       url: "/houses",
//     },
//     {
//       name: "My houses",
//       url: `/${userId}/houses`,
//     },
//     {
//       name: "Chats",
//       url: "/chats",
//     },
//   ];

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const dispatch = useDispatch();
//   const [logOutApiCall] = useLogoutMutation();

//   const logOutHandler = async () => {
//     try {
//       await logOutApiCall().unwrap();
//       dispatch(logOut());
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bg-white w-full flex justify-between pl-5 shadow-md">
//       {isOpen && (
//         <Sidebar
//           toggleSidebar={toggleSidebar}
//           isOpen={isOpen}
//           userId={userId}
//         />
//       )}
//       <div className="flex gap-2 py-4 items-center">
//         <button onClick={toggleSidebar}>
//           <HiOutlineMenuAlt1 className="text-2xl font-bold cursor-pointer" />
//         </button>
//         <p>Menu</p>
//       </div>
//       {isOpen ? null : (
//         <Link to="/">
//           <h1 className="font-bold text-2xl mr-2 text-green-400 py-4">
//             RENTEASY
//           </h1>
//         </Link>
//       )}
//       <div className="hidden md:flex gap-3">
//         {items.map((item, index) => (
//           <Link
//             to={item.url}
//             key={index}
//             onClick={() => setActiveItem(item.name)}
//             className={`py-4 ${
//               activeItem === item.name
//                 ? "text-green-700 font-semibold"
//                 : "hover:text-green-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}

//         {userInfo ? (
//           <div className="py-4 px-5 flex gap-2">
//             <Link to="/" onClick={logOutHandler}>
//               Logout
//             </Link>
//           </div>
//         ) : (
//           <div className="py-4 px-5">
//             <Link to="/login">Sign in</Link>
//           </div>
//         )}
//         <div className="bg-gray-700 py-5 px-5">
//           <Link
//             to={userInfo ? "/create" : "/login"}
//             className="text-green-400 hover:underline"
//           >
//             Add Property
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import Sidebar from "./Sidebar";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useLogoutMutation } from "../redux/slices/usersApiSlice";
// import { logOut } from "../redux/slices/AuthSlice";
// import { jwtDecode } from "jwt-decode";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home"); // Default active item
//   const { userInfo } = useSelector((state) => state.auth);

//   const userId = userInfo?.user._id;
//   const token = userInfo?.token;

//   const items = [
//     {
//       name: "Home",
//       url: "/",
//     },
//     {
//       name: "Rentals",
//       url: "/houses",
//     },
//     {
//       name: "My houses",
//       url: `/${userId}/houses`,
//     },
//     {
//       name: "Chats",
//       url: "/chats",
//     },
//   ];

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const dispatch = useDispatch();
//   const [logOutApiCall] = useLogoutMutation();

//   const logOutHandler = async () => {
//     try {
//       await logOutApiCall().unwrap();
//       dispatch(logOut());
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     // Check token expiration
//     const checkTokenExpiration = () => {
//       if (token) {
//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000; // Current time in seconds
//         if (decodedToken.exp < currentTime) {
//           logOutHandler();
//         }
//       }
//     };

//     checkTokenExpiration();
//   }, [token, logOutHandler]);

//   return (
//     <div className="bg-white w-full flex justify-between pl-5 shadow-md">
//       {isOpen && (
//         <Sidebar
//           toggleSidebar={toggleSidebar}
//           isOpen={isOpen}
//           userId={userId}
//         />
//       )}
//       <div className="flex gap-2 py-4 items-center">
//         <button onClick={toggleSidebar}>
//           <HiOutlineMenuAlt1 className="text-2xl font-bold cursor-pointer" />
//         </button>
//         <p>Menu</p>
//       </div>
//       {isOpen ? null : (
//         <Link to="/">
//           <h1 className="font-bold text-2xl mr-2 text-green-400 py-4">
//             RENTEASY
//           </h1>
//         </Link>
//       )}
//       <div className="hidden md:flex gap-3">
//         {items.map((item, index) => (
//           <Link
//             to={item.url}
//             key={index}
//             onClick={() => setActiveItem(item.name)}
//             className={`py-4 ${
//               activeItem === item.name
//                 ? "text-green-700 font-semibold"
//                 : "hover:text-green-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}

//         {userInfo ? (
//           <div className="py-4 px-5 flex gap-2">
//             <Link to="/" onClick={logOutHandler}>
//               Logout
//             </Link>
//           </div>
//         ) : (
//           <div className="py-4 px-5">
//             <Link to="/login">Sign in</Link>
//           </div>
//         )}
//         <div className="bg-gray-700 py-5 px-5">
//           <Link
//             to={userInfo ? "/create" : "/login"}
//             className="text-green-400 hover:underline"
//           >
//             Add Property
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";
import { logOut } from "../redux/slices/AuthSlice";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item
  const { userInfo } = useSelector((state) => state.auth);

  const userId = userInfo?.user._id;
  const token = userInfo?.token;

  const items = [
    { name: "Home", url: "/" },
    { name: "Rentals", url: "/houses" },
    { name: "My houses", url: `/${userId}/houses` },
    { name: "Chats", url: "/chats" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const [logOutApiCall] = useLogoutMutation();
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Track logout status

  const logOutHandler = async () => {
    if (isLoggingOut) return; // Prevent multiple logout attempts

    setIsLoggingOut(true); // Set the flag to true

    try {
      await logOutApiCall().unwrap();
      dispatch(logOut());
    } catch (err) {
      console.error("Logout Error:", err);
    } finally {
      setIsLoggingOut(false); // Reset the flag after the call
    }
  };

  useEffect(() => {
    // Check token expiration
    const checkTokenExpiration = () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp < currentTime) {
          logOutHandler();
        }
      }
    };

    checkTokenExpiration();
  }, [token, logOutHandler]);

  return (
    <div className="bg-white w-full flex justify-between pl-5 shadow-md">
      {isOpen && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          isOpen={isOpen}
          userId={userId}
        />
      )}
      <div className="flex gap-2 py-4 items-center">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt1 className="text-2xl font-bold cursor-pointer" />
        </button>
        <p>Menu</p>
      </div>
      {isOpen ? null : (
        <Link to="/">
          <h1 className="font-bold text-2xl mr-2 text-green-400 py-4">
            RENTEASY
          </h1>
        </Link>
      )}
      <div className="hidden md:flex gap-3">
        {items.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            onClick={() => setActiveItem(item.name)}
            className={`py-4 ${
              activeItem === item.name
                ? "text-green-700 font-semibold"
                : "hover:text-green-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
        {userInfo ? (
          <div className="py-4 px-5 flex gap-2">
            <Link to="/" onClick={logOutHandler}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="py-4 px-5">
            <Link to="/login">Sign in</Link>
          </div>
        )}
        <div className="bg-gray-700 py-5 px-5">
          <Link
            to={userInfo ? "/create" : "/login"}
            className="text-green-400 hover:underline"
          >
            Add Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
