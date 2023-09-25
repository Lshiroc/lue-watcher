const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
let isScrolling = false;
let arr = [];
let scrollPoints = [];
document.addEventListener('mouseover', (e) => {
    var _a, _b;
    let currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if ((isScrolling && scrollPoints[scrollPoints.length - 1].scrollBegin != currentScroll) || scrollPoints.length == 0) {
        let newScrollPoint = {
            scroll: -1,
            scrollBegin: currentScroll,
            scrollEnd: -1,
            x: e.clientX,
            y: e.clientY
        };
        scrollPoints.push(newScrollPoint);
        if (arr.length > 0) {
            arr[arr.length - 1].hasScrolled = true;
        }
    }
    ;
    const elTarget = e.target;
    const xp = xpath(elTarget);
    if (arr.length > 0) {
        if ((_a = evaluateXPath(xp)) === null || _a === void 0 ? void 0 : _a.contains(evaluateXPath(arr[arr.length - 1].xpath))) {
            console.log("stopped", arr);
            return false;
        }
        if ((_b = evaluateXPath(arr[arr.length - 1].xpath)) === null || _b === void 0 ? void 0 : _b.contains(evaluateXPath(xp))) {
            console.log("last", arr[arr.length - 1].xpath);
            arr.pop();
        }
    }
    let elementData = elTarget.getBoundingClientRect();
    let newData = {
        xpath: xp,
        width: elementData.width,
        height: elementData.height,
        left: elementData.left,
        top: elementData.top,
        mouseX: (e.clientX / winWidth) * 100,
        mouseY: (e.clientY / winHeight) * 100,
        winWidth,
        winHeight,
        isLocationCentered: elementData.width < 200 || elementData.height < 200,
        scroll: currentScroll,
        hasScrolled: false
    };
    arr.push(newData);
    console.log("added", arr);
    // Convert XPath to Node 
    function evaluateXPath(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
});
function xpath(el) {
    var _a;
    if (typeof el == "string")
        return document.evaluate(el, document, null, 0, null);
    if (!el || el.nodeType != 1)
        return '';
    if (el.id)
        return "//*[@id='" + el.id + "']";
    var sames = [].filter.call((_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.children, function (x) { return x.tagName == el.tagName; });
    return xpath(el.parentElement) + '/' + el.tagName.toLowerCase() + (sames.length > 1 ? '[' + ([].indexOf.call(sames, el) + 1) + ']' : '');
}
function info() {
    console.log(JSON.stringify(arr));
}
function showScrollPoints() {
    console.log(JSON.stringify(scrollPoints));
}
window.info = info;
window.showScrollPoints = showScrollPoints;
// Watching for scroll
document.addEventListener('scroll', (e) => {
    isScrolling = true;
    console.log("scrolling");
});
document.addEventListener('scrollend', (e) => {
    isScrolling = false;
    // if scrollEnd is not noted
    let lastScrollPoint = scrollPoints[scrollPoints.length - 1];
    if ((lastScrollPoint === null || lastScrollPoint === void 0 ? void 0 : lastScrollPoint.scrollEnd) == -1 && scrollPoints.length > 0) {
        scrollPoints[scrollPoints.length - 1].scrollEnd = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log("scroll point end saved");
    }
});
export {};
