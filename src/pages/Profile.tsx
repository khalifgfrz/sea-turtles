import Header from "../components/Header";
import Footer from "../components/Footer";

import ProfileDetails from "../components/ProfileDetails";
import ProfileInput from "../components/ProfileInput";
import UploadProfileImage from "../components/UploadProfileImage";

export function Profiles() {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
}

function Profile() {
  return (
    <main className="font-jakarta mt-[20%] tbt:mt-[10%] lg:mt-[7%] px-[5%] tbt:px-[10%]">
      <h1 className="text-4xl mb-4">Profile</h1>
      <section className="block tbt:flex">
        <div className="border border-solid border-darkgray2 p-2 tbt:h-1/2 tbt:mr-4 tbt:w-1/2 md:w-2/5 lg:w-1/4 2xl:w-1/5">
          <ProfileDetails />
          <div className="flex justify-center items-center">
            <UploadProfileImage />
          </div>
          <p className="text-center text-sm uw:text-xl">Since 20 January 2024</p>
        </div>
        <div className="w-full mt-4 tbt:mt-0 border border-solid border-darkgray2 p-2">
          <ProfileInput />
        </div>
      </section>
    </main>
  );
}

export default Profile;
