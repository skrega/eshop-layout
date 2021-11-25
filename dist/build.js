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

/***/ "./public/js/CartComponent.js":
/*!************************************!*\
  !*** ./public/js/CartComponent.js ***!
  \************************************/
/***/ (() => {

eval("Vue.component('cart', {\n  data() {\n    return {\n      showCart: false,\n      cartItems: []\n    };\n  },\n\n  methods: {\n    addProduct(product) {\n      let find = this.cartItems.find(el => el.id_product === product.id_product);\n\n      if (find) {\n        this.$parent.putJson(`/api/cart/${product.id_product}/${product.product_name}`, {\n          quantity: 1\n        }).then(data => {\n          if (data.result) {\n            find.quantity++;\n          }\n        });\n      } else {\n        let prod = Object.assign({\n          quantity: 1\n        }, product);\n        this.$parent.postJson(`api/cart/${product.id_product}/${product.product_name}`, prod).then(data => {\n          if (data.result) {\n            this.cartItems.push(prod);\n          }\n        });\n      }\n    },\n\n    remove(product) {\n      if (product.quantity > 1) {\n        this.$parent.putJson(`/api/cart/${product.id_product}/${product.product_name}`, {\n          quantity: -1\n        }).then(data => {\n          if (data.result) {\n            product.quantity--;\n          }\n        });\n      } else {\n        this.$parent.delJson(`/api/cart/${product.id_product}/${product.product_name}`, product).then(data => {\n          if (data.result) {\n            this.cartItems.splice(this.cartItems.indexOf(product), 1);\n          } else {\n            console.log('error');\n          }\n        });\n      }\n    }\n\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/cart`).then(data => {\n      for (let el of data.contents) {\n        el.imgPath = `images/cart/s${el.id_product}.jpg`;\n        this.cartItems.push(el);\n      }\n    });\n  },\n\n  template: `<div>\n                    <button class=\"btn-cart\" type=\"button\" @click='showCart = !showCart'>\n                        <svg width=\"33\" height=\"29\" viewBox=\"0 0 33 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.28559 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z\" fill=\"#E8E8E8\" />\n                        </svg>\n                    </button>\n                <div class=\"header-cart-product\" v-show=\"showCart\">\n                                <p class=\"cart-empty\" v-if=\"!cartItems.length\">В корзине нет товаров</p>\n                                <cart-item \n                                v-for=\"item of cartItems\" \n                                :key=\"item.id_product\"\n                                :cart-item=\"item\"\n                                :img=\"item.imgPath\"\n                                @remove=\"remove\"></cart-item>\n                            </div>\n                </div>`\n});\nVue.component('cart-item', {\n  props: ['cartItem', 'img'],\n  template: `<div class=\"cart cart-item\">\n                    <img class=\"header-cart__img\" :src=\"img\" alt=\"Some image\">\n                    <div class=\"header-cart__content\">\n                        <p class=\"header-cart__heading\">{{cartItem.product_name}}</p>\n                        <p class=\"header-cart__text cart__price\">Количество: <span>{{cartItem.quantity}}</span> </p>\n                        <p class=\"header-cart__text cart__price\">Price: <span>{{cartItem.price}} $</span></p>\n                        <p class=\"header-cart__text cart__price\">Total: <span>{{cartItem.quantity*cartItem.price}} $</span></p>\n                    </div>   \n                <button class=\"cart__del\" @click=\"$emit('remove', cartItem)\"><img src=\"images/close.svg\" alt=\"close\"></button>\n            </div>`\n});\n\n//# sourceURL=webpack://eshop/./public/js/CartComponent.js?");

/***/ }),

/***/ "./public/js/ErrorComponent.js":
/*!*************************************!*\
  !*** ./public/js/ErrorComponent.js ***!
  \*************************************/
/***/ (() => {

eval("Vue.component('error', {\n  data() {\n    return {\n      text: ''\n    };\n  },\n\n  methods: {\n    setText(value) {\n      this.text = value;\n    }\n\n  },\n  template: `<div class=\"error-block\" v-if=\"text\">\n                    <p class=\"error-msg\">\n                    <button class=\"close-btn\" @click=\"setText('')\">&times;</button>\n                    {{text}}\n                    </p>\n                </div>`\n});\n\n//# sourceURL=webpack://eshop/./public/js/ErrorComponent.js?");

/***/ }),

/***/ "./public/js/ProductComponent.js":
/*!***************************************!*\
  !*** ./public/js/ProductComponent.js ***!
  \***************************************/
/***/ (() => {

eval("Vue.component('products', {\n  data() {\n    return {\n      catalogUrl: `/catalogData.json`,\n      products: [],\n      filtered: []\n    };\n  },\n\n  methods: {\n    filter(value) {\n      let regexp = new RegExp(value, 'i');\n      this.filtered = this.products.filter(el => regexp.test(el.product_name));\n    }\n\n  },\n\n  mounted() {\n    this.$parent.getJson(`/api/products`).then(data => {\n      for (let el of data) {\n        el.imgPath = `images/products/${el.id_product}.jpg`;\n        this.products.push(el);\n        this.filtered.push(el);\n      }\n    });\n  },\n\n  template: `<div class=\"product__items\">\n            <product \n            v-for=\"product of filtered\" \n            :key=\"product.id_product\"\n            :product=\"product\"\n            :img=\"product.imgPath\"></product>\n        </div>`\n});\nVue.component('product', {\n  props: ['product', 'img'],\n  template: `<div class=\"product-item product-item_mb\" >\n                <div class=\"product-item__img\">\n                    <img :src=\"img\" :alt=\"product.product_name\">\n                    <button class=\"product-item__btn\" @click=\"$root.$refs.cart.addProduct(product)\">\n                        <svg width=\"25\" height=\"23\" viewBox=\"0 0 33 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.28559 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z\" fill=\"#ffffff\"></path>\n                        </svg>\n                        Купить\n                    </button>\n                </div>\n                \n                <div class=\"product-item__content\">\n                    <div class=\"product-item__title\">{{ product.product_name }}</div>\n                    <div class=\"product-item__text\">\n                        Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery\n                        teams\n                        up with Moda Operandi.\n                    </div>\n                    <div class=\"product-item__price\"><p>{{ product.price }} $</p></div>\n                    \n                </div>\n            </div>`\n});\n\n//# sourceURL=webpack://eshop/./public/js/ProductComponent.js?");

/***/ }),

/***/ "./public/js/SearchComponent.js":
/*!**************************************!*\
  !*** ./public/js/SearchComponent.js ***!
  \**************************************/
/***/ (() => {

eval("Vue.component('search-form', {\n  data() {\n    return {\n      showSearch: false,\n      userSearch: ''\n    };\n  },\n\n  template: `<form action=\"#\" class=\"header__search search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" class=\"search-field\" v-model=\"userSearch\" v-show=\"showSearch\">\n                <button type=\"submit\" class=\"btn-search\" @click=\"showSearch = !showSearch\">\n                <img src=\"../images/search.svg\" alt=\"search\">\n                </button>\n            </form>`\n});\n\n//# sourceURL=webpack://eshop/./public/js/SearchComponent.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

eval("const app = new Vue({\n  el: '#app',\n  methods: {\n    getJson(url) {\n      return fetch(url).then(result => result.json()).catch(error => this.$refs.error.setText(error));\n    },\n\n    postJson(url, data) {\n      return fetch(url, {\n        method: 'POST',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => this.$refs.error.setText(error));\n    },\n\n    putJson(url, data) {\n      return fetch(url, {\n        method: 'PUT',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => this.$refs.error.setText(error));\n    },\n\n    delJson(url, data) {\n      return fetch(url, {\n        method: 'DELETE',\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(result => result.json()).catch(error => this.$refs.error.setText(error));\n    }\n\n  }\n});\n\n//# sourceURL=webpack://eshop/./public/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./public/js/main.js"]();
/******/ 	__webpack_modules__["./public/js/CartComponent.js"]();
/******/ 	__webpack_modules__["./public/js/ErrorComponent.js"]();
/******/ 	__webpack_modules__["./public/js/SearchComponent.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/ProductComponent.js"]();
/******/ 	
/******/ })()
;