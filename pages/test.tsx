import React from 'react'
//import TrackCard from './TrackCard'
import Dropdown from '@/components/Dropdown'
import NavControls from '@/components/NavControls'
import ProgressBar from '@/components/ProgressBar'
import Button from '@/components/Button'

const dummyTrack = {
  name: "Neon Nights",
  artist: "Cyber Synth",
  albumArt: "/placeholder.svg?height=300&width=300",
  danceability: 0.8,
}

export default function CyberwaveSongGame() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 p-4">
      <div className="max-w-4xl w-full p-6 bg-black bg-opacity-50 rounded-lg shadow-lg text-cyan-300 border border-cyan-500">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Cyberwave Song Navigator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Dropdown />
            <NavControls />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Current Danceability</h3>
              <p className="text-2xl font-bold text-pink-500">0.80</p>
            </div>
            <ProgressBar />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-1 text-pink-400">Start Track</h3>
            <p>Neon Nights - Cyber Synth</p>
          </div>
          <div>
            <h3 className="font-medium mb-1 text-pink-400">End Track</h3>
            <p>Digital Dreams - Electro Wave</p>
          </div>
        </div>

        <Button 
          onClick={() => alert('Game Over!')} 
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white"
        >
          End Game
        </Button>
      </div>
    </div>
  )
}