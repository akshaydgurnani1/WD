import React from "react";

const TemplateSelection = ({ templates, onSelectTemplate, username }) => {
  return (
    <div className="flex justify-center">

    <div className="template-selection bg-blue-300 p-10 m-10 rounded-lg flex-col  ">
      <h2 className="text-3xl">Hello, {username}!</h2>
      <h3 className="font-bold text-2xl text-blue-600 ">Choose a Template:</h3>
      <ul className="flex-row flex justify-between">
        {templates.map((template) => (
            <li className="flex justify-center hover:bg-gray-300 hover:text-white w-1/4 m-4 h-10/12" key={template.id} onClick={() => onSelectTemplate(template)}>
            {template.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TemplateSelection;
