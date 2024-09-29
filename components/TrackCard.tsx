import { useTrack } from "@/hooks/useTrack";
import { isURL } from "@/lib/helper";
import { Track } from "@/lib/types"

interface TrackCardProps {
    track_index: number;
    size?: 'small' | 'medium' | 'large';
}

export default function TrackCard({ track_index, size }: TrackCardProps) {
    const track: Track = useTrack(track_index);

    console.log(track);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {isURL(track.image) ? (
                <img
                    style={{
                        borderRadius: '8px',
                    }}
                    src={track.image}
                    width={size === 'small' ? 64 : size === 'medium' ? 200 : 300}
                />
            ) : (
                <img
                    style={{
                        borderRadius: '8px',
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADKCAMAAAC7SK2iAAAAA1BMVEVHSUiLE5txAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeDMYOAAEnHI17AAAAAElFTkSuQmCC"
                    width={size === 'small' ? 64 : size === 'medium' ? 200 : 300}
                />
            )}

            <p style={{
                fontSize: size === 'small' ? 12 : size === 'medium' ? 18 : 24,
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '0 10px',
                maxWidth: size === 'small' ? 100 : size === 'medium' ? 200 : 300,
            }}>{track.name}</p>

            {track.preview && (
                <audio controls style={{
                    width: size === 'small' ? 100 : size === 'medium' ? 200 : 300,
                    marginTop: 10,
                }}>
                    <source src={track.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};