"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,91];
exports.modules = {

/***/ 8569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/Button.jsx



const variantStyles = {
    primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary: "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};
function Button({ variant ="primary" , className , href , ...props }) {
    className = external_clsx_default()("inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none", variantStyles[variant], className);
    return href ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: className,
        ...props
    });
}

// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(2792);
;// CONCATENATED MODULE: ./src/images/photos/image1.png
/* harmony default export */ const image1 = ({"src":"/_next/static/media/image1.ab4ac766.png","height":3024,"width":4032,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AKmRepJBbkFHh2hfV04aHpmak87NyczLxgDBtJ6lbmVJT2hCW2h6WFinp6DQz8vR0MwAuLSmrZRZo18eeyM7bGtmv7211NTQ1tXRALu6r8CyltqtjLSOgF9qaZ+blNPRzNva1gDDwbO+vrS/xLubqJouWX9XSVLFw7re39sAv72wvbuuysW2mJySL2i7Y1ppw8G43+Hc/59Ws56K2hEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/images/photos/image2.png
/* harmony default export */ const image2 = ({"src":"/_next/static/media/image2.51306c58.png","height":3024,"width":4032,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/ALKvl6WjjZybg4KAaL7AydjZ3ry6wF9bSACtqpSpp5GzsJusp5m/wsne3eSgkpU+PC4AoqSZrq2WsrCbop2MvsXPwLG1fGRnY2ddAKepnLKxm6qqlJGSebrBzM7Q2KyhpIaHeAC5t6GxsJytrJenp5OCg3ufn6ClpKiBgXEAuLaisK+brKuXrayYrayWo6KJODhHQEBWdgtYAWMgUnMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/images/photos/image3.png
/* harmony default export */ const image3 = ({"src":"/_next/static/media/image3.d939ddd4.png","height":3088,"width":2316,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AMGwlq6bfcawjsOuirulg7GZdwCViHDErordxp7dxZ3Pto+/p4EArKWWwquGu6mPq5qFppR9wKiDAMSynMq0j7KjkJKHepuMeM2yiwCol4SnmoCYi3Z0ZVqik3/UuZQAkY6SWl1fgHNgUEI/ZlxRxayKAKedl66gmqGRjRsgIAoAAI16YADQwLinmIxZVFFIQDkmGw9uXkvYf06TP1dM9wAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/image4.png
/* harmony default export */ const image4 = ({"src":"/_next/static/media/image4.6b73134b.png","height":2796,"width":1290,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAcElEQVR42mNgZ2biYmHiZWUW4uJkkOHmluHhleTkFOEVYAABFg4GMSkFATaGTdY2N4JN3lWlv6/JZXhW2vK7o+dBafbnwiKGJ17ONxYt3LNq3sPIeIZpVoEnduw5fWjL0owYhlbLmI6SqoKcpAA1DQDSjyHbodRaDwAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/image5.png
/* harmony default export */ const image5 = ({"src":"/_next/static/media/image5.fb10b5aa.png","height":4032,"width":3024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/ANDJuNnMtaiahhwAAMe8q6KXiAC9r5nVxKuzoYtyZ1u0p5SRhHMAknliwquRrJmCjoJwnpR/r6SQAH9qVo98ZjIgB2deUm1nXXBnWwB1Y1SakorAubJxZ19vXE+Ge24AmnZdenBooJuWhH5zsaWOl457ALKfinRrXzAmH5iMerCjjpOPfQDXx67ayrLHuqeId2eylny3o4361Ez4xEpH8QAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(3997);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "feed"
const external_feed_namespaceObject = require("feed");
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./src/lib/getAllArticles.js
var getAllArticles = __webpack_require__(3622);
;// CONCATENATED MODULE: ./src/lib/generateRssFeed.js





async function generateRssFeed() {
    let articles = await (0,getAllArticles/* getAllArticles */.z)();
    let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    let author = {
        name: "Vanshika Srivastava",
        email: "vanshikasrivastava.business@gmail.com"
    };
    let feed = new external_feed_namespaceObject.Feed({
        title: author.name,
        description: "Your blog description",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`,
            json: `${siteUrl}/rss/feed.json`
        }
    });
    for (let article of articles){
        let url = `${siteUrl}/articles/${article.slug}`;
        let html = server_default().renderToStaticMarkup(/*#__PURE__*/ jsx_runtime_.jsx(article.component, {
            isRssFeed: true
        }));
        feed.addItem({
            title: article.title,
            id: url,
            link: url,
            description: article.description,
            content: html,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(article.date)
        });
    }
    await (0,promises_namespaceObject.mkdir)("./public/rss", {
        recursive: true
    });
    await Promise.all([
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.xml", feed.rss2(), "utf8"),
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.json", feed.json1(), "utf8")
    ]);
}

;// CONCATENATED MODULE: ./src/pages/index.jsx

















function MailIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-teal-100 stroke-teal-400 dark:fill-white-100/10 dark:stroke-white-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6",
                className: "stroke-teal-400 dark:stroke-teal-500"
            })
        ]
    });
}
function BriefcaseIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-teal-100 stroke-teal-400 dark:fill-white-100/10 dark:stroke-white-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5",
                className: "stroke-teal-400 dark:stroke-teal-500"
            })
        ]
    });
}
function ArrowDownIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function Article({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
        as: "article",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Title */.Z.Title, {
                href: `/articles/${article.slug}`,
                children: article.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Eyebrow */.Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                decorate: true,
                children: (0,formatDate/* formatDate */.p)(article.date)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Description */.Z.Description, {
                children: article.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Cta */.Z.Cta, {
                children: "Read article"
            })
        ]
    });
}
function SocialLink({ icon: Icon , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: "group -m-1 p-1",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "h-6 w-6 fill-gray-900 transition group-hover:fill-white-600 dark:fill-gray-400 dark:group-hover:fill-white-800"
        })
    });
}
function Newsletter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "/thank-you",
        className: "rounded-2xl border border-zinc-300 p-6 dark:border-zinc-400/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MailIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3",
                        children: "Stay up to date"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-200",
                children: "Get notified when I publish something new, and unsubscribe at any time."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-6 flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        "aria-label": "Email address",
                        required: true,
                        className: "min-w-0 flex-auto appearance-none rounded-md border border-zinc-300/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-300 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        type: "submit",
                        className: "ml-4 flex-none",
                        children: "Join"
                    })
                ]
            })
        ]
    });
}
function Resume() {
    let resume = [
        {
            company: "Scrib3",
            title: "Content Manager & DevRel for teams",
            // logo: logoPlanetaria,
            start: "2023",
            end: {
                label: "Present",
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: "Biconomy",
            title: "Developer Relations Engineer",
            // logo: logoAirbnb,
            start: "2022",
            end: "2023"
        },
        {
            company: "BoxyHQ - DevSecOps | Security building blocks for Startups",
            title: "Developer Advocate",
            // logo: logoFacebook,
            start: "2022",
            end: "2023"
        },
        {
            company: "WEAVR",
            title: "Product and Community",
            // logo: logoStarbucks,
            start: "2021",
            end: "2022"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl border border-zinc-300 p-7 dark:border-zinc-400/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BriefcaseIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3",
                        children: "Work"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                className: "mt-6 space-y-4",
                children: resume.map((role, roleIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: role.logo,
                                    alt: "",
                                    className: "h-7 w-7",
                                    unoptimized: true
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                className: "flex flex-auto flex-wrap gap-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100",
                                        children: role.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Role"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: role.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                        className: "ml-auto text-xs text-zinc-400 dark:text-zinc-500",
                                        "aria-label": `${role.start.label ?? role.start} until ${role.end.label ?? role.end}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.start.dateTime ?? role.start,
                                                children: role.start.label ?? role.start
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "—"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.end.dateTime ?? role.end,
                                                children: role.end.label ?? role.end
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, roleIndex))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                href: "#",
                className: "group mt-6 w-full",
                children: [
                    "Download CV",
                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowDownIcon, {
                        className: "h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    })
                ]
            })
        ]
    });
}
function Photos() {
    let rotations = [
        "-rotate-3",
        "-rotate-1",
        "rotate-2",
        "-rotate-2",
        "rotate-3"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-16 sm:mt-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 ",
            children: [
                image1,
                image2,
                image3,
                image4,
                image5
            ].map((image, imageIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()("relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border dark:border-white-2", rotations[imageIndex % rotations.length]),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        alt: "",
                        sizes: "(min-width: 640px) 13rem, 11rem",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })
                }, image.src))
        })
    });
}
function Home({ articles  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Vanshika Srivastava - Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Vanshika - commerce student turned into developer and blockchain geek."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-9",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-4xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl",
                            children: "A Developer, Technical Writer and an Open Source Advocate."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "mt-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl",
                            children: "Currently building in Web3 Space."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-10 text-base text-zinc-600 dark:text-gray-200",
                            children: "Hello everyone, I'm Vanshika, a techie with an interest of finance and management. I love the idea of fintech applications and open source which led me to explore the decentralized web tech stack, blockchains and dApps. I had previously worked at Biconomy where I was working around Account Abstraction (ERC4337) as DevRel Engineer. I'm currently learning more around modularity, L2s and ethereum scaling. I enjoy working with developer-first products to build developer content for them and educate the dev community."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-12 flex gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://twitter.com/ThisisVanshika",
                                    "aria-label": "Follow on Twitter",
                                    icon: SocialIcons/* TwitterIcon */.Zm
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://www.linkedin.com/in/vanshika-srivastava/",
                                    "aria-label": "Follow on LinkedIn",
                                    icon: SocialIcons/* LinkedInIcon */.nI
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://github.com/vanshika-srivastava",
                                    "aria-label": "Follow on GitHub",
                                    icon: SocialIcons/* GitHubIcon */.fy
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://www.instagram.com/vanshika.codes/",
                                    "aria-label": "Follow on Instagram",
                                    icon: SocialIcons/* InstagramIcon */.yu
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Photos, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-24 md:mt-28",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col gap-16",
                            children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(Article, {
                                    article: article
                                }, article.slug))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-10 lg:pl-16 xl:pl-24",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Newsletter, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Resume, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps() {
    if (true) {
        await generateRssFeed();
    }
    return {
        props: {
            articles: (await (0,getAllArticles/* getAllArticles */.z)()).slice(0, 4).map(({ component , ...meta })=>meta)
        }
    };
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("fast-glob");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,527,834,840,35], () => (__webpack_exec__(8569)));
module.exports = __webpack_exports__;

})();