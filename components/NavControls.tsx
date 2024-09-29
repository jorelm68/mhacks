import React from 'react'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import Button from "@/components/Button"
import exp from 'constants';

export default function NavControls({ onIncrease, onDecrease }: { onIncrease: () => void, onDecrease: () => void }) {

    return (
      <div className="flex justify-between items-center mb-6">
        <button onClick={onDecrease} className="bg-pink-600 hover:bg-pink-700 text-white">
          <ChevronLeft className="mr-2 h-4 w-4" /> Decrease
        </button>
        <button onClick={onIncrease} className="bg-pink-600 hover:bg-pink-700 text-white">
          Increase <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    )
}