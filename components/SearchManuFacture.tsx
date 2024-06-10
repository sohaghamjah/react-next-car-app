"use client"
import { searchManuFectureProps } from "@/types";
import { Combobox, ComboboxInput, ComboboxButton, Transition, ComboboxOptions, ComboboxOption } from '@headlessui/react';
import Image from "next/image";
import CarLogo from "@/public/car-logo.svg";
import { Fragment, useState } from "react";
import { manufacturers } from "@/constants";

export default function SearchManuFacture({manuFacturer, setManuFacturer}: searchManuFectureProps) {
  const [query, setQuery] = useState('')

  const filteredManuFactures =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) => {
          return item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        })

  return (
    <div className="search-manufecturer">
        <Combobox value={manuFacturer} onChange={setManuFacturer}>
            <div className="relative w-full">   
                <ComboboxButton className="absolute top-[14px]">
                    <Image 
                        src={CarLogo}
                        alt="Car Logo"
                        width={20}
                        height={20}
                        className="ml-4"
                    />
                </ComboboxButton>
                <ComboboxInput
                    className="search-manufacturer__input"
                    placeholder="Volkswagen"
                    displayValue={(manuFacturer: string) => manuFacturer}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Transition 
                    as={Fragment}
                    leave="transision ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >

                <ComboboxOptions className="search-manufacturer__options z-20">
                    {
                    filteredManuFactures.length === 0 && query !== '' ? (
                        <ComboboxOption 
                            value     = {query}
                            className = "search-manufacturer__option"
                        >
                            {query}
                        </ComboboxOption>
                    ):
                    filteredManuFactures.map((item) => ( 
                        <ComboboxOption 
                            key       = {item}
                            value     = {item}
                            className = {({active}) => `search-manufacturer__option relative ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                        >
                            {item}
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
                    
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}
