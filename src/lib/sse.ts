export const mockSSE = (onMessage: (msg: string) => void) => {
  const chunks = ["Hello ", "this is ", "a streamed message."];
  let i = 0;
  const interval = setInterval(() => {
    if (i >= chunks.length) return clearInterval(interval);
    onMessage(chunks[i]);
    i++;
  }, 500);

  return () => clearInterval(interval); // unsubscribe function
};
