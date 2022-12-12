import React from 'react';
import { MainLayout } from '@/components/layouts';
import { StudentDetail } from '@/components/swr';

export interface ISwr {
}

const SwrPage = (props: ISwr) => {

  return (
    <div>
      <h1>SWR Playground</h1>
      
      <ul>
        <li><StudentDetail studentId='1' /></li>
        <li><StudentDetail studentId='1' /></li>
        <li><StudentDetail studentId='1' /></li>
      </ul>
    </div>
  );
}


SwrPage.Layout = MainLayout

export default SwrPage