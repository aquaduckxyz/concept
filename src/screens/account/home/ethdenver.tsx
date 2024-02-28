import React from 'react';
import Image from 'next/image';

import Hero from 'src/components/general/assets/images/png/hero-bridge.png';
import Title from 'src/components/general/assets/images/png/built-for-ethdenver.png';
import DuckButton from 'src/components/general/assets/images/png/duck-button.png';

import Icons from '@icons/index';

export const EthDenver = () => (
  <div className="tw-relative tw-w-full tw-h-[1000px] tw-bg-[#4AA4FF] tw-text-white tw-overflow-hidden tw-flex-shrink-0">
    <div className="tw-flex tw-w-full tw-gap-6 tw-h-full tw-pb-12">
      <div className="tw-flex tw-relative tw-flex-col tw-w-1/2 tw-items-start tw-justify-center tw-px-24 tw-py-24">
        <Image
          src={Title}
          alt=""
          className="tw-h-fit tw-w-[1200px] tw-absolute tw-top-24 tw-left-24"></Image>
        <div className="tw-flex tw-flex-col tw-grow tw-items-center tw-justify-center tw-text-xl tw-gap-14 tw-font-light tw-w-[475px]">
          <p className="tw-flex tw-h-fit">
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

      <div className="tw-flex tw-flex-col tw-gap-4 tw-items-end tw-grow tw-pt-6">
        <Image src={Hero} alt="" className="tw-h-full tw-w-fit"></Image>
      </div>

      <div className="tw-absolute tw-bottom-0 tw-w-0 tw-h-0 tw-border-[150px] tw-border-x-[1400px] tw-border-transparent tw-border-b-white tw-border-t-0"></div>
    </div>
  </div>
);
