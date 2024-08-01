import { useState } from "react";
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

  return (
    <div className="relative group">
      <label
        htmlFor="profile"
        className="cursor-pointer relative block">
        <img
          src={preview || user?.profilePicture || imageUrl}
          alt="Profile Image of user"
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
            preview ? "" : "hidden"
          } group-hover:flex`}>
          {preview ? (
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="text-black font-bold underline">
              {uploading ? "Uploading..." : "Upload"}
            </button>
          ) : (
            <PencilIcon className="h-8 w-8 text-white" />
          )}
        </div>
      </label>
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
