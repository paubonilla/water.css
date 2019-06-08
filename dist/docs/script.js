"use strict";var e=window,t=new URLSearchParams(e.location.search),n="undefined"!=typeof CSS&&CSS.supports("color","var(--clr)"),i="https://cdn.jsdelivr.net/gh/kognise/water.css/dist/",s={"dark.min.css":1.4,"dark.standalone.min.css":1.31,"dark-legacy.min.css":2.487,"dark-legacy.standalone.min.css":1.16,"light.min.css":1.4,"light.standalone.min.css":1.3,"light-legacy.min.css":.178+1.16+1.15,"light-legacy.standalone.min.css":1.15},r=function(e){var t=e.theme,n=e.isLegacy?"-legacy":"",i=e.isStandalone?".standalone":"";return"".concat(t).concat(n).concat(i,".min.css")},a=function(e){var t=e.theme,n=e.isLegacy,s=e.isStandalone,a=r({theme:t,isLegacy:n,isStandalone:s}),o='<link rel="stylesheet" href="'.concat(i).concat(a,'">');return!n||s?o:(function(e){var t=e.theme,n=e.isLegacy,s=e.isStandalone,a="dark"===t?"light":"dark",o=r({theme:a,isLegacy:n,isStandalone:s});return'\n\x3c!-- Preload the required stylesheets (optional) --\x3e\n<link rel="preload" as="style" href="'.concat(i).concat(r({theme:t,isLegacy:n,isStandalone:s}),'">\n<link rel="preload" as="style" href="').concat(i).concat(o,'" media="(prefers-color-scheme: ').concat(a,')">')}({theme:t,isLegacy:n,isStandalone:!0})+"\n\n"+o).trim()},o={_productHunt:document.querySelector("#js-producthunt"),_stylesheet:document.querySelector("#js-stylesheet"),_removeStartupStylesheet:function(){var e=document.head.querySelector("#js-startup-stylesheet");e&&document.head.removeChild(e)},_updateProductHunt:function(e){this._productHunt.src=this._productHunt.src.replace(/dark|light/,e)},_updateStylesheet:function(e){this._stylesheet.href="../"+e},init:function(e,t){this._stylesheet.addEventListener("load",this._removeStartupStylesheet),this.update(e,t)},update:function(e,t){var n=e.isStandalone?e.theme:t||e.theme;this._updateStylesheet(r(e)),this._updateProductHunt(n)}},c=function(t,n){var i=e.matchMedia("(prefers-color-scheme: ".concat(t,")"));i.addListener(function(e){return n(e.matches)}),n(i.matches)},l=t.get("theme"),h={theme:/^(dark|light)$/.test(l)?l:"dark",isLegacy:t.has("legacy")||!n,isStandalone:t.has("standalone")};new e.Vue({el:"#installation",filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},data:{versionOptions:h,preferedColorScheme:null,copyStatus:null},computed:{selectedVersion:function(){return{fileName:r(this.versionOptions),fileSize:(e=this.versionOptions,s[r(e)]||0).toFixed(2),fileSnippet:a(this.versionOptions)};var e}},created:function(){var e=this;c("dark",function(t){return t&&(e.preferedColorScheme="dark")}),c("light",function(t){return t&&(e.preferedColorScheme="light")}),o.init(this.versionOptions,this.preferedColorScheme)},methods:{copyToClipboard:function(){var t=this;Promise.resolve().then(function(){return e.clipboard.writeText(t.selectedVersion.fileSnippet)}).then(function(){return t.copyStatus="success"}).catch(function(){return t.copyStatus="failed"}),setTimeout(function(){return t.copyStatus=null},1e3)}},watch:{preferedColorScheme:function(e){o.update(this.versionOptions,e)},versionOptions:{deep:!0,handler:function(e){o.update(e,this.preferedColorScheme)}}}}),(0,e.faviconModeSwitcher.default)([{element:'link[rel="shortcut icon"]',href:{dark:"./icons/light-favicon.ico"}},{element:'link[rel="icon"][sizes="16x16"]',href:{dark:"./icons/light-favicon-16x16.png"}},{element:'link[rel="icon"][sizes="32x32"]',href:{dark:"./icons/light-favicon-32x32.png"}}]);
//# sourceMappingURL=script.js.map
