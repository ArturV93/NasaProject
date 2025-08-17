import React from "react";
import Mars from "../pages/Mars";
import Apod from "../pages/Apod";
import { Navigate, Route, Routes } from "react-router";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="mars" element={<Mars />} />
            <Route path="apod" element={<Apod />} />
            <Route path="*" element={<Navigate to="/mars" replace />} />
        </Routes>
    );
};

export default Router;