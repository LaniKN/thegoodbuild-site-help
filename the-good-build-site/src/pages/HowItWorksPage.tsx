import React from "react";
import '../style/Section.css';

export function HowItWorksPage() {
    return (
        <div id="how" className="page">
            <section style={{paddingTop:'130px'}}>
                <div className="section-inner"><div className="section-label">How It Works</div><div className="section-title">Dead simple.</div><div className="section-subtitle">No custom order forms. No 6-week wait times. Pick a build, pay, and it's yours.</div></div>
                <div className="how-grid">
                    <div className="how-card"><div className="how-number">1</div><h3>Browse</h3><p>Check out what's currently available. Each listing has full specs, photos, and component details.</p></div>
                    <div className="how-card"><div className="how-number">2</div><h3>Purchase</h3><p>Buy directly through the site. Secure checkout powered by Shopify. No sketchy DMs required.</p></div>
                    <div className="how-card"><div className="how-number">3</div><h3>Pick Up or Ship</h3><p>Local to Corona, CA? Pick it up same-day. Otherwise, we'll pack it right and ship it to your door.</p></div>
                    <div className="how-card"><div className="how-number">4</div><h3>Game On</h3><p>Plug in, power on, and play. Windows is installed, drivers are updated, and it's ready to go.</p></div>
                </div>
                </section>
                <section style={{paddingTop:'40px'}}>
                <div className="section-inner" style={{maxWidth:'700px'}}>
                    <h2 className="how-heading">Shipping Details</h2>
                    <p className="how-paragraph">We ship anywhere in the continental US. Every PC is custom-packed with foam bracing, GPU support brackets removed and secured separately, and double-boxed to survive transit. Shipping costs are calculated based on your location &mdash; expect roughly $75&ndash;$120 depending on distance.</p>
                    <h2 className="how-heading">Local Pickup</h2>
                    <p className="how-subtitle">Free pickup available in Corona, CA. Once your order is confirmed, we'll reach out to schedule a convenient time. Most pickups happen same-day or next-day.</p>
                </div>
            </section>
        </div>
    );
}
