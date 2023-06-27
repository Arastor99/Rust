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

export function Breeder() {
  const isSmart = isSmartStore.useValue();
  const { t, i18n } = useTranslation();
  return (
<>
<div className='bg-gray-800 min-h-screen pt-16'>

  <div className="container mx-auto max-w-lg px-4 text-gray-50 bg-gray-600">
    <div className="text-center pt-3">
      {/* Contenido */}
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
