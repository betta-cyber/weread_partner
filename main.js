// ==UserScript==
// @name         微信阅读伙伴
// @namespace    https://github.com/betta-cyber
// @version      0.1
// @description  try to take over the world!
// @author       betta-cyber
// @match        https://weread.qq.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @grant        none
// @run-at       document-end
// @license MIT
// ==/UserScript==

(function() {
    ("use strict");

    /* globals jQuery, $, waitForKeyElements */

    let windowTop = 0;
    console.log($);
    $(window).scroll(() => {
        const scrollS = $(this).scrollTop();
        if (scrollS >= windowTop + 120) {
            $(".readerTopBar").fadeOut();
            windowTop = scrollS;
        }
        else if (scrollS < windowTop) {
            $(".readerTopBar").fadeIn();
            windowTop = scrollS;
        }
    });

    var css = [
    ".readerContent {",
	"    max-width: 100% !important;",
	"}",
    ".app_content  {",
	"    max-width: 100% !important;",
	"}",
	".readerTopBar {",
	"    max-width: 100%;",
	"}",
    ".readerControls {",
	"    left: 95%;",
    "    margin-left: 0",
	"}",
    ".reader_pdf_outline {",
	"    right: 0;",
    "    left: unset;",
	"}",
    ".readerNotePanel {",
	"    right: 0;",
    "    left: unset;",
	"}",
    ".readerCatalog {",
	"    right: 0;",
    "    left: unset;",
	"}",
    ].join("\n");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
        }
    }
})();
