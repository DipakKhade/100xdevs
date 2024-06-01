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
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const zod_1 = require("zod");
const standalone_1 = require("@trpc/server/adapters/standalone");
const todoTypes = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
const appRouter = (0, trpc_1.router)({
    //precedures
    createTodo: trpc_1.publicProcedure
        .input(todoTypes)
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('control is here');
        const title = opts.input.title;
        const desc = opts.input.description;
        //to database calls here
        return {
            id: "1"
        };
    }))
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
});
server.listen(3000);
