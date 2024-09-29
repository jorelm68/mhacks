import api from "@/lib/api";
import constants from "@/lib/constants";
import { Res } from "@/lib/types";
import { setProfileId } from "@/redux/global.reducer";
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function LoggedOutNav() {
    const profile_id = useAppSelector(state => state.global.profile_id);
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={async () => { 
                if (!username) {
                    return;
                }
                const res: Res = await api.profile.authenticate(username);

                if (res.success) {
                    dispatch(setProfileId(res.data.profile._id));
                } else {
                    console.error(res.errorMessage);
                }
             }}>Authenticate</button>
        </div>
    )
}