import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProfileCard from "./components/Profile/ProfileCard.jsx";
import DevTinderLogin from "./components/Auth/login.jsx";
import Home from "./components/Screen/Home.jsx";
import { Provider } from "react-redux";
import store from "./Utils/store.js";
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import ProfileUpdatePage from "./components/Profile/ProfileUpdatePage.jsx";
import ConnectionRequestsPage from "./components/Request/ConnectionRequestsPage.jsx";
import ConnectionsPage from "./components/Request/ConnectionsPage.jsx";
import DevTinderContact from "./components/Contact/contactUs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<DevTinderLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profile/edit" element={<ProfileUpdatePage/>}/>
        <Route path="/request" element ={<ConnectionRequestsPage/>}/>
        <Route path="/connection" element={<ConnectionsPage/>}/>
        <Route path="/contact" element={<DevTinderContact/>}/>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
