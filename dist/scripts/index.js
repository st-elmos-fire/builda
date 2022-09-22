"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch = exports.updateModule = exports.publishModule = exports.init = exports.generateIndexes = exports.generateCommands = exports.buildFromPrefabs = exports.buildFromBlueprint = exports.installCommand = exports.install = exports.executeCommand = exports.execute = exports.generateProjectCommand = exports.project = void 0;
var project_1 = require("./project");
Object.defineProperty(exports, "project", { enumerable: true, get: function () { return project_1.project; } });
Object.defineProperty(exports, "generateProjectCommand", { enumerable: true, get: function () { return project_1.command; } });
var execute_1 = require("./execute");
Object.defineProperty(exports, "execute", { enumerable: true, get: function () { return execute_1.execute; } });
Object.defineProperty(exports, "executeCommand", { enumerable: true, get: function () { return execute_1.command; } });
var install_1 = require("./install");
Object.defineProperty(exports, "install", { enumerable: true, get: function () { return install_1.install; } });
Object.defineProperty(exports, "installCommand", { enumerable: true, get: function () { return install_1.command; } });
// Legacy code
const build_from_blueprint_1 = __importDefault(require("./build-from-blueprint"));
exports.buildFromBlueprint = build_from_blueprint_1.default;
const build_from_prefabs_1 = __importDefault(require("./build-from-prefabs"));
exports.buildFromPrefabs = build_from_prefabs_1.default;
const generate_commands_1 = __importDefault(require("./generate-commands"));
exports.generateCommands = generate_commands_1.default;
const generate_indexes_1 = __importDefault(require("./generate-indexes"));
exports.generateIndexes = generate_indexes_1.default;
const init_1 = __importDefault(require("./init"));
exports.init = init_1.default;
const publish_module_1 = __importDefault(require("./publish-module"));
exports.publishModule = publish_module_1.default;
const update_module_1 = __importDefault(require("./update-module"));
exports.updateModule = update_module_1.default;
const watch_1 = __importDefault(require("./watch"));
exports.watch = watch_1.default;
