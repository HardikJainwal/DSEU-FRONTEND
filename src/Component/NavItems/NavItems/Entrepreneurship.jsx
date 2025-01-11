import React from 'react';

const Entrepreneurship = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Main Heading Section */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Nurturing entrepreneurial minds to revolutionize industries with passion
        </h1>
        
        <div className="bg-gray-100 h-48 w-full rounded-lg" />
      </div>

      {/* Center Title */}
      <div className="text-center">
        <h2 className="font-semibold text-lg">
          DSEU Innovation and Incubation Centre for Entrepreneurship (DIICE)
        </h2>
      </div>

      {/* Introduction Text */}
      <div className="space-y-4">
        <h3 className="font-semibold">Introduction</h3>
        <p className="text-gray-700 leading-relaxed">
          The Delhi Skill and Entrepreneurship University (DSEU) was established in August 2020 by the Government of NCT of Delhi (GNCTD) to equip students with skills that are essential to secure sustainable jobs. Students at DSEU are trained to convert their business idea to a real one. Building a successful business around it is the challenge. Solving this challenge, DIICE conducts various initiatives for students interested in pursuing entrepreneurship and problem-solving skills, with a high motivation to succeed, and who want to risk and failures.
        </p>
        <p className="text-gray-700 leading-relaxed">
          To provide a platform to encourage and support entrepreneurial endeavors, DIICE has set up an Incubator (DSW) Innovation and Incubation Centre for Entrepreneurs aka (DIICE). DIICE has been set up as a Section 8 Company with its own dedicated team to support entrepreneurs. Currently, we have launched pre-incubation and incubation programs. Incubation programs under the various campuses of DIICE were proposed under our incubator scheme. DIICE currently has 20+ startups enrolled in pre-incubation program. Various other Entrepreneurship Development programs are also in the process of being conceptualized.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 h-32 rounded-lg" />
        <div className="bg-gray-100 h-32 rounded-lg" />
      </div>

      {/* Know More Button */}
      <div className="text-center">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Entrepreneurship;