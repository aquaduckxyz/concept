//------------------------------------------------------------------------------
/*

    This file is part of the Crossmark Application: 
    https://github.com/crossmarkio/core

    Copyright (c) 2024, Crossmark International Inc.

    This file is distributed under a non-disclosure aggreement (NDA). This 
    permission notice is to remain unaltered and appear in all copies.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby DENIED.

    THE  SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH  REGARD  TO  THIS  SOFTWARE  INCLUDING  ALL  IMPLIED  WARRANTIES  OF
    MERCHANTABILITY  AND  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY  SPECIAL ,  DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER  RESULTING  FROM  LOSS  OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION  OF  CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

*/
//==============================================================================

import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const overlay = {
  initial: { opacity: '0%' },
  animate: { opacity: '100%' },
  exit: {
    opacity: '0%',
    transition: { delay: 0, duration: 0.5 },
  },
  transition: {
    delay: 0,
    duration: 0.3,
  },
};

interface Props {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
  onClick?: () => void;
}
const Overlay = (props: Props) => {
  return (
    <motion.div {...overlay} {...props}>
      {props.children}
    </motion.div>
  );
};

export default Overlay;
