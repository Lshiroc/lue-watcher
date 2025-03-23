// import LUE, { Track } from 'lue-watcher';
// const { LUE,  } = require("lue-watcher");
import LUE from 'lue-watcher';
const lue = new LUE();
lue.connect('ws://localhost:8000/ws/test/');
lue.listen();
console.log("set7 up");
