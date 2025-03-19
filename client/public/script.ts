import { LUE } from 'lue-watcher';

const lue = new LUE();

lue.connect("ws://localhost:8000/ws/test/");
lue.listen();
