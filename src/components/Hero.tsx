import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex h-screen flex-col-reverse items-center gap-4 bg-black p-8 sm:flex-row sm:justify-between">
      <div className="w-full space-y-4 text-white sm:w-2/5">
        <h1 className="heading1">
          <span className="bg-brandYellow-80 px-2">SHAPING</span> THE FUTURE
        </h1>
        <p className="mt-4">
          We believe in supporting Youths in ASEAN as we navigate through
          diverse cultures and the future of business opportunity.
        </p>
        <Button variant="blue_filled">
          <a href="#support">Learn More about Us</a>
        </Button>
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </div>
      <div className="flex h-full w-full sm:w-2/3">
        <div className="flex h-full w-full flex-col">
          <div className="relative h-1/3 w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="herovideo1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brandBlue opacity-30" />
          </div>
          <div className="relative h-1/3 w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="herovideo2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brandRed opacity-30" />
          </div>
          <div className="relative h-1/3 w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="herovideo3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-brandYellow opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
