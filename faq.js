const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow")

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function toggle(){

        if (answers[i].style.display == "none" || answers[i].style.display == "") {
            answers[i].style.display = "block";
            arrows[i].style.rotate = "-180deg";
            questions[i].style.color = "var(--grayish-blue-dark)";
            questions[i].style.fontWeight = "700";
            for (let j = 0; j < questions.length; j++) {
                if(i !== j) {
                    answers[j].style.display = "none";
                    arrows[j].style.rotate = "none";
                    questions[j].style.fontWeight = "400";
                }
            }
        } else {
            answers[i].style.display = "none";
            arrows[i].style.rotate = "none";
            questions[i].style.color = "var(--grayish-blue-dark)";
            questions[i].style.fontWeight = "400";
        }
    });
}

questions.forEach((question) => {
    question.addEventListener("mouseover", () => {
        question.style.color = "var(--red-soft)";
    })
    question.addEventListener("mouseout", () => {
        question.style.color = "var(--grayish-blue-dark)";
    })
} )
