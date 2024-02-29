import { ReactElement, useEffect, useRef, useState } from 'react';

import { AppRouter } from '../routes/router';
import Meta from '@/components/general/meta';

const Home = () => {
  return (
    <>
        <Meta/>
    <AppRouter />
  </>)
};

export default Home;
