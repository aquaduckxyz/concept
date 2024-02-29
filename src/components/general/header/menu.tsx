import React, { useEffect, useState } from 'react';

import { useHeaderContext } from './context';

const Menu = () => {
  const [isOpen, setIsOpen] = useHeaderContext().isOpen;

  return (
    <div
      className={`tw-flex tw-w-9 tw-flex-col tw-justify-between tw-p-1 tw-transition-all hover:tw-cursor-pointer md:tw-hidden ${
        isOpen ? 'tw-h-7' : 'tw-h-fit tw-gap-1'
      }`}
      onClick={() => {
        if (isOpen) setIsOpen(!isOpen);
        if (!isOpen) {
          setIsOpen(!isOpen);
        }
      }}>
      <div
        className={`tw-origin-right tw-rounded-full tw-border-t-[2.5px]  tw-transition-all ${
          isOpen ? 'tw-w-[21px] -tw-rotate-[45deg]' : 'tw-w-full tw-rotate-0'
        } tw-border-t1`}></div>
      <div
        className={`tw-w-full tw-rounded-full tw-border-t-[2.5px] ${
          isOpen ? 'tw-border-none' : 'tw-border-t-[2.5px]'
        } tw-border-t1`}></div>
      <div
        className={`tw-origin-right tw-rounded-full tw-border-t-[2.5px]  tw-transition-all ${
          isOpen ? 'tw-w-[21px] tw-rotate-[45deg]' : 'tw-w-full tw-rotate-0'
        } tw-border-t1`}></div>
    </div>
  );
};

export default Menu;
