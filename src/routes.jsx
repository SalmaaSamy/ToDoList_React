import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainScreen from './Components/MainScreen';
import SplashScreen from './Components/SplashScreen';

const AppRoutes = () => (
    <>
    <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/MainScreen" element={<MainScreen />} />
    </Routes>
   </>
);

export default AppRoutes;