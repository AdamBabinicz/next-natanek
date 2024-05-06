import React from "react";

const Film: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-white"
      id="filmy"
    >
      <h2 className="text-3xl font-bold mb-6">Filmy</h2>
      {/* Dodaj filmy MP4 tutaj */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <video
            controls
            className="w-full"
            loop
            preload="none"
            playsInline
            muted
            autoPlay
            src="/assets/2.mp4"
            style={{ height: "600px" }}
          >
            Twoja przeglądarka nie obsługuje tagu video.
          </video>
          <h2 className="text-lg font-semibold mt-2">Natanek w lokomotywie</h2>
          <p className="text-sm">Podczas zakupów w markecie ...</p>
        </div>
        <div className="flex flex-col items-center">
          <video
            controls
            className="w-full"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/3.mp4"
            style={{ height: "600px" }}
          >
            Twoja przeglądarka nie obsługuje tagu video.
          </video>
          <h2 className="text-lg font-semibold mt-2">Na majówce - 2023</h2>
          <p className="text-sm">Natanielek ma świetne wyczucie rytmu.</p>
        </div>
        <div className="flex flex-col items-center">
          <video
            controls
            className="w-full"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/4.mp4"
            style={{ height: "600px" }}
          >
            Twoja przeglądarka nie obsługuje tagu video.
          </video>
          <h2 className="text-lg font-semibold mt-2">W domu</h2>
          <p className="text-sm">Raczkujący Natanielek z osłoną na pleckach.</p>
        </div>
      </div>
    </div>
  );
};

export default Film;
