const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    const question = acc[i].children[0];
    const answer = acc[i].children[1];
    if (question.classList.contains("active")) {
      question.classList.remove("active");
      answer.classList.remove("active");
    } else {
      question.classList.add("active");
      answer.classList.add("active");
    }
  });
}
