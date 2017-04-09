import React from 'react';
import {Link} from 'spectacle';

const stepLinkStyles = {padding: '20px', margin: '30px 0', border: '6px dashed #CECECE'};

const StepLink = ({
  link,
}) =>
  <div style={stepLinkStyles}>
    <Link href={link}>{link}</Link>
  </div>;

export default StepLink;
