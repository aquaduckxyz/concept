import React from 'react';
import Image from 'next/image';

import Hero from 'src/components/general/assets/images/png/main-hero.png';
import Title from 'src/components/general/assets/images/png/bridging-the-gap.png';
import DuckButton from 'src/components/general/assets/images/png/duck-button.png';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';

export const Landing = () =>{
  
  const nav = useNavigate()
  
  return (
  <div className="tw-relative tw-w-full tw-h-screen tw-max-w-[1300px] tw-max-h-[1000px] tw-px-12 tw-pb-12 tw-overflow-hidden tw-flex-shrink-0 max-md:tw-px-1">
    <Image loading="eager"
      src={Hero}
      alt=""
      className="tw-h-fit tw-w-full tw-max-w-[1300px] tw-object-cover tw-absolute tw-top-[70px] tw-left-0 tw-z-0 max-md:tw-w-[175%]"></Image>

    <div className="tw-relative tw-flex tw-w-full tw-flex-col tw-items-end max-md:tw-items-center  max-md:tw-pb-4 tw-justify-end tw-gap-6 tw-h-full tw-pb-24 tw-px-8 max-md:tw-px-1">
      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-end tw-justify-center tw-pb-12">
        <div className="tw-flex tw-h-fit tw-gap-6 tw-text-white tw-drop-shadow tw-font-semibold tw-text-2xl max-sm:tw-text-base">
          a Bridge that “Quacks”
        </div>
        <Image loading="eager" src={Title} alt="" className="tw-h-fit tw-w-[600px]"></Image>
      </div>

      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-end max-md:tw-items-center">
        <button
          className="tw-flex tw-h-fit tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-whitespace-nowrap tw-rounded-2xl tw-bg-t1 tw-stroke-t2 tw-p-4 tw-px-14 tw-uppercase tw-tracking-widest hover:tw-cursor-pointer hover:tw-bg-[#FFF846] tw-bg-white tw-text-[#4AA4FF] tw-overflow-hidden tw-text-xl tw-font-semibold tw-border-[3px] tw-border-[#4AA4FF] tw-leading-none tw-shadow-[3.469px_3.469px_0px_0px_#1D8DFF] max-md:tw-px-5  max-md:tw-py-3 max-md:tw-text-base"
          onClick={() => nav({to:'/bridge'})}>
          Get Started
          <Icons.ChevronRight className="tw-aspect-square tw-stroke-[#4AA4FF] tw-h-4 tw-stroke-[3px] hover:tw-cursor-pointer" />
        </button>
        <div className="tw-flex tw-h-fit tw-gap-6 tw-text-[#4AA4FF]">Learn more about AquaDuck</div>
      </div>

      <div
        className="tw-w-[200px] tw-h-[60px] tw-rounded-lg tw-border-[3px] tw-border-white tw-overflow-hidden tw-absolute tw-left-0 tw-bottom-0 tw-flex tw-justify-center tw-items-center max-md:tw-relative tw-drop-shadow max-md:tw-w-[120px] max-md:tw-h-[40px]"
        onClick={() => window.open('https://xrp.cafe/collection/wtd', 'blank')}>
        <Image loading="eager" src={DuckButton} alt="" className="tw-h-fit tw-w-full"></Image>
      </div>
    </div>
  </div>
);
}