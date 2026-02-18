import React, { useEffect } from 'react';
import '../style/HomePage.css';
import { useNavigate } from 'react-router';
import { useScrollToBuilds } from '../hooks/useScrollToBuilds';

interface HomePageProps {
    showBuild: boolean;
    setShowBuild: (showBuild: boolean) => void;
}

export function  HomePage ({showBuild, setShowBuild}:HomePageProps) {
    const navigate = useNavigate();
    const builds = document.getElementById('builds-section');

    useEffect(() => {
        console.log('show build: ', showBuild)
        if(showBuild) {
            window.scrollTo({
                top: builds?.offsetTop,
                behavior: 'smooth',
            });
            setShowBuild(false);
        }
    })

    return (
        <div id="home" className="page active">
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge"><div className="hero-badge-dot"></div>Builds available now</div>
                    <h1>Gaming PCs built<br/>with <em>care</em>.</h1>
                    <p>Hand-built, stress-tested, and ready to play. Every build from The Good Build is assembled by someone who actually knows what they're doing &mdash; and stands behind every machine that leaves the bench.</p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={useScrollToBuilds}>Browse Builds</button>
                        <button className="btn-secondary" onClick={() => navigate('/how-it-works')}>How It Works</button>
                    </div>
                </div>
                <div className="hero-image"><img src="images/logo.png" alt="Custom gaming PC by The Good Build"/></div>
            </section>
            <div className="trust-bar">
                <div className="trust-bar-inner">
                    <div className="trust-item"><div className="trust-icon">&#128295;</div><div className="trust-text"><h4>500+ Builds</h4><p>Proven track record</p></div></div>
                    <div className="trust-item"><div className="trust-icon">&#128170;</div><div className="trust-text"><h4>Stress Tested</h4><p>Every single system</p></div></div>
                    <div className="trust-item"><div className="trust-icon">&#128274;</div><div className="trust-text"><h4>7-Day Returns</h4><p>No questions asked</p></div></div>
                    <div className="trust-item"><div className="trust-icon">&#128666;</div><div className="trust-text"><h4>Pickup or Ship</h4><p>Corona, CA + nationwide</p></div></div>
                </div>
            </div>
            <section id="builds-section">
                <div className="section-inner">
                    <div className="section-label">Available Now</div>
                    <div className="section-title">Ready-to-play builds</div>
                    <div className="section-subtitle">Each system is fully assembled, stress-tested, and loaded with a fresh Windows install. Pick it up locally or have it shipped.</div>
                </div>
                <div className="builds-grid" id="builds-grid">
                    <div className="loading-builds"><div className="loading-spinner"></div>Loading builds...</div>
                </div>
            </section>
            <section>
                <div className="section-inner">
                    <div className="section-label">Why Us</div>
                    <div className="section-title">Not your average pre-built.</div>
                    <div className="section-subtitle">Big box pre-builts cut corners. We don't.</div>
                </div>
                <div className="why-grid">
                    <div className="why-card"><div className="why-card-icon">&#9881;&#65039;</div><h3>Built by hand, not a factory</h3><p>Every system is assembled by one person who cares about cable management, airflow, and component quality. No assembly lines, no shortcuts.</p></div>
                    <div className="why-card"><div className="why-card-icon">&#128200;</div><h3>Stress tested before it's yours</h3><p>Every build goes through thermal and stability testing before it's listed. If it can't handle the heat, it doesn't ship.</p></div>
                    <div className="why-card"><div className="why-card-icon">&#128176;</div><h3>Fair pricing, no fluff</h3><p>We source smart and pass the savings on. Better machine, less money, no bloatware.</p></div>
                    <div className="why-card"><div className="why-card-icon">&#129309;</div><h3>Real support from a real person</h3><p>Got a question? You're talking to the person who built your PC &mdash; not a call center.</p></div>
                    <div className="why-card"><div className="why-card-icon">&#128230;</div><h3>Ship-ready packaging</h3><p>Every shipped build is packed with custom foam bracing and double-boxed so it arrives exactly how it left.</p></div>
                    <div className="why-card"><div className="why-card-icon">&#128077;</div><h3>500+ happy customers</h3><p>Building and selling since 2023. Hundreds of satisfied buyers and counting.</p></div>
                </div>
            </section>
        </div>
    );
}