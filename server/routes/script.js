const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
let arr = [];
document.addEventListener('mouseover', (e) => {
    const elTarget = e.target;
    const xp = xpath(elTarget);
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
    return xpath(el.parentNode) + '/' + el.tagName.toLowerCase() + (sames.length > 1 ? '[' + ([].indexOf.call(sames, el) + 1) + ']' : '');
}
export {};
