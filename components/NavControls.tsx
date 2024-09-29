import React from 'react'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import Button from "@/components/Button"
import exp from 'constants';

const NavControls: React.FC = () => {
    return (
      <div className="flex justify-between items-center mb-6">
        <Button onClick={() => {}} className="bg-pink-600 hover:bg-pink-700 text-white">
          <ChevronLeft className="mr-2 h-4 w-4" /> Decrease
        </Button>
        <Button onClick={() => {}} className="bg-pink-600 hover:bg-pink-700 text-white">
          Increase <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
}
export default NavControls;