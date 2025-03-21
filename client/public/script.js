"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lue_watcher_1 = require("lue-watcher");
var lue = new lue_watcher_1.default();
lue.connect("ws://localhost:8000/ws/test/");
lue.listen();
