"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express")); //framework for creating the routing for our app
const mongoose_1 = __importDefault(require("mongoose")); //create models for our posts
const cors_1 = __importDefault(require("cors")); // cross origin requests
const createDeck_1 = __importDefault(require("./controller/createDeck"));
const deleteDeck_1 = __importDefault(require("./controller/deleteDeck"));
const getDecks_1 = __importDefault(require("./controller/getDecks"));
const cardsForDeck_1 = __importDefault(require("./controller/cardsForDeck"));
const deleteCard_1 = __importDefault(require("./controller/deleteCard"));
const getCards_1 = __importDefault(require("./controller/getCards"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//middleware function🔽 trebuie sa fie pusa inainte de endpoint-uri. Ce face? de fiecare data cand cineva o sa faca un request catre api, mai intai o sa se apeleze functia asta
app.use(express_1.default.json());
//endpoint pt get 🔽
app.get("/decks", getDecks_1.default);
app.get("/decks/:deckId/cards", getCards_1.default);
//un endpoint pt post deck 🔽
app.post("/decks", createDeck_1.default);
//un endpoint pt adaugat carduri 🔽
app.post("/decks/:deckId/cards", cardsForDeck_1.default);
//endpoint pt stergere 🔽
app.delete("/decks/:deckId", deleteDeck_1.default);
app.delete("/decks/:deckId/cards/:index", deleteCard_1.default);
mongoose_1.default.connect(process.env.MONGO_URL).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
