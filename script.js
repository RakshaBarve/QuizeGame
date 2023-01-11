const quizDB=[
    {
        question:"Q1: What is the full form of HTML ?",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        ans:"ans1"
    },{
        question:"Q2: Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>", 
        d: "heading",
        ans:"ans2"
    },
    {
       question:"Q3: Which is the correct HTML statement to display H2O in a paragraph?",
        a: "<p>H<sup>2</sup>O</p>",
        b: "<p>H<ins>2</ins>O</p>",
        c: "<p>H<below>2</below>O</p>",
        d: "<p>H<sub>2</sub>O</p>",
        ans: "ans4"
    },{
        question:"Q4: Which HTML tag is used to define a short quotation?",
        a: "<quotation>",
        b: "<quote>",
        c: "<qut>",
        d: "<q>",
        ans: "ans4"
    },{
       question:"Q5: Which HTML tag is used to define a hyperlink?", 
       a: "<a>",
       b: "<h>",
       c: "<hyperlink>",
       d: "Both A. and B.",
       ans:"ans1"
    },
    {
    question:"Q5: Which attribute specifies the path to the image?",
      a: "href",
      b: "link",
      c: "src",
      d: "All of the above",
      ans:"ans3"
    },
    {
     question:"Q6: Which tag is a block-level element?",
     a: "<block> ... </block>",
     b: "<b> ... </b>",
     c: "<div> ... </div>",
     d: "<divx> ... </divx>",
     ans:"ans3"
    },{
        question:"Q7: Which input type reset defines a reset button that will reset all form values to their default values?",
        a: "clear",
        b: "clear:both",
        c: "reset",
        d: "refresh",
        ans:"ans3"
    },{
        question:"Q8: Which HTML5 element is used to style the layout?",
        a: "CSS ",
        b: "jQuery ",
        c: "JavaScript ",
        d: " PHP ",
        ans: "ans1"
    },{
        question:"Q8: What is the purpose of the HTML5 address> element?",
        a: " provides url ",
        b: "contains IP address ",
        c: "provides url ",
        d: " contains author contact ",
        ans: "ans4 "
    },{
        question:"Q9: In HTML, which tag is used to make a numbered list?",
        a: "<ol> ",
        b: "<li> ",
        c: "<ul> ",
        d: "<ll>",
        ans: "ans1 "
    },{
        question:"Q10: n HTML, which tag is used to create a blank line?",
        a: " <b>  ",
        b: " <br>",
        c: "<em>",
        d: "<a> ",
        ans: "ans2"
    },{
        question:"Q11: CSS stands for ?",
        a: "Cascade style sheets ",
        b: "Color and style sheets",
        c: " Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },{
        question:"Q12: The property in CSS used to change the background color of an element is -",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        ans: "ans3"
    },{
        question:"Q13: he HTML attribute used to define the inline styles is -",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },{
        question:"Q14: he CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        a: "writing-mode",
        b: "text-indent",
        c: "word-break",
        d: "None of the above",
        ans: "ans1"
    },{
        question:"Q15: The CSS property used to draw a line around the elements outside the border?",
        a: "border",
        b: "outline",
        c: "padding",
        d: "line",
        ans: "ans2"
    },{
        question:"Q16: Which of the following CSS property is used to represent the overflowed text which is not visible to the user?",
        a: "text-shadow ",
        b: "text-stroke",
        c: "text-overflow  ",
        d: "text-decoration",
        ans: "ans3"
    },{
        question:"Q17: Which of the following CSS property creates a clipping region and specifies the visible area of the element? ",
        a: "visibility property",
        b: "background-clip property   ",
        c: "clip-path property",
        d: "None of the above",
        ans: "ans3"
    },{
        question:"Q18: The correct syntax to give a line over text is -",
        a: "text-decoration: line-through",
        b: "text-decoration: none",
        c: "text-decoration: overline",
        d: "text-decoration: underline",
        ans: "ans3"
    },{
        question:"Q19: Which of the following CSS property is used to specify the type of quotation mark?",
        a: "quotes property",
        b: "z-index property",
        c: "hyphens property",
        d: "None of the above",
        ans: "ans1"
    },{
        question:"Q20: The CSS property used to specify the transparency of an element is -",
        a: "Hover",
        b: "opacity",
        c: "clearfix",
        d: "overlay",
        ans: "ans2"
    }
    ,{
        question:"Q21: Which type of JavaScript language is ",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans: "ans2"
    }
    ,{
        question:"Q22: Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    }
    ,{
        question:"Q23: Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        ans: "ans2"
    }
    ,{
        question:"Q24: Which one of the following is the correct way for calling the JavaScript code?",
        a: "Function/Method",
        b: "Preprocessor",
        c: "RMI",
        d: "Triggering Event",
        ans: "ans1"
    }
    ,{
        question:"Q25:  Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toFixed()",
        c: "toPrecision()",
        d: "toLocaleString()",
        ans: "ans2"
        
    }
    ,{
        question:"Q26:  When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints.",
        a: "Prints an exception error",
        b: "Prints an overflow error",
        c: "Displays: Infinity",
        d: "Prints the value as such",
        ans: "ans3"
    }
    ,{
        question:"Q27:  In JavaScript, what will be used for calling the function definition expression:",
        a: "Function calling",
        b: "Function literal",
        c: "Function declaration",
        d: "Function prototype",
        ans: "ans2"
    }
    ,{
        question:"Q28: Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        a: "slice()",
        b: "split()",
        c: "substr()",
        d: "search()",
        ans: "ans3"
    }
    ,{
        question:"Q29: Choose the correct snippet from the following to check if the variable a is not equal the NULL:",
        a: "if(a!==null)",
        b: "if (a!)",
        c: "if(a!null)",
        d: "if (a!)",
        ans: "ans1"
    },{
        question:"Q30:  Which of the following type of a variable is volatile?",
        a: "Immutable variable",
        b: "Volatile variable ",
        c: "Dynamic variable",
        d: "Mutable variable",
        ans: "ans4"
       }
    ]
const question = document.querySelector('.question');
const option1 = document.querySelector('#op1');
const option2 = document.querySelector('#op2');
const option3= document.querySelector('#op3');
const option4 = document.querySelector('#op4');
const submit= document.querySelector('#submit');

const ans=document.querySelectorAll(".ans");
const score=document.querySelector("#score");
let scor=0;
let questionCount =0;
const loadQuestion = () => {
   const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();
const getCheckAnswer =()=>{
    let answer;
    ans.forEach((currentElementAnswer)=>{
        if(currentElementAnswer.checked){
        answer=currentElementAnswer.id;
        }
    });
    return answer;
}
const deselectAll=()=>{
    ans.forEach((currentElementAnswer)=>currentElementAnswer.checked=false);
}
submit.addEventListener("click",()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer ==quizDB[questionCount].ans){
        scor++;
    };
    questionCount ++;
    deselectAll();

    if(questionCount <quizDB.length){
        loadQuestion();
    }
    else{
        score.innerHTML=` 
        <h3>Your Scored${scor}/${30}</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
        `;
        score.classList.remove("cmpt")
    }
});

