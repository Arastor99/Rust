import React from 'react';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore, targetStore } from '../../data/store';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { objCopy, redColor, greenColor, redGenes } from '../../functions/basic';
import { breedForTarget } from '../../functions/calculate';
import { useTranslation } from "react-i18next";

export default function AvailableGenetics() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  const isSmart = isSmartStore.useValue();
  const { t, i18n } = useTranslation();
  return (
    <>
      <p className="text-sm">{t("crossbreeding.available-genetics")}</p>
      <div
        style={{
          height: 180,
          padding: '10px 15px',
          overflow: 'auto'
        }}
        className="rounded-sm px-4 py-3 bg-[#474c4c] font-mono font-semibold"
      >
        {availableGenetics.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex'
              }}
              className="hover:bg-gray-800"
            >
              <div style={{ flexGrow: 1 }}>
                {
                  value.split('').map((g, i) => {
                    if (redGenes.includes(g)) {
                      return (<span key={i} style={{ color: redColor }}>{g}</span>);
                    } else {
                      return (<span key={i} style={{ color: greenColor }}>{g}</span>)
                    }
                  })
                }
              </div>
              {
                isSmart ?
                  null
                  :
                  <div style={{ marginRight: 5 }} className="mt-1">
                    <FaPlusCircle
                      onClick={() => {
                        const breeding = objCopy(breedingGenetics);
                        breeding.push(value);
                        setBreedingGenetics(breeding)
                      }}
                      className="cursor-pointer text-green-500"
                    />
                  </div>
              }

              <div className="mt-1">
                <FaTrashAlt
                  onClick={() => {
                    console.log('delete ' + index)
                    const available = objCopy(availableGenetics);
                    available.splice(index, 1);
                    setAvailableGenetics(available);
                    if(isSmartStore.get()){
                      breedingGeneticsStore.set(breedForTarget(available, targetStore.get()));
                    }
                  }}
                  className="cursor-pointer text-tomato-700"
                />
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
}