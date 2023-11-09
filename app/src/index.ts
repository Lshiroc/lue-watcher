import { Canvas } from './modules/canvas.js';

const winWidth: number = window.innerWidth;
const winHeight: number = window.innerHeight;

const canvas = new Canvas("#myCanvas", true);

let data = [{"xpath":"//*[@id='header']/div/div/aside/ul/li[4]/a/i","width":12.862500190734863,"height":15,"left":986.375,"top":63.60000228881836,"mouseX":89.87226277372264,"mouseY":7.5650118203309695,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='header']/div/div/aside/ul/li[3]/a","width":32,"height":17.600000381469727,"left":941.4249877929688,"top":62,"mouseX":88.6861313868613,"mouseY":8.865248226950355,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul","width":1009.2000122070312,"height":71,"left":35,"top":35,"mouseX":87.86496350364963,"mouseY":9.456264775413711,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='header']/div/div/aside/ul/li[1]/a","width":32,"height":17.600000381469727,"left":870.6500244140625,"top":62,"mouseX":81.02189781021897,"mouseY":9.33806146572104,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[7]/a","width":70.5374984741211,"height":71,"left":731.4375,"top":35,"mouseX":72.99270072992701,"mouseY":8.628841607565011,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[6]/a","width":69.9124984741211,"height":71,"left":658.1375122070312,"top":35,"mouseX":66.05839416058394,"mouseY":8.983451536643026,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[5]/a","width":109.6624984741211,"height":71,"left":545.0875244140625,"top":35,"mouseX":59.306569343065696,"mouseY":8.628841607565011,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[4]/a","width":76.30000305175781,"height":71,"left":465.3999938964844,"top":35,"mouseX":49.17883211678832,"mouseY":7.5650118203309695,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[3]/a","width":73.76250457763672,"height":71,"left":388.25,"top":35,"mouseX":41.97080291970803,"mouseY":8.156028368794328,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='nav-main']/ul/li[2]/a","width":63.375,"height":71,"left":321.4875183105469,"top":35,"mouseX":34.85401459854015,"mouseY":11.229314420803782,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='banner-content']/div/div/h1","width":360.7875061035156,"height":338.0375061035156,"left":35,"top":240,"mouseX":24.543795620437955,"mouseY":28.959810874704488,"winWidth":1096,"winHeight":846,"isLocationCentered":false,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='banner-content']/div/div/h2","width":360.7875061035156,"height":162.1999969482422,"left":35,"top":578.0375366210938,"mouseX":25.821167883211675,"mouseY":68.32151300236407,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":0,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[4]/div[2]/p","width":289.6875,"height":75,"left":404.6875,"top":562.9746704101562,"mouseX":60.94890510948905,"mouseY":75.29550827423168,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[4]/div[2]/h4","width":289.6875,"height":31.80000114440918,"left":404.6875,"top":520.7157592773438,"mouseX":51.73357664233576,"mouseY":64.77541371158392,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[4]/div[1]","width":289.6875,"height":30,"left":404.6875,"top":464.3634338378906,"mouseX":48.63138686131387,"mouseY":56.973995271867615,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[1]/div[2]/p","width":289.6875,"height":100,"left":404.6875,"top":116.23750305175781,"mouseX":44.61678832116788,"mouseY":25.413711583924346,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[2]/div[2]/p","width":289.6875,"height":75,"left":734.375,"top":116.23750305175781,"mouseX":67.06204379562044,"mouseY":17.84869976359338,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[3]/div[1]","width":289.6875,"height":30,"left":734.375,"top":246.2375030517578,"mouseX":78.74087591240875,"mouseY":29.196217494089833,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[3]/div[2]/h4","width":289.6875,"height":31.80000114440918,"left":734.375,"top":301.2375183105469,"mouseX":80.56569343065694,"mouseY":35.69739952718676,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false},{"xpath":"//*[@id='about']/div/div[2]/div[3]/div[2]/p","width":289.6875,"height":75,"left":734.375,"top":333.0375061035156,"mouseX":80.93065693430657,"mouseY":39.59810874704492,"winWidth":1096,"winHeight":846,"isLocationCentered":true,"scroll":1079.199951171875,"hasScrolled":false}];
// let scrollPoints = [{"scroll":-1,"scrollBegin":0.800000011920929,"scrollEnd":625.5999755859375,"x":1113,"y":0}];

canvas.addData(data);
canvas.draw();
// canvas.drawAllScrolls(scrollPoints);

console.log(canvas.info());
