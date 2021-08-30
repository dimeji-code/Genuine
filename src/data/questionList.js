import Question from "../models/question"
const QUESTION_LIST = [
    new Question(
        "personality-type",
        "What is the persons personality type?",
        ["introvert", "extrovert"]
    ),
    new Question(
        "interest",
        "What interest is the person leaning towards the most?",
        ["music", "fashion","athletics","technology","aesthetic"]
    ),
    new Question(
        "time",
        "How often do you see the person?",
        ["everyday", "weekly","not often"]
    ),
    new Question(
        "age",
        "What is the age range of the recepient?",
        ["< 10", "10-14","15-20","21-35","> 35"]
    ),
    new Question(
        "budget",
        "What is your budget for a gift?",
        ["30", "60","200","500","2000"]
    ),

]

export default QUESTION_LIST