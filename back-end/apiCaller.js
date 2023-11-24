const env = require('dotenv');
const OpenAI= require('openai');

env.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function fetchData(time) {
    try {
        const wpqkf = await openai.completions.create({
            model: "text-davinci-003",
            prompt : `${time} 동안 할 일 추천해줘`,
            max_tokens: 42,
            temperature: 0,
        });
        
        console.log(wpqkf.choices[0].text);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  module.exports = {fetchData};