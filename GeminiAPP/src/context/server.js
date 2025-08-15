// Filename: get_gemini_models.mjs (or .js)
import { GoogleGenerativeAI } from "@google/generative-ai";

// *** Replace with YOUR ACTUAL, GENERATED API KEY ***
const API_KEY = "AIzaSyDyib4qHahhPekBnikjlKVXU5rudk3OicE";

async function listAvailableModelsAndMethods() {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const { models } = await genAI.listModels();

        console.log("--- Available Models for your API Key ---");
        if (models.length === 0) {
            console.log("No models found. This is highly unusual and indicates a core problem.");
            return;
        }

        let foundGenerateContentModel = false;
        for (const model of models) {
            if (model.supportedGenerationMethods && model.supportedGenerationMethods.includes('generateContent')) {
                foundGenerateContentModel = true;
                console.log(`Model Name: ${model.name}`);
                console.log(`  Description: ${model.description || 'N/A'}`);
                console.log(`  Supported Generation Methods: ${model.supportedGenerationMethods.join(', ')}`);
                console.log('-----------------------------------');
            }
        }

        if (!foundGenerateContentModel) {
            console.log("No models were found that explicitly support 'generateContent'.");
            console.log("This strongly indicates an issue with your API key or project setup.");
        }

    } catch (error) {
        console.error("\n*** ERROR DURING MODEL LISTING ***");
        console.error("Error details:", error);
        if (error.status) {
            console.error(`HTTP Status: ${error.status}`);
        }
        if (error.message) {
            console.error(`Error Message: ${error.message}`);
        }

        if (error.status === 403) {
            console.error("\n*** A 403 (Forbidden) error here means your API key doesn't have permission to access the Generative Language API.");
            console.error("   ACTION: Go to Google Cloud Console (console.cloud.google.com), ensure 'Generative Language API' is ENABLED for your project.");
        }
    }
}

listAvailableModelsAndMethods();