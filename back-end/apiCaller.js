const openAI = require('openai');

function callOpenAI(){
    const openai = new openAI({apiKey : "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"});

    return openai.chat.completions.create({
        messages: [{ role: "user", content: "Say this is a test" }],
        model: "gpt-3.5-turbo",
    });
}

module.exports = {callOpenAI};