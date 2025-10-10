'use client';

// import { button } from '@/components/ui/button';
import { Suspense } from 'react';
import Header from '../../components/header';
import Image from 'next/image';

import HomePage from '../../components/section/HomePage';
import Skills from '../../components/section/Skills';
import FeaturedProjects from '../../components/section/FeaturedProjects';
import VideoPortfolio from '../../components/section/VideoPortfolio';
import AboutMe from '../../components/section/AboutMe';
import Contacts from '../../components/section/Contacts';
import Footer from '../../components/section/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-700 relative overflow-hidden">
      <Suspense>
        <Header />
        <HomePage projects={5} edited={50} />
        <AboutMe projects={5} edited={50} />
        <Skills />
        <VideoPortfolio />
        <FeaturedProjects />
        <Contacts />
        <Footer />
      </Suspense>
    </div>
  );
}
