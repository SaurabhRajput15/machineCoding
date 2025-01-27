import React, { useState } from "react";

const ShowHidePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>Password:</label>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "8px 40px 8px 8px",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={handleToggle}
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default ShowHidePassword;
