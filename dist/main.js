/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./SRC/JS/index.js":
/*!*************************!*\
  !*** ./SRC/JS/index.js ***!
  \*************************/
/***/ (() => {

eval("let arrNews= [];\r\nconst afterLoadingNews = async() =>{\r\n    try{\r\nlet idsResponse = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')\r\narrNews = _.get(idsResponse, [\"data\"]);  }catch(errors){alert(errors)}\r\n\r\n        for (let i = 0; i < 10; i++) {\r\n            try{\r\n            let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrNews[i]}.json`);\r\n         //   const news = _.get(response, [\"data\",\"title\"]);\r\n                    let card = document.createElement(\"div\");\r\n                    card.className = \"card bg-dark text-light text-center border-bottom-light m-1 mx-auto w-75\";\r\n                    document.getElementById(\"elenco-news\").appendChild(card);\r\n                    let cardBody = document.createElement(\"div\");\r\n                    cardBody.className = \"card-body\";\r\n                    card.appendChild(cardBody);\r\n\r\n                    let p = document.createElement(\"p\");\r\n                    p.className = \"class-text text-info\";\r\n                    let unixTimestamp = _.get(response, [\"data\",\"time\"]);\r\n                    var date = new Date(unixTimestamp * 1000);\r\n\r\n                    let t = document.createTextNode(date.getDate() +\r\n                        \"/\" + (date.getMonth() + 1) +\r\n                        \"/\" + date.getFullYear() +\r\n                        \" \" + date.getHours() +\r\n                        (date.getMinutes()<10 ? \r\n                        \":0\" + date.getMinutes() : \":\"+ date.getMinutes()) +\r\n                        (date.getSeconds()<10 ?\r\n                        \":0\" + date.getSeconds() : \":\"+date.getSeconds()));\r\n                    p.appendChild(t);\r\n                    cardBody.appendChild(p);\r\n\r\n                    let h5 = document.createElement(\"h5\");\r\n                    h5.className = \"card-title m-3\";\r\n                    let tH = document.createTextNode(_.get(response, [\"data\",\"title\"]));\r\n                    h5.appendChild(tH);\r\n                    cardBody.appendChild(h5);\r\n\r\n\r\n                    let a = document.createElement(\"a\");\r\n                    a.className = \"btn btn-warning text-dark\";\r\n                    a.href = _.get(response, [\"data\",\"url\"]);\r\n                    let tA = document.createTextNode(\"Vai alla news\");\r\n                    a.appendChild(tA);\r\n                    cardBody.appendChild(a);\r\n                    //console.log(data.url),\r\n\r\n                    if ((_.get(response, [\"data\",\"title\"]) == \"\") || (_.get(response, [\"data\",\"url\"] == \"\"))) {\r\n                        document.getElementById(\"elenco-news\").removeChild(card);\r\n                    }\r\n\r\n                    \r\n                }\r\n                \r\n            catch(errors){alert(errors);}\r\n        }\r\n        console.log(numeroNews);\r\n    }\r\n    afterLoadingNews();\r\n\r\n\r\nconst loadMore = document.getElementById('load-more');\r\nlet numeroNews = 10;\r\nloadMore.addEventListener('click',  async ()=>{\r\n\r\n    for (let i = numeroNews; i < numeroNews + 10; i++) {\r\n        try{\r\n        let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrNews[i]}.json`);\r\n    \r\n                let card = document.createElement(\"div\");\r\n                card.className = \"card bg-dark text-light text-center border-bottom-light m-1 mx-auto w-75\";\r\n                document.getElementById(\"elenco-news\").appendChild(card);\r\n                let cardBody = document.createElement(\"div\");\r\n                cardBody.className = \"card-body\";\r\n                card.appendChild(cardBody);\r\n\r\n                let p = document.createElement(\"p\");\r\n                p.className = \"class-text text-info\";\r\n\r\n\r\n\r\n                let unixTimestamp = _.get(response, [\"data\",\"time\"]);\r\n                var date = new Date(unixTimestamp * 1000);\r\n\r\n                let t = document.createTextNode(date.getDate() +\r\n                        \"/\" + (date.getMonth() + 1) +\r\n                        \"/\" + date.getFullYear() +\r\n                        \" \" + date.getHours() +\r\n                        (date.getMinutes()<10 ? \r\n                        \":0\" + date.getMinutes() : \":\"+ date.getMinutes()) +\r\n                        (date.getSeconds()<10 ?\r\n                        \":0\" + date.getSeconds() : \":\"+date.getSeconds()));\r\n                    p.appendChild(t);\r\n                    cardBody.appendChild(p);\r\n\r\n                let h5 = document.createElement(\"h5\");\r\n                h5.className = \"card-title m-3\";\r\n                let tH = document.createTextNode(_.get(response, [\"data\",\"title\"]))\r\n                h5.appendChild(tH);\r\n                cardBody.appendChild(h5);\r\n\r\n                let a = document.createElement(\"a\");\r\n                a.className = \"btn btn-warning text-dark\";\r\n                a.href = _.get(response, [\"data\",\"url\"]);\r\n                let tA = document.createTextNode(\"Vai alla news\");\r\n                a.appendChild(tA);\r\n                cardBody.appendChild(a);\r\n\r\n                if ((_.get(response, [\"data\",\"title\"]) == \"\") || (_.get(response, [\"data\",\"url\"] == \"\"))) {\r\n                    document.getElementById(\"elenco-news\").removeChild(card);\r\n                }\r\n            }catch(errors){alert(errors);}\r\n        \r\n    }\r\n    numeroNews += 10;\r\n    console.log(numeroNews);\r\n}\r\n\r\n);\n\n//# sourceURL=webpack://javascript-advanced-project/./SRC/JS/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./SRC/JS/index.js"]();
/******/ 	
/******/ })()
;