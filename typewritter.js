const typewritter = (sentence) => {
  let timer = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 150;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, timer);
};

typewritter("Nicolas Cage is the supreme ruler.");
