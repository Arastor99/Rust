import React from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
const LanguageSelect = ({ lang, language, setLanguage }) => {
  return (
    <div>
      <Listbox value={language} onChange={setLanguage}>
        <div className="relative mt-1 z-10">
          <Listbox.Button className="relative float-right z-10 cursor-default rounded-lg bg-stone-300 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="space-x-3 items-center flex ">
              <div>{language.img}</div> <div>{language.name}</div>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 float-right mt-1 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {lang.map((idiom, idiomIdx) => (
                <Listbox.Option
                  key={idiomIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={idiom}
                >
                  {({ language }) => (
                    <>
                      <span
                        className={`flex  items-center space-x-3  ${
                          language ? "font-medium" : "font-normal"
                        }`}
                      >
                        <div>{idiom.img}</div>
                        <div>{idiom.name}</div>
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageSelect;
