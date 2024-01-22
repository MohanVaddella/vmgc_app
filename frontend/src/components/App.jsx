import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import VideoUpload from "./VideoUpload";
import Hemanth from "./Hemanth";
import TheaterModel from "./TheaterModel";
import NotFound from "./NotFound";
import Home from "./Home";
import Profile from "./Profile";
import VideoGallery from "./VideoGallery";
import GenreCatalogue from "./GenreCatalogue";
import Analytics from "./Analytics";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "../middleware/auth";

// Use the Register component in your application
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route
          path="/videoupload"
          element={
            <ProtectRoute>
              <VideoUpload />
            </ProtectRoute>
          }
        />
        <Route path="/videogallery" element={<ProtectRoute>
              <VideoGallery />
            </ProtectRoute>} />
        <Route path="/genrecatalogue" element={<GenreCatalogue />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/hemanth" element={<Hemanth />} />
        <Route path="/theatermodel" element={<TheaterModel />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />

        {/* Add other components based on the route */}
      </Routes>
    </div>
  );
}

export default App;
