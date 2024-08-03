import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

function PasswordViewer({ value, setPassword, label, name }) {
  const [reveal, setReveal] = useState(false);
  return (
    <div>
      <label htmlFor="password">{label}:</label>
      <div className="relative">
        <span className="absolute bottom-1/2 right-3 translate-y-1/2 block m-2 cursor-pointer">
          {!reveal && (
            <Eye
              color="gray"
              onClick={() => setReveal(!reveal)}
            />
          )}
          {reveal && (
            <EyeOff
              color="gray"
              onClick={() => setReveal(!reveal)}
            />
          )}
        </span>
        <input
          className="text-black"
          type={reveal ? "text" : "password"}
          value={value}
          name={name}
          placeholder={"Enter " + label}
          onChange={setPassword}
          required
        />
      </div>
    </div>
  );
}

export default PasswordViewer;
