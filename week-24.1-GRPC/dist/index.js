"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_1 = require("./lib/mongo");
const zod_1 = __importDefault(require("zod"));
const pgdb_1 = require("./lib/pgdb");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
function add(a, b) {
    const c = a + b;
    return c;
}
function multiple(a, b) {
    const c = a * b;
    return c;
}
// jsonrpc
app.get('/rpc', function (req, res) {
    const { jsonrpc, method, params, id } = req.body;
    if (jsonrpc !== '2.0') {
        res.status(400).json({
            mesasge: 'not a valid jsonrpc version'
        });
    }
    switch (method) {
        case "add":
            const result1 = add(params[0], params[1]);
            return res.status(200).json({
                "result": result1
            });
        case "multiple":
            const result = multiple(params[0], params[1]);
            return res.status(200).json({
                "result": result
            });
        default:
            return res.status(400).json({
                "messsage": "not a valid method"
            });
    }
});
app.get('/db', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { postId, id, name, email, body } = req.body;
        try {
            yield (0, mongo_1.dbConnection)();
            yield mongo_1.Comments.create({
                postId, id, name, email, body
            });
            return res.json({
                success: true
            });
        }
        catch (e) {
            console.log('error occured');
            return null;
        }
    });
});
function middle(req, res, next) {
    console.log('control is at middleware');
    next();
}
app.get('/get', middle, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        try {
            yield (0, mongo_1.dbConnection)();
            const user = yield mongo_1.Comments.findOne({
                email
            });
            if (!user) {
                return res.json({ message: "no user with this email" });
            }
            return res.json({
                user
            });
        }
        catch (e) {
            console.log('error occured');
        }
    });
});
app.post('/login', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentionals = yield req.body;
        console.log(req.body);
        const loginSchema = zod_1.default.object({
            email: zod_1.default.string(),
            password: zod_1.default.string().min(8)
        });
        const isValid = loginSchema.safeParse(credentionals);
        console.log(isValid);
        return res.json({ success: true });
    });
});
// POSTgres
app.post('/pg', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, pgdb_1.connectToPgDb)();
        return res.json({
            success: true
        });
    });
});
app.use(function (err, req, res, next) {
    res.send('error occured at global catch');
});
app.listen(PORT, () => console.log(`server is up at ${PORT}`));
