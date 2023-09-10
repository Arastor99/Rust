import React from "react";
import Navbar from "./Navbar";
import { Header } from "./Header";
export const Cameras = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center bg-[#0C0D0D] Roboto pt-32">
        <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#373a3f] dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    RUST CCTV Codes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Large Oil Rig
                  </th>
                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>OILRIG2HELI</li>
                      <li>OILRIG2DOCK</li>
                      <li>OILRIG2EXHAUST</li>
                      <li>OILRIG2L1</li>
                      <li>OILRIG2L2</li>
                      <li>OILRIG2L3A</li>
                      <li>OILRIG2L3B</li>
                      <li>OILRIG2L4</li>
                      <li>OILRIG2L5</li>
                      <li>OILRIG2L6A</li>
                      <li>OILRIG2L6B</li>
                      <li>OILRIG2L6C</li>
                      <li>OILRIG2L6D</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Small Oil Rig
                  </th>
                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>OILRIG1HELI</li>
                      <li>OILRIG1DOCK</li>
                      <li>OILRIG1EXHAUST</li>
                      <li>OILRIG1L1</li>
                      <li>OILRIG1L2</li>
                      <li>OILRIG1L3</li>
                      <li>OILRIG1L4</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Underwater Labs
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>AUXPOWER****</li>
                      <li>BRIG****</li>
                      <li>CANTINA****</li>
                      <li>CAPTAINQUARTER****</li>
                      <li>CLASSIFIED****</li>
                      <li>CREWQUARTERS****</li>
                      <li>HALLWAY****</li>
                      <li>INFIRMARY****</li>
                      <li>LAB****</li>
                      <li>LOCKERROOM****</li>
                      <li>OPERATIONS****</li>
                      <li>SECURITYHALL****</li>
                      <li>TECHCABINET****</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Outpost
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>COMPOUNDSTREET</li>
                      <li>COMPOUNDMUSIC</li>
                      <li>COMPOUNDCRUDE</li>
                      <li>COMPOUNDCHILL</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Nuclear Missile Silo
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>SILOEXIT1</li>
                      <li>SILOEXIT2</li>
                      <li>SILOMISSILE</li>
                      <li>SILOSHIPPING</li>
                      <li>SILOTOWER</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Dome
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>DOME1</li>
                      <li>DOMETOP</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Airfield
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>AIRFIELDHELIPAD</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Airfield
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>COMPOUND******</li>
                      <li>OUTDOOR******</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    Bandit Camp
                  </th>

                  <td className="px-6 py-4 text-center">
                    <ul>
                      <li>CASINOTOWN</li>
                      <li>WEAPONS</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
