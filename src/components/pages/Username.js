import React, { useState } from "react";

const UsernameInput = ({ onSetUsername, onUsernameSubmitted }) => {
  const [username, setUsername] = useState("");

  const handleUsernameSubmit = () => {
    onSetUsername(username);
    onUsernameSubmitted();
  };

  return (
    <div className="flex justify-center">
      <div className="username-input card-lg m-10 bg-blue-300 p-10 rounded-lg ">
        <div className="w-2/3 flex-col justify-center ml-12">
          <h2 className="text-xl text-left font-bold mb-2 text-blue-800">Enter your Username</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />

          <button
            onClick={handleUsernameSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsernameInput;
