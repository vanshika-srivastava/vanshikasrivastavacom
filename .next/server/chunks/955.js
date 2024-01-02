"use strict";
exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 9955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "meta": () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var _components_ArticleLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 


const meta = {
    author: "Vanshika Srivastava",
    date: "2023-08-21",
    title: "Brief Understanding to Ethereum Scaling and ‘Optimistic’ Rollups",
    description: "Team Layer1 or Layer2, you decide in the end of this blog!"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_2__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        img: "img",
        h3: "h3",
        h2: "h2",
        ul: "ul",
        li: "li"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                    src: "https://images.mirror-media.xyz/publication-images/hPVXzz6ndcgvZb6NWWeyj.png?height=1000&width=2000",
                    alt: "upscaled"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Introduction"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For the longest time, we have been fighting around Blockchain Trilemma of Decentralization, Security and Scalability. Ethereum no doubt is extremely popular in industry and is the base blockchain. Various L2s operate over Ethereum, allowing the transactions on L2 to ultimately be as secure as L1 transaction. But the question arises, why did we need L2s at first place ?\nEthereum which is L1 can roughly process less than 20 TPS, now when this demand is high, the network becomes congested, gas fees are sky-rocketing and users HATE, HATE, HATE paying such high gas fees."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                    src: "https://cdn.geeksandgamers.com/wp-content/uploads/hm_bbpui/295244/0qii5i869k4tcd75aj7yreju9edenls8.jpg",
                    alt: "upscaled"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Let’s say I give you a different layer which sits on top of your Layer1 Ethereum, we are going to use this new layer for scaling the transactions without hurting the sentiments of decentralisation and security and reducing the gas fees cost. That’s L2 for you."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Let’s see how ‘Rollups’ work in scaling ethereum :"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                    src: "",
                    alt: "upscaled"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In the above flow, you can easily see that there are multiple transactions ‘bundled’ in ‘roll-up’. Rolled up transactions get executed on off chain which reduce is overall computation time, speed and cost and making it more easy for dApps to submit the ‘secured’ transaction data, also known as calldata on L1 finally."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There are two different types of Rollups -"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Optimistic Rollups"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "ZK-Proof Rollups"
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We will just discuss Optimistic Rollups in this blog. Optimistic Rollups increases the throughput of Ethereum’s Base Layer by reducing computation on-chain (or onchain)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now, you must be thinking if transaction is computed offchain, how does one verify the transaction data submitted by L2 to L1 ? Your answer is Fraud Proof. As the term suggests, fraud proofs are nothing but allow verification of transactions. The way Optimistic Rollups work is by being ‘OPTIMISTIC’ because they assume that transactions are valid and there is no proof of validity which goes on-chain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Let me simplify the process of using a Fraud Proof mechanism. Let’s say that 100 students are giving examination and I have prepared an aggregated score card for all the scores - bundled in a rollup sheet. Now, I would like to take help of a committee to re-verify the performance for publish purpose. The committee has a timeline of a week which you can refer as ‘challenge-period’. The committee will consider my set of results to be valid but at the same time if they suspect a score which looks ‘fraudulent’ they can challenge me, and run a proof against it to check if there are actual discrepancies or not. If my decision remains unchallenged, it passes for final publish and is accepted ‘truthful’."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "My takeaways from Optimistic Rollups :"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Transaction data from the rollups is stored on L1 itself. Sequencers are mostly centralised as of now, although Optimism Foundation is working on decentralised sequencer which would help the economical as well as governance mechanism within the ecosystem."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Fraud proving mechanism is helpful to chart out the finalities with ‘honesty’ and secures the chain."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Optimistic rollups are very compatible with Solidity and other EVM chains which is really helpful to smart contract developers to use the existing contracts and map them to rollups or create new dApps."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;