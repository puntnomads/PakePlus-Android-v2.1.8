window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const allowedYouTubeChannels = [
  {
    channelTitle: "Nouman Ali Khan - Official - Bayyinah",
    channelId: "UCRtiU-lpcBSi-ipFKyfIkug",
  },
  {
    channelTitle: "Belal Assaad",
    channelId: "UC34dxKHa9n9ggxz4m7bztfA",
  },
  {
    channelTitle: "Green Lane Masjid",
    channelId: "UCgNUOJalS_ciV5VcuSGil3Q",
  },
  {
    channelTitle: "The Thinking Muslim",
    channelId: "UCWJPKXhkcMGXafdtqGx1mEw",
  },
  {
    channelTitle: "AMAU",
    channelId: "UCmTqZ28TaM7V_g7uJVuBAMw",
  },
  {
    channelTitle: "Blogging Theology",
    channelId: "UC_SLXSHcCwK2RSZTXVL26SA",
  },
  {
    channelTitle: "Huda TV",
    channelId: "UCIVSdtXb4pR57BDqKKNqsTg",
  },
  {
    channelTitle: "IISC Multimedia",
    channelId: "UCKhKdwcC_zP02UW-ViiQgdA",
  },
  {
    channelTitle: "Imam Navaid Aziz",
    channelId: "UC1M2fP-f6HuFCbD2xb7PkRA",
  },
  {
    channelTitle: "Dr. Hatem al-Haj",
    channelId: "UCEghLqhUyMVTe3kjJ1oJ3jA",
  },
  {
    channelTitle: "Yahya al Bahith",
    channelId: "UC27BIgkTSzu2eiwG5uEh07w",
  },
  {
    channelTitle: "Desecularize Islam",
    channelId: "UCB-CcNNWfjD2eQFatT9jXYg",
  },
  {
    channelTitle: "Aswath Damodaran",
    channelId: "UCLvnJL8htRR1T9cbSccaoVw",
  },
  {
    channelTitle: "Nate Hagens",
    channelId: "UCWJOjGOpN8oSVr_OoJLzk9g",
  },
  {
    channelTitle: "HealthyGamerGG",
    channelId: "UClHVl2N3jPEbkNJVx-ItQIQ",
  },
  {
    channelTitle: "Alex Hormozi",
    channelId: "UCUyDOdBWhC1MCxEjC46d-zw",
  },
  {
    channelTitle: "Founders Podcast",
    channelId: "UCQ-rrUCsJLNjFdPtKq0YOfA",
  },
  {
    channelTitle: "David Senra",
    channelId: "UCy2FPslt0LLPsIV0iukvHpQ",
  },
  {
    channelTitle: "Investing in Regenerative Agriculture",
    channelId: "UCc5CGmbdDid6bKoVpMeFZPQ",
  },
  {
    channelTitle: "ReGen Brands",
    channelId: "UCtI2__muxGZDUtRzsp9oroQ",
  },
  {
    channelTitle: "The Organic Guy Podcast",
    channelId: "UCiMOSxGwgOgiuCCMcbqJMIQ",
  },
  {
    channelTitle: "World of DaaS with Auren Hoffman",
    channelId: "UC6Snzg5AdYIxwPrkxwt9aBw",
  },
  {
    channelTitle: "My First Million",
    channelId: "UCyaN6mg5u8Cjy2ZI4ikWaug",
  },
  {
    channelTitle: "Nick Huber - Sweaty Startup",
    channelId: "UCBYwRdRw6x9bH4PsyCLnmOw",
  },
  {
    channelTitle: "The Timeless Investor",
    channelId: "UCJ3NvDYBgND1m7bn3-ONtqQ",
  },
  {
    channelTitle: "The Swedish Investor",
    channelId: "UCAeAB8ABXGoGMbXuYPmiu2A",
  },
  {
    channelTitle: "Investing with Tom",
    channelId: "UCG9FGwgAx9-RKq1smF1lc8w",
  },
  {
    channelTitle: "Ben Felix",
    channelId: "UCDXTQ8nWmx_EhZ2v-kp7QxA",
  },
  {
    channelTitle: "Think School",
    channelId: "UCKZozRVHRYsYHGEyNKuhhdA",
  },
  {
    channelTitle: "Business Casual",
    channelId: "UC_E4px0RST-qFwXLJWBav8Q",
  },
  {
    channelTitle: "Dr. Anil Lamba",
    channelId: "UC5mK0-K-r3KET0kifn-mJMg",
  },
  {
    channelTitle: "Company Man",
    channelId: "UCQMyhrt92_8XM0KgZH6VnRg",
  },
  {
    channelTitle: "Financial Historian",
    channelId: "UCZ7keJV8Gj-6UbGgkOKs4uw",
  },
  {
    channelTitle: "StrategyU",
    channelId: "UCJ9iglk14yNbv2c_zauC0BA",
  },
  {
    channelTitle: "firmsconsulting",
    channelId: "UCBeUWFTGiqPHMnENybTpPww",
  },
  {
    channelTitle: "Management Consulted",
    channelId: "UCrDscHOUEz_YZWGXIYL7w4g",
  },
  {
    channelTitle: "CraftingCases",
    channelId: "UCtje4tl-6jFclXZOB6Rrg6w",
  },
  {
    channelTitle: "Business To You",
    channelId: "UCIo0eZl-Q7BOP719XRUBQlg",
  },
];

const checkYouTubeVideoIsAllowed = () => {
  const currentUrl = window.location.href;
  let videoId = null;
  const apiKey = "AIzaSyAG8Xxy5g4l-LvkSiYNARsMmMfVEnH2EUY";
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&\n?#]+)/;
  const match = currentUrl.match(youtubeRegex);

  if (match && match[1]) {
    videoId = match[1];
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const channelId = data.items[0].snippet.channelId;
          const isChannelFound = allowedYouTubeChannels.some(
            (channel) => channel.channelId === channelId
          );
          if (!isChannelFound) {
            window.location.href = "https://www.youtube.com";
          }
        } else {
          console.log("Video not found or invalid video ID.");
        }
      })
      .catch((error) => console.error("Error fetching video data:", error));
  } else {
    console.log("No YouTube video ID found in the current URL.");
  }
};

const disableYouTubeVideoPreview = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (const node of mutation.addedNodes) {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.id === "inline-preview-player"
        ) {
          const videoPreview = document.getElementById("video-preview");
          videoPreview.remove();
          observer.disconnect();
        }
      }
    }
  }
};

const disableYouTubeSharePopup = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === "IFRAME") {
          node.remove();
        }
      }
    }
  }
};

const observeVideoPreview = (body) => {
  let previewObserver = new MutationObserver(disableYouTubeVideoPreview);
  previewObserver.observe(body, { childList: true, subtree: true });
};

const observeSharePopup = () => {
  let target = document.querySelector("ytd-popup-container");
  let shareObserver = new MutationObserver(disableYouTubeSharePopup);
  shareObserver.observe(target, { childList: true, subtree: true });
};

const observeChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const videoObserver = new MutationObserver((mutations) => {
    checkYouTubeVideoIsAllowed();
    if (oldHref !== document.location.href) {
      oldHref = document.location.href;
      checkYouTubeVideoIsAllowed();
      observeVideoPreview(body);
      observeSharePopup();
    }
  });
  videoObserver.observe(body, { childList: true, subtree: true });
  observeVideoPreview(body);
  observeSharePopup();
  checkYouTubeVideoIsAllowed();
};

window.onload = observeChange;