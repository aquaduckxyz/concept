import React, { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import Logo from 'src/components/general/assets/images/png/logo.png';
import Duck from 'src/components/general/assets/images/png/duck.png';
import TitleSvg from 'src/components/general/assets/images/svg/title.svg';

interface Props {
  setIsError?: Dispatch<SetStateAction<boolean>>;
}

const Footer = (props: Props) => {
  return (
    <div className="tw-w-full tw-h-fit tw-flex tw-justify-center">
      <motion.div
        layout
        className="tw-border-t tw-border-[#1D8DFF] tw-flex tw-h-fit tw-w-full tw-select-none tw-justify-between tw-bg-white tw-border-b tw-border-br1 tw-px-8 tw-py-6">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-6">
          <div className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-4">
            <Image src={Logo} alt="" className="tw-w-[48px] tw-aspect-square"></Image>
            <div className="tw-flex tw-flex-col tw-justify-evenly tw-h-[48px]">
              <TitleSvg className="tw-h-5 tw-aspect-auto tw-w-fit tw-object-cover tw-fill-[#1D8DFF]" />
              <div className="tw-flex tw-gap-4 tw-text-xs">
                <div>Disclaimer</div>
                <div>Privacy And GDPR Policy</div>
                <div>Terms And Conditions</div>
                <div>Cookies Policy</div>
              </div>
            </div>
          </div>
          <div className="tw-relative tw-flex tw-h-full tw-grow tw-overflow-hidden" />
          <Image src={Duck} alt="" className="tw-w-[36px] tw-h-fit"></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
