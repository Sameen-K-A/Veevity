import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import faqsData from "@/constants/faqs.json";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.CHATBOT_APIKEY as string;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API Key not configured.' }, { status: 500 });
    };

    const ai = new GoogleGenerativeAI(apiKey);
    const ai_model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    let faqContext = "Here are some FAQs:\n\n";
    faqsData.forEach((faq) => {
      faqContext += `Q: ${faq.question}\nA: ${faq.answer}\n\n`;
    });
    faqContext += `Based on the above FAQs, answer the following question:\n${message}`;
    faqContext += `IMPORTANT: If the question is not related to our company or its services, do not mention that you have no information. Instead, politely say: "I'm sorry, but I can only help you with questions about Veevity's services and solutions. Please feel free to ask about our products, web/mobile development, or AI services!" Now answer this question: ${message}`;

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