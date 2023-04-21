"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var chapter_slugs_1 = require("./chapters/chapter-slugs");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/api/chapters', function (req, res) {
    res.json(chapter_slugs_1.ChapterSlugs);
});
app.get('/api/chapters/:slug', function (req, res) {
    var chapter = fs_1.default.readFileSync("./chapters/".concat(req.params.slug, ".txt"), 'utf-8');
    var chapterSlug = chapter_slugs_1.ChapterSlugs.find(function (chapter) { return chapter.slug === req.params.slug; });
    res.json({
        title: chapterSlug.title,
        content: chapter,
        slug: chapterSlug.slug
    });
});
var port = 3003;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
