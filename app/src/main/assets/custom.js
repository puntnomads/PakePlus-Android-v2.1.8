window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});let bannedUrlPaths = ["browse", "home", "chat", "explore"];

const blockBannedSubStackPages = () => {
  let currentUrl = window.location.href;
  let isPathFound = bannedUrlPaths.some((bannedPath) =>
    currentUrl.includes(bannedPath)
  );
  if (isPathFound) {
    window.location.href = "https://substack.com/inbox";
  }
};

const observeChange = () => {
  let oldHref = document.location.href;
  let body = document.querySelector("body");
  let observer = new MutationObserver((mutations) => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      blockBannedSubStackPages();
    }
  });
  observer.observe(body, { childList: true, subtree: true });
  blockBannedSubStackPages();
};

window.onload = observeChange;
