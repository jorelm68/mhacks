import constants from "@/lib/constants";

export default function Backdrop() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        }}>
            <img src={"https://i.imgur.com/9GgS6NS.png"} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }} />
        </div>
    )
}