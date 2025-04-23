import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}";

    let chars = "";
    if (includeUpper) chars += upper;
    if (includeLower) chars += lower;
    if (includeNumber) chars += numbers;
    if (includeSymbol) chars += symbols;

    if (chars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div style={{ width: '300px', margin: '50px auto', padding: '20px', border: '1px solid gray', borderRadius: '8px' }}>
      <h2>Password Generator 🔐</h2>
      <label>Password Length: {length}</label>
      <input type="range" min="4" max="20" value={length} onChange={(e) => setLength(e.target.value)} style={{ width: "100%" }} />
      
      <div>
        <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} /> Uppercase<br />
        <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} /> Lowercase<br />
        <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} /> Numbers<br />
        <input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} /> Symbols
      </div>

      <div style={{textAlign:"center"}}>
       <button 
         onClick={generatePassword} 
         style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer", backgroundColor:"goldenrod",   borderRadius:"2px", fontWeight:"bold", color:"white"}}
       >
         Generate Password
       </button>
      </div>

      {password && (
        <div style={{ marginTop: "15px", textAlign:"center"}}>
          <input type="text" readOnly value={password} style={{ width: "100%", marginBottom: "5px", textAlign:"center", fontSize:"23px", color:"green", fontWeight:"bolder"}} />
          <button onClick={copyToClipboard} style={{ padding: "5px 10px", cursor: "pointer" }}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
