import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Finish from "./pages/Finish";
import Game from "./pages/Game";
import People from "./pages/People";
import Role from "./pages/Role";
import Topic from "./pages/Topic";

function App() {
    return (
        <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/game" element={<Game />} />
                <Route path="/finish" element={<Finish />} />
                <Route path="/role" element={<Role />} />
                <Route path="/topic" element={<Topic />} />
                <Route path="/" element={<People />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
