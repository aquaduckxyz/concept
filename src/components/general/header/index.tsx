import React, { Dispatch, SetStateAction, useEffect } from 'react';

import Image from 'next/image';

import Logo from 'src/components/general/assets/images/png/logo.png';
import TitleSvg from 'src/components/general/assets/images/svg/title.svg';

import Icons from '@icons/index';
import { useNavigate } from '@tanstack/react-router';
import { HeaderProvider, useHeaderContext } from './context';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Hamburger from './menu'

interface Props {
  setIsError?: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: Props) => {
    const [isOpen, setIsOpen] = useHeaderContext().isOpen;
  const nav = useNavigate();

  return (
    <div className="tw-fixed tw-z-20 tw-flex tw-h-[70px] tw-w-full tw-select-none tw-items-center tw-justify-center tw-bg-[#4AA4FF] tw-border-b tw-border-white  tw-py-4">
      <div className="tw-max-w-[1300px] tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-6 tw-px-6">
        <div className="tw-flex tw-w-fit tw-items-center tw-justify-center tw-gap-4">
          <Image
            src={Logo}
            alt=""
            className="tw-mt-10 tw-w-[68px] tw-aspect-square max-md:tw-hidden"
            onClick={() => nav({ to: '/' })}></Image>
          <TitleSvg className="tw-h-6 tw-aspect-auto tw-w-fit tw-object-cover tw-mt-2 tw-fill-white" />
        </div>
        <div className="tw-relative tw-flex tw-h-full tw-grow tw-overflow-hidden" />

        <button
          className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-md tw-stroke-white tw-p-3 tw-px-4 tw-text-xs tw-uppercase tw-leading-tight tw-tracking-widest hover:tw-cursor-pointer hover:tw-bg-[#1D8DFF] tw-text-white  max-md:tw-hidden"
          onClick={() => nav({ to: '/bridge' })}>
          <Icons.Route className="tw-aspect-square tw-h-4 tw-stroke-2 hover:tw-cursor-pointer" />
          Bridge
        </button>

        <button
          className="tw-flex tw-h-full tw-w-fit tw-flex-shrink-0 tw-items-center tw-justify-center tw-gap-4 tw-whitespace-nowrap tw-rounded-lg tw-border tw-border-br1 tw-bg-t1 tw-stroke-t2 tw-p-3 tw-px-4 tw-text-xs tw-uppercase tw-leading-tight tw-tracking-widest hover:tw-cursor-pointer hover:tw-bg-[#FFF846] tw-bg-white tw-text-[#4AA4FF] tw-overflow-hidden tw-font-semibold  max-md:tw-hidden"
          onClick={() => window.open('https://docs.crossmark.io', 'blank')}>
          Connect Wallet
        </button>
                  <Hamburger />
      </div>
            <AnimatePresence mode="wait">
        {isOpen && <Nav isOpen={isOpen} {...props} close={() => close} />}
      </AnimatePresence>
    </div>
  );
};

const Index = (props: Props) => {
  return (
    <HeaderProvider>
      <Header {...props} />
    </HeaderProvider>
  );
};

export default Index;