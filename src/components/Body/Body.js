import React from 'react';
import singer from '../Body/assests/singer.jpeg';
import dancer from '../Body/assests/dancer.jpeg';
import photographer from '../Body/assests/gettyimages-1158673915.webp'
function GetStarted() {
  // This is a simplified example
  // In practice, you would have more comprehensive logic and data

  const examplePortfolios = [
    {
      name: 'John Doe',
      profession: 'Dancer',
      imageUrl: dancer,
    },
    {
      name: 'Jane Smith',
      profession: 'Singer',
      imageUrl: singer,
    },
    {
      name: 'Alice Johnson',
      profession: 'Photographer',
      imageUrl: photographer,
    },
  ];

  return (
    <div className=" px-4 py-8  rounded-lg text-blue-900 flex">

<div className='flex-col'>

  <div className='text-center'>
      <h1 className="text-4xl font-bold mb-4">Get Started with Your Portfolio</h1>
      <p className="mb-4 text-xl">Follow these steps to create your stunning portfolio website:</p>
  </div>
  <div className='flex justify-center'>
      <ol className=" mb-4 text-justify text-lg py-2 w-8/12 bg-blue-300 rounded-xl px-8 py-8 shadow-lg">
        <li className="mb-2 ">1. Sign up for an account to get started.</li>
        <li className="mb-2">2. Choose a template that fits your style and profession. View our template gallery for inspiration.</li>
        <li className="mb-2">3. Customize your portfolio by adding your own content and images. You can easily update and rearrange elements using our intuitive editor.</li>
        <li className="mb-2">4. Add your personal information, work experience, education, and projects. This is your chance to showcase your skills and achievements.</li>
        <li className="mb-2">5. Preview your portfolio to see how it will appear to visitors.</li>
        <li className="mb-2">6. Choose a domain name for your portfolio website. It's the web address where people will find your portfolio (e.g., www.yourname.com).</li>
        <li className="mb-2">7. Publish your portfolio to make it accessible to the world. You can also connect your domain at this stage.</li>
      </ol>
  </div>
  </div>
<div className='flex-col w-2/3 flex'>

        <p className="mb-4 mt-1 text-blue-900 text-lg">Here are some examples of portfolios created by our users:</p>
        <div className='flex justify-center'>

      <div className="grid grid-cols-2  md:grid-rows-2 lg:grid-rows-2 gap-4 w-1/2 rows-reverse">
        {examplePortfolios.map((portfolio, index) => (
            <div key={index} className="my-4 p-4 rounded-lg shadow-md bg-blue-300 hover:cursor-pointer hover:bg-blue-400">
            <img
              src={portfolio.imageUrl}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-20 object-cover mb-4 rounded"
              />
            <h3 className="text-xl font-semibold ">{portfolio.name}</h3>
            <p className="text-gray-600 text-sm ">{portfolio.profession}</p>
              </div>
        ))}
        </div>
        </div>
        </div>
        </div>
   
    
  );
}

export default GetStarted;
