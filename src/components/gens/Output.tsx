
import { breedingGeneticsStore } from '../../data/store';
import { objCopy, redColor, greenColor, redGenes } from '../../functions/basic';
import { calculateOutputs } from '../../functions/calculate';
import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "react-i18next";
export default function Output() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  const outputs = breedingGenetics.length > 2 ? calculateOutputs(breedingGenetics) : [];
  const { t, i18n } = useTranslation();
  outputs.sort();
  // const outputs: string[] = [];
  return (
<>
  <div className="flex items-center justify-center">
    <p className="text-4xl font-semibold mr-2">{t("crossbreeding.result")}</p>
    <InformationCircleIcon className="h-5 w-5 text-green-500 cursor-pointer" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
  </div>
  {showTooltip && (
    <div className="absolute bg-white p-2 text-gray-600 rounded shadow">
      {t("crossbreeding.result-info")}
    </div>
  )}
  <div
    style={{ height: 180, padding: '10px 15px', overflow: 'auto' }}
    className="rounded-sm px-4 py-3 bg-[#474c4c] font-mono font-semibold text-center"
  >
    {outputs.map((value, index) => {
      return (
        <div key={index}>
          <div className="text-3xl text-center flex-grow-1">
            {value.split('').map((g, i) => {
              if (redGenes.includes(g)) {
                return (
                  <span key={i} style={{ color: 'red' }}>
                    {g}
                  </span>
                );
              } else {
                return (
                  <span key={i} style={{ color: 'green' }}>
                    {g}
                  </span>
                );
              }
            })}
          </div>
        </div>
      );
    })}
  </div>
</>
  );
}