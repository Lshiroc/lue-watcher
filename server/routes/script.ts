type Pattern =  {
    xpath: string,
    width: number,
    height: number,
    left: number,
    top: number,
    mouseX: number,
    mouseY: number,
    winWidth: number,
    winHeight: number,
    isLocationCentered: boolean
}

const winWidth: number = window.innerWidth;
const winHeight: number = window.innerHeight;
let arr: Pattern[] = [];

document.addEventListener('mouseover', (e: MouseEvent): void => {
    const elTarget = e.target as Node;
    const xp = xpath(elTarget);
})

function xpath(el: Element): (string|XPathResult) {
    if (typeof el == "string") return document.evaluate(el, document, null, 0, null);
    if (!el || el.nodeType != 1) return '';
    if (el.id) return "//*[@id='" + el.id + "']";
    var sames = [].filter.call(el.parentNode?.children, function (x: HTMLElement) { return x.tagName == el.tagName });
    return xpath(el.parentNode) + '/' + el.tagName.toLowerCase() + (sames.length > 1 ? '['+([].indexOf.call(sames, el)+1)+']' : '');
}