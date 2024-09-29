import { useSong } from "@/hooks/useSong";
import { Song } from "@/lib/types"

interface TrackCardProps {
    track_id: string;
  }
  
const TrackCard: React.FC<TrackCardProps> = ({ track_id }) => {
    const song: Song = useSong(track_id);

    return (
        <div className="song-card bg-gray-800 p-4 rounded-lg shadow-md text-white">
            {/* Album Art */}
            <img
                src={song.image}
                alt={song.album}
                className="w-32 h-32 object-cover rounded-md mb-4"
            />

            {/* Song Info */}
            <div className="song-info">
                <h2 className="text-xl font-bold">{song.name}</h2>
                <p className="text-md text-gray-400">{song.artist}</p>
                <p className="text-sm text-gray-500 italic">{song.album}</p>

                {/* Preview Button */}
                {song.preview && (
                <audio controls className="mt-4">
                    <source src={song.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                )}
            </div>
        </div>
    );
};

export default TrackCard;