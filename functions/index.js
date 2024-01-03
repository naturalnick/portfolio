/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onCall} = require("firebase-functions/v2/https");
const {OpenAI} = require("openai");

exports.callGPT = onCall(async (req) => {
  try {
    const prompt = req.body.prompt;
    console.log("prompt", prompt);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log("key:", process.env.OPENAI_API_KEY);

    const chatCompletion = await openai.chat.completions.create({
      messages: [{role: "user", content: prompt}],
      model: "gpt-3.5-turbo",
    });

    return chatCompletion;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
});
