import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateComponent = async (req, res) => {
  try {
    const { prompt, framework } = req.body;

    if (!prompt || !framework) {
      return res.status(400).json({
        success: false,
        message: "Prompt and framework are required."
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(`
You are an experienced programmer with expertise in web development and UI/UX design.

Generate a UI component for:

${prompt}

Framework:
${framework}

Requirements:

- Modern UI
- Responsive
- Animated
- SEO friendly
- Clean code
- Return ONLY code inside markdown code block.
- Entire code in one HTML file.
`);

    const response = result.response;

res.json({
  success: true,
  text: response.text(),
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};