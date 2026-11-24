import "dotenv/config";

import {GoogleGenAI} from "@google/genai";

export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const model = "gemini-3.8-flash"

console.log("Gemini AI SDK initialized successfully!");

console.log(ai);

console.log("Model is configured as:", model);