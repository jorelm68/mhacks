import { useProfile } from "@/hooks/useProfile";
import { Profile } from "@/lib/types";

interface ProfileProps {
    profile_id: string;
}

export default function ProfileComponent({ profile_id }: ProfileProps) {
    const profile: Profile = useProfile(profile_id);

    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile component</p>
            <p>Username: {profile.username}</p>
            <p>Games: {profile.games}</p>
        </div>
    )
}