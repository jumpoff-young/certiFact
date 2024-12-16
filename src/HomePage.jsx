import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import TableComponent from './TableComponent';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-[64px]'>
            <Navbar />
            <HeroSection />
            <TableComponent />
        </div>
    );
};

export default HomePage;