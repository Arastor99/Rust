import { useState } from "react";
import Navbar from "./Navbar";
import { content, raidExplosive } from "../data/raidtable";
import fuelimg from "../../public/static/resources/lowgradefuel.png";
import sulfurimg from "../../public/static/resources/sulfur.png";
import { secondsToHHMMSS } from "../functions/decimalToString";
import { Helmet } from "react-helmet";
import { Header } from "./Header";

export const Raid = () => {
  const [filteredExplosives, setFilteredExplosives] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [melee, setMelee] = useState(false);
  const [explosives, setExplosives] = useState(true);

  const handleMeleeChange = () => {
    setMelee(!melee);
    var table = document.getElementById("raiditems");
    var meleeFiles = table.querySelectorAll("tr[typedata='melee']");
    if (melee) {
      meleeFiles.forEach(function (file) {
        file.classList.add("hide-row");
      });
    } else {
      meleeFiles.forEach(function (file) {
        file.classList.remove("hide-row");
      });
    }
  };

  const handleExplosivesChange = () => {
    setExplosives(!explosives);
    var table = document.getElementById("raiditems");
    var explosiveFiles = table.querySelectorAll("tr[typedata='explosive']");
    if (explosives) {
      explosiveFiles.forEach(function (file) {
        file.classList.add("hide-row");
      });
    } else {
      explosiveFiles.forEach(function (file) {
        file.classList.remove("hide-row");
      });
    }
  };

  const handleOnClick = (e) => {
    const selectedKey = e.currentTarget.getAttribute("data-key");
    setSelectedItem(selectedKey);
    const datakey = e.currentTarget.getAttribute("data-key");

    const filteredExplosives = raidExplosive.map((object) => {
      const filteredExplosive = {
        id: object.id,
        text: object.text,
        img: object.img,
        type: object.toolType,
      };
      for (const prop in object) {
        if (prop.endsWith(datakey)) {
          const newProp = prop.slice(0, -datakey.length);
          filteredExplosive[newProp] = object[prop];
        }
      }

      return filteredExplosive;
    });
    setFilteredExplosives(filteredExplosives);
  };

  return (
    <>
      <Header />
      <style>
        {`
          .hide-row {
            display: none;
          }
        `}
      </style>
      <Navbar />
      <div className=" min-h-screen Roboto-bold ">
        <div className="bg-[#0C0D0D] text-white  flex justify-center ">
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-32">
              {content.map((item) => (
                <div
                  key={item.id}
                  data-key={"_".concat(item.key)}
                  onClick={handleOnClick}
                  className={`flex items-center justify-center p-2  rounded-lg cursor-pointer hover:bg-[#1A1C1F] ${
                    selectedItem === "_".concat(item.key) ? "bg-gray-700" : ""
                  }`}
                >
                  <img src={item.img} alt="Imagen" className="w-8 h-8 mr-2" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#0C0D0D] min-h-screen  5 pt-12">
          <div className="relative overflow-x-auto mx-auto max-w-4xl  bg-[#1A1C1F] overflow-y-hidden">
            <div className="flex items-center space-x-12 my-6 ml-8 justify-center Roboto-bold text-lg font-bold">
              <label
                htmlFor="melee"
                className="flex items-center cursor-pointer"
              >
                <div className="relative ">
                  <input
                    id="melee"
                    type="checkbox"
                    className="sr-only"
                    checked={melee}
                    onChange={handleMeleeChange}
                  />
                  <div
                    className={`w-6 h-6 bg-white border-2 ${
                      melee ? "bg-green-500" : "border-gray-300"
                    } rounded-md`}
                  ></div>
                </div>
                <span className="ml-2 text-white">Melee</span>
              </label>
              <label
                htmlFor="explosives"
                className="flex items-center cursor-pointer "
              >
                <div className="relative ">
                  <input
                    id="explosives"
                    type="checkbox"
                    className="sr-only"
                    checked={explosives}
                    onChange={handleExplosivesChange}
                  />
                  <div
                    className={`w-6 h-6 bg-white border-2 ${
                      explosives ? "bg-green-500" : "border-gray-300"
                    } rounded-md`}
                  ></div>
                </div>
                <span className="ml-2 text-white">Explosives</span>
              </label>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#3E4146] dark:[#3E4146] dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" className="px-6 py-3 text-base">
                    Tool
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Fuel
                  </th>
                  <th scope="col" className="px-6 py-3 text-base">
                    Sulfur
                  </th>
                </tr>
              </thead>

              <tbody id="raiditems">
                {filteredExplosives.map((item) => (
                  <tr
                    key={item.id}
                    typedata={item.type}
                    className={
                      item.type === "melee"
                        ? "hide-row bg-white border-b dark:bg-[#272a2e] dark:border-gray-700 text-center"
                        : "bg-white border-b dark:bg-[#1A1C1F] dark:border-gray-700 text-center"
                    }
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={item.img}
                          alt="Imagen"
                          className="w-8 h-8 mr-6"
                        />
                        <span className="font-bold text-lg Roboto-bold">
                          {item.text}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {item.quantity <= 0 || item.quantity === undefined ? (
                        "-"
                      ) : (
                        <div className="flex items-center justify-center">
                          {item.quantity}
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      {" "}
                      {item.time <= 0 || item.time === undefined ? (
                        "-"
                      ) : (
                        <div className="flex items-center justify-center">
                          {secondsToHHMMSS(item.time)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {item.fuel <= 0 || item.fuel === undefined ? (
                        "-"
                      ) : (
                        <div className="flex items-center ">
                          <img src={fuelimg} alt="fuel" className="mr-2" />
                          {item.fuel}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {item.sulfur <= 0 || item.sulfur === undefined ? (
                        "-"
                      ) : (
                        <div className="flex items-center">
                          <img src={sulfurimg} alt="sulfur" className="mr-2" />
                          {item.sulfur}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
