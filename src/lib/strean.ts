export async function* mockStreamResponse() {
  const chunks = [
    "Based on the uploaded document, ",
    "Developer has ",
    "5 Years of experience in software development, ",
    "with expertise in React, Node.js, and cloud technologies. ",
  ];

  for (const chunk of chunks) {
    await new Promise(r => setTimeout(r, 500));
    yield chunk;
  }
}
