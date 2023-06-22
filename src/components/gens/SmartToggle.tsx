import React from 'react';
import { objCopy } from '../../functions/basic';
import { breedForTarget } from '../../functions/calculate';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore, targetStore } from '../../data/store';

export default function SmartToggle() {
  const [isSmart, setIsSmart] = isSmartStore.use();
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="toogleA"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input 
            id="toogleA" 
            type="checkbox" 
            className="hidden" 
            checked={isSmart} 
            onChange={(event) => {
              setIsSmart(event.target.checked);
              
              if(event.target.checked){
                breedingGeneticsStore.set(breedForTarget(availableGeneticsStore.get(), targetStore.get()));
              }
            }}
          />
          <div
            className="toggle__line w-10 h-4 bg-gray-50 rounded-full shadow-inner"
          ></div>
          <div
            className="toggle__dot absolute w-6 h-6 bg-tomato-700 rounded-full shadow inset-y-0 left-0"
          ></div>
        </div>
        <div
          className="ml-3 text-gray-100 font-medium"
        >
          Smart Mode
        </div>
      </label>

    </div>
  )
}