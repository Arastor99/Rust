import React, { useState } from 'react';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore, targetStore } from '../../data/store';
import { possibleGenes } from '../../functions/basic';
import { breedForTarget } from '../../functions/calculate';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "react-i18next";

export default function TargetInput() {
  const [target, setTarget] = targetStore.use();
  const [gene, setGene] = useState(targetStore.get());
  const [showTooltip, setShowTooltip] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="flex items-center">
  <span className="text-sm mr-2">{t("crossbreeding.target")}</span>
  <InformationCircleIcon
    className="h-5 w-5 text-green-600 cursor-pointer"
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
  />
  {showTooltip && (
    <div className="absolute bg-white p-2 text-gray-600 rounded shadow">
      {t("crossbreeding.target-info")}
    </div>
  )}
</div>
<input
  type="text"
  value={gene}
  className="rounded-sm px-4 py-3 focus:outline-none bg-[#474c4c] text-gray-50 w-full"
  style={{
    width: '100%'
  }}
  placeholder="eg: XYYHGG"
  onChange={(e) => {
    let value = e.target.value.toUpperCase();
    let fieldArr = value.split('');
    // remove non possible genes
    fieldArr = fieldArr.filter((value: string) => possibleGenes.includes(value));
    if (fieldArr.length > 6) {
      fieldArr = fieldArr.slice(0, 6);
    }
    value = fieldArr.join('');
    setGene(value);
    if (value.length === 6) {
      setTarget(value);
      breedingGeneticsStore.set(breedForTarget(availableGeneticsStore.get(), value));
    }
  }}
/>
    </div>
  );
}
