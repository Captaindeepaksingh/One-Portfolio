import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
           My name is Deepak singh I am currently pursuing bachelors in technology 
          from madan mohan malaviya university of technology in Electronics
          and communication. I am a full stack web developer, competitive 
          programmer and also have good knowledge of Data structures & Algorithms.
        </p>

        <br />

        <p className="text-xl">
          I have two Year experience of working with several web technologies
          like React, Node.js, mongoose, firebase and express.js . I built 
          several web applications using these. Beside web development I
          have participated in several coding contests where i have enhanced
          my problem solving skills . I have solved more than 300 question related
          to Data structures & Algorithms. Overall I have  good experience and skills
          in domain of development.
        </p>
      </div>
    </div>
  );
};

export default About;