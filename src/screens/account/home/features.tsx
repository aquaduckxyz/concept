import React from 'react';
import Image from 'next/image';

import Title from 'src/components/general/assets/images/png/bridge-features.png';
import Censorship from 'src/components/general/assets/video/gif/Censorship.gif';
import Decentralized from 'src/components/general/assets/video/gif/Decentralized.gif';
import Ease from 'src/components/general/assets/video/gif/ease.gif';
import Secure from 'src/components/general/assets/video/gif/Secure.gif';

import Icons from '@icons/index';

export const Features = () => (
  <div className="tw-relative tw-w-full tw-h-fit tw-bg-[#FFFCA9] tw-text-black tw-pb-24 tw-flex-shrink-0">
    <div className="tw-flex tw-w-full tw-gap-6 tw-h-full tw-pb-12">
      <div className="tw-flex tw-relative tw-flex-col tw-w-full tw-items-center tw-justify-center tw-px-24">
        <div className="tw-flex tw-justify-start tw-w-full tw-px-8 tw-p-12">
          <Image src={Title} alt="" className="tw-h-fit tw-w-[480px]"></Image>
        </div>

        <div className="tw-flex tw-flex-col tw-grow tw-items-center tw-justify-center tw-text-2xl tw-font-light tw-w-full tw-px-12">
          <div className="tw-grid tw-grid-cols-2 tw-gap-20 tw-w-full tw-text-sm">
            <div className="tw-col-span-1 tw-w-full tw-h-fit tw-pt-12 tw-relative">
              <Image
                src={Ease}
                alt=""
                className="tw-h-fit tw-w-[91px] tw-absolute tw-top-[-12px] tw-right-0"></Image>
              <div className="tw-font-semibold tw-text-lg tw-pb-2">Ease</div>
              <p>{`Send assets between chains with only one-click. Our bridge only requires the installation of a single wallet to use to platform. This enhances the user experience when completing a jump.`}</p>
            </div>
            <div className=" tw-col-span-1 tw-w-full tw-h-fit tw-pt-12 tw-relative">
              <Image
                src={Censorship}
                alt=""
                className="tw-h-fit tw-w-[91px] tw-absolute tw-top-[-12px] tw-right-0"></Image>
              <div className="tw-font-semibold tw-text-lg tw-pb-2">Censorship-Resistant</div>
              <p>{`The nodes within the bridge ecosystem are run by unique entities with differing opinions and beliefs. Thus, services are less likely to be stopped for political or moral reasons.`}</p>
            </div>
            <div className="tw-col-span-1 tw-w-full tw-h-fit tw-pt-12 tw-relative">
              <Image
                src={Secure}
                alt=""
                className="tw-h-fit tw-w-[91px] tw-absolute tw-top-[-12px] tw-right-0"></Image>
              <div className="tw-font-semibold tw-text-lg tw-pb-2">Secure</div>
              <p>{`The bridging has been designed by RippleX engineers and audited by .... for scalability and security. This amendment has gone through a rigorous review by network validators and approved.`}</p>
            </div>
            <div className="tw-col-span-1 tw-w-full tw-h-fit tw-pt-12 tw-relative">
              <Image
                src={Decentralized}
                alt=""
                className="tw-h-fit tw-w-[91px] tw-absolute tw-top-[-12px] tw-right-0"></Image>
              <div className="tw-font-semibold tw-text-lg tw-pb-2">Decentralized</div>
              <p>{`We have adopted the xls38d protocol which allows anyone to deploy a connector node support the bridge. These connector nodes are refer to as “witness” servers, which are responsible for witnessing a change on one chain and reflecting it over to a targeted chain.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
