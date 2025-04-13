'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-[#1CA855] flex justify-center text-3xl text-center">
      {title}
    </h2>
  );
};

export default SectionTitle;
