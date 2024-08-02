import { Upload } from "lucide-react";
import { useMemo, useState } from "react";

function UploadResumeInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileSize = useMemo(() => {
    if (selectedFile) {
      const size = selectedFile.size / 1024;
      if (size < 1024) {
        return size.toFixed() + "KB";
      }
      return size.toFixed() + "MB";
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="my-14">
      <div className="max-w-md mx-auto border border-gray-300 rounded-md p-5 flex flex-col justify-between items-center gap-5">
        <div className="">
          <label
            htmlFor="cv"
            className="flex gap-2 items-center font-bold cursor-pointer underline underline-offset-4">
            <Upload size={16} /> <p>Upload Resume</p>
          </label>
          <input
            type="file"
            name="cv"
            id="cv"
            className="hidden"
            accept=".pdf,.doc,.docx,.odt,.rtf,.txt,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p className="mt-2 font-semibold">
              {selectedFile.name} {fileSize}
            </p>
          )}
        </div>
        <button className="bg-primaryColor text-white p-2 mt-3 px-5 rounded-lg text-xs w-full">
          Share
        </button>
      </div>
    </div>
  );
}
export default UploadResumeInput;
