import React, { useState } from 'react';
import { isSmartStore } from '../../data/store';
import GeneInput from './GeneInput';
import AvailableGenetics from './AvailableGenetics';
import BreedingGenetics from './BreedingGenetics';
import Output from './Output';
import SmartToggle from './SmartToggle';
import TargetInput from './TargetInput';
import Navbar from '../Navbar';
import { useTranslation } from "react-i18next";
import { Header } from '../Header';
export function Breeder() {
  const isSmart = isSmartStore.useValue();
  const { t, i18n } = useTranslation();
  return (
<>
<Header/>
<Navbar/>
<div className='bg-[#0C0D0D] min-h-screen pt-32 Roboto'>

  <div className="container mx-auto max-w-lg px-4 text-gray-50 bg-[#1A1C1F]">
    <div className="text-center pt-3">
      
    </div>

    <div className="p-4 text-center text-4xl font-semibold">
      Crossbreeding
    </div>

    <div className="p-4">
      <GeneInput />
    </div>

    {isSmart ? (
      <div className="p-4">
        <TargetInput />
      </div>
    ) : null}

    <div className="p-4">
      <AvailableGenetics />
    </div>

    <div className="p-4">
      <BreedingGenetics />
    </div>

    <div className="p-4">
      <Output />
    </div>
  </div>
  </div>
</>
  );
}
