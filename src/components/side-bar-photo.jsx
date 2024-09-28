import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { PencilIcon } from "lucide-react";
import profileBigImg from "../assets/profileImgBig.png";
import { db, storage } from "../hooks/auth/firebase";
import { useAuth } from "../hooks/userAuth";

function SidebarPhoto() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profileBigImg);

  const { updateUser, user } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Generate a preview URL for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setUploading(true);

    const storageRef = ref(
      storage,
      `profilePictures/${user?.uid}/${file.name}`
    );

    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Save the URL to Firestore
      const userRef = doc(db, "Users", user?.uid);
      await updateDoc(userRef, { profilePicture: downloadURL });
      await updateUser(user);

      if (user?.profilePicture) {
        const oldImageRef = ref(storage, user.profilePicture);
        await deleteObject(oldImageRef);
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file.");
    } finally {
      setUploading(false);
      setPreview(null);
    }
  };

  // Trigger the file input click event after setting up the event listener
  useEffect(() => {
    const fileInput = document.getElementById("profile");
    fileInput.addEventListener("change", handleFileChange);
    return () => {
      fileInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <div className="relative group mx-auto text-center">
      <label
        htmlFor="profile"
        className="cursor-pointer relative block">
        <div className="aspect-square">
          <img
            src={preview || user?.profilePicture || imageUrl}
            alt="Profile Image of user"
            className="h-full w-full object-cover object-top rounded-full"
          />
        </div>

        <div className="p-1 bg-white rounded-full text-primaryColor absolute top-0 right-0 z-10 border border-primaryColor">
          <PencilIcon
            size={24}
            className=""
          />
        </div>
      </label>
      {preview && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="text-white font-bold underline bg-black p-1 rounded-md mx-auto text-center mt-1 text-sm">
          {uploading ? "Uploading..." : "Save"}
        </button>
      )}
      <input
        id="profile"
        className="hidden"
        onChange={handleFileChange}
        type="file"
        accept="image/*"
      />
    </div>
  );
}

export default SidebarPhoto;
