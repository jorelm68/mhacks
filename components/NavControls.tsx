import React from 'react'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import Button from "@/components/Button"
import exp from 'constants';

interface NavControlsProps {
    selectedAttribute: string; // or a more specific type if applicable
    onAttributeChange: (increase: boolean) => void; // function type
}

const NavControls: React.FC<NavControlsProps> = ({ selectedAttribute, onAttributeChange }) => {
    return (
      <div className="flex justify-between items-center mb-6">
        <Button onClick={() => onAttributeChange(false)} className="bg-pink-600 hover:bg-pink-700 text-white">
          <ChevronLeft className="mr-2 h-4 w-4" /> Decrease
        </Button>
        <div className="flex flex-col items-center">
          <ChevronUp className="h-6 w-6 text-cyan-400" />
          <p className="my-1 text-sm">{selectedAttribute}</p> {/* Display the current value */}
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </div>
        <Button onClick={() => onAttributeChange(true)} className="bg-pink-600 hover:bg-pink-700 text-white">
          Increase <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
}

export default NavControls;