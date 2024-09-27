import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Upload } from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { db, storage } from '../hooks/auth/firebase';
import Spinner from './spinner';

function UploadResumeInput({ userId }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const [isSaving, setIsSaving] = useState(false);
  const fileSize = useMemo(() => {
    if (selectedFile) {
      const size = selectedFile.size / 1024;
      if (size < 1024) {
        return size.toFixed() + 'KB';
      }
      return size.toFixed() + 'MB';
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSave = async () => {
    if (!userId || !selectedFile) return;
    setIsSaving(true);

    // first upload file to firebase storage
    // get file url
    // upload file to firestore

    const storageRef = ref(storage, `resumes/${userId}/${selectedFile.name}`);
    try {
      await uploadBytes(storageRef, selectedFile);
      const resumeUrl = await getDownloadURL(storageRef);
      const userRef = doc(db, 'Users', userId);
      await updateDoc(userRef, { resume: resumeUrl });
      toast.success('Resume updated!');
    } catch (e) {
      console.error('Error uploading resume ', e);

      toast.error('Error uploading resume ');
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className='relative max-w-3xl border border-gray-300 rounded-sl p-5   cursor-pointer my-4 '>
      <label className='block w-full'>
        <div className='flex items-center gap-2'>
          <Upload size={16} />
          <p className='font-bold text-xl'>Upload Resume</p>
        </div>

        <p className='ml-6 text-sm'>Use a Pdf, docx, doc</p>
        <input
          type='file'
          name='cv'
          id='cv'
          className='hidden'
          accept='.pdf,.doc,.docx,.odt,.rtf,.txt,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className='mt-2 font-semibold'>
            {selectedFile.name} {fileSize}
          </p>
        )}
      </label>
      {selectedFile ? (
        <button
          type='button'
          className='absolute right-2 bottom-1 md:bottom-3 bg-primaryColor text-white rounded-sl inline-block px-3'
          onClick={handleSave}
        >
          {isSaving ? <Spinner /> : 'Save'}
        </button>
      ) : null}
    </div>
  );
}
export default UploadResumeInput;
