let task01 = {
  question: "",
  displayValue: 0,
  displayValuetwo: 0,
  answer: 0,
  randomAnswer: 0
};

export function taskOne() {
  task01.displayValuetwo = Math.floor(Math.random() * 11);

  task01.displayValue = Math.floor(Math.random() * (1000 - 100)) + 100;
  task01.question =
    "Wesley worked as a television reporter for " +
    task01.displayValuetwo +
    " years. He interviewed " +
    task01.displayValue +
    " people each year. How many people did Wesley interview in all?";

    console.log(task01.question , "dsdsdsd");
  task01.answer = task01.displayValuetwo * task01.displayValue;
  return task01;
}
