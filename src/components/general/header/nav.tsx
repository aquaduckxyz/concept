import React, { useState } from 'react';
import Portal from 'src/components/general/portal';
import { motion } from 'framer-motion';
import { useHeaderContext } from './context';
import { useNavigate } from '@tanstack/react-router';


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
          <div className="tw-z-10 tw-flex tw-grow tw-flex-col tw-gap-4 tw-bg-white tw-p-12 tw-px-16">
            <div
              className="hover:tw-cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
                nav({to:'/'})
              }}>
              Home
            </div>
            <div
              className="hover:tw-cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
                             nav({to:'/bridge'})
              }}>
              Bridge
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
