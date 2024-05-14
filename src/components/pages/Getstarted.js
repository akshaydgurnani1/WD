import React, { useState } from "react";
import UsernameInput from "./Username";
import "./GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [username, setUsername] = useState("");
  const [showUsernameInput, setShowUsernameInput] = useState(true);

  const templates = [
    { id: 1, name: "Template 1", link: "/template1" },
    { id: 2, name: "Template 2", link: "/template2" },
    { id: 3, name: "Template 3", link: "/template3" },
  ];

  const handleUsernameSubmitted = () => {
    setShowUsernameInput(false);
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Get Started</h1>
        {showUsernameInput ? (
          <UsernameInput onSetUsername={setUsername} onUsernameSubmitted={handleUsernameSubmitted} />
        ) : (
          <div className="flex flex-col">
            {templates.map((template) => (
              <Link key={template.id} to={template.link}>
                <div
                  className="bg-blue-200 p-4 rounded-lg cursor-pointer mb-2 text-blue-800 hover:bg-blue-300"
                  onClick={() => handleSelectTemplate(template)}
                >
                  {template.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
