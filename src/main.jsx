import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store, { persistor } from "./redux/store.js";
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
import UserHousesPage from "./pages/UserHousesPage.jsx";
import { PersistGate } from "redux-persist/integration/react";
import AboutUs from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/houses/:houseId" element={<HouseDetails />} />
      <Route path="/houses" element={<HouseListPage />} />
      <Route path="/filter/:filter" element={<SelectedItems />} />
      <Route path="/about" element={<AboutUs />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/create" element={<HouseForm />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/:userId/houses" element={<UserHousesPage />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
