/*const allButtons = document.body.querySelectorAll('button');

allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('Clicked to the button!', e.target.innerText);
  })
})

let userAgent = navigator.userAgent;
let browser;
if(window.navigator?.brave != null || window.navigator?.brave?.isBrave?.name == 'isBrave') {
  browser = "Brave";
} else if(userAgent.match(/firefox|fxios/i)) {
  browser = "FireFox";
} else if(userAgent.match(/opr\//i)) {
  browser = "Opera";
} else if(userAgent.match(/edg/i)) {
  browser = "Edge";
} else if(userAgent.match(/chrome|chromium|crios/i)) {
  browser = "Chrome";
} else if(userAgent.match(/safari/i)) {
  browser = "Safari";
} else {
  browser = "Couldn't detect";
}

console.log(browser);*/

// other tests

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
let arr = [];

document.addEventListener("mouseover", (e) => {
  const xp = xpath(e.target);
  console.log(xp);

  const evaluateXPath = (xpath) => {
    return document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  }

  if(arr.length > 0) {
    if(evaluateXPath(xp).contains(evaluateXPath(arr[arr.length - 1].xpath))) {
      console.log("stopped", arr);
      return false;
    }
    if(evaluateXPath(arr[arr.length - 1].xpath).contains(evaluateXPath(xp))) {
      console.log("last", arr[arr.length - 1].xpath);
      arr.pop();
    }
  }

  let elementData = e.target.getBoundingClientRect();
  let newData = {
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
  };

  
  arr.push(newData);
  console.log("added", arr);
})

function xpath(el) {
  if (typeof el == "string") return document.evaluate(el, document, null, 0, null)
  if (!el || el.nodeType != 1) return ''
  if (el.id) return "//*[@id='" + el.id + "']"
  var sames = [].filter.call(el.parentNode.children, function (x) { return x.tagName == el.tagName })
  return xpath(el.parentNode) + '/' + el.tagName.toLowerCase() + (sames.length > 1 ? '['+([].indexOf.call(sames, el)+1)+']' : '')
}
