import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Default length
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}<>?';

    let characterSet = lowercaseChars;

    if (includeUppercase) {
      characterSet += uppercaseChars;
    }

    if (includeNumbers) {
      characterSet += numberChars;
    }

    if (includeSymbols) {
      characterSet += symbolChars;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleLengthChange = (e) => {
    setLength(Number(e.target.value));
  };

  return (
    <div>
      <h1>Password Generator</h1>

      <label>
        Password Length:
        <input
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={handleLengthChange}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase Letters
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Include Symbols
      </label>

      <button onClick={generatePassword}>Generate Password</button>

      {password && (
        <div>
          <h2>Your Generated Password:</h2>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
