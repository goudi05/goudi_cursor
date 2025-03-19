import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

if (!process.env.DEEPSEEK_API_KEY) {
  throw new Error('Missing DEEPSEEK_API_KEY environment variable');
}

if (!process.env.DEEPSEEK_API_BASE_URL) {
  throw new Error('Missing DEEPSEEK_API_BASE_URL environment variable');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const openai = new OpenAI({
      baseURL: process.env.DEEPSEEK_API_BASE_URL,
      apiKey: process.env.DEEPSEEK_API_KEY
    });

    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000
    });

    if (completion.choices && completion.choices.length > 0) {
      const message = completion.choices[0].message.content;
      res.status(200).json({ message });
    } else {
      throw new Error('No response from API');
    }
  } catch (error: any) {
    console.error('Error calling DeepSeek API:', error.response?.data || error.message);
    res.status(500).json({ 
      message: '服务器错误，请稍后再试',
      error: error.response?.data || error.message 
    });
  }
} 