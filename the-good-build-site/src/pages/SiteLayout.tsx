import React, { useState } from "react"
import { HeaderBar } from "../components/HeaderBar"
import { Routes, Route } from "react-router"
import { HomePage } from "./HomePage"
import { HowItWorksPage } from "./HowItWorksPage";
import { AboutPage } from "./AboutPage";
import { FaqPage } from "./FaqPage";

export function SiteLayout() {
    const [showBuild, setShowBuild] = useState<boolean>(false);
    console.log('show build: ', showBuild)

    return (
        <div>
            <HeaderBar setShowBuild={setShowBuild}/>

            <Routes>
                <Route path="/" element={<HomePage showBuild={showBuild} setShowBuild={setShowBuild}/>} />
                <Route path="/how-it-works" element={<HowItWorksPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/faq" element={<FaqPage/>}/>
            </Routes>
        </div>
    )
}