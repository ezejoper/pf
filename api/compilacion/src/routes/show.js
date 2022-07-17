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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const __1 = require("../..");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post("/createRoom", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { types } = req.body;
    try {
        const room = yield prisma.room.create({
            data: types
        });
        res.status(201).json(room);
    }
    catch (e) {
        res.json(e.message);
    }
}));
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shows = yield prisma.show.findMany({ where: { id: undefined } });
        res.send(shows);
    }
    catch (error) {
        res.send(error);
    }
}));
router.get("/one/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieId = req.params.id;
    try {
        const shows = yield prisma.show.findMany({ where: { movieId: movieId } });
        console.log(shows);
        return res.send(shows);
    }
    catch (error) {
        res.send(error.message);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const show = req.body;
    try {
        const data = yield (0, __1.showGenerator)(show);
        const shows = yield prisma.show.createMany({
            data
        });
        res.status(200).send("Lista de shows generada");
    }
    catch (error) {
        res.send(error.message);
    }
}));
exports.default = router;
//# sourceMappingURL=show.js.map