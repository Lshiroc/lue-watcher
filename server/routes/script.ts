type Pattern =  {
    xpath: string|XPathResult,
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

document.addEventListener('mouseover', (e: MouseEvent): boolean|void => {
    const elTarget = e.target as HTMLElement;
    const xp = xpath(elTarget);

    if(arr.length > 0) {
        if(evaluateXPath(xp as string)?.contains(evaluateXPath(arr[arr.length - 1].xpath))) {
            console.log("stopped", arr);
            return false;
        }
        if(evaluateXPath(arr[arr.length - 1].xpath)?.contains(evaluateXPath(xp))) {
            console.log("last", arr[arr.length - 1].xpath);
            arr.pop();
        }
    }

    let elementData = elTarget.getBoundingClientRect();
    let newData: Pattern = {
        xpath: xp,
        width: elementData.width,
        height: elementData.height,
        left: elementData.left,
        top: elementData.top,
        mouseX: (e.clientX/winWidth)*100,
        mouseY: (e.clientY/winHeight)*100,
        winWidth,
        winHeight,
        isLocationCentered: elementData.width < 200 || elementData.height < 200
    }

    arr.push(newData);
    console.log("added", arr);

    // Convert XPath to Node 
    function evaluateXPath(xpath: string|XPathResult): (Node|null) {
        return document.evaluate(
            xpath as string,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
    }
})

function xpath(el: HTMLElement|null): (string|XPathResult) {
    if (typeof el == "string") return document.evaluate(el, document, null, 0, null);
    if (!el || el.nodeType != 1) return '';
    if (el.id) return "//*[@id='" + el.id + "']";
    var sames = [].filter.call(el.parentNode?.children, function (x: HTMLElement) { return x.tagName == el.tagName });
    return xpath(el.parentElement) + '/' + el.tagName.toLowerCase() + (sames.length > 1 ? '['+([].indexOf.call(sames, el as never)+1)+']' : '');
}

function info() {
    console.log(JSON.stringify(arr));
}

(window as any).info = info;