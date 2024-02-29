import React from 'react';

import { Landing } from './landing';
import { EthDenver } from './ethdenver';
import { Chains } from './chains';
import { Features } from './features';
import { Contact } from './contact';
import { Community } from './community';
import Meta from '@meta/index';

const Index = () => {
  return (
    <>
        <Meta/>
      <Landing />
      <EthDenver />
      <Chains />
      <Features />
      <Contact />
      <Community />
    </>
  );
};

export default Index;
