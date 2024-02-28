import React, { ReactNode } from 'react';

import Image from 'next/image';
import Logo from '@components/general/assets/images/png/icon.png';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Form = ({ children }: Props) => {
  return (
    <div className="tw-z-10 tw-flex tw-h-fit tw-max-h-[800px] tw-w-full tw-max-w-[500px] tw-select-none tw-flex-col tw-overflow-hidden tw-rounded-xl tw-border tw-border-br1 tw-bg-b1 tw-shadow-[0_0_24px_0] tw-shadow-s1">
      <div className="tw-flex tw-h-fit tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-border-b tw-border-br1 tw-bg-b2 tw-px-16 tw-py-6">
        <div className="tw-relative tw-flex tw-h-full tw-w-full tw-items-end tw-justify-center tw-gap-4 ">
          <Image src={Logo} alt="" className="tw-aspect-square tw-h-12 tw-w-12" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Form;
