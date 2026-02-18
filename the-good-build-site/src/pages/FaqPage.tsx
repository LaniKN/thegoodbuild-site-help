import React from 'react';

export function FaqPage() {
    return (
        <div id="faq-page" className="page">
<section className="faq-section" style={{paddingTop:"130px",minHeight:"100vh"}}>
  <div className="section-inner"><div className="section-label">FAQ</div><div className="section-title">Common questions</div><div className="section-subtitle">If yours isn't here, reach out &mdash; we respond fast.</div></div>
  <div className="faq-list">
    {/* change on clicks to use useState pass in? */}
    {/* <div className="faq-item open"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>What's your return policy?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">We offer a 7-day return window from the date of delivery or pickup. If something's wrong, reach out within 7 days and we'll make it right &mdash; full refund or exchange. After the return window, we provide ongoing tech support. See our <a href="#" onClick="showPage('policy');return false" style="color:var(--accent)">full Return &amp; Warranty Policy</a>.</div></div>
    <div className="faq-item"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>Do you ship nationwide?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">Yes &mdash; anywhere in the continental US. Every shipped PC is foam-braced and double-boxed. Shipping runs roughly $75&ndash;$120 depending on location. Free local pickup in Corona, CA.</div></div>
    <div className="faq-item"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>Are these new or used parts?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">Our builds use refurbished components &mdash; previously used parts that have been fully disassembled, cleaned, tested, and stress-tested. Each listing clearly states component details. We only use parts that meet our quality standards.</div></div>
    <div className="faq-item"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>What comes installed?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">Every build ships with a clean Windows 11 Pro installation with the latest drivers and updates. No bloatware, no trial software. Just a fresh OS ready to go.</div></div>
    <div className="faq-item"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>Can I request a custom build?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">Not at this time &mdash; we sell pre-built, ready-to-ship systems. If you have something specific in mind, reach out and we'll let you know if we can make it happen.</div></div>
    <div className="faq-item"><div className="faq-question" onClick="this.parentElement.classList.toggle('open')"><h3>Do you offer a warranty?</h3><span className="faq-arrow">&#9660;</span></div><div className="faq-answer">7-day full return/exchange window on every build. Beyond that, free ongoing tech support. Individual components may carry their own manufacturer warranty &mdash; we'll help you navigate those claims if needed.</div></div> */}
  </div>
</section>
</div>
    )
}