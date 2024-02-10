
//var myCacheVersion = "v.1.2.2024.02.10";






//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
  
    } else if (registration.active) {



}
    } catch (error) {

console.error(`Registration failed with ` + error);
    }
  }
};



registerServiceWorker();
swJsInstallFiles();



// fu hide file extension
function hideLinkExt(url){
var linkExtList = ["index.html", ".html"];
var newURL = url;

linkExtList.forEach((element) => {
newURL = newURL.replace(element, '');
});

return newURL;
}
//














function swJsInstallFiles(){

/*
// cache
//https://stackoverflow.com/questions/66529102/uncaught-in-promise-typeerror-failed-to-execute-cache-on-addall-request
//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {
e.waitUntil(caches.open("v.1.2.2024.02.10").then((cache) => cache.addAll(fileListArrFound)),);
});*/






// cache
//https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll

self.addEventListener('install', (e) => {


// start check 404, file list 2
var fileListArr = ["/404.html",
"/BingSiteAuth.xml",
"/LICENSE.md",
"/README.md",
"/about.html",
"/ads.html",
"/audio/click.mp3",
"/audio/",
"/audio/click2.mp3",
"/audio/error.mp3",
"/audio/game-over.mp3",
"/audio/neutral.mp3",
"/audio/ok.mp3",
"/audio/win.mp3",
"/blog.html",
"/changelog.html",
"/chrome-extensions/5-chrome-hotkey-url-abc.crx",
"/chrome-extensions/",
"/chrome-extensions/README.md",
"/chrome-extensions/chrome-badge-count-up-timer-abc.crx",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/background.js",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/icon512x512.png",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/icon512x512.svg",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/manifest.json",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/popup.html",
"/chrome-extensions/chrome-badge-count-up-timer-extension-4/script.js",
"/chrome-extensions/chrome-hotkey-url-extension-5/README.md",
"/chrome-extensions/chrome-hotkey-url-extension-5/",
"/chrome-extensions/chrome-hotkey-url-extension-5/icon512x512.png",
"/chrome-extensions/chrome-hotkey-url-extension-5/icon512x512.svg",
"/chrome-extensions/chrome-hotkey-url-extension-5/light.css",
"/chrome-extensions/chrome-hotkey-url-extension-5/manifest.json",
"/chrome-extensions/chrome-hotkey-url-extension-5/options.html",
"/chrome-extensions/chrome-hotkey-url-extension-5/options.js",
"/chrome-extensions/chrome-hotkey-url-extension-5/screenshot.png",
"/chrome-extensions/chrome-hotkey-url-extension-5/script.js",
"/chrome-extensions/chrome-hotkey-url-extension-5/style-main.css",
"/chrome-extensions/chrome-hotkey-url-extension-5/style.css",
"/chrome-extensions/chrome-hotkey-url-extension-5/worker.js",
"/chrome-extensions/chrome-new-tab-redirect-abc.crx",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/README.md",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/icon512x512.png",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/icon512x512.svg",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/light.css",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/manifest.json",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/new-tab-redirect.html",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/options.html",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/options.js",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/screenshot.png",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/screenshot2.png",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/script.js",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/style-main.css",
"/chrome-extensions/chrome-new-tab-redirect-extenstion-3/style.css",
"/chrome-extensions-list.html",
"/css/d-blue.css",
"/css/",
"/css/d-green.css",
"/css/d-orange.css",
"/css/d-pink.css",
"/css/d-plum.css",
"/css/d-purple.css",
"/css/d-red.css",
"/css/d-sea.css",
"/css/d-violet.css",
"/css/d-yellow.css",
"/css/dark.css",
"/css/empty.css",
"/css/h-contrast-d.css",
"/css/h-contrast-l.css",
"/css/l-blue.css",
"/css/l-green.css",
"/css/l-olive.css",
"/css/l-orange.css",
"/css/l-pink.css",
"/css/l-plum.css",
"/css/l-purple.css",
"/css/l-red.css",
"/css/l-sea.css",
"/css/l-seashell.css",
"/css/l-violet.css",
"/css/l-yellow.css",
"/css/light.css",
"/css/main.css",
"/css/noscript.css",
"/css/o-blue.css",
"/css/o-green.css",
"/css/o-lime.css",
"/css/o-mint.css",
"/css/o-olive.css",
"/css/o-orange.css",
"/css/o-pink.css",
"/css/o-plum.css",
"/css/o-purple.css",
"/css/o-sea.css",
"/css/o-silver.css",
"/css/o-violet.css",
"/css/o-yellow.css",
"/css/od-blue.css",
"/css/od-brown.css",
"/css/od-forest.css",
"/css/od-gray.css",
"/css/od-green.css",
"/css/od-olive.css",
"/css/od-pink.css",
"/css/od-plum.css",
"/css/od-purple.css",
"/css/od-red.css",
"/css/od-sea.css",
"/css/od-slate.css",
"/css/od-violet.css",
"/css/od-yellow.css",
"/css/rss.css",
"/css/style.css",
"/css-art/computer-css-9/index.html",
"/css-art/",
"/css-art/computer-css-9/",
"/css-art/computer-css-9/style.css",
"/css-art/index.html",
"/css-art/pumpkin-css-15/index.html",
"/css-art/pumpkin-css-15/",
"/css-art/pumpkin-css-15/style.css",
"/css-art/realistic-old-windows-os-popup-window-12/index.html",
"/css-art/realistic-old-windows-os-popup-window-12/",
"/css-art/realistic-old-windows-os-popup-window-12/style.css",
"/css-art/tpl-1/index.html",
"/css-art/tpl-1/",
"/css-art/tpl-1/style.css",
"/css-art/woman-css-32/index.html",
"/css-art/woman-css-32/",
"/css-art/woman-css-32/style.css",
"/css-art-page.html",
"/data/adsJsonVar.js",
"/data/",
"/data/blogJsonVar.js",
"/data/bookJsonVar.js",
"/data/bookmarksJsonVar.js",
"/data/musicJsonVar.js",
"/data/quizJsonVar.js",
"/data/quoteJsonVar.js",
"/data/radioJsonVar.js",
"/data/sitemapJsonVar.js",
"/data/tvJsonVar.js",
"/data/videoJsonVar.js",
"/data-other/img/close10x10.png",
"/data-other/",
"/data-other/img/",
"/data-other/img/close10x10.psd",
"/data-other-page.html",
"/data-page.html",
"/data2/WATCHLIST.csv",
"/data2/",
"/data2-page.html",
"/favicon.ico",
"/firefox-extensions/badge-count-up-timer-extension-4/4-firefox-badge-count-up-timer-extension.zip",
"/firefox-extensions/",
"/firefox-extensions/badge-count-up-timer-extension-4/",
"/firefox-extensions/badge-count-up-timer-extension-4/README.md",
"/firefox-extensions/badge-count-up-timer-extension-4/background.html",
"/firefox-extensions/badge-count-up-timer-extension-4/background.js",
"/firefox-extensions/badge-count-up-timer-extension-4/icon512x512.png",
"/firefox-extensions/badge-count-up-timer-extension-4/icon512x512.svg",
"/firefox-extensions/badge-count-up-timer-extension-4/light.css",
"/firefox-extensions/badge-count-up-timer-extension-4/manifest.json",
"/firefox-extensions/badge-count-up-timer-extension-4/popup.html",
"/firefox-extensions/badge-count-up-timer-extension-4/screenshot.png",
"/firefox-extensions/badge-count-up-timer-extension-4/script.js",
"/firefox-extensions/badge-count-up-timer-extension-4/style-main.css",
"/firefox-extensions/badge-count-up-timer-extension-4/style.css",
"/firefox-extensions/hotkey-url-extension-5/5-firefox-hotkey-url-abc.zip",
"/firefox-extensions/hotkey-url-extension-5/",
"/firefox-extensions/hotkey-url-extension-5/README.md",
"/firefox-extensions/hotkey-url-extension-5/icon512x512.png",
"/firefox-extensions/hotkey-url-extension-5/icon512x512.svg",
"/firefox-extensions/hotkey-url-extension-5/light.css",
"/firefox-extensions/hotkey-url-extension-5/manifest.json",
"/firefox-extensions/hotkey-url-extension-5/options.html",
"/firefox-extensions/hotkey-url-extension-5/options.js",
"/firefox-extensions/hotkey-url-extension-5/screenshot.png",
"/firefox-extensions/hotkey-url-extension-5/script.js",
"/firefox-extensions/hotkey-url-extension-5/style-main.css",
"/firefox-extensions/hotkey-url-extension-5/style.css",
"/firefox-extensions/hotkey-url-extension-5/worker.js",
"/firefox-extensions/new-tab-redirect-extension-3/3-firefox-new-tab-redirect-extension.zip",
"/firefox-extensions/new-tab-redirect-extension-3/",
"/firefox-extensions/new-tab-redirect-extension-3/README.md",
"/firefox-extensions/new-tab-redirect-extension-3/icon512x512.png",
"/firefox-extensions/new-tab-redirect-extension-3/icon512x512.svg",
"/firefox-extensions/new-tab-redirect-extension-3/light.css",
"/firefox-extensions/new-tab-redirect-extension-3/manifest.json",
"/firefox-extensions/new-tab-redirect-extension-3/new-tab-redirect.html",
"/firefox-extensions/new-tab-redirect-extension-3/options.html",
"/firefox-extensions/new-tab-redirect-extension-3/options.js",
"/firefox-extensions/new-tab-redirect-extension-3/screenshot.png",
"/firefox-extensions/new-tab-redirect-extension-3/screenshot2.png",
"/firefox-extensions/new-tab-redirect-extension-3/screenshot3.png",
"/firefox-extensions/new-tab-redirect-extension-3/script.js",
"/firefox-extensions/new-tab-redirect-extension-3/style-main.css",
"/firefox-extensions/new-tab-redirect-extension-3/style.css",
"/firefox-extensions/search-localhost-http-extension-1/1-firefox-search-localhost-http-extension.zip",
"/firefox-extensions/search-localhost-http-extension-1/",
"/firefox-extensions/search-localhost-http-extension-1/icon512x512.png",
"/firefox-extensions/search-localhost-http-extension-1/icon512x512.svg",
"/firefox-extensions/search-localhost-http-extension-1/manifest.json",
"/firefox-extensions/search-localhost-https-extension-2/2-firefox-search-localhost-https-extension.zip",
"/firefox-extensions/search-localhost-https-extension-2/",
"/firefox-extensions/search-localhost-https-extension-2/icon512x512.png",
"/firefox-extensions/search-localhost-https-extension-2/icon512x512.svg",
"/firefox-extensions/search-localhost-https-extension-2/manifest.json",
"/firefox-extensions/url-redirect-extension-6/6-firefox-url-redirect-abc.zip",
"/firefox-extensions/url-redirect-extension-6/",
"/firefox-extensions/url-redirect-extension-6/README.md",
"/firefox-extensions/url-redirect-extension-6/icon512x512.png",
"/firefox-extensions/url-redirect-extension-6/icon512x512.svg",
"/firefox-extensions/url-redirect-extension-6/light.css",
"/firefox-extensions/url-redirect-extension-6/manifest.json",
"/firefox-extensions/url-redirect-extension-6/options.html",
"/firefox-extensions/url-redirect-extension-6/options.js",
"/firefox-extensions/url-redirect-extension-6/screenshot.png",
"/firefox-extensions/url-redirect-extension-6/script.js",
"/firefox-extensions/url-redirect-extension-6/style-main.css",
"/firefox-extensions/url-redirect-extension-6/style.css",
"/firefox-extensions-page.html",
"/firefox-theme/README.md",
"/firefox-theme/",
"/firefox-theme/dark-flat-theme-abc.zip",
"/firefox-theme/dark-flat-theme.png",
"/firefox-theme/light-flat-theme-abc.zip",
"/firefox-theme/light-flat-theme.png",
"/firefox-theme-page.html",
"/geany-theme/README.md",
"/geany-theme/",
"/geany-theme/abc-dark.conf",
"/geany-theme/abc-dark.png",
"/geany-theme/abc-light.conf",
"/geany-theme/abc-light.png",
"/geany-theme/dark.css",
"/geany-theme/default.conf",
"/geany-theme/light.css",
"/geany-theme-page.html",
"/googlebae648489b2c26df.html",
"/images/2023/0-start-end-krita-png.png",
"/images/",
"/images/2023/",
"/images/2023/1-building-krita-png.png",
"/images/2023/10-barbie-time-inkscape-svg.svg",
"/images/2023/11-web-design-trend-svg-inkscape-svg.svg",
"/images/2023/12-ava-woman-laptop-inkscape-svg.svg",
"/images/2023/14-circle-olive-wallpaper-desktop-jpg.jpg",
"/images/2023/15-circle-light-wallpaper-desktop-jpg.jpg",
"/images/2023/16-circle-dark-wallpaper-desktop-jpg.jpg",
"/images/2023/17-dark-triangle-wallpaper-desktop-jpg.jpg",
"/images/2023/18-light-triangle-wallpaper-desktop-jpg.jpg",
"/images/2023/19-landscape-light-blue-wallpaper-desktop-inkscape-jpg.jpg",
"/images/2023/2-test-krita-png.png",
"/images/2023/20-landscape-dark-blue-wallpaper-desktop-inkscape-jpg.jpg",
"/images/2023/21-landscape-dark-blue-wallpaper-mobile-inkscape-jpg.jpg",
"/images/2023/22-landscape-light-blue-wallpaper-mobile-inkscape-jpg.jpg",
"/images/2023/23-binary-text-mobile-wallpaper-dark-inkscape-png.png",
"/images/2023/24-binary-text-mobile-wallpaper-light-inkscape-png.png",
"/images/2023/25-binary-text-desktop-wallpaper-light-inkscape-png.png",
"/images/2023/26-binary-text-desktop-wallpaper-dark-inkscape-png.png",
"/images/2023/26-music-note-icon-inkscape-svg.svg",
"/images/2023/27-editor-code-light-dark-mode-gif.gif",
"/images/2023/28-drawing-art-krita.png",
"/images/2023/29-transparent-background-inkscape.png",
"/images/2023/3-landscape-inkscape-svg.svg",
"/images/2023/30-ava-woman-laptop-inkscape-svg.svg",
"/images/2023/31-mail-art-inkscape.svg",
"/images/2023/32--hello-world-binary-text-dark-wallpaper--inkscape-png.png",
"/images/2023/33-hello-world-binary-text-light-wallpaper-binary-inkscape-png.png",
"/images/2023/34-logo-diamond-inkscape-png.png",
"/images/2023/4-star-inkscape-svg.svg",
"/images/2023/5-logo-x-inkscape-svg.svg",
"/images/2023/6-logo-t-inkscape-svg.svg",
"/images/2023/7-logo-x-inkscape-svg.svg",
"/images/2023/8-logo-x-inkscape-svg.svg",
"/images/2023/9-logo-x-inkscape-svg.svg",
"/images/2024/35-one-black-pixel-png-inkscape.png",
"/images/2024/",
"/images/2024/36-one-white-pixel-png-inkscape.png",
"/images/2024/37-one-transparent-pixel-png-inkscape.png",
"/images/2024/38-bg-white-png-krita.png",
"/images/2024/39-bg-black-png-krita.png",
"/images/2024/40-logo-circle-oval-svg-inkscape.svg",
"/images/2024/41-logo-circle-oval-png-inkscape.png",
"/images/index.html",
"/images-page.html",
"/img/404.png",
"/img/",
"/img/404.svg",
"/img/bg-dark.svg",
"/img/bg-light.svg",
"/img/favicon16x16.png",
"/img/github-banner-settings.png",
"/img/github-banner-settings.svg",
"/img/header-banner.png",
"/img/header-banner.svg",
"/img/logo (copy 1).svg",
"/img/logo.jpeg",
"/img/logo.png",
"/img/logo.svg",
"/img/maskable_logo.png",
"/img/other/art.png",
"/img/other/",
"/img/repository-open-graph-template.png",
"/img/screenshot.png",
"/img/screenshot2.png",
"/img/screenshot3.png",
"/img/tpl/ava.png",
"/img/tpl/",
"/img/tpl/ava.svg",
"/img/tpl/bg-dark.png",
"/img/tpl/bg-light.png",
"/img/tpl/favicon.ico",
"/img/tpl/favicon.png",
"/img/tpl/flower.png",
"/img/tpl/flower.svg",
"/img/tpl/header-banner.svg",
"/img/tpl/logo.png",
"/img/tpl/logo.svg",
"/img/tpl/logo2.png",
"/img/tpl/logo2.svg",
"/img/tpl/tree.svg",
"/img/tpl/woman.png",
"/img/tpl/woman.svg",
"/img/transparent.png",
"/img/transparent.svg",
"/index.html",
"/install.html",
"/js/ad.js",
"/js/",
"/js/cookieAgreePopup.js",
"/js/fuPostTime.js",
"/js/main.js",
"/js/script.js",
"/js/settings-options.js",
"/js/theme-options.js",
"/links.html",
"/lists.html",
"/main-list.html",
"/manifest.webmanifest",
"/mini-projects/animated-borders-button-link-5/index.html",
"/mini-projects/",
"/mini-projects/animated-borders-button-link-5/",
"/mini-projects/animated-borders-button-link-5/style.css",
"/mini-projects/animation-test-6/index.html",
"/mini-projects/animation-test-6/",
"/mini-projects/animation-test-6/style.css",
"/mini-projects/background-with-linear-gradient-css-7/index.html",
"/mini-projects/background-with-linear-gradient-css-7/",
"/mini-projects/background-with-linear-gradient-css-7/style.css",
"/mini-projects/button-blur-unblur-28/index.html",
"/mini-projects/button-blur-unblur-28/",
"/mini-projects/button-blur-unblur-28/style.css",
"/mini-projects/circle-8/index.html",
"/mini-projects/circle-8/",
"/mini-projects/circle-8/style.css",
"/mini-projects/flex-grid-32/index.html",
"/mini-projects/flex-grid-32/",
"/mini-projects/flex-grid-32/style.css",
"/mini-projects/heading-33/index.html",
"/mini-projects/heading-33/",
"/mini-projects/heading-33/style.css",
"/mini-projects/index.html",
"/mini-projects/light-and-dark-design-29/index.html",
"/mini-projects/light-and-dark-design-29/",
"/mini-projects/light-and-dark-design-29/style.css",
"/mini-projects/responsive-web-design-2/index.html",
"/mini-projects/responsive-web-design-2/",
"/mini-projects/responsive-web-design-2/script.js",
"/mini-projects/responsive-web-design-2/style.css",
"/mini-projects/sun-and-moon-css-31/index.html",
"/mini-projects/sun-and-moon-css-31/",
"/mini-projects/sun-and-moon-css-31/style.css",
"/mini-projects/textarea-24/index.html",
"/mini-projects/textarea-24/",
"/mini-projects/textarea-24/style.css",
"/mini-projects/tpl-project-mini/index.html",
"/mini-projects/tpl-project-mini/",
"/mini-projects/tpl-project-mini/style.css",
"/mini-projects-list.html",
"/other-projects/index.html",
"/other-projects/",
"/other-projects/php-fuWebsiteToPWA/index.php",
"/other-projects/php-fuWebsiteToPWA/",
"/other-projects/php-fuWebsiteToPWA/php-fuWebsiteToPWA.php",
"/other-projects/php-fuWebsiteToPWA/php-fuWebsiteToPWA2HidenExt.php",
"/other-projects/python-hello-world/main.py",
"/other-projects/python-hello-world/",
"/other-projects-list.html",
"/pages.html",
"/photos/2023/10-branch.jpg",
"/photos/",
"/photos/2023/",
"/photos/2023/11-frog.jpg",
"/photos/2023/15-flower.jpg",
"/photos/2023/16-flower.jpg",
"/photos/2023/17-flower.jpg",
"/photos/2023/2-flower.jpg",
"/photos/2023/3-drop-and-branch.jpg",
"/photos/2023/4-drop-and-branch.jpg",
"/photos/2023/5-drop-and-branch.jpg",
"/photos/2023/6-flower.jpg",
"/photos/2023/7-drop-branch.jpg",
"/photos/2023/9-branch.jpg",
"/photos/index.html",
"/photos-page.html",
"/pinterest-bb1de.html",
"/projects/25-redirects/index.html",
"/projects/",
"/projects/25-redirects/",
"/projects/25-redirects/script.js",
"/projects/25-redirects/style.css",
"/projects/average-number-40/index.html",
"/projects/average-number-40/",
"/projects/average-number-40/script.js",
"/projects/average-number-40/style.css",
"/projects/background-colors-list-50/index.html",
"/projects/background-colors-list-50/",
"/projects/background-colors-list-50/script.js",
"/projects/background-colors-list-50/style.css",
"/projects/blog-1/index.html",
"/projects/blog-1/",
"/projects/blog-1/script.js",
"/projects/blog-1/style.css",
"/projects/browser-info-test-js-2/index.html",
"/projects/browser-info-test-js-2/",
"/projects/browser-info-test-js-2/script.js",
"/projects/browser-info-test-js-2/style.css",
"/projects/calculator-3/index.html",
"/projects/calculator-3/",
"/projects/calculator-3/script.js",
"/projects/calculator-3/style.css",
"/projects/color-picker-4/index.html",
"/projects/color-picker-4/",
"/projects/color-picker-4/script.js",
"/projects/color-picker-4/style.css",
"/projects/count-symbol-39/index.html",
"/projects/count-symbol-39/",
"/projects/count-symbol-39/script.js",
"/projects/count-symbol-39/style.css",
"/projects/demo-test-style-5/index.html",
"/projects/demo-test-style-5/",
"/projects/demo-test-style-5/script.js",
"/projects/demo-test-style-5/style.css",
"/projects/drawing-7/index.html",
"/projects/drawing-7/",
"/projects/drawing-7/script.js",
"/projects/drawing-7/style.css",
"/projects/dropdown-menu-8/index.html",
"/projects/dropdown-menu-8/",
"/projects/dropdown-menu-8/script.js",
"/projects/dropdown-menu-8/style.css",
"/projects/effect-when-scroll-48/index.html",
"/projects/effect-when-scroll-48/",
"/projects/effect-when-scroll-48/script.js",
"/projects/effect-when-scroll-48/style.css",
"/projects/game-dice-9/index.html",
"/projects/game-dice-9/",
"/projects/game-dice-9/script.js",
"/projects/game-dice-9/style.css",
"/projects/game-guess-number-10/index.html",
"/projects/game-guess-number-10/",
"/projects/game-guess-number-10/script.js",
"/projects/game-guess-number-10/style.css",
"/projects/game-memory-symbol-11/index.html",
"/projects/game-memory-symbol-11/",
"/projects/game-memory-symbol-11/manifest.webmanifest",
"/projects/game-memory-symbol-11/script.js",
"/projects/game-memory-symbol-11/style.css",
"/projects/game-memory-symbol-11/sw.js",
"/projects/game-snake-12/index.html",
"/projects/game-snake-12/",
"/projects/game-snake-12/script.js",
"/projects/game-snake-12/style.css",
"/projects/game-tic-tac-toe-13/index.html",
"/projects/game-tic-tac-toe-13/",
"/projects/game-tic-tac-toe-13/script.js",
"/projects/game-tic-tac-toe-13/style.css",
"/projects/google-programmable-search-49/index.html",
"/projects/google-programmable-search-49/",
"/projects/google-programmable-search-49/script.js",
"/projects/google-programmable-search-49/style.css",
"/projects/google-trends-46/index.html",
"/projects/google-trends-46/",
"/projects/google-trends-46/script.js",
"/projects/google-trends-46/style.css",
"/projects/highlight-word-15/index.html",
"/projects/highlight-word-15/",
"/projects/highlight-word-15/script.js",
"/projects/highlight-word-15/style.css",
"/projects/index.html",
"/projects/insert-icon-17/index.html",
"/projects/insert-icon-17/",
"/projects/insert-icon-17/old-material-icon-script.js",
"/projects/insert-icon-17/script.js",
"/projects/insert-icon-17/style.css",
"/projects/movie-list-19/index.html",
"/projects/movie-list-19/",
"/projects/movie-list-19/script.js",
"/projects/movie-list-19/style.css",
"/projects/music-20/index.html",
"/projects/music-20/",
"/projects/music-20/script.js",
"/projects/music-20/style.css",
"/projects/page-lag-test-47/index.html",
"/projects/page-lag-test-47/",
"/projects/page-lag-test-47/script.js",
"/projects/page-lag-test-47/style.css",
"/projects/pwa-test-21/index.html",
"/projects/pwa-test-21/",
"/projects/pwa-test-21/manifest.webmanifest",
"/projects/pwa-test-21/script.js",
"/projects/pwa-test-21/style.css",
"/projects/pwa-test-21/sw.js",
"/projects/quiz-42/index.html",
"/projects/quiz-42/",
"/projects/quiz-42/script (copy 1).js",
"/projects/quiz-42/script.js",
"/projects/quiz-42/style.css",
"/projects/radio-22/index.html",
"/projects/radio-22/",
"/projects/radio-22/script.js",
"/projects/radio-22/style.css",
"/projects/rain-38/index.html",
"/projects/rain-38/",
"/projects/rain-38/script.js",
"/projects/rain-38/style.css",
"/projects/random-color-generator-51/demo.js",
"/projects/random-color-generator-51/",
"/projects/random-color-generator-51/index.html",
"/projects/random-color-generator-51/script.js",
"/projects/random-color-generator-51/style.css",
"/projects/random-symbol-23/index.html",
"/projects/random-symbol-23/",
"/projects/random-symbol-23/script.js",
"/projects/random-symbol-23/style.css",
"/projects/random-text-generator-24/index.html",
"/projects/random-text-generator-24/",
"/projects/random-text-generator-24/script.js",
"/projects/random-text-generator-24/style.css",
"/projects/start-page-41/index.html",
"/projects/start-page-41/",
"/projects/start-page-41/script.js",
"/projects/start-page-41/style.css",
"/projects/test-27/README.md",
"/projects/test-27/",
"/projects/test-27/cursor-hl.png",
"/projects/test-27/cursor-hl.psd",
"/projects/test-27/index.html",
"/projects/test-27/manifest.webmanifest",
"/projects/test-27/screenshot.png",
"/projects/test-27/script.js",
"/projects/test-27/style.css",
"/projects/test-27/sw.js",
"/projects/text-to-binary-52/index.html",
"/projects/text-to-binary-52/",
"/projects/text-to-binary-52/script.js",
"/projects/text-to-binary-52/style.css",
"/projects/text-to-url-43/index.html",
"/projects/text-to-url-43/",
"/projects/text-to-url-43/script.js",
"/projects/text-to-url-43/style.css",
"/projects/time-binary-clock-28/index.html",
"/projects/time-binary-clock-28/",
"/projects/time-binary-clock-28/script.js",
"/projects/time-binary-clock-28/style.css",
"/projects/time-clock-29/index.html",
"/projects/time-clock-29/",
"/projects/time-clock-29/script.js",
"/projects/time-clock-29/style.css",
"/projects/time-stopwatch-30/index.html",
"/projects/time-stopwatch-30/",
"/projects/time-stopwatch-30/script.js",
"/projects/time-stopwatch-30/style.css",
"/projects/todo-list-idea-32/index.html",
"/projects/todo-list-idea-32/",
"/projects/todo-list-idea-32/script.js",
"/projects/todo-list-idea-32/style.css",
"/projects/todo-list-task-31/index.html",
"/projects/todo-list-task-31/",
"/projects/todo-list-task-31/script.js",
"/projects/todo-list-task-31/style.css",
"/projects/tpl-project-001/README.md",
"/projects/tpl-project-001/",
"/projects/tpl-project-001/index.html",
"/projects/tpl-project-001/manifest.webmanifest",
"/projects/tpl-project-001/screenshot.png",
"/projects/tpl-project-001/script.js",
"/projects/tpl-project-001/style.css",
"/projects/tpl-project-001/sw.js",
"/projects/tpl-project-mini-002/index.html",
"/projects/tpl-project-mini-002/",
"/projects/tpl-project-mini-002/script.js",
"/projects/tpl-project-mini-002/style.css",
"/projects/transliterate-35/index.html",
"/projects/transliterate-35/",
"/projects/transliterate-35/script.js",
"/projects/transliterate-35/style.css",
"/projects/tv-36/index.html",
"/projects/tv-36/",
"/projects/tv-36/script.js",
"/projects/tv-36/style.css",
"/projects/typing-speed-14/index.html",
"/projects/typing-speed-14/",
"/projects/typing-speed-14/script.js",
"/projects/typing-speed-14/style.css",
"/projects/video-18/index.html",
"/projects/video-18/",
"/projects/video-18/script.js",
"/projects/video-18/style.css",
"/projects/weather-37/index.html",
"/projects/weather-37/",
"/projects/weather-37/script.js",
"/projects/weather-37/style.css",
"/projects-list.html",
"/robots.txt",
"/rss.xml",
"/search.html",
"/settings.html",
"/sitemap.html",
"/sitemap.xml",
"/sw.js",
"/templates/flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc-17/flower.svg",
"/templates/",
"/templates/flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc-17/",
"/templates/flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc-17/index.html",
"/templates/flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc-17/style.css",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/css/style.css",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/css/",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/index.html",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/menu.html",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/menu2.html",
"/templates/home-page-website-template-auto-light-dark-flat-abc-9/page.html",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-blue.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-green.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-orange.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-pink.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-plum.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-purple.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-red.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-sea.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-violet.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/d-yellow.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/dark.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/empty.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/hight-contrast-dark.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/hight-contrast-light.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-blue.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-green.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-olive.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-orange.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-pink.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-plum.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-purple.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-red.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-sea.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-seashell.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-violet.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/l-yellow.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/light.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-blue.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-green.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-lime.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-mint.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-olive.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-orange.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-pink.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-plum.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-purple.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-sea.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-silver.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-violet.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/o-yellow.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-blue.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-brown.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-forest.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-gray.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-green.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-olive.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-pink.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-plum.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-purple.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-red.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-sea.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-slate.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-violet.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/od-yellow.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/css/style.css",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/index.html",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/menu.html",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/menu2.html",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/page.html",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/script.js",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/theme-options.js",
"/templates/home-page-website-template-many-auto-colors-themes-flat-abc-10/theme.html",
"/templates/index.html",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/index.html",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/movie-id.html",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/movie-poster.png",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/movie-poster2.png",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/name.html",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/search.html",
"/templates/movie-website-template-auto-light-dark-flat-abc-11/style.css",
"/templates/one-page-website-template-auto-light-dark-flat-mini-abc-15/circle.svg",
"/templates/one-page-website-template-auto-light-dark-flat-mini-abc-15/",
"/templates/one-page-website-template-auto-light-dark-flat-mini-abc-15/coffee.svg",
"/templates/one-page-website-template-auto-light-dark-flat-mini-abc-15/index.html",
"/templates/one-page-website-template-auto-light-dark-flat-mini-abc-15/style.css",
"/templates/personal-one-page-website-template-mini-light-dark-flat-mini-abc-16/index.html",
"/templates/personal-one-page-website-template-mini-light-dark-flat-mini-abc-16/",
"/templates/personal-one-page-website-template-mini-light-dark-flat-mini-abc-16/style.css",
"/templates/personal-website-template-2/index.html",
"/templates/personal-website-template-2/",
"/templates/personal-website-template-2/style.css",
"/templates/personal-website-template-3/index.html",
"/templates/personal-website-template-3/",
"/templates/personal-website-template-3/style.css",
"/templates/photo-gallery-one-page-website-template-flat-auto-light-dark-abc-18/index.html",
"/templates/photo-gallery-one-page-website-template-flat-auto-light-dark-abc-18/",
"/templates/photo-gallery-one-page-website-template-flat-auto-light-dark-abc-18/style.css",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-12/index.html",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-12/",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-12/style.css",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-14/index.html",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-14/",
"/templates/profile-card-website-template-auto-light-dark-flat-mini-abc-14/style.css",
"/templates/saas-landing-page-auto-light-dark-abc-19/index.html",
"/templates/saas-landing-page-auto-light-dark-abc-19/",
"/templates/saas-landing-page-auto-light-dark-abc-19/login.html",
"/templates/saas-landing-page-auto-light-dark-abc-19/product.png",
"/templates/saas-landing-page-auto-light-dark-abc-19/product2.png",
"/templates/saas-landing-page-auto-light-dark-abc-19/product3.png",
"/templates/saas-landing-page-auto-light-dark-abc-19/product4.png",
"/templates/saas-landing-page-auto-light-dark-abc-19/style.css",
"/templates/simple-text-template-1/index.html",
"/templates/simple-text-template-1/",
"/templates/simple-text-template-1/style.css",
"/templates/simple-website-template-4/index.html",
"/templates/simple-website-template-4/",
"/templates/simple-website-template-4/style.css",
"/templates/simple-website-template-5/index.html",
"/templates/simple-website-template-5/",
"/templates/simple-website-template-5/style.css",
"/templates/simple-website-template-6/index.html",
"/templates/simple-website-template-6/",
"/templates/simple-website-template-6/style.css",
"/templates/simple-website-template-7/index.html",
"/templates/simple-website-template-7/",
"/templates/simple-website-template-7/style.css",
"/templates/simple-website-template-8/index.html",
"/templates/simple-website-template-8/",
"/templates/simple-website-template-8/style.css",
"/templates/template-home-page-auto-light-dark-abc-20/image.png",
"/templates/template-home-page-auto-light-dark-abc-20/",
"/templates/template-home-page-auto-light-dark-abc-20/index.html",
"/templates/template-home-page-auto-light-dark-abc-20/page.html",
"/templates/template-home-page-auto-light-dark-abc-20/style.css",
"/templates/tpl-0/index.html",
"/templates/tpl-0/",
"/templates/tpl-0/style.css",
"/templates-page.html",
"/theme.html",
"/video/video.mp4",
"/video/",
"/vscode-theme/README.md",
"/vscode-theme/",
"/vscode-theme/dark-theme-color.json",
"/vscode-theme/icon.png",
"/vscode-theme/light-theme-color.json",
"/vscode-theme/package.json",
"/vscode-theme/screenshot-dark.png",
"/vscode-theme/screenshot-light.png",
"/vscode-theme/theme-abc-1.3.57.vsix",
"/vscode-theme/theme-abc-1.5.3.vsix",
"/vscode-theme-page.html",
"/web-search.html",
"/",];
fileListArr.push("no_exit_file_name_for_test.hmtl");

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
fileListArr = [...new Set(fileListArr)]; 




fileListArr.forEach((file) => {
//https://stackoverflow.com/questions/68595209/js-fetch-check-if-file-present-without-downloading-content

//file = '/' + file;

//rm ext
var newFile = hideLinkExt(file);



// with ext
fetch(
file, { method: "HEAD" }
)
.then((res) => {
if (res.ok) {
// file is present at URL
console.log('try cache.add ' + file);
//https://web.dev/learn/pwa/caching/
caches.open("v.1.2.2024.02.10")
.then(cache => {
cache.add(file); // it stores only one resource
//  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
} else {
console.log('404 not found ' + file);
// file is not present at URL
}
});


// no ext
fetch(
newFile, { method: "HEAD" }
)
.then((res) => {
if (res.ok) {
// file is present at URL
console.log('try cache.add ' + newFile);
//https://web.dev/learn/pwa/caching/
caches.open("v.1.2.2024.02.10")
.then(cache => {
cache.add(newFile); // it stores only one resource
//  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
} else {
console.log('404 not found ' + newFile);
// file is not present at URL
}
});


});



});

}




// rm old cache
//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete
this.addEventListener("activate", (event) => {
  const cachesToKeep = ["v.1.2.2024.02.10"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});




// read cache

/*//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request, {ignoreSearch: true});
  if (responseFromCache) {
    return responseFromCache;
  }
return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});*/

//https://web.dev/learn/pwa/serving
// cache first
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request, {ignoreSearch: true})
     .then(cachedResponse => {
       // It can update the cache to serve updated content on the next request
return cachedResponse || fetch(event.request);
     }
   )
  )
});


