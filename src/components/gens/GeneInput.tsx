import React, { useState } from 'react';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore, targetStore } from '../../data/store';
import { objCopy, possibleGenes } from '../../functions/basic';
import { breedForTarget } from '../../functions/calculate';
import { useTranslation } from "react-i18next";


export default function GeneInput() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [gene, setGene] = useState('');
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p className="text-sm">{t("crossbreeding.add-genes")}</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (gene.length === 6) {
          const genes = objCopy(availableGenetics);
          genes.push(gene);
          setAvailableGenetics(genes);
          setGene('');
          if(isSmartStore.get()){
            breedingGeneticsStore.set(breedForTarget(genes, targetStore.get()));
          }
        }
      }}>
<div className="relative w-full">
  <input
    type="text"
    value={gene}
    className="rounded-sm px-4 py-3 focus:outline-none bg-[#474c4c] text-gray-50 w-full"
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
    }}
  />
  <button
    className="absolute right-0 top-0 px-4 py-3 rounded-sm bg-green-600 text-gray-50 font-semibold focus:outline-none"
    onClick={() => {
      // Acción al hacer clic en el botón de inserción
    }}
  >
    {t("crossbreeding.insert")}
  </button>
</div>
      </form>
    </div>
  );
}
