/**
 * RIVALS RANK — site data. Rank/RR values are community-reported and shift
 * with balance patches and season resets [VERIFY every season].
 */

export const SITE = {
  brand: 'RIVALS RANK',
  domain: 'rivalsrank.top',
  game: 'Marvel Rivals',
  kicker: 'Ranked math // season data',
  lastVerified: '2026-10-08',
  disclaimer:
    'Unofficial fan-made toolkit. Not affiliated with or endorsed by NetEase or Marvel. Marvel Rivals and related marks belong to their respective owners.',
};

export const NAV = [
  { href: '/tools/', label: 'Tools' },
  { href: '/rr-estimator/', label: 'RR Estimator' },
  { href: '/guides/how-rr-works/', label: 'Guides' },
  { href: '/about/', label: 'About' },
];

export const TOOLS = [
  { href: '/rr-estimator/', ico: '🚀', name: 'RR Estimator', desc: 'Wins needed to reach any rank from your current RR — with your real win rate mixed in.', tag: 'Flagship' },
  { href: '/rank-percentile/', ico: '📊', name: 'Rank Percentile', desc: 'Enter your rank, get "top X% of players" from the season distribution table.', tag: 'Calculator' },
  { href: '/rank-distribution/', ico: '🗺️', name: 'Rank Distribution', desc: 'The full tier table with editable shares — community-tracked each season.', tag: 'Data' },
  { href: '/reset-planner/', ico: '🔄', name: 'Reset Planner', desc: 'Where the soft reset drops you, and the wins to win it back next season.', tag: 'Calculator' },
];

export const GUIDES = [
  { href: '/guides/how-rr-works/', ico: '📘', name: 'How RR works', desc: 'Rank Racer points, division jumps, and the performance modifiers behind the scenes.' },
  { href: '/guides/ranks-explained/', ico: '📗', name: 'Ranks explained', desc: 'Bronze to One Above All — what each tier means and who you meet there.' },
  { href: '/guides/climbing-math/', ico: '📙', name: 'Climbing math', desc: 'Why 55% win rate compounds, and the games-per-rank arithmetic of every climb.' },
];

const y = '2026-10-08';

export const TRUST: { slug: string; title: string; desc: string; html: string }[] = [
  {
    slug: 'about',
    title: 'About RIVALS RANK – Free Marvel Rivals Rank Tools',
    desc: 'Who builds RIVALS RANK, why it exists, how tools are kept current each season. An unofficial, ad-free Marvel Rivals ranked toolkit.',
    html: `
<h2>Why this site exists</h2>
<p>Marvel Rivals ranked data is scattered and contradictory — third-party distribution numbers disagree, official data isn't published, and trackers drop the ball. RIVALS RANK is the calm corner: the <a href="/rr-estimator/">RR estimator</a>, <a href="/rank-percentile/">percentile calculator</a>, an <a href="/rank-distribution/">editable distribution table</a> and a <a href="/reset-planner/">reset planner</a>, with every assumption in the open.</p>
<h2>How the tools are built</h2>
<ul>
<li>Every calculation runs client-side in your browser. Nothing you type is uploaded — see <a href="/privacy/">privacy</a>.</li>
<li>RR and reset rules are community-documented; distribution shares are editable inputs labeled [VERIFY] so the tools never present a guess as fact. See <a href="/methodology/">methodology</a>.</li>
<li>Reviewed each season; review dates appear on every page.</li>
</ul>
<h2>How the site is funded</h2>
<p>Currently: out of pocket, no ads, no paywall. Future funding will be disclosed here first.</p>
<h2>Who is behind it</h2>
<p>Maintained by an independent ranked grinder. <!-- [NEEDS DATA]: add your name/bio before publishing. --> Corrections: <a href="/contact/">contact</a>.</p>
<h2>Affiliation notice</h2>
<p>${SITE.disclaimer}</p>`,
  },
  {
    slug: 'contact',
    title: 'Contact RIVALS RANK – Report Season Data',
    desc: 'Contact RIVALS RANK: report new-season RR values or distribution data, request tools, or ask about the model.',
    html: `
<h2>Email</h2>
<p><strong>hello@rivalsrank.top</strong><br />
<!-- [NEEDS DATA]: set up this mailbox before launch. --> For season data, tell us the season number and where you saw the numbers.</p>
<h2>What to include</h2>
<ol class="steps">
<li>The page and value that changed.</li>
<li>The season and your source (tracker screenshot, patch notes).</li>
</ol>
<h2>Requests</h2>
<p>Tool ideas welcome — roadmap on the <a href="/changelog/">changelog</a>.</p>`,
  },
  {
    slug: 'methodology',
    title: 'Methodology – RR Model & Data Policy | RIVALS RANK',
    desc: 'The RR model behind RIVALS RANK: division math, win-rate mixing, reset rules, the editable distribution table, and the [VERIFY] policy.',
    html: `
<h2>RR estimator model</h2>
<pre class="formula">RR per win (W) and per loss (L) are user inputs [community defaults ~+25/−25, VERIFY]
wins needed (all wins)  = ceil((target − current) ÷ W)
with win rate p, expected net per game = p·W − (1−p)·L
games ≈ (target − current) ÷ expected net</pre>
<p>The all-wins number is the best case; the win-rate number is the realistic case. Both are shown.</p>
<h2>Distribution table</h2>
<p>Marvel Rivals publishes no official distribution, and third-party trackers disagree (documented widely). Our table ships as <strong>editable placeholders</strong> — you can enter current tracker data and the percentile math recomputes exactly. No invented numbers presented as fact.</p>
<h2>Reset model</h2>
<p>Season resets apply a soft-drop rule [VERIFY each season's patch notes]; the planner models it as "drop N tiers or to X% of RR" with the rule as an input.</p>
<h2>The [VERIFY] policy</h2>
<p>Every game value carries a flag; the dataset carries a review date (currently <span class="mono">${y}</span>). Season-start flow: update distribution table + reset rule → bump date → <a href="/changelog/">changelog</a>.</p>
<h2>AI-assist disclosure</h2>
<p>Pages drafted with AI assistance, reviewed by the operator before publishing. All math is auditable client-side code.</p>`,
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy | RIVALS RANK',
    desc: 'RIVALS RANK privacy in plain language: calculators run in your browser, nothing is uploaded, no tracking cookies, no accounts.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>The short version</h2>
<ul>
<li>All calculators run in your browser. <strong>Nothing you type is sent to any server.</strong></li>
<li>No advertising or tracking cookies; no analytics by default; no accounts. We never ask for your game credentials — no real ranked tool needs them.</li>
</ul>
<h2>Third parties</h2>
<p>Fonts load from Google Fonts — the only external request. If analytics are ever added, this page updates first with a dated <a href="/changelog/">changelog</a> note.</p>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use | RIVALS RANK',
    desc: 'Terms of use for RIVALS RANK: free unofficial Marvel Rivals ranked tools provided as-is, with no warranty of accuracy.',
    html: `
<p class="note">Last updated: ${y}</p>
<h2>What this site is</h2>
<p>${SITE.disclaimer}</p>
<h2>Accuracy</h2>
<p>Tools are provided <strong>as is, with no warranty of accuracy</strong>. RR values and distributions are community estimates and editable inputs; seasons change rules without notice.</p>
<h2>Acceptable use</h2>
<ul><li>Personal use, freely. Don't resell or rebrand the tools.</li><li>Linking is welcome and needs no permission.</li></ul>
<h2>Limitation of liability</h2>
<p>To the maximum extent permitted by law, the operator is not liable for losses arising from use of the tools, including ranked outcomes.</p>`,
  },
  {
    slug: 'changelog',
    title: "Changelog – What's New | RIVALS RANK",
    desc: 'Every real update to RIVALS RANK: tools, season data reviews, fixes. Dated and honest, newest first.',
    html: `
<h2>2026-10-08 — Launch</h2>
<ul>
<li>Shipped four tools: <a href="/rr-estimator/">RR estimator</a>, <a href="/rank-percentile/">rank percentile</a>, <a href="/rank-distribution/">rank distribution</a> (editable), <a href="/reset-planner/">reset planner</a>.</li>
<li>Distribution table ships with editable placeholder shares pending current-season tracker data [VERIFY] — <a href="/methodology/">methodology</a>.</li>
<li>Three guides published: <a href="/guides/how-rr-works/">how RR works</a>, <a href="/guides/ranks-explained/">ranks explained</a>, <a href="/guides/climbing-math/">climbing math</a>.</li>
</ul>
<h2>Planned</h2>
<ul><li>Season snapshot archive once community numbers stabilize each reset.</li><li>Hero-specific win-rate tracker research — request via <a href="/contact/">contact</a>.</li></ul>`,
  },
  {
    slug: 'sitemap',
    title: 'HTML Sitemap – All Pages | RIVALS RANK',
    desc: 'Every page on RIVALS RANK: RR estimator, percentile calculator, rank distribution, reset planner, guides and site information.',
    html: '',
  },
];

/** Rank ladder used by tools. Shares are editable placeholders [VERIFY per season]. */
export const LADDER = [
  { rank: 'Bronze', share: 12 },
  { rank: 'Silver', share: 18 },
  { rank: 'Gold', share: 24 },
  { rank: 'Platinum', share: 20 },
  { rank: 'Diamond', share: 13 },
  { rank: 'Grandmaster', share: 8 },
  { rank: 'Celestial', share: 3.5 },
  { rank: 'Eternity', share: 1.2 },
  { rank: 'One Above All', share: 0.3 },
];
