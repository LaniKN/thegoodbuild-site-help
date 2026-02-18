import React from "react"

export function AboutPage() {
    return (
        <div id="about-page" className="page">
            <section className="about-section" style={{paddingTop:"130px"}}>
            <div className="about-inner">
                <div className="about-content">
                <div className="section-label">About</div>
                <div className="section-title">One builder. No BS.</div>
                <p>The Good Build started in a garage in Corona, California. What began as a hobby &mdash; buying, building, and flipping PCs &mdash; turned into something bigger when people kept coming back and bringing their friends.</p>
                <p>Every system you see on this site was built by me. I source the parts, I assemble the machine, I test it, and I stand behind it. There's no warehouse, no investors, no corporate nonsense. Just good builds at fair prices from someone who genuinely loves doing this.</p>
                <p>All components are thoroughly cleaned, tested, and stress-tested before any build is listed. I treat every system like I'm building it for myself.</p>
                <div className="about-stat-row">
                    <div className="about-stat"><h3>500+</h3><p>Builds completed</p></div>
                    <div className="about-stat"><h3>2+ yrs</h3><p>In business</p></div>
                    <div className="about-stat"><h3>Corona</h3><p>Based in CA</p></div>
                </div>
                </div>
                <div className="about-image"><img src="images/logo.png" alt="Inside a Good Build" style={{width:"100%",borderRadius:"16px"}}/></div>
            </div>
            </section>
        </div>
    )
}