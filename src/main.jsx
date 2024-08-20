import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Signup from "./pages/SignUpPage.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import HouseForm from "./pages/HouseFormPage.jsx";
import HouseDetails from "./pages/HouseDetails.jsx";
import HouseListPage from "./pages/HouseListPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SelectedItems from "./pages/SelectedItemsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/create" element={<HouseForm />} />
        <Route path="/houses/:houseId" element={<HouseDetails />} />
        <Route path="/houses" element={<HouseListPage />} />
        <Route path="/filter/:filter" element={<SelectedItems />} />
        <Route path="/chats" element={<ChatPage />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
