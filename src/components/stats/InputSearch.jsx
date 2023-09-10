import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { getSteamId } from "../../helper/SteamAPIvanityToId";
import { useTranslation } from "react-i18next";

export const InputSearch = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(undefined);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // const handlePromise = async (inputText) => {
  //   try {
  //     const steamID64 = await getSteamId(inputText);

  //     window.location.href = `/stats/${steamID64}`;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInput = user.trim();

    if (/^\d+$/.test(userInput) && userInput.length === 17) {
      return navigate(`/stats/${userInput}`);
    }

    if (
      /^(https?:\/\/)?(www\.)?steamcommunity\.com\/(profiles|id)\/([^/]+)\/?$/.test(
        userInput
      )
    ) {
      const steamID = inputText.match(
        /^(https?:\/\/)?(www\.)?steamcommunity\.com\/(profiles|id)\/([^/]+)\/?$/
      )[4];

      if (/^\d+$/.test(steamID) && steamID.length === 17) {
        return navigate(`/stats/${steamID}`);
      } else {
        const respose = await getSteamId(userInput);

        if (!respose.success) {
          return setError(respose.error);
        }

        return navigate(`/stats/${respose.data}`);
      }
    }

    const steamId = await getSteamId(userInput);

    if (!steamId.success) {
      return setError(steamId.error);
    }

    return navigate(`/stats/${steamId.data}`);
  };

  return (
    <div className="mx-auto w-full md:w-1/2 relative">
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={user}
          type="text"
          placeholder={t("input.search")}
          className="bg-gray-700 text-white px-4 py-2 pr-12 rounded-lg w-full focus:outline-none"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="absolute top-0 right-0 h-full bg-gray-700 text-white p-2 rounded-r-lg"
        >
          <FaSearch /> {/* Icono de búsqueda */}
        </button>
      </form>
    </div>
  );
};
