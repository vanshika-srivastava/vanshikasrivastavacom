exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 3997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ }),

/***/ 3622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getAllArticles)
/* harmony export */ });
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2479);
/* harmony import */ var fast_glob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_glob__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function importArticle(articleFilename) {
    let { meta , default: component  } = await __webpack_require__(3452)(`./${articleFilename}`);
    return {
        slug: articleFilename.replace(/(\/index)?\.mdx$/, ""),
        ...meta,
        component
    };
}
async function getAllArticles() {
    let articleFilenames = await fast_glob__WEBPACK_IMPORTED_MODULE_0___default()([
        "*.mdx",
        "*/index.mdx"
    ], {
        cwd: path__WEBPACK_IMPORTED_MODULE_1__.join(process.cwd(), "src/pages/articles")
    });
    let articles = await Promise.all(articleFilenames.map(importArticle));
    return articles.sort((a, z)=>new Date(z.date) - new Date(a.date));
}


/***/ }),

/***/ 3452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": [
		9634,
		659,
		634
	],
	"./deep-learning-to-enhance-video-games/images/Screenshot 2024-01-02 at 5.32.12 PM.png": [
		2350,
		350
	],
	"./deep-learning-to-enhance-video-games/index.mdx": [
		9955,
		638,
		955
	],
	"./how-did-I-ended-up-in-Tech/images/blocks.jpg": [
		4790,
		790
	],
	"./how-did-I-ended-up-in-Tech/images/genisis.png": [
		4260,
		260
	],
	"./how-did-I-ended-up-in-Tech/images/hashes.jpg": [
		3324,
		324
	],
	"./how-did-I-ended-up-in-Tech/images/tamper.jpg": [
		8622,
		622
	],
	"./how-did-I-ended-up-in-Tech/images/valid.jpg": [
		1131,
		131
	],
	"./how-did-I-ended-up-in-Tech/index.mdx": [
		2208,
		638,
		208
	],
	"./index": [
		9634,
		659,
		634
	],
	"./index.jsx": [
		9634,
		659,
		634
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3452;
module.exports = webpackAsyncContext;

/***/ })

};
;