import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root:{background:'#0a0a0a',minHeight:'100vh',color:'#e8e8e8',fontFamily:"'DM Sans',sans-serif",fontWeight:300,padding:'2rem 1.75rem'},
  nav:{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'1.25rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)',marginBottom:'2rem'},
  logo:{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,letterSpacing:'0.15em',color:'#fff',textDecoration:'none'},
  logoSpan:{color:'#22c55e'},
  back:{fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'#555',textDecoration:'none'},
  content:{maxWidth:720,margin:'0 auto'},
  title:{fontFamily:"'Playfair Display',serif",fontSize:36,fontWeight:700,color:'#fff',marginBottom:8},
  updated:{fontSize:12,color:'#555',marginBottom:'2rem'},
  h2:{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:'#fff',marginTop:'1.75rem',marginBottom:'0.75rem'},
  p:{fontSize:14,lineHeight:1.7,color:'#999',marginBottom:'0.75rem'},
  ul:{fontSize:14,lineHeight:1.7,color:'#999',marginBottom:'0.75rem',paddingLeft:'1.25rem'},
};

export default function PrivacyPolicy() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
      <div style={styles.root}>
        <div style={styles.nav}>
          <Link to="/" style={styles.logo}>Scent<span style={styles.logoSpan}>eur</span></Link>
          <Link to="/" style={styles.back}>← Back to Scenteur</Link>
        </div>
        <div style={styles.content}>
          <div style={styles.title}>Privacy Policy</div>
          <div style={styles.updated}>Last updated: June 2026</div>

          <p style={styles.p}>Scenteur ("we," "us," or "our") operates scenteur.shop (the "Site"). This Privacy Policy explains how we collect, use, and protect your information when you use our fragrance price comparison service.</p>

          <div style={styles.h2}>Information We Collect</div>
          <ul style={styles.ul}>
            <li>Email addresses you voluntarily provide when subscribing to our deal alerts</li>
            <li>Search queries and browsing behavior on our Site to improve our service</li>
            <li>Standard technical data such as IP address, browser type, and device information</li>
          </ul>

          <div style={styles.h2}>How We Use Your Information</div>
          <p style={styles.p}>We use collected information to send you fragrance deal alerts and newsletters (only if you subscribe), improve our price comparison service, and analyze site usage to improve user experience. We do not sell your personal information to third parties.</p>

          <div style={styles.h2}>Affiliate Disclosure</div>
          <p style={styles.p}>Scenteur participates in affiliate marketing programs, including the Amazon Associates Program and various retailer affiliate networks. This means we may earn a commission when you click on links to retailer websites and make a purchase, at no additional cost to you. As an Amazon Associate, we earn from qualifying purchases.</p>

          <div style={styles.h2}>Cookies</div>
          <p style={styles.p}>We may use cookies and similar tracking technologies to enhance your experience on our Site, remember your preferences, and analyze site traffic.</p>

          <div style={styles.h2}>Third-Party Links</div>
          <p style={styles.p}>Our Site contains links to third-party retailer websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies separately.</p>

          <div style={styles.h2}>Data Security</div>
          <p style={styles.p}>We take reasonable measures to protect your information, but no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>

          <div style={styles.h2}>Your Choices</div>
          <p style={styles.p}>You may unsubscribe from our email communications at any time using the unsubscribe link provided in each email.</p>

          <div style={styles.h2}>Contact Us</div>
          <p style={styles.p}>If you have questions about this Privacy Policy, please contact us at hello@scenteur.shop.</p>
        </div>
      </div>
    </>
  );
}
