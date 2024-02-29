import React from 'react';
import Image from 'next/image';

import Hero from 'src/components/general/assets/images/png/hero-bridge.png';
import Title from 'src/components/general/assets/images/png/built-for-ethdenver.png';
import Bridge from 'src/components/general/assets/video/gif/bridge.gif';
import DuckButton from 'src/components/general/assets/images/png/duck-button.png';

import Icons from '@icons/index';

export const EthDenver = () => (
  <div className="tw-relative tw-w-full tw-min-h-[1000px] tw-h-fit  tw-bg-[#4AA4FF] tw-text-white tw-overflow-hidden tw-flex-shrink-0">
    <div className="tw-flex tw-w-full tw-gap-6 tw-h-full tw-pb-12  max-md:tw-flex-col">
      <div className="tw-flex tw-relative tw-flex-col tw-w-1/2 tw-items-start tw-justify-center tw-px-24 max-md:tw-pb-4 max-sm:tw-px-4 tw-py-24 max-md:tw-w-full">
        <Image loading="eager"
          src={Title}
          alt=""
          className="tw-h-fit tw-max-w-[700px] tw-min-w-[500px] tw-absolute tw-top-24 tw-left-24 max-md:tw-min-w-[300px] max-md:tw-w-11/12 max-md:tw-left-4"></Image>
        <div className="tw-flex tw-flex-col tw-grow tw-items-center tw-justify-center tw-text-xl tw-gap-14 tw-font-light tw-w-full tw-max-w-[475px] tw-overflow-hidden tw-pt-24 max-md:tw-text-lg ">
          <p className="tw-flex tw-h-fit tw-w-full">
            {`This bridge platform was built for a talk at eth.denver 2024 to showcase a 
cross-chain  transaction between the XRP Ledger and the EVM Sidechain.`}
          </p>

          <p className="tw-flex tw-h-fit">
            {`We are leveraging Crossmark, a browser extension wallet similar to Metamask, to show the seamless process of bridging assets between XRPL <> EVM-based protocols.`}
          </p>

          <p className="tw-h-fit">
            {`This is all made possible with the use of the XChainBridge amendment (xls38d). You can learn more about the amendment `}
            <a
              className={'hover:tw-cursor-pointer tw-underline'}
              href={'https://github.com/XRPLF/XRPL-Standards/discussions/92'}>
              here
            </a>
            {` .`}
          </p>
        </div>
      </div>

      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-end tw-grow tw-pt-6 tw-justify-end max-md:tw-items-end max-md:tw-pl-36 max-sm:tw-pl-14 max-sm:tw-mb-[-24px] max-md:tw-pt-0">
        <Image loading="eager" src={Bridge} alt="" className="tw-h-fit tw-object-contain tw-w-full"></Image>
      </div>

      <div className="tw-absolute tw-bottom-0 tw-w-0 tw-h-0 tw-border-[150px] tw-border-x-[1400px] tw-border-transparent tw-border-b-white tw-border-t-0"></div>
    </div>
  </div>
);
