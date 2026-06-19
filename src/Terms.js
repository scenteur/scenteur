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
};

export default function Terms() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
      <div style={styles.root}>
        <div style={styles.nav}>
          <Link to="/" style={styles.logo}>Scent<span style={styles.logoSpan}>eur</span></Link>
          <Link to="/" style={styles.back}>← Back to Scenteur</Link>
        </div>
        <div style={styles.content}>
          <div style={styles.title}>Terms of Service</div>
          <div style={styles.updated}>Last updated: June 2026</div>

          <p style={styles.p}>Welcome to Scenteur. By accessing or using scenteur.shop (the "Site"), you agree to be bound by these Terms of Service.</p>

          <div style={styles.h2}>Use of the Site</div>
          <p style={styles.p}>Scenteur provides a fragrance price comparison service that aggregates pricing information from third-party retailers. We do not sell fragrances directly. All purchases are made through third-party retailer websites, and you agree to comply with their respective terms and policies.</p>

          <div style={styles.h2}>Pricing Accuracy</div>
          <p style={styles.p}>While we strive to provide accurate and up-to-date pricing information, prices displayed on Scenteur are subject to change without notice and may not always reflect real-time pricing on retailer websites. We are not responsible for any pricing discrepancies between our Site and third-party retailers. Always verify final pricing on the retailer's website before completing a purchase.</p>

          <div style={styles.h2}>Affiliate Relationships</div>
          <p style={styles.p}>Scenteur participates in affiliate marketing programs, including the Amazon Associates Program. We may earn commissions on qualifying purchases made through links on our Site at no additional cost to you.</p>

          <div style={styles.h2}>No Warranty</div>
          <p style={styles.p}>The Site is provided "as is" without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any content on the Site.</p>

          <div style={styles.h2}>Limitation of Liability</div>
          <p style={styles.p}>Scenteur shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Site or any transactions made through third-party retailer links.</p>

          <div style={styles.h2}>Intellectual Property</div>
          <p style={styles.p}>All content on this Site, including text, graphics, logos, and design, is the property of Scenteur unless otherwise noted, and may not be reproduced without permission.</p>

          <div style={styles.h2}>Changes to Terms</div>
          <p style={styles.p}>We reserve the right to modify these Terms of Service at any time. Continued use of the Site after changes constitutes acceptance of the updated terms.</p>

          <div style={styles.h2}>Contact Us</div>
          <p style={styles.p}>If you have questions about these Terms, please contact us at hello@scenteur.shop.</p>
        </div>
      </div>
    </>
  );
}
