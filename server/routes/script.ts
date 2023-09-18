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
    isLocationCentered: boolean,
    scroll: number
}

type Scroll = {
    scroll: number,
    scrollBegin: number,
    scrollEnd: number,
    x: number,
    y: number
}

const winWidth: number = window.innerWidth;
const winHeight: number = window.innerHeight;
let isScrolling = false;
let arr: Pattern[] = [];
let scrollPoints: Scroll[] = [];

document.addEventListener('mouseover', (e: MouseEvent): boolean|void => {
    let currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if((isScrolling && scrollPoints[scrollPoints.length - 1].scrollBegin != currentScroll) || scrollPoints.length == 0) {
        let newScrollPoint = {
            scroll: -1,
            scrollBegin: currentScroll,
            scrollEnd: -1,
            x: e.clientX,
            y: e.clientY
        }
        scrollPoints.push(newScrollPoint);
    };
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
        isLocationCentered: elementData.width < 200 || elementData.height < 200,
        scroll: currentScroll
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

function showScrollPoints() {
    console.log(JSON.stringify(scrollPoints));
}

(window as any).info = info;
(window as any).showScrollPoints = showScrollPoints;

// Watching for scroll
document.addEventListener('scroll', (e) => {
    isScrolling = true;
    console.log("scrolling");
})

document.addEventListener('scrollend', (e) => {
    isScrolling = false;
    
    // if scrollEnd is not noted
    let lastScrollPoint = scrollPoints[scrollPoints.length - 1];
    if(lastScrollPoint.scrollEnd == -1 && scrollPoints.length > 0) {
        scrollPoints[scrollPoints.length - 1].scrollEnd = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log("scroll point end saved");
    }
})