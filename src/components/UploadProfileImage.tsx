import axios from "axios";
import { useRef } from "react";
import { useStoreSelector } from "../redux/hooks";

function UploadProfileImage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { token } = useStoreSelector((state) => state.auth);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);

      // Membuat form data untuk mengirim file
      const formData = new FormData();
      formData.append("image", file);

      try {
        console.log("Token:", token);
        console.log("Sending formData:", formData.get("image"));
        const result = await axios.patch(`${import.meta.env.VITE_REACT_APP_API_URL}/user/settings/upload`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Upload successful:", result.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error uploading file:", error.message);
          console.error("Response data:", error.response?.data);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    }
  };

  return (
    <>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      <button onClick={handleButtonClick} className="mb-2 text-lightblack text-sm uw:text-xl bg-primary hover:bg-darkprimary active:bg-darkprimary2 rounded-lg w-1/2 tbt:w-3/4 h-11 uw:h-16">
        Upload New Photo
      </button>
    </>
  );
}

export default UploadProfileImage;
