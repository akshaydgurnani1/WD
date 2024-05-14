import React from 'react';
import { Link } from 'react-router-dom';

const portfolioTemplates = [
  {
    id: 1,
    name: 'Photography Portfolio',
    profession: 'Photographer',
    description: 'A beautiful portfolio template for photographers. Showcase your stunning photos with style.',
  },
  {
    id: 2,
    name: 'Web Developer Portfolio',
    profession: 'Web Developer',
    description: 'A professional portfolio template for web developers. Highlight your projects and skills.',
  },
  {
    id: 3,
    name: 'Graphic Designer Portfolio',
    profession: 'Graphic Designer',
    description: 'A creative portfolio template for graphic designers. Display your artwork and designs.',
  },
];

function PortfolioTemplates() {
  return (
    <div className="portfolio-templates ">
      <h2>Choose a Portfolio Template</h2>
      <div className="template-list ">
        {portfolioTemplates.map((template) => (
          <div key={template.id} className="w-1/2 m-10 template-card my-4 p-4 rounded-lg shadow-md bg-blue-300 hover:cursor-pointer hover:bg-blue-400">
            <h3>{template.name}</h3>
            <p>Profession: {template.profession}</p>
            <p>{template.description}</p>
            <Link to={`/customize-portfolio/${template.id}`} className="customize-button btn-blue-400 ">
              Customize Template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioTemplates;
