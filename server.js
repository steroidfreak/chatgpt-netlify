import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a pokemon guru and know well about pokemon world." },
        {
            role: "user",
            content: "Who is poochyena? make the response less than 50 words",

            // role: "assistant",
            // content: "make is less than 50 words",
        },
    ],
});

console.log(completion.choices[0].message);