'use client';
import React from 'react'; import { animate } from 'motion';
type Case={id:string;title:string;blurb:string;tags:string[];impact:string;stack:string;liveDemo:string;repo?:string};
const TELEGRAM_USERNAME='R_O_R_K'; const TELEGRAM_WEBHOOK='';
const CASES:Case[]=[
{id:"wealthifai",title:"WealthifAI — Finance OS",blurb:"Smart budgeting, receipt OCR, reminders and goals with iOS-like cards.",tags:["OpenAI","Supabase","FastAPI"],impact:"Cuts manual budgeting by ~70% in tests.",stack:"FastAPI, Supabase, OCR, OpenAI",liveDemo:"demos/wealthifai.html"},
{id:"securityguard",title:"SecurityGuard_AI — Raspberry Pi Monitor",blurb:"CPU temp, RAM, disk, Docker status; Telegram alerts.",tags:["Raspberry Pi","Docker","Telegram"],impact:"Real-time homelab health.",stack:"Python, cron, Telegram Bot API",liveDemo:"demos/securityguard.html"},
{id:"reflacto",title:"Reflacto — Reflection & Breathwork",blurb:"Daily prompts, Buteyko timers, Notion export, trends.",tags:["Shortcuts","Notion","n8n"],impact:"Better adherence to reflection.",stack:"Shortcuts + n8n + Notion",liveDemo:"demos/reflacto.html"},
{id:"healthifai",title:"HealthifAI — iOS Health Insights",blurb:"HealthKit queries + GPT summaries + widgets.",tags:["iOS","HealthKit","Swift"],impact:"Actionable post‑workout insights.",stack:"Swift, HK queries, Widgets",liveDemo:"demos/healthifai.html"},
{id:"goggins",title:"Goggins Kitchen",blurb:"AI culinary guide for athletes with personalized macros.",tags:["AI","Nutrition"],impact:"Faster meal planning.",stack:"LLM prompts + data",liveDemo:"demos/goggins.html"},
{id:"tamagotchi",title:"Fitness Tamagotchi",blurb:"Gamified health tied to real‑world actions.",tags:["Gamification","Health"],impact:"Motivation via playful loops.",stack:"iOS/Shortcuts + LLM",liveDemo:"demos/tamagotchi.html"},
];
export default function Page(){ const [modal,setModal]=React.useState<Case|null>(null);
React.useEffect(()=>{const cv=document.getElementById('starfield') as HTMLCanvasElement;if(cv){const c=cv.getContext('2d')!;let w:number,h:number;type Star={x:number;y:number;z:number;s:number};let stars:Star[];const count=140;const init=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight;stars=new Array(count).fill(0).map(()=>({x:Math.random()*w,y:Math.random()*h,z:Math.random()*1+0.2,s:Math.random()*1.6+0.4}))};const step=()=>{c.clearRect(0,0,w,h);c.fillStyle='white';stars.forEach(st=>{st.x+=st.z;if(st.x>w){st.x=0;st.y=Math.random()*h}c.globalAlpha=st.s/2;c.fillRect(st.x,st.y,st.s,st.s)});requestAnimationFrame(step)};addEventListener('resize',init);init();step();}const onMove=(e:PointerEvent)=>{(document.documentElement as any).style.setProperty('--mx',e.clientX+'px');(document.documentElement as any).style.setProperty('--my',e.clientY+'px')};document.addEventListener('pointermove',onMove,{passive:true});return()=>document.removeEventListener('pointermove',onMove)},[]);
React.useEffect(()=>{const ids=['lottie1','lottie2','lottie3','lottie4'];import('lottie-web').then((lib)=>{const l=(lib as any).default||lib;ids.forEach(id=>{const el=document.getElementById(id); if(el) l.loadAnimation({container:el,renderer:'svg',loop:true,autoplay:true,path:'https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json'})})}).catch(()=>{})},[]);
React.useEffect(()=>{document.querySelectorAll('.case').forEach((el,i)=>{animate(el,{opacity:[0,1],transform:['translateY(10px)','none']},{duration:.6,delay:i*0.03,easing:'ease-out'})})},[]);
const [audioPlaying,setAudioPlaying]=React.useState(false); const audioRef=React.useRef<HTMLAudioElement|null>(null);
async function toggleAudio(){ if(!audioRef.current){const ap=(window as any).__NEXT_DATA__?.assetPrefix; audioRef.current=new Audio(ap? ap+'/phonk.mp3':'phonk.mp3'); audioRef.current.loop=true; audioRef.current.volume=0.15; } try{ if(!audioPlaying){await audioRef.current!.play(); setAudioPlaying(true)} else {audioRef.current!.pause(); setAudioPlaying(false)} }catch{ alert('Drop a phonk.mp3 into /public to enable music.') } }
return (<>
<div className='spotlight' aria-hidden='true'></div>
<canvas id='starfield' aria-hidden='true' style={{position:'fixed',inset:0 as any,zIndex:-1}}/>
<nav className='topbar'>
  <span className='pill'>Pavlo — AI Integrations & Apps</span>
  <a className='btn' href='#cases'>Cases</a>
  <a className='btn secondary' href='#about'>About</a>
  <a className='btn secondary' href='#contact'>Contact</a>
  <button className='btn secondary' onClick={toggleAudio}>{audioPlaying?'Pause ♫':'Phonk ♫'}</button>
  <button className='btn secondary' onClick={()=>{const clean=document.body.dataset.theme!=='clean';document.body.dataset.theme=clean?'clean':'vhs';document.body.style.background=clean?'#0a0a0f':'radial-gradient(1200px 800px at 8% 12%, #0b0714 0%, var(--bg) 55%) fixed';}}>VHS / Clean</button>
</nav>
<header>
  <div className='hero'>
    <div className='glass pad'>
      <h1 className='title'>Dark-Fantasy Phonk / VHS Portfolio</h1>
      <p className='subtitle'>I design and ship AI automations and apps: n8n/Zapier agents, Telegram bots, finance & health products, and Raspberry Pi DevOps. I prefer fast MVPs that actually work.</p>
      <div className='stack'>{['n8n','Zapier','OpenAI','Supabase','FastAPI','iOS HealthKit','Raspberry Pi'].map(t=><span key={t} className='pill'>{t}</span>)}</div>
      <div style={{display:'flex',gap:10,marginTop:14}}><a className='btn' href='#gallery'>See Demos</a><a className='btn secondary' href='https://instagram.com/rork_paul' target='_blank'>Instagram</a></div>
    </div>
    <div className='glass pad'>
      <h2 className='section-title'>What I Do</h2>
      <div className='kgrid'>
        <div className='card'><strong>AI Agents & Automations</strong><p className='muted'>n8n super-agents, memory, semantic search, Slack/Telegram, logging.</p></div>
        <div className='card'><strong>Finance & Health Apps</strong><p className='muted'>WealthifAI & HealthifAI UIs, receipt OCR, goals, HealthKit insights.</p></div>
        <div className='card'><strong>Backend & DevOps</strong><p className='muted'>FastAPI/Flask on Supabase/Postgres, Docker deployments, RPi monitoring.</p></div>
        <div className='card'><strong>Creative Media & Bots</strong><p className='muted'>Telegram bots, content sorting to Notion, Insta/TikTok pipelines.</p></div>
      </div>
    </div>
  </div>
</header>
<section id='gallery'><h2 className='section-title'>Lore Gallery — Scroll to Explore</h2>
  <div className='gallery-wrap'><div className='gallery glass'>
    <div className='frame visible' data-i='0'><div className='inner'><div><h3>WealthifAI — Finance OS</h3><p className='muted'>Swipeable iOS cards + analytics.</p><div id='lottie1' style={{height:220}}/></div><div><iframe loading='lazy' src='demos/wealthifai.html' title='WealthifAI Demo'/></div></div></div>
    <div className='frame' data-i='1'><div className='inner'><div><h3>SecurityGuard_AI — RPi Monitor</h3><p className='muted'>Docker + telemetry.</p><div id='lottie2' style={{height:220}}/></div><div><iframe loading='lazy' src='demos/securityguard.html' title='SecurityGuard Demo'/></div></div></div>
    <div className='frame' data-i='2'><div className='inner'><div><h3>Reflacto — Reflections</h3><p className='muted'>Prompts & breathwork.</p><div id='lottie3' style={{height:220}}/></div><div><iframe loading='lazy' src='demos/reflacto.html' title='Reflacto Demo'/></div></div></div>
    <div className='frame' data-i='3'><div className='inner'><div><h3>HealthifAI — Health Insights</h3><p className='muted'>Widgets & GPT advice.</p><div id='lottie4' style={{height:220}}/></div><div><iframe loading='lazy' src='demos/healthifai.html' title='HealthifAI Demo'/></div></div></div>
  </div></div>
</section>
<section id='cases'><h2 className='section-title'>Cases</h2>
  <div className='cases'>{CASES.map(c=> (<div key={c.id} id={'case-'+c.id} className='case' onPointerMove={(e)=>{const el=e.currentTarget as HTMLDivElement; const r=el.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5; el.style.transform=`perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`}} onPointerLeave={(e)=>{(e.currentTarget as HTMLDivElement).style.transform='perspective(800px) rotateY(0) rotateX(0)'}}>
    <div className='thumb'>✦</div>
    <div className='body'>
      <h3 style={{margin:'0 0 4px 0'}}>{c.title}</h3>
      <div className='muted'>{c.blurb}</div>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:8}}>{c.tags.map(t=><span key={t} className='tag'>{t}</span>)}</div>
      <div className='actions'><button className='btn' onClick={()=>setModal(c)}>View</button><a className='btn secondary' href={c.liveDemo} target='_blank'>Open demo</a>{c.repo? <a className='btn secondary' href={c.repo} target='_blank'>Code</a>:null}</div>
    </div>
  </div>))}</div>
  {modal && (<div className='modal open'><div className='backdrop' onClick={()=>setModal(null)} /><div className='dialog'><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h3>{modal.title}</h3><button className='btn secondary' onClick={()=>setModal(null)}>Close</button></div><div style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:'16px'}}><div><p className='muted'><strong>Impact:</strong> {modal.impact}</p><p className='muted'><strong>Stack:</strong> {modal.stack}</p><p className='muted'>{modal.blurb}</p><div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}><a className='btn' href={modal.liveDemo} target='_blank'>Open demo in new tab</a>{modal.repo? <a className='btn secondary' href={modal.repo} target='_blank'>Code</a>:null}</div></div><div><iframe className='demo' src={modal.liveDemo} loading='lazy' style={{width:'100%',height:420,border:'1px solid var(--border)',borderRadius:12,background:'#000'}}/></div></div></div></div>)}
</section>
<section id='about'><h2 className='section-title'>About</h2><div className='card'><p className='muted'>I'm Pavlo, a detail‑oriented builder who turns ideas into working software fast. Reliability, speed, and clean UX (even when the vibes are VHS).</p></div></section>
<section id='contact'><h2 className='section-title'>Contact</h2><div className='kgrid'><div className='card'><form id='contactForm' method='POST' action='https://formspree.io/f/YOUR_FORMSPREE_ID' onSubmit={async(e:any)=>{if(!TELEGRAM_WEBHOOK)return; const fd=new FormData(e.currentTarget); const payload=Object.fromEntries(fd.entries()); try{await fetch(TELEGRAM_WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})}catch{}}}><input name='name' placeholder='Your name' required/><input type='email' name='email' placeholder='Email' required/><textarea name='message' placeholder='Tell me about your project...' rows={5} required></textarea><div style={{display:'flex',gap:8,flexWrap:'wrap'}}><button className='btn' type='submit'>Send via Formspree</button><a className='btn secondary' href={`https://t.me/${TELEGRAM_USERNAME}`} target='_blank'>Open Telegram Chat</a></div><div className='small'>Email: <a href='mailto:pavlo@wealthifai.app'>pavlo@wealthifai.app</a> · Telegram: <a href='https://t.me/R_O_R_K' target='_blank'>@R_O_R_K</a> · Instagram: <a href='https://instagram.com/rork_paul' target='_blank'>@rork_paul</a> · LinkedIn: <a href='https://linkedin.com/in/rork' target='_blank'>/in/rork</a> · Upwork: <a href='https://www.upwork.com/freelancers/rork' target='_blank'>Hire me</a></div></form></div><div className='card'><strong>Telegram Hook (optional)</strong><p className='muted'>Use a Cloudflare Worker or n8n webhook to relay messages to your bot securely.</p><code className='small'>NEXT_PUBLIC_BASE_PATH=/REPO_NAME for GitHub Pages project path.</code></div></div></section>
<footer><div className='card' style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}><span className='small'>© {new Date().getFullYear()} Pavlo Tsyhanash — Built with Next.js + Motion • Dark‑Fantasy Phonk / VHS</span><div style={{display:'flex',gap:8}}><a className='btn secondary' href='#top'>Top</a><a className='btn secondary' href='mailto:pavlo@wealthifai.app'>Email</a></div></div></footer>
</>)}