import React from 'react';
import Image from 'next/image';

import Hero from 'src/components/general/assets/images/png/hero-bridge.png';
import Title from 'src/components/general/assets/images/png/contract-us.png';
import ContactHero from 'src/components/general/assets/images/png/contact.png';

import Icons from '@icons/index';

export const Contact = () => (
  <div className="tw-relative tw-w-full tw-h-fit tw-bg-[#4AA4FF] tw-text-white  tw-flex-shrink-0">
    <div className="tw-flex tw-w-full tw-gap-6 tw-h-full tw-pb-12">
      <div className="tw-flex tw-relative tw-flex-col tw-gap-12 tw-w-full tw-items-start tw-justify-center tw-px-24 tw-pt-24">
        <Image src={Title} alt="" className="tw-h-fit tw-w-[300px]"></Image>

        <div className="tw-flex tw-h-fit tw-items-start tw-justify-center tw-text-2xl tw-gap-14 tw-font-light tw-w-full">
          <div className="tw-flex tw-flex-col tw-w-1/2 tw-text-base">
            <div className="tw-font-semibold tw-text-lg tw-pb-2">Send us a "Quack"</div>
            <p>{`If you would like to reach out to our team for a general inquiry, please fill out the form.`}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-w-1/2 tw-gap-4 tw-text-base">
            <div className="tw-flex tw-flex-col tw-gap-2">
              <div>Name</div>
              <div className="tw-w-full tw-bg-white tw-rounded-lg tw-h-9"></div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2">
              <div>Company</div>
              <div className="tw-w-full tw-bg-white tw-rounded-lg tw-h-9"></div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2">
              <div>Title</div>
              <div className="tw-w-full tw-bg-white tw-rounded-lg tw-h-9"></div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-2">
              <div>Message</div>
              <div className="tw-w-full tw-bg-white tw-rounded-lg tw-h-[150px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tw-w-full tw-flex tw-justify-center tw-items-end tw-h-[200px] tw-overflow-hidden">
      <Image src={ContactHero} alt="" className="tw-h-fit tw-w-[800px]"></Image>
    </div>
  </div>
);
