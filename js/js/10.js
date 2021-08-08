(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"143f98c2-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/rTool.vue?vue&type=template&id=a8915300&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"143f98c2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/rTool.vue?vue&type=template&id=a8915300& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"section\",\n    { staticClass: \"page-section mt-5\" },\n    [\n      _c(\n        \"b-container\",\n        [\n          _c(\n            \"b-row\",\n            { staticClass: \"text-center\" },\n            [\n              _c(\"b-col\", [\n                _c(\"h2\", { staticClass: \"page-section-heading mt-2\" }, [\n                  _vm._v(\"Ferramentas\")\n                ])\n              ])\n            ],\n            1\n          ),\n          _c(\n            \"b-row\",\n            { staticClass: \"text-center\" },\n            [\n              _c(\"b-col\", [\n                _c(\"div\", { staticClass: \"divider-custom\" }, [\n                  _c(\"div\", { staticClass: \"divider-custom-line\" }),\n                  _c(\"div\", { staticClass: \"divider-custom-icon\" }, [\n                    _c(\"i\", { staticClass: \"fas fa-brain\" })\n                  ]),\n                  _c(\"div\", { staticClass: \"divider-custom-line\" })\n                ])\n              ])\n            ],\n            1\n          ),\n          _c(\"br\"),\n          _c(\"br\"),\n          _c(\"div\", { staticClass: \"b-container\" }, [\n            _c(\"div\", { staticClass: \"jumbotron\" }, [\n              _c(\"h5\", { staticClass: \"text-center text-secondary mt-0\" }, [\n                _vm._v(\"Registar ferramenta\")\n              ]),\n              _c(\"br\"),\n              _c(\n                \"form\",\n                {\n                  staticClass: \"needs-validation\",\n                  attrs: { id: \"registo\", method: \"post\", action: \"/api/tools\" }\n                },\n                [\n                  _c(\n                    \"b-row\",\n                    [\n                      _c(\"b-col\", { attrs: { cols: \"4\" } }),\n                      _c(\"b-col\", { attrs: { cols: \"4\" } }, [\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"id\" } }, [\n                            _vm._v(\"ID\"),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"id\",\n                              type: \"text\",\n                              name: \"id\",\n                              placeholder: \"Introduza o ID da ferramenta\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"designa\" } }, [\n                            _vm._v(\"Designacão\"),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"designacao\",\n                              type: \"text\",\n                              name: \"designacao\",\n                              placeholder:\n                                \"Introduza a designacão da ferramenta\",\n                              maxlenght: \"15\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"area\" } }, [\n                            _vm._v(\"Área da ferramenta (de 1 a 5 de AI4K12) \"),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"area\",\n                              type: \"number\",\n                              name: \"area\",\n                              placeholder:\n                                \"Introduza a área de 1 a 5 da ferramenta\",\n                              min: \"1\",\n                              max: \"5\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"descricao\" } }, [\n                            _vm._v(\"Descrição\"),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"descricao\",\n                              type: \"text\",\n                              name: \"descricao\",\n                              placeholder: \"Introduza a descricao\",\n                              maxlenght: \"25\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"nivel\" } }, [\n                            _vm._v(\n                              'Nível Ensino - 3º Ciclo \"3\" ou Secundário \"4\" '\n                            ),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"nivel\",\n                              type: \"number\",\n                              name: \"nivel\",\n                              placeholder: \"Introduza o Nível Ensino\",\n                              min: \"3\",\n                              max: \"4\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"uriimagem\" } }, [\n                            _vm._v(\"UriImagem\"),\n                            _c(\"span\", { staticClass: \"text-danger\" }, [\n                              _vm._v(\"*\")\n                            ])\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"uriimagem\",\n                              type: \"text\",\n                              name: \"uriimagem\",\n                              placeholder: \"Introduza o uri da Imagem\",\n                              value: \"\",\n                              required: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"urlficheiro\" } }, [\n                            _vm._v(\"UrlFicheiro1\"),\n                            _c(\"span\", { staticClass: \"text-danger\" })\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"urlficheiro1\",\n                              type: \"url\",\n                              name: \"urlficheiro1\",\n                              placeholder: \"Introduza o url do Ficheiro1\",\n                              value: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"urlficheiro\" } }, [\n                            _vm._v(\"UrlFicheiro2\"),\n                            _c(\"span\", { staticClass: \"text-danger\" })\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"urlficheiro2\",\n                              type: \"url\",\n                              name: \"urlficheiro2\",\n                              placeholder: \"Introduza o url do Ficheiro2\",\n                              value: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"urlvideo\" } }, [\n                            _vm._v(\"UrlVídeo\"),\n                            _c(\"span\", { staticClass: \"text-danger\" })\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"urlvideo\",\n                              type: \"url\",\n                              name: \"urlvideo\",\n                              placeholder: \"Introduza o url do Vídeo\",\n                              value: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"urlapontador\" } }, [\n                            _vm._v(\"UrlApontador1\"),\n                            _c(\"span\", { staticClass: \"text-danger\" })\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"urlapontador1\",\n                              type: \"url\",\n                              name: \"urlapontador1\",\n                              placeholder: \"Introduza o url do Apontador1\",\n                              value: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"label\", { attrs: { for: \"urlapontador\" } }, [\n                            _vm._v(\"urlapontador2\"),\n                            _c(\"span\", { staticClass: \"text-danger\" })\n                          ]),\n                          _c(\"input\", {\n                            staticClass: \"form-control\",\n                            attrs: {\n                              id: \"urlapontador2\",\n                              type: \"url\",\n                              name: \"urlapontador2\",\n                              placeholder: \"Introduza o url do Apontador2\",\n                              value: \"\"\n                            }\n                          })\n                        ]),\n                        _c(\"div\", { staticClass: \"form-group\" }, [\n                          _c(\"input\", {\n                            staticClass: \"btn btn-info btn-block\",\n                            attrs: { type: \"submit\", value: \"Registar\" }\n                          })\n                        ])\n                      ])\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ])\n          ])\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/rTool.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22143f98c2-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/rTool.vue":
/*!*****************************!*\
  !*** ./src/views/rTool.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rTool.vue?vue&type=template&id=a8915300& */ \"./src/views/rTool.vue?vue&type=template&id=a8915300&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/rTool.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/rTool.vue?");

/***/ }),

/***/ "./src/views/rTool.vue?vue&type=template&id=a8915300&":
/*!************************************************************!*\
  !*** ./src/views/rTool.vue?vue&type=template&id=a8915300& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_143f98c2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"143f98c2-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./rTool.vue?vue&type=template&id=a8915300& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"143f98c2-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/rTool.vue?vue&type=template&id=a8915300&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_143f98c2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_143f98c2_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rTool_vue_vue_type_template_id_a8915300___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/rTool.vue?");

/***/ })

}]);