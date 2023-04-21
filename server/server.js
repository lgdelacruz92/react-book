"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/api/chapters', function (req, res) {
    var chapters = [
        { id: 1, title: 'Chapter 1' },
        { id: 2, title: 'Chapter 2' },
        { id: 3, title: 'Chapter 3' },
    ];
    res.json(chapters);
});
app.listen(3003, function () {
    console.log('Server listening on port 3000');
});
