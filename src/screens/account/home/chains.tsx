import React from 'react';
import Image from 'next/image';

import Title from 'src/components/general/assets/images/png/xrpl-eth.png';
import XRPComparision from 'src/components/general/assets/images/png/xrpl-strengths.png';
import EVMComparision from 'src/components/general/assets/images/png/evm-strengths.png';
import Line from 'src/components/general/assets/images/png/line-hero.png';

export const Chains = () => (
  <div className="tw-w-fit tw-h-fit tw-relative tw-items-center tw-flex-shrink-0">
    <div className="tw-flex tw-flex-col tw-w-full tw-gap-6 tw-h-full tw-overflow-hidden">
      <Image loading="eager"
        src={Line}
        alt=""
        className="tw-h-fit tw-w-[600px] tw-absolute tw-top-[-68px] tw-left-0 tw-z-30"></Image>

      <div className="tw-relative tw-w-full tw-h-fit tw-max-w-[1300px] tw-bg-white tw-text-[#4AA4FF] tw-pb-[150px]">
        <div className="tw-flex tw-relative tw-flex-col tw-w-full tw-items-center tw-justify-center tw-px-24 tw-py-24 max-md:tw-px-4">
          <div className="tw-flex tw-justify-end tw-w-full tw-px-8 tw-p-12">
            <Image loading="eager" src={Title} alt="" className="tw-h-fit tw-w-[360px]"></Image>
          </div>

          <div className="tw-flex tw-grow tw-items-center tw-justify-start tw-text-2xl tw-gap-12 tw-font-light tw-w-full tw-p-8 tw-pt-12 max-md:tw-p-1 max-md:tw-flex-col">
            <Image loading="eager" src={XRPComparision} alt="" className="tw-h-fit tw-w-1/2 max-md:tw-w-3/4"></Image>
            <Image loading="eager" src={EVMComparision} alt="" className="tw-h-fit tw-w-1/2 max-md:tw-w-3/4"></Image>
          </div>
        </div>
        {/*       <div className="tw-w-full tw-flex tw-justify-end">
        <Image src={Pool} alt="" className="tw-h-fit tw-w-5/6"></Image>
      </div> */}
        <div className="tw-absolute tw-bottom-0 tw-left-[-150px] tw-w-0 tw-h-0 tw-border-[150px] tw-border-r-[1400px] tw-border-transparent tw-border-b-[#FFFCA9] tw-border-t-0"></div>
      </div>
    </div>
  </div>
);
