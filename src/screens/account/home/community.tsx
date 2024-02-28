import React from 'react';
import Image from 'next/image';

import Title from 'src/components/general/assets/images/png/join-the-community.png';
import Wave from 'src/components/general/assets/images/png/wave.png';

import Icons from '@icons/index';

export const Community = () => (
  <div className="tw-flex tw-flex-col tw-w-full tw-gap-6 tw-h-fit tw-overflow-hidden tw-bg-white tw-flex-shrink-0">
    <div className="tw-relative tw-w-full tw-h-fit tw-bg-white tw-text-[#4AA4FF]">
      <div className="tw-flex tw-relative tw-flex-col tw-w-full tw-items-center tw-justify-center tw-px-12 tw-py-12">
        <div className="tw-flex tw-justify-center tw-w-full tw-px-8 tw-py-14">
          <Image src={Title} alt="" className="tw-h-fit tw-w-[500px]"></Image>
        </div>

        <div className="tw-z-30 tw-flex tw-flex-col tw-grow tw-items-center tw-justify-center tw-text-2xl tw-font-light tw-w-full tw-pb-8">
          <div className="tw-grid tw-grid-cols-4 tw-gap-8 tw-w-full tw-text-sm">
            <div className="tw-relative tw-col-span-1 tw-aspect-square tw-w-full tw-border-2 tw-bg-white tw-border-[#4AA4FF] tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-[3.469px_3.469px_0px_0px_#1D8DFF]">
              <div className="tw-absolute tw-top-8 tw-w-1/2 tw-aspect-square tw-rounded-full tw-border-2 tw-border-[#4AA4FF] tw-flex tw-justify-center tw-items-center">
                <Icons.XTwitter className="tw-aspect-square tw-h-12 tw-fill-[#4AA4FF] hover:tw-cursor-pointer" />
              </div>
              <div className="tw-absolute tw-bottom-6 tw-rounded-xl tw-border tw-border-[#4AA4FF] tw-text-[#4AA4FF] tw-flex tw-p-2 tw-justify-center tw-items-center tw-font-semibold tw-px-4">
                twitter
              </div>
            </div>

            <div className="tw-relative tw-col-span-1 tw-aspect-square tw-w-full tw-border-2 tw-bg-white tw-border-[#4AA4FF] tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-[3.469px_3.469px_0px_0px_#1D8DFF]">
              <div className="tw-absolute tw-top-8 tw-w-1/2 tw-aspect-square tw-rounded-full tw-border-2 tw-border-[#4AA4FF] tw-flex tw-justify-center tw-items-center">
                <Icons.Discord className="tw-aspect-square tw-h-12 tw-fill-[#4AA4FF] hover:tw-cursor-pointer" />
              </div>
              <div className="tw-absolute tw-bottom-6 tw-rounded-xl tw-border tw-border-[#4AA4FF] tw-text-[#4AA4FF] tw-flex tw-p-2 tw-justify-center tw-items-center tw-font-semibold tw-px-4">
                discord
              </div>
            </div>

            <div className="tw-relative tw-col-span-1 tw-aspect-square tw-w-full tw-border-2 tw-bg-white tw-border-[#4AA4FF] tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-[3.469px_3.469px_0px_0px_#1D8DFF]">
              <div className="tw-absolute tw-top-8 tw-w-1/2 tw-aspect-square tw-rounded-full tw-border-2 tw-border-[#4AA4FF] tw-flex tw-justify-center tw-items-center">
                <Icons.Github className="tw-aspect-square tw-h-12 tw-fill-[#4AA4FF] hover:tw-cursor-pointer" />{' '}
              </div>
              <div className="tw-absolute tw-bottom-6 tw-rounded-xl tw-border tw-border-[#4AA4FF] tw-text-[#4AA4FF] tw-flex tw-p-2 tw-justify-center tw-items-center tw-font-semibold tw-px-4">
                github
              </div>
            </div>

            <div className="tw-relative tw-col-span-1 tw-aspect-square tw-w-full tw-border-2 tw-bg-white tw-border-[#4AA4FF] tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-[3.469px_3.469px_0px_0px_#1D8DFF]">
              <div className="tw-absolute tw-top-8 tw-w-1/2 tw-aspect-square tw-rounded-full tw-border-2 tw-border-[#4AA4FF] tw-flex tw-justify-center tw-items-center">
                <Icons.Clubhouse className="tw-aspect-square tw-h-12 tw-fill-[#4AA4FF] hover:tw-cursor-pointer" />
              </div>
              <div className="tw-absolute tw-bottom-6 tw-rounded-xl tw-border tw-border-[#4AA4FF] tw-text-[#4AA4FF] tw-flex tw-p-2 tw-justify-center tw-items-center tw-font-semibold tw-px-4">
                docs
              </div>
            </div>
          </div>
        </div>

        <Image
          src={Wave}
          alt=""
          className=" tw-z-10 tw-h-fit tw-w-full tw-absolute tw-bottom-0"></Image>
      </div>
    </div>
  </div>
);
