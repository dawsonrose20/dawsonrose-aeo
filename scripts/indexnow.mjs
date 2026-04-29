// Notifies IndexNow (Bing, Yandex, partners) that URLs on this site have changed.
// Bing's index feeds ChatGPT directly, so faster Bing crawls = faster AI visibility.
// Run after every deploy: `npm run indexnow`

const KEY = "f345d9356ac2fb6f11e33b333f1d11fe";
const HOST = "dawsonrose-aeo.vercel.app";

const URLS = [
  `https://${HOST}/`,
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: URLS,
};

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

if (res.ok) {
  console.log(`IndexNow accepted ${URLS.length} URL(s) [HTTP ${res.status}]`);
} else {
  const text = await res.text();
  console.error(`IndexNow rejected: HTTP ${res.status} ${res.statusText}`);
  console.error(text);
  process.exit(1);
}
