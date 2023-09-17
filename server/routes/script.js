const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
let arr = [];
document.addEventListener('mouseover', (e) => {
    var _a, _b;
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
        isLocationCentered: elementData.width < 200 || elementData.height < 200
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
window.info = info;
export {};
