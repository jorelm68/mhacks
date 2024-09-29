import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import NavControls from '@/components/NavControls'
import ProgressBar from '@/components/ProgressBar'
import TrackCard from '@/components/TrackCard'
import { Track } from "@/lib/types"

interface ExtendedTrack {
    id: string;
    name: string;
    artist: string;
    albumArt: string;
    danceability: number;
    energy: number;
    loudness: number;
    speechiness: number;
    acousticness: number;
    instrumentalness: number;
    liveness: number;
    valence: number;
    tempo: number;
    timeSignature: number;
    popularity: number;
  }
  
  const mockTracks: ExtendedTrack[] = [
    {
      id: '1',
      name: "Neon Nights",
      artist: "Cyber Synth",
      albumArt: "/placeholder.svg?height=300&width=300",
      danceability: 0.8,
      energy: 0.9,
      loudness: -5.5,
      speechiness: 0.1,
      acousticness: 0.2,
      instrumentalness: 0.7,
      liveness: 0.3,
      valence: 0.6,
      tempo: 128,
      timeSignature: 4,
      popularity: 75
    },
    {
      id: '2',
      name: "Digital Dreams",
      artist: "Electro Wave",
      albumArt: "/placeholder.svg?height=300&width=300",
      danceability: 0.7,
      energy: 0.8,
      loudness: -6.2,
      speechiness: 0.05,
      acousticness: 0.3,
      instrumentalness: 0.6,
      liveness: 0.2,
      valence: 0.7,
      tempo: 120,
      timeSignature: 4,
      popularity: 80
    },
    {
      id: '3',
      name: "Synthwave Symphony",
      artist: "Neon Pulse",
      albumArt: "/placeholder.svg?height=300&width=300",
      danceability: 0.6,
      energy: 0.7,
      loudness: -7.0,
      speechiness: 0.03,
      acousticness: 0.4,
      instrumentalness: 0.8,
      liveness: 0.1,
      valence: 0.5,
      tempo: 110,
      timeSignature: 4,
      popularity: 70
    }
  ]

  const getNextTrack = (currentTrack: ExtendedTrack, attribute: keyof ExtendedTrack, increase: boolean) => {
    if (!currentTrack) return null;
    const newValue = increase
      ? Math.min(currentTrack[attribute] as number + 0.1, 1)
      : Math.max(currentTrack[attribute] as number - 0.1, 0);
    return { ...currentTrack, [attribute]: newValue };
  };
  
  const calculateProgress = (currentIndex: number, totalTracks: number) => {
    return (currentIndex / (totalTracks - 1)) * 100;
  };

  