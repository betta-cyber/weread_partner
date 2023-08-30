// ==UserScript==
// @name         微信阅读伙伴
// @namespace    betta-cyber - Overview
// @version      0.1
// @description  微信阅读好伙伴
// @author       betta-cyber
// @match        https://weread.qq.com/*
// @icon         https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_32h.png
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-start
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
        "    max-width: 100% !important;",
        "}",
        ".readerControls {",
        "    left: 95% !important;;",
        "    margin-left: 0 !important;",
        "}",
        ".reader_pdf_outline {",
        "    right: 0 !important;",
        "    left: unset !important;",
        "}",
        ".readerNotePanel {",
        "    right: 0 !important;",
        "    left: unset !important;",
        "}",
        ".readerCatalog {",
        "    right: 0 !important;",
        "    left: unset !important;",
        "}",
        // 调整字体
        "*{font-family: LXGWWenKai, SourceHanSerifCN-Medium, Kaiti, STKaiti, FangSong, SimSun; !important;}",
        ".readerTopBar_title {font-family: LXGWWenKai,SourceHanSerifCN-Bold; !important; font-weight:bold !important;}",
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
