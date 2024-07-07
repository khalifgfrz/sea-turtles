import { useEffect, useState } from "react";
import profileImg from "../assets/images/profile-img.webp";
import axios from "axios";
import { useStoreSelector } from "../redux/hooks";

function ProfileDetails() {
  interface IProfileBody {
    email: string;
    image: string;
    full_name: string;
  }

  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  const { token } = useStoreSelector((state) => state.auth);

  useEffect(() => {
    const getDataUser = async () => {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user`;
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
      {/* {getProfile.map((user) => ( */}
      <div>
        <p className="text-center text-sm uw:text-xl">{getProfile[0]?.full_name || "fullname"}</p>
        <p className="text-center text-sm uw:text-xl mb-2">{getProfile[0]?.email || "email"}</p>
        <div className="grid place-items-center mb-2 w-full h-25">
          <img className="rounded-full" width="100" height="100" src={getProfile[0]?.image || profileImg} alt="profile" />
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default ProfileDetails;
