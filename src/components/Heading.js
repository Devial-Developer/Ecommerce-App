import React from 'react';
import '../components/Heading.css';

function Heading({heading}) {
  return (
    <div class="heading">
      <h3><small>{heading}</small></h3>
    </div>
  )
}

export default Heading;

