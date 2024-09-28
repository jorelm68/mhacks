// If you are logged in, two buttons:
// Create a new game
// Join a game

import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import ProgressBar from "@/components/ProgressBar";
//import NavigationControls from "@/components/Controls";
import Dropdown from "@/components/Dropdown";

import api from "@/lib/api";
import { Res } from "@/lib/types";
import { setProfileId } from "@/redux/global.reducer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Dropdown } from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const [profile_id, set_profile_id] = useState<string | null>(null);

  // Run upon mounting
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const username: string | null = localStorage.getItem('username');

        if (username) {
          // Authenticate
          const res: Res = await api.profile.authenticate(username); // Make sure to await the result

          if (res.success) {
            dispatch(setProfileId(res.data.profile._id));
            set_profile_id(res.data.profile._id);
          } else {
            console.error(res.errorMessage);
          }
        }
      } catch (error) {
        console.error("Error during authentication:", error);
      }
    };

    authenticateUser(); // Call the async function

  }, [dispatch]);

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <p>This is the home page</p>
      {profile_id && (
        <ProfileComponent profile_id={profile_id} />
      )}
      <ProgressBar />
      <Dropdown />
    </>
  );
}

