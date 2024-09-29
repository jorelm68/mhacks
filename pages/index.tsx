// If you are logged in, two buttons:
// Create a new game
// Join a game

import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
import ProgressBar from "@/components/ProgressBar";
//import NavigationControls from "@/components/Controls";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import CyberwaveSongGame from './test';

import api from "@/lib/api";
import { Res, Song } from "@/lib/types";
import { setProfileId } from "@/redux/global.reducer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavControls from "@/components/NavControls";
import { useSong } from "@/hooks/useSong";
import SongCard from "@/components/SongCard";
//import { Dropdown } from "react-bootstrap";

export default function Home() {
  const router = useRouter();
  const [canCreateGame, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [profile_id, set_profile_id] = useState<string | null>(null);

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

  const [name, setName] = useState('gamey');

  const handleCreateGame = async () => {
    if (!name || !profile_id) {
      return;
    }
    setLoading(true);

    const res: Res = await api.game.create(name, profile_id);

    if (res.success) {
      router.push(`/game`);
    } else {
      console.error(res.errorMessage);
    }

    setLoading(false);
  };

  const song: Song = useSong('11dFghVXANMlKmJXsNCbNl');

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
      <CyberwaveSongGame />

      {!canCreateGame && <p>You cannot create a new game</p>}
      {canCreateGame && (
        <div>
          <input type="text" placeholder="Game Name" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleCreateGame}>Create Game</button>
        </div>
      )}

      {song && (
        <div>
          <h2>{song.name}</h2>
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <img src={song.image} alt={song.name} />
        </div>
      )}
    </>
  );
}

