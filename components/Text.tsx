import constants from "@/lib/constants";

interface TextProps {
    children: string;
    style?: object;
}

export default function Text({ children, style }: TextProps) {

    return (
        <p style={{
            // I need to add a new font from google fonts
            fontFamily: 'Rubik Dirt',
            color: constants.BRIGHT_PINK,
            ...style,
        }}>{children}</p>
    );
}