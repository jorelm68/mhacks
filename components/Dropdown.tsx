import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Attribute } from '@/lib/types';

//'danceability' | 'energy' | 'loudness' | 'speechiness' | 'acousticness' | 'instrumentalness' | 'liveness' | 'valence' | 'tempo' | 'timeSignature' | 'popularity';

export default function Dropdown({ attribute, onChangeAttribute }: { attribute: string, onChangeAttribute: (attribute: Attribute) => void }) {
  // Handle change event when user selects a metric
  const handleMetricChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeAttribute(event.target.value as Attribute);  // Update state with the selected metric
  };

  return (
    <div className="container mt-4">
      <h3>Select a Metric</h3>
      <select onChange={handleMetricChange} className="form-select" aria-label="Select Metric">
        <option value="" disabled selected>Select a song</option>
        <option value="song1">Popularity</option>
        <option value="song2">Danceability</option>
        <option value="song3">Energy</option>
        <option value="song4">Loudness</option>
        <option value="song5">Speechiness</option>
        <option value="song6">Acousticness</option>
        <option value="song7">Instrumentalness</option>
        <option value="song8">Liveness</option>
        <option value="song9">Valence</option>
        <option value="song10">Tempo</option>
        <option value="song11">Time Signature</option>
      </select>
    </div>
  );
};
