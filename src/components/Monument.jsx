import { useTranslation } from "react-i18next";

export const Monument = ({ id, name, url, requirements }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col py-8 md:flex-row" id={id}>
      <div className="md:w-4/12 self-center p-4 md:p-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          {t(name)}
        </h2>
        <ul className="pl-4 space-y-2">
          {requirements.map((requirement) => (
            <li className="flex items-center" key={requirement.name}>
              <img
                className="w-6 h-6 mr-2"
                src={requirement.img}
                alt={requirement.name}
              />
              {t(requirement.name)}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-48 md:h-auto">
        <iframe
          className="w-full h-full"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
