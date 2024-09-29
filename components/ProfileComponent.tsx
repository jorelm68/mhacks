import { useProfile } from "@/hooks/useProfile";
import { Profile } from "@/lib/types";
import { useRouter } from "next/router";

interface ProfileProps {
    profile_id: string;
}

export default function ProfileComponent({ profile_id }: ProfileProps) {
    const router = useRouter();
    const profile: Profile = useProfile(profile_id);

    if (profile.activeGame) {
        router.push('/game');
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile component</p>
            <p>Username: {profile.username}</p>
            <p>Games: {profile.games}</p>
        </div>
    )
}