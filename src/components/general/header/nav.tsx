import React, { useState } from 'react';
import Portal from 'src/components/general/portal';
import { motion } from 'framer-motion';
import { useHeaderContext } from './context';
import { useNavigate } from '@tanstack/react-router';

import Image from 'next/image';

import Logo from 'src/components/general/assets/images/png/logo.png';
import Duck from 'src/components/general/assets/images/png/duck.png';
import TitleSvg from 'src/components/general/assets/images/svg/title.svg';

import Icons from '@icons/index';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const sheet = {
  key: 'sheet',
  initial: { top: '-100%' },
  animate: { top: 0 },
  exit: {
    top: '-100%',
    transition: { delay: 0, duration: 0.5 },
  },
  transition: {
    type: 'linear',
    delay: 0.0,
    duration: 0.3,
  },
};

const Nav = (props: Props) => {
  const [isOpen, setIsOpen] = useHeaderContext().isOpen;
  const nav = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Portal(
    <div className="tw-absolute tw-top-[70px] tw-z-50 tw-h-[calc(100%_-_70px)] tw-w-full tw-overflow-hidden tw-text-t1 light">
      <div className="tw-relative tw-flex tw-h-full tw-w-full tw-justify-end tw-font-montserrat">
        <motion.div
          {...sheet}
          className="tw-absolute tw-flex tw-h-full tw-w-full tw-flex-col tw-rounded-bl-lg tw-bg-b1">
          <div className="tw-z-10 tw-flex tw-grow tw-flex-col tw-gap-8 tw-bg-white tw-p-12 tw-px-12">
            <div
              className="hover:tw-cursor-pointer tw-flex tw-gap-3 tw-items-center"
              onClick={() => {
                setIsOpen(!isOpen);
                nav({to:'/'})
              }}>
                <Icons.Home01 className="tw-aspect-square tw-h-6 tw-stroke-2 tw-stroke-[#4AA4FF] hover:tw-cursor-pointer" />
              Home
            </div>
            <div
                   className="hover:tw-cursor-pointer tw-flex tw-gap-3 tw-items-center"
              onClick={() => {
                setIsOpen(!isOpen);
                             nav({to:'/bridge'})
              }}>
                 <Icons.Route className="tw-aspect-square tw-h-6 tw-stroke-2 tw-stroke-[#4AA4FF] hover:tw-cursor-pointer" />
              Bridge
            </div>
 
          </div>
                     <div className='tw-w-full tw-py-8 tw-flex tw-justify-center tw-items-center tw-bg-white'>
                             <Image src={Duck} alt="" className="tw-w-[36px] tw-h-fit"></Image>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
