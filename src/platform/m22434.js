import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import * as __m86297 from './m86297.js'
import * as __m59255 from './m59255.js'
import * as __m69872 from './m69872.js'
import { RSVP_WHATSAPP } from '../data.js'
import Credit from '../Credit.jsx'
;('use strict')
let e, t, i, r
var n = __m43476,
  s = __m71645,
  o = __m86297,
  l = __m59255,
  c = __m69872
let d = '9c3fad15-3a8c-4eba-bb4e-ec65d5cf5306',
  h = '/images/ayswarya-akhil',
  p = {
    envelope: `${h}/envelope.webp`,
    cross: `${h}/cross.webp`,
    foil: `${h}/foil.webp`,
    floral: `${h}/floral.webp`,
    church: `${h}/church.webp`,
    landscape: `${h}/landscape.webp`,
  },
  f = '2026-11-28T12:15:00+05:30',
  m = Date.parse(f),
  g = {
    title: 'Engagement — Ayswarya & Akhil',
    start: new Date(f),
    end: new Date('2026-11-28T14:15:00+05:30'),
    location: 'Holy Magi Forane Church, Muvattupuzha, Kerala',
    details: 'The engagement of Ayswarya Alex & Akhil Roy. Reception to follow.',
    uid: `${d}-main@zetron.tech`,
  },
  u = '#4a3a2e',
  y = '#6b5646',
  x = '#7d5f2e',
  b = '#a07c45',
  v = '#efe4d6',
  j = "'Cormorant Garamond', Georgia, serif",
  k = "'Pinyon Script', 'Cormorant Garamond', cursive",
  w = (a) => `calc(var(--u) * ${a})`,
  $ = (a) => ({ '--d': `${a}s` })
function z(a) {
  let e = a >>> 0
  return () => {
    let a = Math.imul((e = (e + 0x6d2b79f5) | 0) ^ (e >>> 15), 1 | e)
    return (((a = (a + Math.imul(a ^ (a >>> 7), 61 | a)) ^ a) ^ (a >>> 14)) >>> 0) / 0x100000000
  }
}
let N = (a) => Math.round(100 * a) / 100,
  S = [
    [0, 0],
    [100, 0],
    [100, 26.5],
    [56.2, 47.5],
    [53.2, 48.9],
    [50, 49.4],
    [46.8, 48.9],
    [43.8, 47.5],
    [0, 26.5],
  ],
  M = (a) => `polygon(${a.map(([a, e]) => `${a}% ${e}%`).join(', ')})`,
  C = M(S),
  T = M(S.map(([a, e]) => [a, 100 - e])),
  W = M([[0, 26.5], ...S.slice(3, 8), [100, 26.5], [100, 100], [0, 100]]),
  P = (() => {
    let a = z(5),
      e = Array.from({ length: 18 }, (e, t) => {
        let i = (t / 18) * Math.PI * 2,
          r = 44 + 4.5 * a()
        return [50 + Math.cos(i) * r, 50 + Math.sin(i) * r]
      }),
      t = (a, e) => [(a[0] + e[0]) / 2, (a[1] + e[1]) / 2],
      i = t(e[17], e[0]),
      r = `M${N(i[0])} ${N(i[1])}`
    for (let a = 0; a < 18; a++) {
      let i = e[a],
        n = t(i, e[(a + 1) % 18])
      r += ` Q${N(i[0])} ${N(i[1])} ${N(n[0])} ${N(n[1])}`
    }
    return r + 'Z'
  })(),
  F = [
    [50, 0],
    [46, 18],
    [54, 32],
    [47, 50],
    [55, 66],
    [48, 82],
    [52, 100],
  ],
  R = M([[0, 0], ...F, [0, 100]]),
  A = M([[100, 0], [100, 100], ...[...F].reverse()]),
  E =
    ((e = z(17)),
    Array.from({ length: 20 }, (a, t) => {
      let i = (t / 20) * Math.PI * 2 + 0.3 * e(),
        r = 34 + 46 * e()
      return { dx: N(Math.cos(i) * r), dy: N(Math.sin(i) * r), s: N(2.5 + 3.5 * e()), dl: N(0.12 * e()) }
    })),
  I = [
    ['#f7d6d1', '#e8aaa3'],
    ['#fcebe6', '#f0c5be'],
    ['#f4c9c3', '#dc9e97'],
    ['#fff5f0', '#f0d2cb'],
  ],
  D =
    ((t = z(11)),
    Array.from({ length: 16 }, (a, e) => ({
      left: Math.round(100 * t()),
      size: Math.round(11 + 10 * t()),
      t: N(11 + 8 * t()),
      delay: N(-(18 * t())),
      dx: Math.round((t() - 0.5) * 150),
      rz: Math.round(160 + 380 * t()) * (t() > 0.5 ? 1 : -1),
      sway: N(2.4 + 2.4 * t()),
      tone: e % I.length,
    }))),
  L = `
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
.aa-root,.aa-cover{--u:min(1vw,.4618vh)}
@supports (height:1svh){.aa-root,.aa-cover{--u:min(1vw,.4618svh)}}
.aa-root{background:${v};color:${u};overflow-x:hidden;-webkit-tap-highlight-color:transparent}
.aa-page{position:relative;height:100vh;height:100svh;overflow:hidden;background:${v}}
.aa-bg{display:none;position:absolute;inset:-60px;background-image:var(--bg);background-size:cover;background-position:center;filter:blur(26px) saturate(1.05);opacity:.9}
.aa-art{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100vw,calc(100vh*0.5628));height:max(100vh,calc(100vw/0.5628))}
@supports (height:1svh){.aa-art{width:max(100vw,calc(100svh*0.5628));height:max(100svh,calc(100vw/0.5628))}}
@media (min-aspect-ratio:3/5){
  .aa-bg{display:block}
  .aa-art{width:calc(100vh*0.5628);height:100vh;box-shadow:0 0 80px rgba(90,64,40,.22)}
  @supports (height:1svh){.aa-art{width:calc(100svh*0.5628);height:100svh}}
}
.aa-kb{position:absolute;inset:0;animation:aa-breathe 26s ease-in-out infinite alternate;transform-origin:50% 50%}
.aa-page:not(.aa-in) .aa-kb{animation-play-state:paused}
.aa-img{position:absolute;inset:0;width:100%;height:100%;display:block;user-select:none;-webkit-user-select:none;pointer-events:none}
.aa-fx{transform:scaleX(-1)}.aa-fy{transform:scaleY(-1)}.aa-fxy{transform:scale(-1,-1)}
.aa-copy{position:absolute;left:50%;transform:translateX(-50%);z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.aa-wash::before{content:'';position:absolute;inset:-5% -9%;z-index:-1;pointer-events:none;background:radial-gradient(closest-side,rgba(248,241,231,.86),rgba(248,241,231,.6) 62%,rgba(248,241,231,0))}

/* Reveals — replayed each time a page comes back into view */
.aa-r,.aa-w,.aa-l,.aa-p,.aa-ch{opacity:0}
.aa-in .aa-r{animation:aa-rise 1.1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-in .aa-w{animation:aa-wipe 1.7s cubic-bezier(.45,.05,.25,1) var(--d,0s) both}
.aa-in .aa-l{animation:aa-draw 1.1s cubic-bezier(.65,0,.35,1) var(--d,0s) both}
.aa-in .aa-p{animation:aa-pop .95s cubic-bezier(.3,1.45,.5,1) var(--d,0s) both}
.aa-in .aa-ch{animation:aa-char .95s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-path{stroke-dasharray:1;stroke-dashoffset:1}
.aa-in .aa-path{animation:aa-path 1.8s cubic-bezier(.45,.05,.3,1) var(--d,0s) both}
.aa-leaf{transform-box:fill-box;transform-origin:center;transform:scale(0)}
.aa-in .aa-leaf{animation:aa-leaf .7s cubic-bezier(.3,1.5,.5,1) var(--d,0s) both}
@keyframes aa-rise{from{opacity:0;transform:translateY(16px);filter:blur(5px)}to{opacity:1;transform:none;filter:blur(0)}}
@keyframes aa-wipe{from{opacity:1;clip-path:inset(-30% 100% -30% 0)}to{opacity:1;clip-path:inset(-30% -8% -30% 0)}}
@keyframes aa-draw{from{opacity:1;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}
@keyframes aa-pop{0%{opacity:0;transform:translateY(-26px) scale(.6)}60%{opacity:1;transform:translateY(3px) scale(1.06)}100%{opacity:1;transform:none}}
@keyframes aa-char{from{opacity:0;transform:translateY(.55em) rotateX(75deg);filter:blur(3px)}to{opacity:1;transform:none;filter:blur(0)}}
@keyframes aa-path{to{stroke-dashoffset:0}}
@keyframes aa-leaf{to{transform:scale(1)}}
@keyframes aa-breathe{from{transform:scale(1)}to{transform:scale(1.035)}}

/* Gold light — a sweep masked to the painted gold, plus a warm halo */
.aa-glint{position:absolute;pointer-events:none;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;background:linear-gradient(120deg,rgba(255,250,230,0) 42%,rgba(255,251,236,.95) 50%,rgba(255,250,230,0) 58%);background-size:320% 320%;background-position:100% 100%;mix-blend-mode:screen;animation:aa-glint 5.5s ease-in-out infinite}
.aa-halo{position:absolute;pointer-events:none;background:radial-gradient(closest-side,rgba(255,238,196,.6),rgba(255,238,196,0));animation:aa-halo 6s ease-in-out infinite}
.aa-spark{position:absolute;width:${w(2.6)};height:${w(2.6)};margin:${w(-1.3)} 0 0 ${w(-1.3)};pointer-events:none;animation:aa-spark 3.2s ease-in-out var(--d,0s) infinite;opacity:0}
.aa-page:not(.aa-in) .aa-glint,.aa-page:not(.aa-in) .aa-halo,.aa-page:not(.aa-in) .aa-spark,.aa-page:not(.aa-in) .aa-birdtrack{animation-play-state:paused}
@keyframes aa-glint{0%,30%{background-position:100% 100%}78%,100%{background-position:0 0}}
@keyframes aa-halo{0%,100%{opacity:.35}50%{opacity:.85}}
@keyframes aa-spark{0%,100%{opacity:0;transform:scale(.2) rotate(0)}45%{opacity:1;transform:scale(1) rotate(45deg)}60%{opacity:.9;transform:scale(.8) rotate(60deg)}}

/* Birds over the church */
.aa-birdtrack{position:absolute;left:0;top:60%;width:100%;height:8%;animation:aa-fly 24s linear infinite;pointer-events:none}
.aa-bird{position:absolute}
.aa-bird svg{display:block;animation:aa-flap .42s ease-in-out infinite alternate;transform-origin:50% 60%}
@keyframes aa-fly{from{transform:translateX(-18%)}to{transform:translateX(112%)}}
@keyframes aa-flap{from{transform:scaleY(1)}to{transform:scaleY(.35)}}

/* Petals */
.aa-petals{position:fixed;inset:0;pointer-events:none;z-index:230;overflow:hidden}
.aa-petal{position:absolute;top:-6%;animation:aa-fall var(--t) linear var(--dl) infinite;will-change:transform}
.aa-sway{animation:aa-sway var(--sw) ease-in-out var(--dl) infinite alternate}
.aa-tumble{width:100%;height:100%;animation:aa-tumble calc(var(--sw) * 1.3) ease-in-out var(--dl) infinite alternate}
@keyframes aa-fall{from{transform:translate3d(0,0,0) rotate(0)}to{transform:translate3d(var(--dx),112vh,0) rotate(var(--rz))}}
@keyframes aa-sway{from{transform:translateX(-18px)}to{transform:translateX(18px)}}
@keyframes aa-tumble{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(58deg) rotateY(22deg)}100%{transform:perspective(120px) rotateX(-36deg) rotateY(68deg)}}

/* Envelope cover */
.aa-cover{position:fixed;left:0;top:0;width:100%;height:100vh;height:100svh;z-index:200;overflow:hidden;cursor:pointer;outline:none;background:${v};transition:background-color .9s ease}
.aa-cover.aa-zoom{background-color:transparent}
.aa-cover .aa-bg{transition:opacity .9s ease}
.aa-cover.aa-zoom .aa-bg{opacity:0}
.aa-env{position:absolute;inset:0;perspective:1600px;animation:aa-settle 1.4s cubic-bezier(.2,.7,.2,1) both}
.aa-interior{position:absolute;inset:0;background:linear-gradient(180deg,#dac7ad 0%,#e5d5bf 40%,#eee2d1 100%)}
.aa-card{position:absolute;inset:0;z-index:2;transform-origin:50% 0;transform:translateY(53%) scale(.84);transition:transform 1.35s cubic-bezier(.22,1,.36,1)}
.aa-card img{position:absolute;inset:0;width:100%;height:100%;display:block;border-radius:6px;box-shadow:0 -8px 28px rgba(90,64,40,.28),0 0 0 1px rgba(176,141,87,.4);transition:border-radius .9s,box-shadow .9s}
.aa-rise .aa-card{transform:translateY(7%) scale(.84)}
.aa-zoom .aa-card{transform:none;transition:transform 1s cubic-bezier(.65,0,.25,1)}
.aa-zoom .aa-card img{border-radius:0;box-shadow:none}
.aa-pocket,.aa-pocket-copy,.aa-seal{transition:opacity .6s ease}
.aa-pocket{position:absolute;inset:0;z-index:3}
.aa-zoom .aa-pocket,.aa-zoom .aa-pocket-copy{opacity:0}
.aa-flap{position:absolute;inset:0;z-index:5;transform-origin:50% 0;transform-style:preserve-3d;transition:transform 1.15s cubic-bezier(.5,0,.3,1)}
.aa-open .aa-flap{transform:rotateX(-172deg)}
.aa-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.aa-face-back{transform:rotateX(180deg);background:linear-gradient(0deg,#e9dac6,#d8c4a8)}
.aa-lid-copy{position:absolute;left:50%;top:16.6%;transform:translateX(-50%);width:70%;text-align:center;transition:opacity .3s ease}
.aa-break .aa-lid-copy{opacity:0}
.aa-pocket-copy{position:absolute;left:50%;top:54.4%;transform:translateX(-50%);width:62%;z-index:4;text-align:center;pointer-events:none}
.aa-tap{transition:opacity .3s ease}
.aa-break .aa-tap{opacity:0}
.aa-cin{opacity:0;animation:aa-rise 1.1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}
.aa-pulse{animation:aa-pulse 2.4s ease-in-out infinite}
@keyframes aa-settle{from{opacity:0;transform:scale(1.045)}to{opacity:1;transform:none}}
@keyframes aa-pulse{0%,100%{opacity:.5}50%{opacity:1}}
.aa-seal{position:absolute;left:50%;top:47.5%;width:${w(21)};height:${w(21)};transform:translate(-50%,-50%);z-index:6;filter:drop-shadow(0 3px 5px rgba(80,55,25,.38))}
.aa-seal-stamp{position:absolute;inset:0;animation:aa-stamp .95s cubic-bezier(.3,1.4,.5,1) .55s both}
.aa-seal-breathe{position:absolute;inset:0;animation:aa-sealb 3.2s ease-in-out 1.6s infinite}
.aa-break .aa-seal-breathe{animation:none}
.aa-half{position:absolute;inset:0;transition:transform 1s cubic-bezier(.5,0,.75,.45),opacity 1s ease}
.aa-half svg{display:block;width:100%;height:100%}
.aa-break .aa-half-l{transform:translate(-38%,80%) rotate(-30deg);opacity:0}
.aa-break .aa-half-r{transform:translate(40%,92%) rotate(26deg);opacity:0}
.aa-seal-ring{position:absolute;inset:-12%;border-radius:50%;border:1px solid rgba(160,124,69,.6);animation:aa-ring 2.6s ease-out 2s infinite;opacity:0}
.aa-break .aa-seal-ring{display:none}
.aa-dust i{position:absolute;left:50%;top:50%;border-radius:50%;background:radial-gradient(circle,#fff4d2,#d4b06a);opacity:0}
.aa-break .aa-dust i{animation:aa-dust 1.2s cubic-bezier(.2,.7,.3,1) var(--dl) forwards}
@keyframes aa-stamp{0%{opacity:0;transform:scale(1.7)}55%{opacity:1;transform:scale(.94)}100%{opacity:1;transform:scale(1)}}
@keyframes aa-sealb{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
@keyframes aa-ring{0%{opacity:.9;transform:scale(.82)}100%{opacity:0;transform:scale(1.5)}}
@keyframes aa-dust{0%{opacity:1;transform:translate(-50%,-50%)}100%{opacity:0;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy)))}}

/* Scratch-off date */
.aa-scratch:focus-visible{outline:1px dashed ${b};outline-offset:10px}
.aa-scratch{position:relative;width:${w(64)};height:${w(58)};margin:${w(1)} auto 0;outline:none}
.aa-dateblock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.aa-dateblock.on{animation:aa-datepop 1.5s cubic-bezier(.2,.8,.2,1) both}
@keyframes aa-datepop{0%{transform:scale(.94)}45%{transform:scale(1.03)}100%{transform:scale(1)}}
.aa-foilc{position:absolute;left:${w(-2.4)};top:${w(-2.4)};width:calc(100% + ${w(4.8)});height:calc(100% + ${w(4.8)});touch-action:none;cursor:grab;transition:opacity 1s ease,transform 1s ease,filter 1s ease;z-index:2}
.aa-foilc:active{cursor:grabbing}
.aa-foilc.gone{opacity:0;transform:scale(1.08);filter:blur(3px);pointer-events:none}
.aa-hint{position:absolute;inset:0;z-index:3;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .45s ease}
.aa-hint.off{opacity:0}
.aa-hint-sheen{position:absolute;inset:4%;border-radius:40% / 44%;overflow:hidden}
.aa-hint-sheen::after{content:'';position:absolute;top:-20%;bottom:-20%;width:34%;left:-40%;background:linear-gradient(100deg,rgba(255,250,230,0),rgba(255,250,232,.55),rgba(255,250,230,0));animation:aa-sheen 3.4s ease-in-out infinite}
@keyframes aa-sheen{0%{left:-40%}60%,100%{left:110%}}
.aa-finger{position:absolute;left:50%;top:62%;width:${w(9)};height:${w(9)};filter:drop-shadow(0 2px 3px rgba(60,40,15,.45));animation:aa-rub 2.6s ease-in-out infinite}
@keyframes aa-rub{0%,100%{transform:translate(-120%,0) rotate(-12deg)}25%{transform:translate(-10%,-38%) rotate(4deg)}50%{transform:translate(40%,6%) rotate(10deg)}75%{transform:translate(-40%,-20%) rotate(-4deg)}}
.aa-flakes{position:absolute;inset:0;pointer-events:none;z-index:6;overflow:visible}
.aa-flake{position:absolute;clip-path:polygon(0 18%,100% 0,72% 100%);background:linear-gradient(135deg,#f8e7b4,#c49c56 60%,#8f6d38);animation:aa-flake 1.25s cubic-bezier(.2,.6,.4,1) forwards}
@keyframes aa-flake{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--rz))}}
.aa-foiltext{background:linear-gradient(100deg,#7d5f2e 0%,#b8935a 20%,#ecd6a2 36%,#a8834a 52%,#7d5f2e 68%,#c9a567 84%,#8a6a36 100%);background-size:240% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:aa-foilsh 5s linear infinite}
@keyframes aa-foilsh{from{background-position:120% 0}to{background-position:-110% 0}}

/* Countdown tab */
.aa-tab{display:flex;align-items:stretch;border:1px solid rgba(160,124,69,.5);border-radius:${w(3.2)};background:rgba(250,245,237,.8);box-shadow:0 8px 22px rgba(120,90,50,.13);padding:${w(2)} ${w(1.4)};animation:aa-tabin .9s cubic-bezier(.2,.8,.2,1) both}
.aa-tab>div{display:flex;flex-direction:column;align-items:center;min-width:${w(12.5)};padding:0 ${w(1)}}
.aa-tab>div+div{border-left:1px solid rgba(160,124,69,.3)}
.aa-tick{display:inline-block;animation:aa-tick .32s cubic-bezier(.2,.8,.2,1) both}
@keyframes aa-tabin{from{opacity:0;transform:translateY(22px) scale(.96)}to{opacity:1;transform:none}}
@keyframes aa-tick{from{opacity:.2;transform:translateY(-30%)}to{opacity:1;transform:none}}
.aa-fadein{animation:aa-rise 1s cubic-bezier(.2,.7,.2,1) var(--d,0s) both}

/* Buttons */
.aa-pill{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:${w(2)};padding:${w(2.7)} ${w(6)};border:1px solid rgba(160,124,69,.75);border-radius:999px;background:rgba(250,244,235,.62);color:${u};font-family:${j};font-weight:500;font-size:${w(2.7)};letter-spacing:.3em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
.aa-pill:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(120,90,50,.18);background:rgba(252,247,240,.9)}
.aa-pill:active{transform:scale(.97)}
.aa-pill::after{content:'';position:absolute;top:0;bottom:0;width:40%;left:-60%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,250,235,.8),rgba(255,255,255,0));animation:aa-pillsheen 4.2s ease-in-out 1.5s infinite}
@keyframes aa-pillsheen{0%{left:-60%}45%,100%{left:130%}}
.aa-bob{animation:aa-bob 2.2s ease-in-out infinite}
@keyframes aa-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}

/* RSVP */
.aa-lbl{font-family:${j};font-weight:500;font-size:${w(2.35)};letter-spacing:.34em;padding-left:.34em;text-transform:uppercase;color:${x};margin:0 0 ${w(1.2)}}
.aa-input{width:100%;border:0;border-bottom:1px solid rgba(160,124,69,.7);background:transparent;text-align:center;font-family:${j};font-weight:500;font-size:max(16px,${w(4.6)});color:${u};padding:${w(1.2)} 0;outline:none;border-radius:0;transition:border-color .25s}
.aa-input::placeholder{color:rgba(107,86,70,.55);font-style:italic;font-weight:400}
.aa-input:focus{border-bottom-color:${x}}
.aa-choice{flex:1;padding:${w(2.2)} 0;border:1px solid rgba(160,124,69,.7);border-radius:999px;background:rgba(250,244,235,.6);font-family:${j};font-weight:500;font-size:${w(2.9)};letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;color:${u};cursor:pointer;transition:all .3s cubic-bezier(.3,1.4,.5,1)}
.aa-choice.on{background:linear-gradient(135deg,#8d6b35,#b8935a);color:#fff9ee;border-color:transparent;transform:scale(1.04);box-shadow:0 6px 16px rgba(120,90,50,.28)}
.aa-step{width:${w(9)};height:${w(9)};border-radius:50%;border:1px solid rgba(160,124,69,.7);background:rgba(250,244,235,.6);color:${x};font-family:${j};font-size:${w(5)};line-height:1;display:grid;place-items:center;cursor:pointer;transition:transform .2s}
.aa-step:active{transform:scale(.9)}
.aa-step:disabled{opacity:.35;cursor:default}
.aa-grow{animation:aa-grow .55s cubic-bezier(.2,.8,.2,1) both}
@keyframes aa-grow{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
.aa-send{background:linear-gradient(135deg,#8d6b35,#b8935a);color:#fff9ee;border-color:transparent;box-shadow:0 8px 20px rgba(120,90,50,.26)}
.aa-send:hover{background:linear-gradient(135deg,#7d5f2e,#a8834a)}
.aa-send:disabled{opacity:.7;cursor:progress}
.aa-burst{position:absolute;left:50%;top:40%;width:0;height:0;pointer-events:none}
.aa-burst span{position:absolute;width:${w(3)};height:${w(4.2)};animation:aa-burst 1.6s cubic-bezier(.15,.7,.3,1) var(--dl) forwards;opacity:0}
@keyframes aa-burst{0%{opacity:1;transform:translate(-50%,-50%) scale(.4) rotate(0)}100%{opacity:0;transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(1) rotate(var(--rz))}}

.aa-foot{background:#f4ebdf;text-align:center;padding:30px 20px calc(34px + env(safe-area-inset-bottom,0px));border-top:1px solid rgba(160,124,69,.25)}
.aa-foot a{color:${x};text-decoration:none;border-bottom:1px solid rgba(125,95,46,.35)}

@media (prefers-reduced-motion:reduce){
  .aa-r,.aa-w,.aa-l,.aa-p,.aa-ch,.aa-cin{opacity:1!important;animation:none!important;clip-path:none!important}
  .aa-path{stroke-dashoffset:0!important;animation:none!important}
  .aa-leaf{transform:none!important;animation:none!important}
  .aa-petals,.aa-birdtrack,.aa-glint,.aa-spark,.aa-finger{display:none}
  .aa-kb,.aa-env{animation:none!important}
}
`
function B({
  children: a,
  size: e = 2.9,
  track: t = 0.36,
  color: i = u,
  delay: r = 0,
  weight: s = 500,
  style: o,
}) {
  return (0, n.jsx)('p', {
    className: 'aa-r',
    style: {
      ...$(r),
      fontFamily: j,
      fontWeight: s,
      fontSize: w(e),
      letterSpacing: `${t}em`,
      paddingLeft: `${t}em`,
      textTransform: 'uppercase',
      color: i,
      margin: 0,
      lineHeight: 1.55,
      ...o,
    },
    children: a,
  })
}
function H({
  text: a,
  size: e,
  delay: t = 0,
  step: i = 0.045,
  track: r = 0.14,
  color: s = u,
  weight: o = 500,
  caps: l = !0,
  style: c,
}) {
  return (0, n.jsx)('p', {
    'aria-label': a,
    style: {
      fontFamily: j,
      fontWeight: o,
      fontSize: w(e),
      letterSpacing: `${r}em`,
      paddingLeft: `${r}em`,
      color: s,
      margin: 0,
      lineHeight: 1.2,
      textTransform: l ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      perspective: 500,
      ...c,
    },
    children: Array.from(a).map((a, e) =>
      (0, n.jsx)(
        'span',
        {
          'aria-hidden': !0,
          className: 'aa-ch',
          style: {
            ...$(t + e * i),
            display: 'inline-block',
            ...('&' === a ? { fontStyle: 'italic', fontWeight: 400, color: b } : null),
          },
          children: ' ' === a ? ' ' : a,
        },
        e,
      ),
    ),
  })
}
function Y({ text: a, size: e = 4.6, delay: t = 0, step: i = 0.12, color: r = y, style: s }) {
  return (0, n.jsx)('p', {
    'aria-label': a,
    style: {
      fontFamily: j,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: w(e),
      color: r,
      margin: 0,
      lineHeight: 1.55,
      ...s,
    },
    children: a
      .split(' ')
      .map((a, e) =>
        (0, n.jsx)(
          'span',
          {
            'aria-hidden': !0,
            className: 'aa-r',
            style: { ...$(t + e * i), display: 'inline-block', marginRight: '.26em' },
            children: a,
          },
          e,
        ),
      ),
  })
}
function X({ children: a, size: e = 8, delay: t = 0, color: i = b, style: r }) {
  return (0, n.jsx)('p', {
    className: 'aa-w',
    style: {
      ...$(t),
      fontFamily: k,
      fontWeight: 400,
      fontSize: w(e),
      color: i,
      margin: 0,
      lineHeight: 1.28,
      padding: '0 .35em',
      whiteSpace: 'nowrap',
      ...r,
    },
    children: a,
  })
}
function O({ children: a, size: e = 4.3, delay: t = 0, color: i = y, style: r }) {
  return (0, n.jsx)('p', {
    className: 'aa-r',
    style: {
      ...$(t),
      fontFamily: j,
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: w(e),
      color: i,
      margin: 0,
      lineHeight: 1.55,
      ...r,
    },
    children: a,
  })
}
function G({ w: a = 16, delay: e = 0, gap: t = 2.6, animate: i = !0 }) {
  return (0, n.jsxs)('div', {
    'aria-hidden': !0,
    className: i ? 'aa-l' : void 0,
    style: {
      ...$(e),
      display: 'flex',
      alignItems: 'center',
      gap: w(1.5),
      width: w(a),
      margin: `${w(t)} auto`,
    },
    children: [
      (0, n.jsx)('span', {
        style: { flex: 1, height: 1, background: `linear-gradient(90deg, rgba(160,124,69,0), ${b})` },
      }),
      (0, n.jsx)('span', {
        style: {
          width: w(1.3),
          height: w(1.3),
          transform: 'rotate(45deg)',
          border: `1px solid ${b}`,
          flex: 'none',
        },
      }),
      (0, n.jsx)('span', {
        style: { flex: 1, height: 1, background: `linear-gradient(90deg, ${b}, rgba(160,124,69,0))` },
      }),
    ],
  })
}
function K({ x: a, y: e, delay: t = 0 }) {
  return (0, n.jsx)('svg', {
    className: 'aa-spark',
    viewBox: '0 0 10 10',
    style: { left: `${a}%`, top: `${e}%`, ...$(t) },
    'aria-hidden': !0,
    children: (0, n.jsx)('path', { d: 'M5 0L6 4 10 5 6 6 5 10 4 6 0 5 4 4Z', fill: '#fffaf0' }),
  })
}
function V({ size: a, color: e = x }) {
  return (0, n.jsx)('svg', {
    viewBox: '0 0 24 24',
    style: { width: a, height: a, display: 'block' },
    'aria-hidden': !0,
    children: (0, n.jsx)('path', {
      fill: e,
      d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
    }),
  })
}
function Z({ tone: a, id: e }) {
  let [t, i] = I[a]
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 20 28',
    width: '100%',
    height: '100%',
    'aria-hidden': !0,
    style: { display: 'block' },
    children: [
      (0, n.jsx)('defs', {
        children: (0, n.jsxs)('linearGradient', {
          id: e,
          x1: '0',
          y1: '0',
          x2: '1',
          y2: '1',
          children: [
            (0, n.jsx)('stop', { offset: '0', stopColor: t }),
            (0, n.jsx)('stop', { offset: '1', stopColor: i }),
          ],
        }),
      }),
      (0, n.jsx)('path', {
        d: 'M10 3.2C8.4.6 5.2.8 3.6 4.6 1.2 10.6 3 18.6 10 27c7-8.4 8.8-16.4 6.4-22.4C14.8.8 11.6.6 10 3.2Z',
        fill: `url(#${e})`,
      }),
      (0, n.jsx)('path', {
        d: 'M10 5.6c.4 6.4.2 12.8-.1 18.8',
        stroke: 'rgba(186,116,108,.32)',
        strokeWidth: '.6',
        fill: 'none',
      }),
    ],
  })
}
function _() {
  return (0, n.jsx)('div', {
    className: 'aa-petals',
    'aria-hidden': !0,
    children: D.map((a, e) =>
      (0, n.jsx)(
        'div',
        {
          className: 'aa-petal',
          style: {
            left: `${a.left}%`,
            width: a.size,
            height: Math.round(1.4 * a.size),
            '--t': `${a.t}s`,
            '--dl': `${a.delay}s`,
            '--dx': `${a.dx}px`,
            '--rz': `${a.rz}deg`,
            '--sw': `${a.sway}s`,
          },
          children: (0, n.jsx)('div', {
            className: 'aa-sway',
            style: { width: '100%', height: '100%' },
            children: (0, n.jsx)('div', {
              className: 'aa-tumble',
              children: (0, n.jsx)(Z, { tone: a.tone, id: `aa-pt-${e}` }),
            }),
          }),
        },
        e,
      ),
    ),
  })
}
function q({ id: a, art: e, flip: t, overlays: i, label: r, eager: s, children: o }) {
  return (0, n.jsxs)('section', {
    id: a,
    'data-aa-page': '',
    className: 'aa-page',
    'aria-label': r,
    style: { '--bg': `url('${e}')` },
    children: [
      (0, n.jsx)('div', { className: 'aa-bg', 'aria-hidden': !0 }),
      (0, n.jsxs)('div', {
        className: 'aa-art',
        children: [
          (0, n.jsxs)('div', {
            className: 'aa-kb',
            'aria-hidden': !0,
            children: [
              (0, n.jsx)('img', {
                src: e,
                alt: '',
                className: `aa-img${t ? ` aa-f${t}` : ''}`,
                draggable: !1,
                loading: s ? 'eager' : 'lazy',
                decoding: 'async',
              }),
              i,
            ],
          }),
          o,
        ],
      }),
    ],
  })
}
function J({ top: a, bottom: e, w: t = 84, wash: i, start: r, children: s }) {
  return (0, n.jsx)('div', {
    className: `aa-copy${i ? ' aa-wash' : ''}`,
    style: {
      top: `${a}%`,
      bottom: `${e}%`,
      width: `min(${t}%, calc(100vw - 36px))`,
      justifyContent: r ? 'flex-start' : 'center',
    },
    children: s,
  })
}
function Q() {
  let a = `url('${h}/cross-mask.png')`
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: 'aa-halo',
        style: { left: '32%', top: '1%', width: '36%', height: '23%' },
      }),
      (0, n.jsx)('div', {
        className: 'aa-glint',
        style: {
          left: '42.45%',
          top: '3.95%',
          width: '15%',
          height: '16.03%',
          WebkitMaskImage: a,
          maskImage: a,
        },
      }),
    ],
  })
}
function U() {
  let a = `url('${h}/foil-mask.webp')`
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: 'aa-glint',
        style: { inset: 0, WebkitMaskImage: a, maskImage: a, animationDuration: '6.5s' },
      }),
      [
        [74, 11, 0],
        [84, 8, 1.1],
        [90, 18, 2.2],
        [80, 17, 0.6],
        [5, 58, 1.6],
        [11, 66, 0.3],
        [19, 73, 2.6],
        [27, 79, 1.3],
        [14, 37, 2],
      ].map(([a, e, t], i) => (0, n.jsx)(K, { x: a, y: e, delay: t }, i)),
    ],
  })
}
function aa() {
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: 'aa-halo',
        style: { left: '22%', top: '66%', width: '56%', height: '22%', animationDuration: '7s' },
      }),
      (0, n.jsx)('div', {
        className: 'aa-birdtrack',
        children: [
          [0, 30, 4],
          [5, 0, 3.2],
          [9, 48, 3.6],
        ].map(([a, e, t], i) =>
          (0, n.jsx)(
            'div',
            {
              className: 'aa-bird',
              style: { left: `${a}%`, top: `${e}%` },
              children: (0, n.jsx)('svg', {
                viewBox: '0 0 24 10',
                style: { width: w(t), animationDelay: `${0.13 * i}s` },
                'aria-hidden': !0,
                children: (0, n.jsx)('path', {
                  d: 'M1 6Q6 1 12 6Q18 1 23 6',
                  stroke: '#7e6b58',
                  strokeWidth: '1.4',
                  fill: 'none',
                  strokeLinecap: 'round',
                }),
              }),
            },
            i,
          ),
        ),
      }),
      [
        [30, 90.5, 0],
        [42, 92, 1.2],
        [55, 91, 0.5],
        [64, 93, 1.8],
        [72, 90.2, 2.4],
        [36, 94, 2.9],
        [49, 89.6, 1.5],
      ].map(([a, e, t], i) => (0, n.jsx)(K, { x: a, y: e, delay: t }, i)),
    ],
  })
}
function ae() {
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)('div', {
        className: 'aa-halo',
        style: { left: '24%', top: '57%', width: '58%', height: '22%', animationDuration: '7s' },
      }),
      (0, n.jsx)('div', {
        className: 'aa-birdtrack',
        style: { top: '57.5%', height: '6%' },
        children: [
          [0, 30, 4],
          [5, 0, 3.2],
          [9, 48, 3.6],
        ].map(([a, e, t], i) =>
          (0, n.jsx)(
            'div',
            {
              className: 'aa-bird',
              style: { left: `${a}%`, top: `${e}%` },
              children: (0, n.jsx)('svg', {
                viewBox: '0 0 24 10',
                style: { width: w(t), animationDelay: `${0.13 * i}s` },
                'aria-hidden': !0,
                children: (0, n.jsx)('path', {
                  d: 'M1 6Q6 1 12 6Q18 1 23 6',
                  stroke: '#7e6b58',
                  strokeWidth: '1.4',
                  fill: 'none',
                  strokeLinecap: 'round',
                }),
              }),
            },
            i,
          ),
        ),
      }),
      [
        [42, 79.5, 0],
        [52, 78.2, 1.2],
        [60, 80.5, 0.5],
        [68, 78.8, 1.8],
        [75, 81, 2.4],
        [47, 82.2, 2.9],
        [56, 77.4, 1.5],
        [31, 93, 0.9],
        [41, 94.6, 2.1],
        [51, 96, 3],
      ].map(([a, e, t], i) => (0, n.jsx)(K, { x: a, y: e, delay: t }, i)),
    ],
  })
}
function at() {
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 100 100',
    'aria-hidden': !0,
    children: [
      (0, n.jsxs)('defs', {
        children: [
          (0, n.jsxs)('radialGradient', {
            id: 'aa-wax',
            cx: '36%',
            cy: '30%',
            r: '78%',
            children: [
              (0, n.jsx)('stop', { offset: '0', stopColor: '#f7e6b8' }),
              (0, n.jsx)('stop', { offset: '.34', stopColor: '#dbbb7a' }),
              (0, n.jsx)('stop', { offset: '.7', stopColor: '#b48a4a' }),
              (0, n.jsx)('stop', { offset: '1', stopColor: '#8a6430' }),
            ],
          }),
          (0, n.jsxs)('radialGradient', {
            id: 'aa-wax-in',
            cx: '46%',
            cy: '40%',
            r: '62%',
            children: [
              (0, n.jsx)('stop', { offset: '0', stopColor: '#e8cf98' }),
              (0, n.jsx)('stop', { offset: '1', stopColor: '#b58d4f' }),
            ],
          }),
        ],
      }),
      (0, n.jsx)('path', { d: P, fill: 'url(#aa-wax)' }),
      (0, n.jsx)('circle', { cx: '50', cy: '50', r: '31', fill: 'url(#aa-wax-in)' }),
      (0, n.jsx)('circle', {
        cx: '50.6',
        cy: '50.8',
        r: '31',
        fill: 'none',
        stroke: '#fff3d4',
        strokeOpacity: '.55',
        strokeWidth: '.9',
      }),
      (0, n.jsx)('circle', {
        cx: '50',
        cy: '50',
        r: '31',
        fill: 'none',
        stroke: '#7d5a26',
        strokeOpacity: '.55',
        strokeWidth: '1.1',
      }),
      [
        ['#fbecc9', 0.6, 0.8],
        ['#6f4f1e', 0, 0],
      ].map(([a, e, t], i) =>
        (0, n.jsxs)(
          'g',
          {
            transform: `translate(${e} ${t})`,
            fill: 'none',
            stroke: a,
            strokeOpacity: i ? 0.8 : 0.7,
            strokeWidth: '1.3',
            strokeLinecap: 'round',
            children: [
              (0, n.jsx)('path', { d: 'M50 73C48.8 62 51.2 47 50 31' }),
              (0, n.jsx)('path', {
                d: 'M49.6 63c-4-1-6.8-3.8-7.6-7.4 3.6.2 6.6 2.8 7.6 7.4ZM50.4 56.6c4-1 6.8-3.8 7.6-7.4-3.6.2-6.6 2.8-7.6 7.4ZM49.6 49.4c-3.6-1-6-3.6-6.8-6.8 3.2.2 6 2.6 6.8 6.8ZM50.4 42.8c3.4-1 5.6-3.4 6.2-6.2-3 .2-5.4 2.4-6.2 6.2Z',
                fill: a,
                fillOpacity: i ? 0.55 : 0.45,
              }),
              (0, n.jsx)('circle', { cx: '50', cy: '28.6', r: '2.3', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
              (0, n.jsx)('circle', { cx: '45.4', cy: '32.6', r: '1.4', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
              (0, n.jsx)('circle', { cx: '54.6', cy: '34.4', r: '1.4', fill: a, fillOpacity: i ? 0.6 : 0.5 }),
            ],
          },
          i,
        ),
      ),
    ],
  })
}
function ai({ onBegin: a, onDone: e }) {
  let [t, i] = (0, s.useState)(0),
    r = (0, s.useRef)(!1),
    o = (0, s.useRef)([])
  ;(0, s.useEffect)(() => () => o.current.forEach((a) => clearTimeout(a)), [])
  let l = (0, s.useCallback)(() => {
      if (r.current) return
      ;((r.current = !0), a())
      try {
        navigator.vibrate?.(16)
      } catch {}
      i(1)
      let t = (a, e) => {
        o.current.push(window.setTimeout(e, a))
      }
      ;(t(380, () => i(2)), t(1150, () => i(3)), t(2550, () => i(4)), t(3600, e))
    }, [a, e]),
    c = ['aa-cover', t >= 1 && 'aa-break', t >= 2 && 'aa-open', t >= 3 && 'aa-rise', t >= 4 && 'aa-zoom']
      .filter(Boolean)
      .join(' '),
    d = (a, e, t) => ({
      fontFamily: j,
      fontWeight: 500,
      fontSize: w(a),
      letterSpacing: `${e}em`,
      paddingLeft: `${e}em`,
      textTransform: 'uppercase',
      color: t,
      margin: 0,
      lineHeight: 1.9,
    })
  return (0, n.jsxs)('div', {
    className: c,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'Tap to open the invitation',
    onClick: l,
    onKeyDown: (a) => {
      ;('Enter' === a.key || ' ' === a.key) && (a.preventDefault(), l())
    },
    style: { '--bg': `url('${p.envelope}')` },
    children: [
      (0, n.jsx)('div', { className: 'aa-bg', 'aria-hidden': !0 }),
      (0, n.jsx)('div', {
        className: 'aa-art',
        children: (0, n.jsxs)('div', {
          className: 'aa-env',
          children: [
            (0, n.jsx)('div', { className: 'aa-interior', 'aria-hidden': !0 }),
            (0, n.jsx)('div', {
              className: 'aa-card',
              'aria-hidden': !0,
              children: (0, n.jsx)('img', { src: p.cross, alt: '', draggable: !1 }),
            }),
            (0, n.jsx)('div', {
              className: 'aa-pocket',
              'aria-hidden': !0,
              style: { clipPath: W, WebkitClipPath: W },
              children: (0, n.jsx)('img', { src: p.envelope, alt: '', className: 'aa-img', draggable: !1 }),
            }),
            (0, n.jsxs)('div', {
              className: 'aa-pocket-copy',
              children: [
                (0, n.jsxs)('p', {
                  className: 'aa-cin',
                  style: {
                    ...$(1.1),
                    fontFamily: j,
                    fontWeight: 300,
                    fontSize: w(15),
                    color: u,
                    margin: 0,
                    lineHeight: 1.05,
                    letterSpacing: '.04em',
                  },
                  children: [
                    'A',
                    (0, n.jsx)('span', {
                      style: {
                        fontStyle: 'italic',
                        fontSize: '.5em',
                        color: b,
                        margin: '0 .28em',
                        verticalAlign: '.32em',
                      },
                      children: '&',
                    }),
                    'A',
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'aa-cin',
                  style: $(1.35),
                  children: (0, n.jsx)(G, { w: 15, gap: 2.2, animate: !1 }),
                }),
                (0, n.jsx)('p', {
                  className: 'aa-cin',
                  style: { ...$(1.55), ...d(2.9, 0.34, y) },
                  children: '28 November 2026',
                }),
                (0, n.jsx)('div', {
                  className: 'aa-tap',
                  style: { marginTop: w(4.4) },
                  children: (0, n.jsxs)('div', {
                    className: 'aa-cin',
                    style: $(2.3),
                    children: [
                      (0, n.jsx)('p', {
                        className: 'aa-pulse',
                        style: d(2.6, 0.46, x),
                        children: 'Tap to open',
                      }),
                      (0, n.jsx)('div', {
                        className: 'aa-bob',
                        style: { fontSize: w(3), color: b, lineHeight: 1, marginTop: w(0.6) },
                        children: '✦',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              className: 'aa-flap',
              'aria-hidden': !0,
              children: [
                (0, n.jsxs)('div', {
                  className: 'aa-face',
                  style: { clipPath: C, WebkitClipPath: C },
                  children: [
                    (0, n.jsx)('img', { src: p.envelope, alt: '', className: 'aa-img', draggable: !1 }),
                    (0, n.jsxs)('div', {
                      className: 'aa-lid-copy',
                      children: [
                        (0, n.jsx)('p', {
                          className: 'aa-cin',
                          style: { ...$(0.8), ...d(3.1, 0.5, u) },
                          children: 'Engagement',
                        }),
                        (0, n.jsx)('p', {
                          className: 'aa-cin',
                          style: { ...$(0.95), ...d(3.1, 0.5, u) },
                          children: 'Invitation',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'aa-face aa-face-back',
                  style: { clipPath: T, WebkitClipPath: T },
                }),
              ],
            }),
            (0, n.jsx)('div', {
              className: 'aa-seal',
              'aria-hidden': !0,
              children: (0, n.jsxs)('div', {
                className: 'aa-seal-stamp',
                children: [
                  (0, n.jsx)('span', { className: 'aa-seal-ring' }),
                  (0, n.jsxs)('div', {
                    className: 'aa-seal-breathe',
                    children: [
                      (0, n.jsx)('div', {
                        className: 'aa-half aa-half-l',
                        style: { clipPath: R, WebkitClipPath: R },
                        children: (0, n.jsx)(at, {}),
                      }),
                      (0, n.jsx)('div', {
                        className: 'aa-half aa-half-r',
                        style: { clipPath: A, WebkitClipPath: A },
                        children: (0, n.jsx)(at, {}),
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'aa-dust',
                    children: E.map((a, e) =>
                      (0, n.jsx)(
                        'i',
                        {
                          style: {
                            width: a.s,
                            height: a.s,
                            '--dx': `${a.dx}px`,
                            '--dy': `${a.dy}px`,
                            '--dl': `${a.dl}s`,
                          },
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
function ar(a, e, t, i) {
  let r = z(29),
    n = Array.from({ length: 170 }, (a, e) => 0.988 - 0.01 * Math.sin(0.83 * e) - 0.018 * r()),
    s = e / 2,
    o = t / 2,
    l = e / 2 - i,
    c = t / 2 - i
  a.beginPath()
  for (let e = 0; e <= 170; e++) {
    let t = ((e % 170) / 170) * Math.PI * 2,
      i = Math.cos(t),
      r = Math.sin(t),
      d = n[e % 170],
      h = s + Math.sign(i) * Math.pow(Math.abs(i), 0.6060606060606061) * l * d,
      p = o + Math.sign(r) * Math.pow(Math.abs(r), 0.6060606060606061) * c * d
    0 === e ? a.moveTo(h, p) : a.lineTo(h, p)
  }
  a.closePath()
}
function an(a, e, t) {
  let i = a.getImageData(0, 0, e, t).data,
    r = 0
  for (let a = 0; a < t; a += 8) for (let t = 0; t < e; t += 8) i[(a * e + t) * 4 + 3] > 60 && r++
  return r
}
function as({ onReveal: a }) {
  let e = (0, s.useRef)(null),
    t = (0, s.useRef)(null),
    [i, r] = (0, s.useState)(!1),
    [o, l] = (0, s.useState)(!1),
    [c, d] = (0, s.useState)([]),
    h = (0, s.useRef)({ down: !1, last: null, total: 0, scratched: !1, check: 0, flake: 0, id: 0, done: !1 }),
    p = (0, s.useCallback)(() => {
      let a = t.current
      if (!a) return
      let e = a.getBoundingClientRect()
      if (e.width < 4 || e.height < 4) return
      let i = Math.min(window.devicePixelRatio || 1, 2)
      ;((a.width = Math.round(e.width * i)), (a.height = Math.round(e.height * i)))
      let r = a.getContext('2d', { willReadFrequently: !0 })
      r &&
        (!(function (a, e, t, i) {
          let r = 8 * i
          ;(a.clearRect(0, 0, e, t),
            (a.globalCompositeOperation = 'source-over'),
            a.save(),
            (a.shadowColor = 'rgba(90,62,24,.4)'),
            (a.shadowBlur = 7 * i),
            (a.shadowOffsetY = 2 * i),
            ar(a, e, t, r),
            (a.fillStyle = '#b8914f'),
            a.fill(),
            a.restore(),
            a.save(),
            ar(a, e, t, r),
            a.clip())
          let n = a.createLinearGradient(0, 0, e, t)
          ;([
            [0, '#7d5f2e'],
            [0.18, '#c9a567'],
            [0.32, '#f3dfaa'],
            [0.46, '#b48c4c'],
            [0.6, '#8f6d38'],
            [0.74, '#e2c68a'],
            [0.88, '#a88246'],
            [1, '#7a5a2a'],
          ].forEach(([a, e]) => n.addColorStop(a, e)),
            (a.fillStyle = n),
            a.fillRect(0, 0, e, t))
          let s = z(71)
          for (let r = 0; r < 560; r++) {
            let r = s() * e,
              n = s() * t,
              o = (6 + 20 * s()) * i
            ;(a.beginPath(),
              a.moveTo(r, n),
              a.lineTo(r + (s() - 0.2) * o, n + (s() - 0.5) * o * 0.7),
              a.lineTo(r + (s() - 0.6) * o, n + s() * o * 0.8),
              a.closePath(),
              (a.fillStyle =
                s() > 0.5
                  ? `rgba(255,244,210,${(0.05 + 0.2 * s()).toFixed(3)})`
                  : `rgba(92,62,20,${(0.05 + 0.15 * s()).toFixed(3)})`),
              a.fill())
          }
          a.lineCap = 'round'
          for (let r = 0; r < 150; r++) {
            let n = s() * e,
              o = s() * t,
              l = r >= 90
            ;(a.beginPath(), a.moveTo(n, o))
            let c = 2 + Math.floor(3 * s())
            for (let e = 0; e < c; e++)
              ((n += (s() - 0.5) * 28 * i), (o += (s() - 0.5) * 18 * i), a.lineTo(n, o))
            ;((a.strokeStyle = l
              ? `rgba(255,246,220,${(0.25 + 0.3 * s()).toFixed(3)})`
              : `rgba(96,66,24,${(0.16 + 0.22 * s()).toFixed(3)})`),
              (a.lineWidth = (0.5 + 0.7 * s()) * i),
              a.stroke())
          }
          let o = a.createLinearGradient(0.1 * e, 0, 0.9 * e, t)
          ;(o.addColorStop(0, 'rgba(255,250,230,0)'),
            o.addColorStop(0.42, 'rgba(255,250,230,0)'),
            o.addColorStop(0.5, 'rgba(255,250,230,.3)'),
            o.addColorStop(0.58, 'rgba(255,250,230,0)'),
            o.addColorStop(1, 'rgba(255,250,230,0)'),
            (a.fillStyle = o),
            a.fillRect(0, 0, e, t),
            a.restore(),
            a.save(),
            ar(a, e, t, r + 7 * i),
            (a.strokeStyle = 'rgba(255,240,202,.6)'),
            (a.lineWidth = +i),
            a.stroke(),
            ar(a, e, t, r + 9 * i),
            (a.strokeStyle = 'rgba(95,65,25,.38)'),
            (a.lineWidth = +i),
            a.stroke(),
            ar(a, e, t, r),
            (a.strokeStyle = 'rgba(250,241,224,.95)'),
            (a.lineWidth = 2.4 * i),
            a.stroke(),
            a.restore())
        })(r, a.width, a.height, i),
        (h.current.total = an(r, a.width, a.height)))
    }, [])
  ;(0, s.useEffect)(() => {
    p()
    let a = () => {
      h.current.scratched || h.current.done || p()
    }
    return (window.addEventListener('resize', a), () => window.removeEventListener('resize', a))
  }, [p])
  let f = (0, s.useCallback)((a, e, t, i, r, n) => {
      let s = Array.from({ length: t }, () => ({
        id: ++h.current.id,
        x: a,
        y: e,
        dx: Math.round((Math.random() - 0.5) * i),
        dy: Math.round(r + Math.random() * n),
        rz: Math.round((Math.random() - 0.5) * 720),
        s: Math.round(4 + 6 * Math.random()),
      }))
      d((a) => [...a.slice(-30), ...s])
      let o = new Set(s.map((a) => a.id))
      window.setTimeout(() => d((a) => a.filter((a) => !o.has(a.id))), 1300)
    }, []),
    m = (0, s.useCallback)(() => {
      if (h.current.done) return
      ;((h.current.done = !0), r(!0), l(!0))
      try {
        navigator.vibrate?.([18, 40, 24])
      } catch {}
      let t = e.current
      if (t) {
        let a = t.getBoundingClientRect()
        f(a.width / 2, a.height / 2, 34, 320, -130, 280)
      }
      window.setTimeout(a, 280)
    }, [f, a]),
    g = (0, s.useCallback)(() => {
      let a = t.current,
        e = a?.getContext('2d', { willReadFrequently: !0 })
      a && e && h.current.total && 1 - an(e, a.width, a.height) / h.current.total >= 0.5 && m()
    }, [m]),
    x = (a) => {
      let e = a.currentTarget,
        t = e.getBoundingClientRect()
      return [(a.clientX - t.left) * (e.width / t.width), (a.clientY - t.top) * (e.height / t.height)]
    },
    b = (a, e) => {
      let t = a.getContext('2d', { willReadFrequently: !0 })
      if (!t) return
      let i = a.width / a.getBoundingClientRect().width
      ;((t.globalCompositeOperation = 'destination-out'),
        (t.lineCap = 'round'),
        (t.lineJoin = 'round'),
        (t.lineWidth = Math.max(26, 0.13 * a.getBoundingClientRect().width) * i))
      let r = h.current.last ?? [e[0] - 0.5, e[1]]
      ;(t.beginPath(),
        t.moveTo(r[0], r[1]),
        t.lineTo(e[0], e[1]),
        t.stroke(),
        (h.current.last = e),
        (h.current.scratched = !0))
    },
    v = (a) => {
      let t = e.current
      if (!t) return
      let i = performance.now()
      if (i - h.current.flake < 55) return
      h.current.flake = i
      let r = t.getBoundingClientRect()
      f(a.clientX - r.left, a.clientY - r.top, 2, 90, 30, 90)
    },
    N = () => {
      h.current.down && ((h.current.down = !1), (h.current.last = null), g())
    },
    S = (a, e, t) => ({
      fontFamily: j,
      fontWeight: 500,
      fontSize: w(a),
      letterSpacing: `${e}em`,
      paddingLeft: `${e}em`,
      textTransform: 'uppercase',
      color: t,
      margin: 0,
      lineHeight: 1.45,
    })
  return (0, n.jsxs)('div', {
    ref: e,
    className: 'aa-scratch aa-r',
    style: $(0.7),
    role: 'button',
    tabIndex: 0,
    'aria-label': o
      ? 'Saturday, 28 November 2026 at 12:15 PM'
      : 'Scratch the gold to reveal the date — or press Enter',
    onKeyDown: (a) => {
      o || ('Enter' !== a.key && ' ' !== a.key) || (a.preventDefault(), m())
    },
    children: [
      (0, n.jsxs)('div', {
        className: `aa-dateblock${o ? ' on' : ''}`,
        'aria-hidden': !o,
        children: [
          (0, n.jsx)('p', { style: S(3.7, 0.5, u), children: 'November' }),
          (0, n.jsx)('p', {
            className: 'aa-foiltext',
            style: {
              fontFamily: j,
              fontWeight: 300,
              fontSize: w(24),
              lineHeight: 0.95,
              margin: `${w(0.4)} 0 ${w(0.2)}`,
            },
            children: '28',
          }),
          (0, n.jsx)('p', { style: S(3.7, 0.5, u), children: '2026' }),
          (0, n.jsx)(G, { w: 11, gap: 1.8, animate: !1 }),
          (0, n.jsx)('p', { style: S(3, 0.42, y), children: 'Saturday' }),
          (0, n.jsx)('p', {
            style: {
              fontFamily: j,
              fontWeight: 500,
              fontSize: w(5.4),
              letterSpacing: '.14em',
              paddingLeft: '.14em',
              color: u,
              margin: `${w(0.4)} 0 0`,
            },
            children: '12:15 PM',
          }),
        ],
      }),
      (0, n.jsx)('canvas', {
        ref: t,
        className: `aa-foilc${o ? ' gone' : ''}`,
        'aria-hidden': !0,
        onPointerDown: (a) => {
          if (!h.current.done) {
            a.preventDefault()
            try {
              a.currentTarget.setPointerCapture(a.pointerId)
            } catch {}
            if (((h.current.down = !0), (h.current.last = null), !i)) {
              r(!0)
              try {
                navigator.vibrate?.(8)
              } catch {}
            }
            ;(b(a.currentTarget, x(a)), v(a))
          }
        },
        onPointerMove: (a) => {
          if (!h.current.down || h.current.done) return
          ;(b(a.currentTarget, x(a)), v(a))
          let e = performance.now()
          e - h.current.check > 140 && ((h.current.check = e), g())
        },
        onPointerUp: N,
        onPointerCancel: N,
        onLostPointerCapture: N,
      }),
      (0, n.jsxs)('div', {
        className: `aa-hint${i ? ' off' : ''}`,
        'aria-hidden': !0,
        children: [
          (0, n.jsx)('div', { className: 'aa-hint-sheen' }),
          (0, n.jsx)('p', {
            style: {
              ...S(2.8, 0.42, '#4a3413'),
              position: 'relative',
              textShadow: '0 1px 0 rgba(255,238,196,.75)',
            },
            children: 'Scratch to reveal',
          }),
          (0, n.jsx)('p', {
            style: {
              fontFamily: k,
              fontSize: w(8),
              color: '#4a3413',
              margin: `${w(-0.4)} 0 0`,
              lineHeight: 1.2,
              position: 'relative',
              textShadow: '0 1px 0 rgba(255,238,196,.7)',
            },
            children: 'our date',
          }),
          (0, n.jsx)('svg', {
            className: 'aa-finger',
            viewBox: '0 0 24 24',
            'aria-hidden': !0,
            children: (0, n.jsx)('path', {
              fill: '#fffaf0',
              stroke: '#7d5f2e',
              strokeWidth: '.6',
              d: 'M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z',
            }),
          }),
        ],
      }),
      (0, n.jsx)('div', {
        className: 'aa-flakes',
        'aria-hidden': !0,
        children: c.map((a) =>
          (0, n.jsx)(
            'i',
            {
              className: 'aa-flake',
              style: {
                left: a.x,
                top: a.y,
                width: a.s,
                height: a.s,
                '--dx': `${a.dx}px`,
                '--dy': `${a.dy}px`,
                '--rz': `${a.rz}deg`,
              },
            },
            a.id,
          ),
        ),
      }),
    ],
  })
}
let ao = (a) => String(a).padStart(2, '0')
function al() {
  let [a, e] = (0, s.useState)(null)
  ;(0, s.useEffect)(() => {
    e(Date.now())
    let a = window.setInterval(() => e(Date.now()), 1e3)
    return () => clearInterval(a)
  }, [])
  let t = null === a ? null : Math.max(0, m - a)
  if (0 === t)
    return (0, n.jsx)(O, {
      size: 4.6,
      color: u,
      style: { opacity: 1, animation: 'none' },
      children: 'The day is here — thank you for celebrating with us.',
    })
  let i =
    null === t
      ? [
          ['--', 'Days'],
          ['--', 'Hours'],
          ['--', 'Mins'],
          ['--', 'Secs'],
        ]
      : [
          [String(Math.floor(t / 864e5)), 'Days'],
          [ao(Math.floor(t / 36e5) % 24), 'Hours'],
          [ao(Math.floor(t / 6e4) % 60), 'Mins'],
          [ao(Math.floor(t / 1e3) % 60), 'Secs'],
        ]
  return (0, n.jsx)('div', {
    className: 'aa-tab',
    role: 'timer',
    'aria-label': 'Countdown to the engagement',
    children: i.map(([a, e]) =>
      (0, n.jsxs)(
        'div',
        {
          children: [
            (0, n.jsx)(
              'span',
              {
                className: 'aa-tick',
                style: { fontFamily: j, fontWeight: 500, fontSize: w(6.6), color: u, lineHeight: 1.1 },
                children: a,
              },
              a,
            ),
            (0, n.jsx)('span', {
              style: {
                fontFamily: j,
                fontWeight: 500,
                fontSize: w(1.95),
                letterSpacing: '.3em',
                paddingLeft: '.3em',
                textTransform: 'uppercase',
                color: x,
                marginTop: w(0.4),
              },
              children: e,
            }),
          ],
        },
        e,
      ),
    ),
  })
}
let ac =
  ((i = z(23)),
  Array.from({ length: 22 }, (a, e) => {
    let t = (e / 22) * Math.PI * 2 + 0.4 * i(),
      r = 70 + 90 * i()
    return {
      dx: Math.round(Math.cos(t) * r),
      dy: Math.round(Math.sin(t) * r * 0.8 + 40),
      rz: Math.round((i() - 0.5) * 540),
      dl: N(0.15 * i()),
      tone: e % I.length,
    }
  }))
function ad() {
  let [a, e] = (0, s.useState)(''),
    [t, i] = (0, s.useState)(null),
    [r, o] = (0, s.useState)(1),
    [l, c] = (0, s.useState)('idle'),
    [h, p] = (0, s.useState)('')
  async function f(e) {
    if ((e.preventDefault(), 'sending' !== l)) {
      if (!a.trim()) return void p('Please enter your name.')
      if (null === t) return void p('Please let us know if you can attend.')
      ;(p(''), c('sending'))
      try {
        let msg = `Hello! This is ${a.trim()}. ${t ? `I will be attending (${r} ${1 === r ? 'guest' : 'guests'}).` : 'Sorry, I will not be able to attend.'} - Ayswarya & Akhil's engagement`
        ;(window.open(`https://wa.me/${RSVP_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener'), c('done'))
      } catch {
        ;(p('Network error — please check your connection and try again.'), c('idle'))
      }
    }
  }
  if ('done' === l) {
    let e = a.trim().split(/\s+/)[0]
    return (0, n.jsxs)('div', {
      style: { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' },
      children: [
        (0, n.jsx)('div', {
          className: 'aa-burst',
          'aria-hidden': !0,
          children: ac.map((a, e) =>
            (0, n.jsx)(
              'span',
              {
                style: { '--dx': `${a.dx}px`, '--dy': `${a.dy}px`, '--rz': `${a.rz}deg`, '--dl': `${a.dl}s` },
                children: (0, n.jsx)(Z, { tone: a.tone, id: `aa-bp-${e}` }),
              },
              e,
            ),
          ),
        }),
        (0, n.jsx)('svg', {
          viewBox: '0 0 40 36',
          style: { width: w(12), height: w(11) },
          'aria-hidden': !0,
          children: (0, n.jsx)('path', {
            d: 'M20 33C9 25 3 19 3 11.5 3 6.8 6.8 3 11.4 3c3.4 0 6.3 2 8.6 5.2C22.3 5 25.2 3 28.6 3 33.2 3 37 6.8 37 11.5 37 19 31 25 20 33Z',
            fill: 'none',
            stroke: b,
            strokeWidth: '1.6',
            pathLength: 1,
            style: { strokeDasharray: 1, strokeDashoffset: 1, animation: 'aa-path 1.6s ease .1s forwards' },
          }),
        }),
        (0, n.jsx)('p', {
          style: {
            fontFamily: k,
            fontSize: w(10),
            color: b,
            margin: `${w(1)} 0 0`,
            lineHeight: 1.2,
            animation: 'aa-wipe 1.6s ease .5s both',
          },
          children: 'Thank you',
        }),
        (0, n.jsxs)('p', {
          style: {
            fontFamily: j,
            fontStyle: 'italic',
            fontSize: w(4.5),
            color: u,
            margin: `${w(1.4)} 0 0`,
            lineHeight: 1.55,
            animation: 'aa-rise 1s ease 1.1s both',
          },
          children: [
            e,
            ', ',
            t
              ? 'we can’t wait to celebrate with you!'
              : 'you will be missed — thank you for letting us know.',
          ],
        }),
        (0, n.jsx)('p', {
          className: 'aa-lbl',
          style: { marginTop: w(3), animation: 'aa-rise 1s ease 1.5s both' },
          children: 'Your response has been sent',
        }),
      ],
    })
  }
  return (0, n.jsxs)('form', {
    onSubmit: f,
    noValidate: !0,
    style: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    children: [
      (0, n.jsxs)('div', {
        className: 'aa-r',
        style: { ...$(1.6), width: w(66) },
        children: [
          (0, n.jsx)('label', {
            className: 'aa-lbl',
            htmlFor: 'aa-name',
            style: { display: 'block' },
            children: 'Your name',
          }),
          (0, n.jsx)('input', {
            id: 'aa-name',
            className: 'aa-input',
            value: a,
            maxLength: 100,
            autoComplete: 'name',
            placeholder: 'Full name',
            onChange: (a) => {
              ;(e(a.target.value), h && p(''))
            },
          }),
        ],
      }),
      (0, n.jsxs)('div', {
        className: 'aa-r',
        style: { ...$(1.8), width: w(66), marginTop: w(3.6) },
        children: [
          (0, n.jsx)('p', { className: 'aa-lbl', children: 'Will you attend?' }),
          (0, n.jsxs)('div', {
            style: { display: 'flex', gap: w(3) },
            role: 'group',
            'aria-label': 'Will you attend?',
            children: [
              (0, n.jsxs)('button', {
                type: 'button',
                className: `aa-choice${!0 === t ? ' on' : ''}`,
                'aria-pressed': !0 === t,
                onClick: () => {
                  ;(i(!0), h && p(''))
                },
                children: [!0 === t ? '♥ ' : '', 'Yes'],
              }),
              (0, n.jsx)('button', {
                type: 'button',
                className: `aa-choice${!1 === t ? ' on' : ''}`,
                'aria-pressed': !1 === t,
                onClick: () => {
                  ;(i(!1), h && p(''))
                },
                children: 'No',
              }),
            ],
          }),
        ],
      }),
      !0 === t &&
        (0, n.jsxs)('div', {
          className: 'aa-grow',
          style: { width: w(66), marginTop: w(3.4) },
          children: [
            (0, n.jsx)('p', { className: 'aa-lbl', children: 'Number of people' }),
            (0, n.jsxs)('div', {
              style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: w(5) },
              children: [
                (0, n.jsx)('button', {
                  type: 'button',
                  className: 'aa-step',
                  'aria-label': 'Fewer people',
                  disabled: r <= 1,
                  onClick: () => o((a) => Math.max(1, a - 1)),
                  children: '−',
                }),
                (0, n.jsx)(
                  'span',
                  {
                    className: 'aa-tick',
                    'aria-live': 'polite',
                    style: {
                      fontFamily: j,
                      fontWeight: 500,
                      fontSize: w(7),
                      color: u,
                      minWidth: w(8),
                      textAlign: 'center',
                    },
                    children: r,
                  },
                  r,
                ),
                (0, n.jsx)('button', {
                  type: 'button',
                  className: 'aa-step',
                  'aria-label': 'More people',
                  disabled: r >= 10,
                  onClick: () => o((a) => Math.min(10, a + 1)),
                  children: '+',
                }),
              ],
            }),
          ],
        }),
      h &&
        (0, n.jsx)('p', {
          role: 'alert',
          style: {
            fontFamily: j,
            fontStyle: 'italic',
            fontSize: w(3.6),
            color: '#9a4a3e',
            margin: `${w(2.6)} 0 0`,
          },
          children: h,
        }),
      (0, n.jsxs)('button', {
        type: 'submit',
        className: 'aa-pill aa-send aa-r',
        disabled: 'sending' === l,
        style: { ...$(2), marginTop: w(4.4), fontSize: w(2.55), letterSpacing: '.26em' },
        children: [
          (0, n.jsx)('svg', {
            viewBox: '0 0 24 24',
            style: { width: w(4.4), height: w(4.4), flex: 'none' },
            'aria-hidden': !0,
            children: (0, n.jsx)('path', {
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '1.4',
              d: 'M3.5 6.5h17v11h-17z M3.5 6.8l8.5 6.4 8.5-6.4',
            }),
          }),
          'sending' === l ? 'Sending…' : 'Respond to the invitation',
        ],
      }),
    ],
  })
}
function ah({ delay: a }) {
  return (0, n.jsxs)('svg', {
    viewBox: '0 0 200 34',
    style: { width: w(50), height: w(8.5), margin: `${w(2.8)} 0 ${w(1.2)}`, overflow: 'visible' },
    'aria-hidden': !0,
    children: [
      (0, n.jsx)('path', {
        className: 'aa-path',
        pathLength: 1,
        style: $(a),
        d: 'M4 6C44 6 62 28 94 24',
        fill: 'none',
        stroke: b,
        strokeWidth: '1.1',
        strokeLinecap: 'round',
      }),
      (0, n.jsx)('path', {
        className: 'aa-path',
        pathLength: 1,
        style: $(a),
        d: 'M196 6C156 6 138 28 106 24',
        fill: 'none',
        stroke: b,
        strokeWidth: '1.1',
        strokeLinecap: 'round',
      }),
      (0, n.jsx)('g', {
        transform: 'translate(100 22)',
        children: (0, n.jsx)('g', {
          className: 'aa-leaf',
          style: $(a + 1.4),
          children: (0, n.jsx)('path', {
            d: 'M0 7C-4.4 3.8-7 1.4-7-1.8-7-3.8-5.4-5.4-3.4-5.4-2 -5.4-.8-4.6 0-3.4.8-4.6 2-5.4 3.4-5.4 5.4-5.4 7-3.8 7-1.8 7 1.4 4.4 3.8 0 7Z',
            fill: b,
          }),
        }),
      }),
    ],
  })
}
let ap =
  ((r = []),
  [
    [
      [60, 110],
      [28, 106],
      [12, 80],
      [15, 56],
    ],
    [
      [15, 56],
      [17, 38],
      [27, 25],
      [40, 18],
    ],
  ].forEach((a) =>
    [0.22, 0.5, 0.8].forEach((e, t) => {
      let i,
        n,
        s,
        o,
        l =
          ((n =
            (i = 1 - e) ** 3 * a[0][0] +
            3 * i * i * e * a[1][0] +
            3 * i * e * e * a[2][0] +
            e ** 3 * a[3][0]),
          (s = i ** 3 * a[0][1] + 3 * i * i * e * a[1][1] + 3 * i * e * e * a[2][1] + e ** 3 * a[3][1]),
          (o =
            3 * i * i * (a[1][0] - a[0][0]) +
            6 * i * e * (a[2][0] - a[1][0]) +
            3 * e * e * (a[3][0] - a[2][0])),
          {
            x: n,
            y: s,
            a:
              (180 *
                Math.atan2(
                  3 * i * i * (a[1][1] - a[0][1]) +
                    6 * i * e * (a[2][1] - a[1][1]) +
                    3 * e * e * (a[3][1] - a[2][1]),
                  o,
                )) /
              Math.PI,
          })
      r.push({ x: N(l.x), y: N(l.y), a: N(l.a + (t % 2 ? 42 : -42)) })
    }),
  ),
  r)
function af({ delay: a }) {
  let e = (e) =>
    (0, n.jsxs)('g', {
      transform: e ? 'translate(120 0) scale(-1 1)' : void 0,
      children: [
        (0, n.jsx)('path', {
          className: 'aa-path',
          pathLength: 1,
          style: $(a),
          d: 'M60 110C28 106 12 80 15 56C17 38 27 25 40 18',
          fill: 'none',
          stroke: b,
          strokeWidth: '1.1',
          strokeLinecap: 'round',
        }),
        ap.map((e, t) =>
          (0, n.jsx)(
            'g',
            {
              transform: `translate(${e.x} ${e.y}) rotate(${e.a})`,
              children: (0, n.jsx)('g', {
                className: 'aa-leaf',
                style: $(a + 0.5 + 0.12 * t),
                children: (0, n.jsx)('ellipse', {
                  rx: '5.4',
                  ry: '2.2',
                  fill: t % 2 ? '#b9b08c' : '#cfc5a0',
                }),
              }),
            },
            t,
          ),
        ),
        (0, n.jsx)('g', {
          transform: 'translate(40 18)',
          children: (0, n.jsxs)('g', {
            className: 'aa-leaf',
            style: $(a + 1.4),
            children: [
              (0, n.jsx)('circle', { r: '2.6', fill: '#ecc3bc' }),
              (0, n.jsx)('circle', { r: '1', fill: b }),
            ],
          }),
        }),
      ],
    })
  return (0, n.jsxs)('div', {
    className: 'aa-r',
    style: { ...$(a), position: 'relative', width: w(30), height: w(30) },
    children: [
      (0, n.jsxs)('svg', {
        viewBox: '0 0 120 120',
        style: { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' },
        'aria-hidden': !0,
        children: [
          e(!1),
          e(!0),
          (0, n.jsx)('path', {
            className: 'aa-path',
            pathLength: 1,
            style: $(a + 1.2),
            d: 'M60 1V19M54.5 6.5H65.5',
            fill: 'none',
            stroke: b,
            strokeWidth: '1.1',
            strokeLinecap: 'round',
          }),
        ],
      }),
      (0, n.jsxs)('p', {
        style: {
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          paddingTop: w(2),
          fontFamily: j,
          fontWeight: 300,
          fontSize: w(8.4),
          color: u,
          letterSpacing: '.04em',
        },
        children: [
          'A',
          (0, n.jsx)('span', {
            style: { fontStyle: 'italic', fontSize: '.55em', color: b, margin: '0 .22em' },
            children: '&',
          }),
          'A',
        ],
      }),
    ],
  })
}
export const WEDDING_ID = d
export default function () {
  let [a, e] = (0, s.useState)(!1),
    [t, i] = (0, s.useState)(!1)
  ;((0, s.useEffect)(() => {
    if (a) return
    ;((document.body.scrollTop = 0), (document.documentElement.scrollTop = 0))
    let e = document.body.style.overflow,
      t = document.documentElement.style.overflow
    return (
      (document.body.style.overflow = 'hidden'),
      (document.documentElement.style.overflow = 'hidden'),
      () => {
        ;((document.body.style.overflow = e), (document.documentElement.style.overflow = t))
      }
    )
  }, [a]),
    (0, s.useEffect)(() => {
      if (!a) return
      let e = Array.from(document.querySelectorAll('[data-aa-page]')),
        t = new IntersectionObserver(
          (a) =>
            a.forEach((a) => {
              a.intersectionRatio >= 0.3
                ? a.target.classList.add('aa-in')
                : a.isIntersecting || a.target.classList.remove('aa-in')
            }),
          { threshold: [0, 0.3] },
        )
      return (e.forEach((a) => t.observe(a)), () => t.disconnect())
    }, [a]),
    (0, s.useEffect)(() => {
      if (!a) return
      let e = !1,
        t = () => {
          e = !0
        },
        i = ['wheel', 'touchstart', 'keydown', 'pointerdown']
      i.forEach((a) => window.addEventListener(a, t, { passive: !0, capture: !0 }))
      let r = window.setTimeout(() => {
        let a = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY
        !e &&
          a < 40 &&
          document.getElementById('aa-date')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 8500)
      return () => {
        ;(clearTimeout(r), i.forEach((a) => window.removeEventListener(a, t, { capture: !0 })))
      }
    }, [a]))
  let r = (0, s.useCallback)(() => {
      document.dispatchEvent(new CustomEvent('app:ready'))
    }, []),
    d = (0, s.useCallback)(() => e(!0), [])
  return (0, n.jsx)(o.default, {
    src: '/audio/Thousand_years_instrument.mp3',
    children: (0, n.jsxs)('div', {
      className: 'aa-root',
      children: [
        (0, n.jsx)('style', { children: L }),
        (0, n.jsx)(l.default, { slug: 'ayswarya-akhil' }),
        !a && (0, n.jsx)(ai, { onBegin: r, onDone: d }),
        (0, n.jsx)(_, {}),
        (0, n.jsxs)('main', {
          children: [
            (0, n.jsx)(q, {
              id: 'aa-reveal',
              art: p.cross,
              overlays: (0, n.jsx)(Q, {}),
              label: 'The invitation',
              eager: !0,
              children: (0, n.jsxs)(J, {
                top: 24,
                bottom: 22.5,
                children: [
                  (0, n.jsx)(Y, { text: '“Where you go, I will go;', delay: 0.2 }),
                  (0, n.jsx)(Y, { text: 'where you lodge, I will lodge.”', delay: 0.9 }),
                  (0, n.jsx)(B, {
                    size: 2.6,
                    track: 0.34,
                    color: x,
                    delay: 1.6,
                    style: { marginTop: w(1.4) },
                    children: 'Ruth 1:16',
                  }),
                  (0, n.jsx)(G, { w: 18, delay: 1.9, gap: 3.4 }),
                  (0, n.jsx)(B, {
                    size: 2.7,
                    track: 0.32,
                    delay: 2.2,
                    children: 'Together with their family',
                  }),
                  (0, n.jsx)('div', { style: { height: w(3) } }),
                  (0, n.jsx)(H, { text: 'Ayswarya Alex', size: 7.2, delay: 2.5 }),
                  (0, n.jsx)(X, { size: 9, delay: 3.2, style: { margin: `${w(0.2)} 0` }, children: 'and' }),
                  (0, n.jsx)(H, { text: 'Akhil Roy', size: 7.2, delay: 3.6 }),
                  (0, n.jsx)('div', { style: { height: w(3.4) } }),
                  (0, n.jsxs)(B, {
                    size: 2.6,
                    track: 0.28,
                    color: y,
                    delay: 4.2,
                    style: { lineHeight: 1.95 },
                    children: ['Request the pleasure of', (0, n.jsx)('br', {}), 'your company at their'],
                  }),
                  (0, n.jsx)(B, {
                    size: 3.4,
                    track: 0.46,
                    color: x,
                    delay: 4.5,
                    style: { marginTop: w(0.8) },
                    children: 'Engagement',
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-date',
              art: p.foil,
              overlays: (0, n.jsx)(U, {}),
              label: 'The engagement date',
              eager: !0,
              children: (0, n.jsxs)(J, {
                top: 20,
                bottom: 16,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.46, color: x, delay: 0.1, children: 'The Engagement' }),
                  (0, n.jsx)(G, { w: 16, delay: 0.4, gap: 2.6 }),
                  (0, n.jsx)(as, { onReveal: () => i(!0) }),
                  (0, n.jsx)('div', {
                    style: {
                      minHeight: w(25),
                      marginTop: w(3.4),
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    },
                    children: t
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(al, {}),
                            (0, n.jsx)('div', {
                              className: 'aa-fadein',
                              style: { ...$(0.5), marginTop: w(2.6) },
                              children: (0, n.jsx)(c.AddToCalendar, {
                                event: g,
                                fileName: 'ayswarya-akhil-engagement',
                                accent: x,
                                color: x,
                                bg: 'rgba(250,244,235,.7)',
                                label: 'Add to calendar',
                                style: {
                                  fontFamily: j,
                                  fontWeight: 600,
                                  fontSize: w(2.9),
                                  letterSpacing: '.2em',
                                },
                              }),
                            }),
                          ],
                        })
                      : (0, n.jsx)(O, {
                          size: 4,
                          delay: 1.1,
                          children: 'Scratch the gold to reveal our day',
                        }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-venue',
              art: p.church,
              overlays: (0, n.jsx)(aa, {}),
              label: 'Venue',
              children: (0, n.jsxs)(J, {
                top: 12.5,
                bottom: 31,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.52, color: x, delay: 0.1, children: 'Venue' }),
                  (0, n.jsx)(G, { w: 14, delay: 0.35, gap: 2.4 }),
                  (0, n.jsx)('div', {
                    className: 'aa-p',
                    style: { ...$(0.6), marginBottom: w(2) },
                    children: (0, n.jsx)('div', {
                      className: 'aa-bob',
                      children: (0, n.jsx)(V, { size: w(8) }),
                    }),
                  }),
                  (0, n.jsx)(H, { text: 'Holy Magi', size: 6.6, delay: 0.9, step: 0.05 }),
                  (0, n.jsx)(H, { text: 'Forane Church', size: 6.6, delay: 1.3, step: 0.05 }),
                  (0, n.jsx)(B, {
                    size: 3,
                    track: 0.46,
                    color: x,
                    delay: 2,
                    style: { marginTop: w(1.4) },
                    children: 'Muvattupuzha',
                  }),
                  (0, n.jsxs)('a', {
                    href: 'https://maps.app.goo.gl/W3qsSYBG8iU2F17r7',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'aa-pill aa-r',
                    style: { ...$(2.4), marginTop: w(4.6) },
                    children: [(0, n.jsx)(V, { size: w(3.6) }), 'View on map'],
                  }),
                  (0, n.jsx)(X, {
                    size: 8.6,
                    delay: 3,
                    style: { marginTop: w(4.6) },
                    children: 'Reception to follow',
                  }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-family',
              art: p.floral,
              label: 'With blessings and love',
              children: (0, n.jsxs)(J, {
                top: 15,
                bottom: 28,
                wash: !0,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.5, delay: 0.2, children: 'With' }),
                  (0, n.jsx)(X, { size: 8.8, delay: 0.5, children: 'Blessings and Love' }),
                  (0, n.jsx)(G, { w: 16, delay: 1.6, gap: 2.8 }),
                  [
                    ['Bride’s Parents', 'Alex P James & Laly Paul', 'Parakattel House, Muvattupuzha', 1.9],
                    ['Groom’s Parents', 'Roy Thomas & Kavitha Pious', 'Kavitha, Kollam', 3.9],
                  ].map(([a, e, t, i], r) =>
                    (0, n.jsxs)(
                      'div',
                      {
                        style: { marginTop: r ? w(3.4) : 0 },
                        children: [
                          (0, n.jsx)(B, { size: 2.5, track: 0.42, color: x, delay: i, children: a }),
                          (0, n.jsx)(H, {
                            text: e,
                            size: 5.3,
                            caps: !1,
                            track: 0,
                            delay: i + 0.3,
                            style: { margin: `${w(0.9)} 0 ${w(0.3)}`, lineHeight: 1.3 },
                          }),
                          (0, n.jsxs)(O, {
                            size: 3.9,
                            delay: i + 0.5 + 0.045 * e.length,
                            children: ['(', t, ')'],
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                  (0, n.jsx)(G, { w: 10, delay: 6, gap: 3 }),
                  (0, n.jsx)(B, {
                    size: 2.5,
                    track: 0.42,
                    color: x,
                    delay: 6.2,
                    children: 'Sharing the Happiness',
                  }),
                  ['Arya Alex, Don George Alex,', 'Arsha Roy and John Christo Geevarghese'].map((a, e) =>
                    (0, n.jsx)(
                      H,
                      {
                        text: a,
                        size: 4.3,
                        caps: !1,
                        track: 0,
                        delay: 6.5 + +e,
                        step: 0.035,
                        style: { margin: `${w(e ? 0.2 : 1)} 0 0`, lineHeight: 1.4 },
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-rsvp',
              art: p.floral,
              flip: 'x',
              label: 'RSVP',
              children: (0, n.jsxs)(J, {
                top: 19.5,
                bottom: 12,
                wash: !0,
                start: !0,
                children: [
                  (0, n.jsx)(B, { size: 3, track: 0.5, delay: 0.1, children: 'Kindly' }),
                  (0, n.jsx)(H, { text: 'RSVP', size: 12, weight: 300, track: 0.34, delay: 0.3, step: 0.1 }),
                  (0, n.jsx)(G, { w: 14, delay: 0.9, gap: 2.4 }),
                  (0, n.jsxs)(O, {
                    size: 4.2,
                    delay: 1.2,
                    color: u,
                    children: [
                      'We’d be delighted to have you',
                      (0, n.jsx)('br', {}),
                      'with us on this special day.',
                    ],
                  }),
                  (0, n.jsx)('div', { style: { height: w(4) } }),
                  (0, n.jsx)(ad, {}),
                ],
              }),
            }),
            (0, n.jsx)(c.ScrollIndicatorMarker, {}),
            (0, n.jsx)(q, {
              id: 'aa-wedding',
              art: p.landscape,
              overlays: (0, n.jsx)(ae, {}),
              label: 'The wedding',
              children: (0, n.jsxs)(J, {
                top: 17,
                bottom: 45,
                wash: !0,
                children: [
                  (0, n.jsx)(B, {
                    size: 2.6,
                    track: 0.3,
                    color: y,
                    delay: 0.1,
                    children: 'Wedding will be solemnized at',
                  }),
                  (0, n.jsx)('div', { style: { height: w(2.2) } }),
                  (0, n.jsx)(H, { text: 'Infant Jesus', size: 6.4, delay: 0.4, step: 0.05 }),
                  (0, n.jsx)(H, { text: 'Cathedral', size: 6.4, delay: 0.9, step: 0.05 }),
                  (0, n.jsx)(B, {
                    size: 2.9,
                    track: 0.42,
                    color: x,
                    delay: 1.4,
                    style: { marginTop: w(1.4) },
                    children: 'Thangassery, Kollam',
                  }),
                  (0, n.jsxs)(O, {
                    size: 4.8,
                    delay: 1.7,
                    color: u,
                    style: { marginTop: w(1.8) },
                    children: [
                      'on December 28',
                      (0, n.jsx)('span', {
                        style: { fontSize: '.62em', verticalAlign: '.5em' },
                        children: 'th',
                      }),
                      ', 2026',
                    ],
                  }),
                  (0, n.jsx)(ah, { delay: 2.1 }),
                  (0, n.jsx)(X, { size: 6.8, delay: 2.7, children: 'Two hearts,' }),
                  (0, n.jsx)(X, { size: 6.8, delay: 3.2, children: 'Two journeys,' }),
                  (0, n.jsx)(X, { size: 6.8, delay: 3.7, children: 'One homeward song.' }),
                ],
              }),
            }),
            (0, n.jsx)(q, {
              id: 'aa-closing',
              art: p.floral,
              flip: 'y',
              label: 'With love',
              children: (0, n.jsxs)(J, {
                top: 34,
                bottom: 14,
                children: [
                  (0, n.jsx)(af, { delay: 0.2 }),
                  (0, n.jsxs)(O, {
                    size: 4.5,
                    delay: 1.3,
                    color: u,
                    style: { marginTop: w(3.4), lineHeight: 1.6 },
                    children: [
                      'We look forward to celebrating',
                      (0, n.jsx)('br', {}),
                      'our special day with you.',
                    ],
                  }),
                  (0, n.jsx)(G, { w: 14, delay: 1.9, gap: 3 }),
                  (0, n.jsx)(X, { size: 10, delay: 2.2, children: 'Ayswarya & Akhil' }),
                  (0, n.jsx)(B, {
                    size: 2.6,
                    track: 0.46,
                    color: x,
                    delay: 3,
                    style: { marginTop: w(1.2) },
                    children: '28 · 11 · 2026',
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, n.jsxs)('footer', {
          className: 'aa-foot',
          children: [
            (0, n.jsxs)('p', {
              style: {
                fontFamily: j,
                fontSize: 11,
                letterSpacing: '.28em',
                textTransform: 'uppercase',
                color: x,
                margin: 0,
              },
              children: [(0, n.jsx)(Credit, {})],
            }),
          ],
        }),
        a && (0, n.jsx)(c.ScrollIndicator, { color: x, bottom: 18 }),
      ],
    }),
  })
}
