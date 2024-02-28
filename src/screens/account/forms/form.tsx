import React, { useState } from 'react';
import Image from 'next/image';

import Hero from 'src/components/general/assets/images/png/main-hero.png';
import Friends from 'src/components/general/assets/images/png/friends.png';

import Icons from '@icons/index';

export const Form = () => {
  const [networks, setNetworks] = useState([
    {
      id: 2,
      name: 'devnet',
      protocol: 'XRPL',
      type: 'dev',
      status: undefined,
      wss: 'wss://s.devnet.rippletest.net:51233',
      rpc: 'https://s.devnet.rippletest.net:51234',
      explorer: 'https://devnet.xrpl.org',
      faucet: null,
      img: '/assets/chains/xrpl/info/logo.png',
    },
    {
      id: null,
      name: 'xevm',
      protocol: 'EVM',
      type: 'dev',
      status: undefined,
      wss: null,
      rpc: 'https://rpc-evm-sidechain.xrpl.org',
      explorer: 'https://evm-sidechain.xrpl.org',
      faucet: null,
      img: '/assets/chains/xevm/info/logo.jpg',
    },
  ]);

  const swap = () => {
    //@ts-ignore
    setNetworks((prev) => [prev[1], prev[0]]);
  };

  return (
    <div className="tw-relative tw-w-full tw-h-screen tw-max-w-[1300px] tw-max-h-[1000px] tw-px-2 tw-pb-12 tw-overflow-hidden">
      <Image
        src={Hero}
        alt=""
        className="tw-h-fit tw-w-full tw-max-w-[1300px] tw-object-cover tw-absolute tw-top-[70px] tw-left-0 tw-z-0"></Image>

      <div className="tw-relative tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-h-full tw-px-2 tw-mt-[70px]">
        <div className="tw-relative tw-max-w-[500px] tw-w-11/12 tw-h-fit tw-rounded-xl tw-border-2 tw-border-[#4AA4FF] tw-bg-white tw-p-6 tw-pt-20 tw-overflow-hidden">
          <div className="tw-absolute tw-w-full tw-h-[64px] tw-bg-gray-50 tw-top-0 tw-left-0 tw-border-b-1 tw-border-gray-200"></div>
          <Image
            src={Friends}
            alt=""
            className="tw-h-fit tw-w-[200px] tw-absolute tw-top-[14px] tw-right-6 tw-z-30"></Image>

          <div className="tw-w-full tw-h-full tw-rounded-xl tw-border-2 tw-border-[#4AA4FF] tw-bg-white tw-overflow-hidden">
            <div className="tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-items-center tw-font-montserrat">
              <div className="tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-overflow-y-auto tw-transition-all">
                <div className="tw-absolute tw-w-full tw-h-fit tw-p-4 tw-top-4 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-text-white">
                  <div className="tw-text-xxs tw-tracking-widest">select amount</div>
                  <div className="tw-text-4xl tw-font-bold tw-tracking-wider">10.000</div>
                </div>

                <div className="tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-justify-center tw-pt-32  tw-bg-[#4AA4FF]">
                  <div className="tw-relative tw-h-fit tw-w-full tw-px-12 tw-pb-2 tw-bg-[#4AA4FF] tw-text-[#4AA4FF]">
                    <div className="tw-absolute -tw-top-5 tw-text-xs tw-uppercase tw-tracking-widest tw-text-white">
                      source chain
                    </div>
                    <div className="tw-flex tw-h-16 tw-w-full tw-flex-row tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-md tw-border tw-border-br1 tw-bg-white hover:tw-cursor-pointer hover:tw-bg-tint">
                      <div
                        className={`tw-flex tw-h-full tw-w-full tw-items-center tw-gap-4 tw-px-3 tw-py-3`}>
                        <div className="tw-flex tw-aspect-square tw-h-full tw-shrink-0  tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-md tw-border tw-border-br1">
                          <img src={networks[0]?.img} alt="" className="tw-h-full tw-w-full" />
                        </div>
                        <div className="tw-flex tw-grow tw-flex-col tw-overflow-hidden">
                          <div className="tw-flex tw-gap-2 tw-overflow-hidden tw-truncate tw-align-baseline tw-text-sm tw-font-medium tw-uppercase tw-leading-none tw-tracking-widest">
                            <div> {networks[0]?.name}</div>
                            <div className="tw-text-xs tw-text-t3">{networks[0]?.protocol}</div>
                          </div>

                          <div className="tw-overflow-hidden tw-truncate tw-text-xxs tw-font-light tw-normal-case tw-tracking-widest">
                            {networks[0]?.rpc || networks[0]?.wss}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tw-relative tw-flex tw-h-20 tw-flex-col tw-items-center tw-justify-center">
                    <div className="tw-h-1/2 tw-w-full tw-bg-[#4AA4FF]"></div>
                    <div className="tw-h-1/2 tw-w-full tw-bg-white"></div>
                    <div
                      className="tw-absolute tw-bg-white tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-gray-200 hover:tw-cursor-pointer"
                      onClick={swap}>
                      <Icons.RefreshCcw05 className="tw-h-5 tw-w-5 tw-stroke-[#4AA4FF] tw-stroke-2" />
                    </div>
                  </div>

                  <div className="tw-relative tw-w-full tw-flex-shrink-0 tw-grow tw-bg-white tw-px-12 tw-pt-2 tw-text-[#4AA4FF]">
                    <div className="tw-absolute -tw-top-3 tw-text-xs tw-uppercase tw-tracking-widest">
                      destination chain
                    </div>
                    <div className="tw-flex tw-h-16 tw-w-full tw-flex-row tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-md tw-border tw-border-br1 tw-bg-b1 hover:tw-cursor-pointer hover:tw-bg-tint">
                      <div
                        className={`tw-flex tw-h-full tw-w-full tw-items-center tw-gap-4 tw-px-3 tw-py-3`}>
                        <div className="tw-flex tw-aspect-square tw-h-full tw-shrink-0  tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-md tw-border tw-border-br1">
                          <img src={networks[1]?.img} alt="" className="tw-h-full tw-w-full" />
                        </div>
                        <div className="tw-flex tw-grow tw-flex-col tw-overflow-hidden">
                          <div className="tw-flex tw-gap-2 tw-overflow-hidden tw-truncate tw-align-baseline tw-text-sm tw-font-medium tw-uppercase tw-leading-none tw-tracking-widest">
                            <div> {networks[1]?.name}</div>
                            <div className="tw-text-xs tw-text-gray-300">
                              {networks[1]?.protocol}
                            </div>
                          </div>

                          <div className="tw-overflow-hidden tw-truncate tw-text-xxs tw-font-light tw-normal-case tw-tracking-widest">
                            {networks[1]?.rpc || networks[1]?.wss}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tw-flex tw-h-fit tw-w-full tw-flex-shrink-0 tw-grow tw-flex-col tw-gap-2 tw-bg-white tw-px-12 tw-pb-8 tw-pt-4 tw-text-t1`}>
                <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-4 tw-text-t1">
                  <div className="tw-grid tw-w-full tw-grid-cols-2 tw-items-center tw-justify-center tw-gap-2 tw-rounded-md tw-border tw-border-gray-200 tw-p-3 tw-text-xxs tw-font-medium tw-uppercase tw-tracking-widest">
                    <div>witness</div>
                    <div className="tw-flex tw-justify-end tw-text-end">wss://ripple.com</div>
                    <div>bridge fee</div>
                    <div className="tw-text-end">0.0001 XRP</div>
                  </div>
                  <div className="tw-flex tw-justify-center tw-items-center tw-h-fit tw-w-full tw-flex-shrink-0 tw-gap-3 tw-overflow-hidden tw-text-xs tw-pt-4">
                    <button
                      className={`tw-bg-[#4AA4FF] tw-text-white tw-relative tw-flex tw-h-[45px] tw-w-3/4 tw-items-center tw-rounded-lg
                tw-transition-all`}
                      type="button">
                      <div className="tw-grow tw-text-sm tw-font-light tw-uppercase tw-tracking-[3px]">
                        connect wallet
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
