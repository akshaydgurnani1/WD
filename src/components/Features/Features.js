import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Customizable Templates',
      description: 'Choose from a variety of templates to showcase your work.',
    },
    {
      title: 'Drag and Drop Builder',
      description: 'Easily arrange and customize your portfolio with a user-friendly builder.',
    },
    {
      title: 'Responsive Design',
      description: 'Ensure your portfolio looks great on all devices and screen sizes.',
    },
    {
      title: 'Media Support',
      description: 'Upload images, videos, and other media to highlight your projects.',
    },
  ];

  return (
    <section className="features m-9">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mt-8 text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-blue-300 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-900 mb-9">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
