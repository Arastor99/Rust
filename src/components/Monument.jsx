import { useTranslation } from "react-i18next";

export const Monument = ({ id, name, url, requirements }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row py-16" id={id}>
      <div className="md:w-4/12 self-center">
        <h2 className="text-3xl font-bold mb-4">{t(name)}</h2>
        <ul className="pl-4">
          {requirements.map((requirement) => (
            <li className="flex items-center mb-2">
              <img
                className="inline-block w-6 h-6 mr-2"
                src={requirement.img}
                alt={requirement.name}
              />
              {t(requirement.name)}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-8/12 md:ml-8">
        <iframe
          className="aspect-video max-w-xl w-full h-auto mx-auto md:mx-0"
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
