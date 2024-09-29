import { useTrack } from "@/hooks/useTrack";
import { isURL } from "@/lib/helper";
import { Track } from "@/lib/types"

interface TrackCardProps {
    track_index: number;
  }
  
const TrackCard: React.FC<TrackCardProps> = ({ track_index }) => {
    const track: Track = useTrack(track_index);

    return (
        <div className="song-card bg-gray-800 p-4 rounded-lg shadow-md text-white">
            {/* Album Art */}
            {isURL(track.image) ? (
                <img
                    src={track.image}
                    alt={track.album}
                    className="w-32 h-32 object-cover rounded-md mb-4"
                />
            ) : (
                <div className="w-32 h-32 bg-gray-700 rounded-md mb-4"></div>
            )}

            {/* Song Info */}
            <div className="song-info">
                <h2 className="text-xl font-bold">{track.name}</h2>
                <p className="text-md text-gray-400">{track.artist}</p>
                <p className="text-sm text-gray-500 italic">{track.album}</p>

                {/* Preview Button */}
                {track.preview && (
                <audio controls className="mt-4">
                    <source src={track.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                )}
            </div>
        </div>
    );
};

export default TrackCard;