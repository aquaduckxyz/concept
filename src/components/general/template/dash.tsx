import React, { ReactNode } from 'react';

import Header from '@components/general/header';

import Theme from '../theme';
import Footer from '../footer';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Dash = ({ children }: Props) => {
  return (
    <Theme>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat tw-text-t1 tw-bg-white">
        <div className="dark tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-bg-gradient3 tw-font-montserrat">
          <div className="tw-flex tw-w-full tw-grow tw-overflow-hidden">
            <div className="tw-flex tw-grow tw-flex-col">
              <Header />
              <div className="tw-z-10 tw-w-full tw-grow tw-overflow-y-auto tw-items-center tw-flex tw-flex-col">
                <div className="tw-relativetw-w-full tw-flex tw-max-w-[1300px] tw-flex-col tw-h-fit tw-items-center tw-border-r tw-border-l tw-border-[#4AA4FF]">
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default Dash;
