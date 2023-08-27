import React from "react";
import Navbar from "./Navbar";
import "../../style/design.css";

//images

import bgdecay from "../../public/static/resources/index/decay.png";

import bg from "../../public/static/resources/index/bg1.png";
//videos

import vraid from "../../public/static/resources/index/raid.mp4";
import vdecay from "../../public/static/resources/index/vdecay.mp4";
import vcamera from "../../public/static/resources/index/camera.mp4";
import vdiesel from "../../public/static/resources/index/diesel.mp4";
import vplant from "../../public/static/resources/index/plant.mp4";
import vdome from "../../public/static/resources/index/dome.mp4";
import trailer from "../../public/static/resources/index/trailer.mp4";

export const Test = () => {
  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    /* Otras propiedades de estilo para tu componente */
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-700 min-h-screen relative" style={cardStyle}>
        {/* Contenedor principal */}
        <div className="container mx-auto py-8 px-4">
          {/* Sección del banner */}
          <div className="rounded-lg p-28 mb-24 text-center mt-24 relative">
            {/* Contenido del banner */}
            <video
              src={trailer}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            ></video>
          </div>

          {/* Sección de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Tarjeta 1 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vdecay}
                  autoPlay
                  loop
                  muted
                  className=" flex w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vraid}
                  autoPlay
                  loop
                  muted
                  className=" flex w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vplant}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            {/* Tarjeta 4 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vcamera}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 5 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vdome}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 6 */}
            <div>
              <div
                className="card"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video src={vdiesel} autoPlay loop muted></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 7 */}
            <div>
              <div
                className="card relative"
                style={{ backgroundImage: `url(${bgdecay})` }}
              >
                <video
                  src={vraid}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
                <div className="card-content">
                  <h2 className="card-title Roboto-bold">Something Awesome</h2>
                  <p className="card-body Roboto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio, culpa.
                  </p>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
