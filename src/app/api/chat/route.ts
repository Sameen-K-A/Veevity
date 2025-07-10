import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import faqsData from "@/constants/faqs.json";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const CHATBOT_APIKEY = process.env.NEXT_PUBLIC_CHATBOT_APIKEY as string;
    if (!CHATBOT_APIKEY) {
      return NextResponse.json({ error: 'Gemini API Key not configured.' }, { status: 500 });
    };

    const ai = new GoogleGenerativeAI(CHATBOT_APIKEY);
    const ai_model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    let faqContext = "Here are some FAQs:\n\n";
    faqsData.forEach((faq) => {
      faqContext += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
    });
    faqContext += `Based on the above FAQs, answer the following question:\n${message}`;

    const { response } = await ai_model.generateContent(faqContext);
    console.log({ text: response.text(), isUser: false })
    return NextResponse.json(
      { text: response.text(), isUser: false },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Failed to get a response from the chatbot.' },
      { status: 500 }
    );
  };
};