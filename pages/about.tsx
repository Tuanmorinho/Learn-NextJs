import React from 'react';
// import Header from '@/components/common/header';
import dynamic from 'next/dynamic';
import { AdminLayout, MainLayout } from '@/components/layouts';

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

export interface IAboutPageProps {
}

const AboutPage = (props: IAboutPageProps) => {

  return (
    <div>
      <h1>About Page</h1>
      {/* <Header /> */}
    </div>
  );
}


AboutPage.Layout = AdminLayout

export default AboutPage