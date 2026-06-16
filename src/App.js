import React, { useState, useEffect } from 'react';

const RETAILERS = ["Amazon","FragranceX","FragranceNet","FragFlex","Fragrance Navaeh","Jomashop","Beautyhouse","Maxaroma","Aura Fragrance","Olfactory","Mystic Perfume","Venba Fragrance","eBay","Sephora","Ulta","Nordstrom","Macy's","Walmart","Target","Beautylish"];

const PRICES = {
  "Bleu de Chanel": [{s:"FragranceNet",p:89.99,best:true},{s:"Jomashop",p:94.50},{s:"FragranceX",p:96.00},{s:"Sephora",p:112.00},{s:"Amazon",p:107.50}],
  "Sauvage": [{s:"FragranceX",p:79.99,best:true},{s:"FragranceNet",p:83.00},{s:"Jomashop",p:85.00},{s:"Ulta",p:98.00},{s:"Amazon",p:94.20}],
  "Black Opium": [{s:"Maxaroma",p:72.00,best:true},{s:"FragranceNet",p:81.50},{s:"Walmart",p:86.00},{s:"Ulta",p:96.00},{s:"Amazon",p:94.00}],
  "Baccarat Rouge 540": [{s:"Olfactory",p:189.00,best:true},{s:"FragFlex",p:198.50},{s:"Beautylish",p:200.00},{s:"Nordstrom",p:215.00},{s:"Amazon",p:210.00}],
  "Good Girl": [{s:"Fragrance Navaeh",p:68.00,best:true},{s:"FragranceNet",p:74.00},{s:"Target",p:78.00},{s:"Macy's",p:92.00},{s:"Amazon",p:82.00}],
  "Aventus": [{s:"FragFlex",p:289.00,best:true},{s:"Olfactory",p:295.00},{s:"Jomashop",p:299.00},{s:"Nordstrom",p:325.00},{s:"Amazon",p:325.00}],
  "La Vie Est Belle": [{s:"Walmart",p:72.00,best:true},{s:"Target",p:75.00},{s:"FragranceNet",p:78.00},{s:"Ulta",p:89.00},{s:"Amazon",p:85.00}],
  "Ombre Leather": [{s:"Jomashop",p:149.00,best:true},{s:"Maxaroma",p:155.00},{s:"eBay",p:162.00},{s:"Nordstrom",p:185.00},{s:"Amazon",p:172.00}],
  "Flowerbomb": [{s:"FragranceNet",p:98.00,best:true},{s:"Walmart",p:105.00},{s:"Ulta",p:119.00},{s:"Sephora",p:119.00},{s:"Amazon",p:112.00}],
  "Y Eau de Parfum": [{s:"Aura Fragrance",p:74.00,best:true},{s:"FragranceX",p:79.00},{s:"Walmart",p:82.00},{s:"Ulta",p:95.00},{s:"Amazon",p:89.00}],
  "Acqua di Giò": [{s:"FragranceNet",p:65.00,best:true},{s:"Jomashop",p:69.00},{s:"Walmart",p:72.00},{s:"Sephora",p:88.00},{s:"Amazon",p:79.00}],
  "Chance Eau Tendre": [{s:"FragranceNet",p:95.00,best:true},{s:"Jomashop",p:99.00},{s:"Nordstrom",p:118.00},{s:"Sephora",p:118.00},{s:"Amazon",p:108.00}],
  "Light Blue": [{s:"FragranceNet",p:55.00,best:true},{s:"Walmart",p:59.00},{s:"Ulta",p:78.00},{s:"Sephora",p:78.00},{s:"Amazon",p:68.00}],
  "1 Million": [{s:"FragranceX",p:62.00,best:true},{s:"FragranceNet",p:65.00},{s:"Walmart",p:68.00},{s:"Macy's",p:85.00},{s:"Amazon",p:74.00}],
  "Mon Guerlain": [{s:"FragranceNet",p:71.00,best:true},{s:"Jomashop",p:75.00},{s:"Ulta",p:92.00},{s:"Sephora",p:92.00},{s:"Amazon",p:84.00}],
};

const styles = {
  root:{background:'#0a0a0a',minHeight:'100vh',color:'#e8e8e8',fontFamily:"'DM Sans',sans-serif",fontWeight:300},
  nav:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.25rem 1.75rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)'},
  logo:{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:'0.15em',color:'#fff'},
  logoSpan:{color:'#22c55e'},
  navLinks:{display:'flex',gap:'1.5rem',fontSize:13,letterSpacing:'0.1em',textTransform:'uppercase',color:'#555'},
  hero:{textAlign:'center',padding:'3.5rem 1.75rem 2.5rem',borderBottom:'0.5px solid rgba(255,255,255,0.07)'},
  eyebrow:{fontSize:12,letterSpacing:'0.28em',textTransform:'uppercase',color:'#22c55e',marginBottom:'1rem'},
  heroTitle:{fontFamily:"'Bebas Neue',sans-serif",fontSize:72,letterSpacing:'0.06em',lineHeight:0.95,color:'#fff',marginBottom:'0.4rem'},
  heroEm:{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontWeight:400,color:'#22c55e'},
  heroSub:{fontSize:15,color:'#555',letterSpacing:'0.04em',marginBottom:'2rem'},
  searchWrap:{display:'flex',maxWidth:500,margin:'0 auto 1.25rem',background:'#141414',border:'0.5px solid rgba(255,255,255,0.13)',borderRadius:4,overflow:'hidden'},
  searchInput:{flex:1,background:'transparent',border:'none',outline:'none',padding:'14px 18px',fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:300,color:'#e8e8e8'},
  searchBtn:{padding:'14px 24px',background:'#22c55e',border:'none',fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:'#000',cursor:'pointer'},
  retailers:{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:6,maxWidth:620,margin:'0 auto'},
  rpill:{fontSize:12,letterSpacing:'0.06em',padding:'4px 10px',border:'0.5px solid #2a2a2a',borderRadius:20,color:'#444',textTransform:'uppercase'},
  stats:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,padding:'1.75rem 1.75rem 0'},
  stat:{background:'#141414',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:8,padding:'1rem 1.25rem'},
  statNum:{fontFamily:"'Bebas Neue',sans-serif",fontSize:30,letterSpacing:'0.05em',color:'#22c55e',lineHeight:1,marginBottom:3},
  statLbl:{fontSize:12,letterSpacing:'0.12em',textTransform:'uppercase',color:'#444'},
  section:{padding:'1.75rem 1.75rem 0'},
  sectionHdr:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1.25rem',flexWrap:'wrap',gap:8},
  sectionLbl:{fontSize:12,letterSpacing:'0.2em',textTransform:'uppercase',color:'#555'},
  filters:{display:'flex',gap:6,flexWrap:'wrap'},
  card:{background:'#141414',border:'0.5px solid rgba(255,255,255,0.06)',borderRadius:10,padding:'1.25rem 1.5rem',marginBottom:10,cursor:'pointer',transition:'border-color 0.2s'},
  cardExpanded:{background:'#141414',border:'0.5px solid #22c55e',borderRadius:10,padding:'1.25rem 1.5rem',marginBottom:10,cursor:'pointer'},
  cardTop:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1rem',gap:12},
  cardLeft:{display:'flex',alignItems:'center',gap:14},
  fragName:{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:700,color:'#fff',lineHeight:1.1,marginBottom:4},
  fragMeta:{fontSize:13,letterSpacing:'0.08em',textTransform:'uppercase',color:'#555'},
  fragMetaSpan:{color:'#777',marginRight:8},
  bestBlock:{textAlign:'right',flexShrink:0},
  bestLbl:{fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'#22c55e',marginBottom:2},
  bestPrice:{fontFamily:"'Bebas Neue',sans-serif",fontSize:38,letterSpacing:'0.04em',color:'#22c55e',lineHeight:1},
  prices:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(155px,1fr))',gap:6,marginBottom:12},
  prow:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 11px',borderRadius:5,background:'#1c1c1c'},
  prowBest:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 11px',borderRadius:5,background:'rgba(34,197,94,0.09)',border:'0.5px solid rgba(34,197,94,0.2)'},
  pstore:{fontSize:13,letterSpacing:'0.03em',color:'#555'},
  pstoreBest:{fontSize:13,letterSpacing:'0.03em',color:'#16a34a',fontWeight:500},
  pval:{fontSize:14,fontWeight:500,color:'#999'},
  pvalBest:{fontSize:14,fontWeight:500,color:'#22c55e'},
  btag:{fontSize:10,letterSpacing:'0.07em',textTransform:'uppercase',background:'rgba(34,197,94,0.15)',color:'#22c55e',padding:'2px 6px',borderRadius:3,marginLeft:5},
  actions:{display:'flex',gap:7},
  btnP:{flex:1,padding:'10px',background:'#22c55e',border:'none',borderRadius:4,fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'#000',cursor:'pointer'},
  btnG:{padding:'10px 14px',background:'none',border:'0.5px solid #2a2a2a',borderRadius:4,fontFamily:"'DM Sans',sans-serif",fontSize:13,color:'#444',cursor:'pointer'},
  notes:{marginTop:'1rem',paddingTop:'1rem',borderTop:'0.5px solid rgba(255,255,255,0.07)'},
  notesTitle:{fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'#555',marginBottom:'0.75rem'},
  notesGrid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10},
  notesCol:{background:'#1a1a1a',borderRadius:6,padding:'0.75rem'},
  notesColLabel:{fontSize:11,letterSpacing:'0.14em',textTransform:'uppercase',color:'#555',marginBottom:6},
  noteTag:{display:'inline-block',fontSize:12,padding:'3px 8px',background:'#222',borderRadius:3,color:'#888',marginRight:4,marginBottom:4},
  footer:{borderTop:'0.5px solid rgba(255,255,255,0.07)',margin:'2.5rem 1.75rem 0',paddingTop:'1.25rem',display:'flex',justifyContent:'space-between',fontSize:12,letterSpacing:'0.08em',textTransform:'uppercase',color:'#333'},
};

const FILTERS = [{key:'all',label:'All'},{key:'designer',label:'Designer'},{key:'niche',label:'Niche'},{key:'mens',label:"Men's"},{key:'womens',label:"Women's"},{key:'unisex',label:'Unisex'}];

function Bottle() {
  return (
    <svg width="36" height="64" viewBox="0 0 32 58" fill="none">
      <rect x="12" y="1" width="8" height="7" rx="2" fill="#252525"/>
      <rect x="9" y="7" width="14" height="5" rx="1.5" fill="#2e2e2e"/>
      <rect x="4" y="12" width="24" height="42" rx="4" fill="#181818" stroke="#2e2e2e" strokeWidth="0.5"/>
      <rect x="4" y="12" width="24" height="10" rx="4" fill="#222"/>
      <rect x="7" y="26" width="18" height="0.5" fill="#2a2a2a"/>
      <rect x="7" y="44" width="18" height="0.5" fill="#2a2a2a"/>
      <rect x="9" y="28" width="14" height="14" rx="2" fill="#1e1e1e" stroke="#292929" strokeWidth="0.5"/>
      <rect x="11" y="31" width="10" height="1.5" rx="0.75" fill="#22c55e" opacity="0.7"/>
      <rect x="12" y="35" width="8" height="0.5" rx="0.25" fill="#333"/>
      <rect x="12" y="37" width="8" height="0.5" rx="0.25" fill="#333"/>
    </svg>
  );
}

export default function App() {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');
  const [catalog, setCatalog] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/fragrances/top')
      .then(r => r.json())
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = catalog.filter(f => {
    const matchFilter = active === 'all' || f.category === active || f.gender === active;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.brand.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
      <div style={styles.root}>

        <nav style={styles.nav}>
          <div style={styles.logo}>Scent<span style={styles.logoSpan}>eur</span></div>
          <div style={styles.navLinks}>
            {['Discover','Deals','Brands','Alerts'].map(l => <span key={l} style={{cursor:'pointer'}}>{l}</span>)}
          </div>
        </nav>

        <div style={styles.hero}>
          <div style={styles.eyebrow}>Price comparison · 20 retailers · 50,000+ fragrances</div>
          <div style={styles.heroTitle}>Find the <em style={styles.heroEm}>scent.</em><br/>Skip the markup.</div>
          <div style={styles.heroSub}>We check every retailer so you don't have to.</div>
          <div style={styles.searchWrap}>
            <input style={styles.searchInput} placeholder="Search fragrance, brand, or notes…" value={search} onChange={e => setSearch(e.target.value)}/>
            <button style={styles.searchBtn}>Search</button>
          </div>
          <div style={styles.retailers}>
            {RETAILERS.map(r => <span key={r} style={styles.rpill}>{r}</span>)}
          </div>
        </div>

        <div style={styles.stats}>
          {[{n:'50K+',l:'Fragrances tracked'},{n:'20',l:'Retailers compared'},{n:'$38',l:'Avg. user savings'}].map(s => (
            <div key={s.l} style={styles.stat}>
              <div style={styles.statNum}>{s.n}</div>
              <div style={styles.statLbl}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <div style={styles.sectionHdr}>
            <div style={styles.sectionLbl}>Trending deals</div>
            <div style={styles.filters}>
              {FILTERS.map(f => (
                <button key={f.key} onClick={() => setActive(f.key)} style={{...styles.btnG, borderColor: active===f.key ? '#22c55e' : '#2a2a2a', color: active===f.key ? '#22c55e' : '#444', background: active===f.key ? 'rgba(34,197,94,0.08)' : 'none', borderRadius:20, padding:'5px 14px', fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase'}}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {loading && <div style={{textAlign:'center',color:'#555',padding:'2rem',fontSize:14}}>Loading fragrances...</div>}

          {filtered.map(f => {
            const prices = PRICES[f.name] || [];
            const best = prices.find(p => p.best);
            const maxP = prices.length ? Math.max(...prices.map(p => p.p)) : 0;
            const saved = best ? (maxP - best.p).toFixed(2) : 0;
            const isExpanded = expanded === f.id;

            return (
              <div key={f.id} style={isExpanded ? styles.cardExpanded : styles.card} onClick={() => setExpanded(isExpanded ? null : f.id)}>
                <div style={styles.cardTop}>
                  <div style={styles.cardLeft}>
                    <Bottle/>
                    <div>
                      <div style={styles.fragName}>{f.name}</div>
                      <div style={styles.fragMeta}>
                        <span style={styles.fragMetaSpan}>{f.brand}</span>
                        {f.year} · {f.gender} · Save up to ${saved}
                      </div>
                    </div>
                  </div>
                  {best && (
                    <div style={styles.bestBlock}>
                      <div style={styles.bestLbl}>Best price</div>
                      <div style={styles.bestPrice}>${best.p.toFixed(2)}</div>
                    </div>
                  )}
                </div>

                {prices.length > 0 && (
                  <div style={styles.prices}>
                    {prices.map(p => (
                      <div key={p.s} style={p.best ? styles.prowBest : styles.prow}>
                        <span style={p.best ? styles.pstoreBest : styles.pstore}>{p.s}</span>
                        <span style={p.best ? styles.pvalBest : styles.pval}>${p.p.toFixed(2)}{p.best && <span style={styles.btag}>Best</span>}</span>
                      </div>
                    ))}
                  </div>
                )}

                {isExpanded && f.notes && (
                  <div style={styles.notes}>
                    <div style={styles.notesTitle}>Fragrance Notes</div>
                    <div style={styles.notesGrid}>
                      <div style={styles.notesCol}>
                        <div style={styles.notesColLabel}>Top</div>
                        {f.notes.top.map(n => <span key={n} style={styles.noteTag}>{n}</span>)}
                      </div>
                      <div style={styles.notesCol}>
                        <div style={styles.notesColLabel}>Heart</div>
                        {f.notes.middle.map(n => <span key={n} style={styles.noteTag}>{n}</span>)}
                      </div>
                      <div style={styles.notesCol}>
                        <div style={styles.notesColLabel}>Base</div>
                        {f.notes.base.map(n => <span key={n} style={styles.noteTag}>{n}</span>)}
                      </div>
                    </div>
                  </div>
                )}

                <div style={styles.actions} onClick={e => e.stopPropagation()}>
                  <button style={styles.btnP}>Shop best price →</button>
                  <button style={styles.btnG}>🔔</button>
                  <button style={styles.btnG}>⇄</button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.footer}>
          <span>Scenteur © 2026</span>
          <span>Prices refresh every 6 hours</span>
          <span>Affiliate links apply</span>
        </div>
      </div>
    </>
  );
}