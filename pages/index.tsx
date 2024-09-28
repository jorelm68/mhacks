// If you are logged in, two buttons:
// Create a new game
// Join a game

import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { Res } from "@/lib/types";
import { setProfileId } from "@/redux/global.reducer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  // Function to check local storage for tokens and get the stored user
  const checkLocalStorageForTokens = () => {
    const storedAccessToken = localStorage.getItem('access_token');
    const storedRefreshToken = localStorage.getItem('refresh_token');
    const storedUsername = localStorage.getItem('username');

    if (!storedUsername) {
      return;
    }

    setUsername(storedUsername);
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  };

  // Run upon mounting
  useEffect(() => {
    checkLocalStorageForTokens();
  }, [])

  const authenticateUsername = async (username: string) => {
    const res: Res = await api.profile.authenticate(username);
    if (res.success) {
      return res.data; // profile_id
    } else {
      console.error(res.errorMessage);
    }
  }

  // Function to get the profile_id from the backend from the username
  useEffect(() => {
    if (username) {
      authenticateUsername(username).then(profile_id => {
        dispatch(setProfileId(profile_id));
      });
    }
  }, [username])

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <p>This is the home page</p>
    </>
  );
}
