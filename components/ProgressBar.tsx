import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';

const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(0);

 // change with path finder distance function
  const handleProgressIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div>
      <h1>React Bootstrap Progress Bar</h1>
      <ProgressBar now={progress} label={`${progress}%`} />
      <Button onClick={handleProgressIncrease} style={{ marginTop: '20px' }}>
        Increase Progress
      </Button>
    </div>
  );
};

export default ProgressBarComponent;