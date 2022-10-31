"use strict";
/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launch = exports.executablePath = exports.defaultArgs = exports.createBrowserFetcher = exports.connect = void 0;
__exportStar(require("puppeteer-core/internal/common/Device.js"), exports);
__exportStar(require("puppeteer-core/internal/common/Errors.js"), exports);
__exportStar(require("puppeteer-core/internal/common/PredefinedNetworkConditions.js"), exports);
__exportStar(require("puppeteer-core/internal/common/Puppeteer.js"), exports);
/**
 * @deprecated Use the query handler API defined on {@link Puppeteer}
 */
__exportStar(require("puppeteer-core/internal/common/QueryHandler.js"), exports);
__exportStar(require("puppeteer-core/internal/node/BrowserFetcher.js"), exports);
const PuppeteerNode_js_1 = require("puppeteer-core/internal/node/PuppeteerNode.js");
const getConfiguration_js_1 = require("./getConfiguration.js");
const configuration = (0, getConfiguration_js_1.getConfiguration)();

/**
 * @public
 */
const puppeteer = new PuppeteerNode_js_1.PuppeteerNode({
    isPuppeteerCore: false,
    configuration,
});

exports.connect = puppeteer.connect, exports.createBrowserFetcher = puppeteer.createBrowserFetcher, exports.defaultArgs = puppeteer.defaultArgs, exports.executablePath = puppeteer.executablePath, exports.launch = puppeteer.launch, exports.downloadbrowser = puppeteer.downloadbrowser;
exports.default = puppeteer;
//# sourceMappingURL=puppeteer.js.map