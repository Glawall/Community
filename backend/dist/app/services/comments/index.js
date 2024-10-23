"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComment = exports.getCommentById = exports.updateComment = exports.createComment = exports.getCommentsByRequestId = void 0;
var getCommentsByRequestId_ts_1 = require("./getCommentsByRequestId.ts");
Object.defineProperty(exports, "getCommentsByRequestId", { enumerable: true, get: function () { return getCommentsByRequestId_ts_1.getCommentsByRequestId; } });
var createComment_1 = require("./createComment");
Object.defineProperty(exports, "createComment", { enumerable: true, get: function () { return createComment_1.createComment; } });
var updateComment_1 = require("./updateComment");
Object.defineProperty(exports, "updateComment", { enumerable: true, get: function () { return updateComment_1.updateComment; } });
var getCommentById_1 = require("./getCommentById");
Object.defineProperty(exports, "getCommentById", { enumerable: true, get: function () { return getCommentById_1.getCommentById; } });
var removeComment_1 = require("./removeComment");
Object.defineProperty(exports, "removeComment", { enumerable: true, get: function () { return removeComment_1.removeComment; } });