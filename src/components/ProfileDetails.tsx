import { useEffect, useState } from "react";
import profileImg from "../assets/images/profile-img.webp";
import axios from "axios";
import useAuth from "./UseAuth";

function ProfileDetails() {
  interface ProfileBody {
    email: string;
    image: string;
    full_name: string;
  }

  const [getProfile, setProfile] = useState<ProfileBody[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const getDataUser = async () => {
      const url = "https://coffee-shop-three-omega.vercel.app/user";
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [token]);

  return (
    <div>
      {getProfile.map((user) => (
        <div key={user.email}>
          <p className="text-center text-sm uw:text-xl">{user.full_name}</p>
          <p className="text-center text-sm uw:text-xl mb-2">{user.email}</p>
          <div className="grid place-items-center mb-2">
            {user.image ? <img className="rounded-full" width="100" height="100" src={user.image} alt={user.full_name} /> : <img className="rounded-full" width="100" height="100" src={profileImg} alt={user.full_name} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileDetails;
