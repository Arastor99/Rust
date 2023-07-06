import React from "react";
import water from "../../public/static/resources/monuments/water.png";
import power from "../../public/static/resources/monuments/power.png";
import harbor from "../../public/static/resources/monuments/harbor.png";
import airfield from "../../public/static/resources/monuments/airfield.png";
import junkyard from "../../public/static/resources/monuments/junkyard.png";
import launch from "../../public/static/resources/monuments/launch.png";
import lighthouse from "../../public/static/resources/monuments/lighthouse.png";
import tunel from "../../public/static/resources/monuments/tunel.png";
import silo from "../../public/static/resources/monuments/silo.png";
import satelite from "../../public/static/resources/monuments/satelite.png";
import sewer from "../../public/static/resources/monuments/sewer.png";
import train from "../../public/static/resources/monuments/train.png";
import Navbar from "./Navbar";
import YouTube from "react-youtube";

export const Monuments = () => {
  return (
    <>
      <body class="bg-gray-900 text-white">
        <Navbar />
        <header class="bg-gray-800 py-4">
          <nav class="container mx-auto flex justify-between items-center">
            <div>
              <h1 class="text-2xl font-bold">Monumentos</h1>
            </div>
            <div>
              <ul class="flex space-x-4">
                <li>
                  <a href="#green-card" class="text-green-400">
                    Green Card
                  </a>
                </li>
                <li>
                  <a href="#blue-card" class="text-blue-400">
                    Blue Card
                  </a>
                </li>
                <li>
                  <a href="#red-card" class="text-red-400">
                    Red Card
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main class="container mx-auto py-8 text-center">
          <div class="flex justify-center items-center bg-gray-900 pb-12">
            <table class=" bg-gray-800  text-white rounded-lg">
              <thead>
                <tr>
                  <th class="px-4 py-2">Color de Tarjeta</th>
                  <th class="px-4 py-2">Monumentos donde encontrarla</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">
                    <span class="text-green-400">Green Card</span>
                  </td>
                  <td class="border px-4 py-2">
                    <ul>
                      <li>Oxum</li>
                      <li>Supermarket</li>
                      <li>Lighthouse</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    <span class="text-blue-400">Blue Card</span>
                  </td>
                  <td class="border px-4 py-2">
                    <ul>
                      <li>Harbor</li>
                      <li>Sewer</li>
                      <li>Satellite</li>
                      <li>Buy at outpost</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">
                    <span class="text-red-400">Red Card</span>
                  </td>
                  <td class="border px-4 py-2">
                    <ul>
                      <li>Airfield</li>
                      <li>Water Treatment</li>
                      <li>Train Yard</li>
                      <li>Nuclear Missile Silo</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <section>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={water}
                  alt="Monumento 1"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 justify-center pt-4">
                  Water Treatment
                </h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={power}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Power Plant</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={harbor}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Harbor</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={airfield}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Airfield</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={junkyard}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Junkyard</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={launch}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Launch Site</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={lighthouse}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Lighthouse</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={tunel}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Military tunnel</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={silo}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">
                  Nuclear Missile Silo
                </h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={satelite}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Satellite Dish</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={sewer}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Sewer Branch</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-lg">
                <img
                  src={train}
                  alt="Monumento 2"
                  class="w-full h-48 object-cover rounded mb-2"
                />
                <h3 class="text-xl font-bold mb-2 pt-4">Train Yard</h3>
              </div>
            </div>
          </section>
          <div class="flex justify-center items-center  bg-gray-900">
            <div class="max-w-3xl">
              <h1 class="text-4xl font-bold text-white mb-8">Monumentos</h1>

              <section id="monumento1" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Harbor A</h2>
                <div class="flex items-start ">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside ">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="EYSY5pCsvac" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Harbor B</h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="ALdRaOpwWms" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Supermarket</h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="qcQqEJDTvks" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Airfield</h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4 h-full">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <div class="flex justify-center items-center h-full">
                      <ul class="list-inside">
                        <li>No rad</li>
                        <li>Green card</li>
                        <li>1 fuse</li>
                      </ul>
                    </div>
                  </div>
                  <div class="">
                    <YouTube videoId="CbbNwZkHPxw" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">
                  Water Treatment
                </h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="HrTpYguYyHs" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Junkyard</h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="lNmw-tMXwE4" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">Sewer Branch</h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside ">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="SvG0Kxyk-nE" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
              <section id="monumento2" class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-4">
                  Satellite Dish
                </h2>
                <div class="flex items-start">
                  <div class="w-1/3 pr-4">
                    <h3 class="text-lg font-bold text-white mb-2">
                      Requisitos:
                    </h3>
                    <ul class=" list-inside">
                      <li>No rad</li>
                      <li>Green card</li>
                      <li>1 fuse</li>
                    </ul>
                  </div>
                  <div class="">
                    <YouTube videoId="J4CfzHDzAKo" />
                  </div>
                </div>
              </section>
              <hr class="flex-grow border-t-2 border-white pb-12" />
            </div>
          </div>
        </main>
      </body>
    </>
  );
};
