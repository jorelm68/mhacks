// If you are logged in, two buttons:
// Create a new game
// Join a game

import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/ProfileComponent";
//import NavigationControls from "@/components/Controls";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

import api from "@/lib/api";
import { Res, Track } from "@/lib/types";
import { setProfileId } from "@/redux/global.reducer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckGame from "@/components/CheckGame";
import { useAppSelector } from "@/redux/hooks";
//import { Dropdown } from "react-bootstrap";

export default function Home() {
  const profile_id = useAppSelector(state => state.global.profile_id);
  const router = useRouter();
  const [canCreateGame, setLoading] = useState(true);

  const [createGameName, setCreateGameName] = useState('gamey');
  const [joinGameName, setJoinGameName] = useState('gamey');

  const handleCreateGame = async () => {
    if (!createGameName || !profile_id) {
      return;
    }
    setLoading(true);

    const res: Res = await api.game.create(createGameName, profile_id);

    if (res.success) {
      router.push(`/game`);
    } else {
      console.error(res.errorMessage);
    }

    setLoading(false);
  };

  const handleJoinGame = async () => {
    if (!createGameName || !profile_id) {
      return;
    }
    setLoading(true);

    const res: Res = await api.profile.joinGame(profile_id, joinGameName);

    if (res.success) {
      router.push(`/game`);
    } else {
      console.error(res.errorMessage);
    }

    setLoading(false);
  }



  return (
    <>
      <CheckGame />
      <Navbar />
      {!canCreateGame && <p>You cannot create a new game</p>}
      {profile_id && canCreateGame && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <input type="text" placeholder="Create a Game" value={createGameName} onChange={(e) => setCreateGameName(e.target.value)} />
            <button onClick={handleCreateGame}>Create Game</button>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <input type="text" placeholder="Join a Game" value={joinGameName} onChange={(e) => setJoinGameName(e.target.value)} />
            <button onClick={handleJoinGame}>Join a Game</button>
          </div>
        </div>
      )}
    </>
  );
}

