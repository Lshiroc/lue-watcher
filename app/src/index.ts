import { Canvas } from './modules/canvas.js';

const winWidth: number = window.innerWidth;
const winHeight: number = window.innerHeight;

const canvas = new Canvas("#myCanvas", true);

let data = [{"xpath":"//*[@id='banner-logo']","width":125.8125,"height":22,"left":71,"top":58.515625,"mouseX":10.703812316715542,"mouseY":8.559201141226819,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[1]/a","width":58.625,"height":71,"left":393.34375,"top":35,"mouseX":29.692082111436953,"mouseY":10.128388017118402,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[2]/a","width":63.375,"height":71,"left":455.359375,"top":35,"mouseX":33.94428152492669,"mouseY":9.985734664764621,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[3]/a","width":73.765625,"height":71,"left":522.125,"top":35,"mouseX":39.516129032258064,"mouseY":10.413694721825962,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[4]/a","width":76.3125,"height":71,"left":599.28125,"top":35,"mouseX":44.28152492668622,"mouseY":11.697574893009985,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[5]/a","width":109.671875,"height":71,"left":678.984375,"top":35,"mouseX":49.70674486803519,"mouseY":11.269614835948644,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[6]/a","width":69.90625,"height":71,"left":792.046875,"top":35,"mouseX":58.28445747800587,"mouseY":10.128388017118402,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='nav-main']/ul/li[7]/a","width":70.546875,"height":71,"left":865.34375,"top":35,"mouseX":63.78299120234604,"mouseY":8.416547788873038,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='header']/div/div/aside/ul/li[1]/a/i","width":8.578125,"height":15,"left":1114.140625,"top":63,"mouseX":81.67155425219941,"mouseY":10.699001426533524,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='header']/div/div/aside/ul/li[2]/a/i","width":19.296875,"height":15,"left":1144.171875,"top":63,"mouseX":83.87096774193549,"mouseY":10.984308131241084,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='header']/div/div/aside/ul/li[3]/a/i","width":13.9375,"height":15,"left":1182.25,"top":63,"mouseX":86.65689149560117,"mouseY":9.557774607703282,"winWidth":1364,"winHeight":701,"isLocationCentered":true,"scroll":0},{"xpath":"//*[@id='gallery']/a[3]/img","width":414.953125,"height":231.921875,"left":880.90625,"top":8.765625,"mouseX":86.87683284457478,"mouseY":13.266761768901569,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600},{"xpath":"//*[@id='gallery']/a[2]/img","width":414.953125,"height":231.921875,"left":465.953125,"top":8.765625,"mouseX":63.56304985337243,"mouseY":24.53637660485021,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600},{"xpath":"//*[@id='gallery']/a[1]/img","width":414.953125,"height":231.921875,"left":51,"top":8.765625,"mouseX":33.577712609970675,"mouseY":23.39514978601997,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600},{"xpath":"//*[@id='gallery']/a[4]/img","width":414.953125,"height":231.921875,"left":51,"top":240.6875,"mouseX":16.862170087976537,"mouseY":35.23537803138373,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600},{"xpath":"//*[@id='gallery']/a[5]/img","width":414.953125,"height":231.921875,"left":465.953125,"top":240.6875,"mouseX":34.60410557184751,"mouseY":52.92439372325249,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600},{"xpath":"//*[@id='gallery']/a[6]/img","width":414.953125,"height":231.921875,"left":880.90625,"top":240.6875,"mouseX":64.51612903225806,"mouseY":49.78601997146933,"winWidth":1364,"winHeight":701,"isLocationCentered":false,"scroll":1600}];
let scrollPoints = [{"scroll":-1,"scrollBegin":1700,"scrollEnd":1700,"x":1181,"y":81}];

canvas.draw(data);
canvas.drawAllScrolls(scrollPoints);

console.log(canvas.info());
