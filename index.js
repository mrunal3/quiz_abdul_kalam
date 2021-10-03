const readlineSync = require("readline-sync");
const chalk = require("chalk");

//ex13, 14, 15:
console.log(
  chalk.greenBright.bgMagenta("  Let's find out How well do you know Dr. A.P.J. Abdul Kalam!!! 🙈  \n")
);

const userName = readlineSync.question(
  chalk.cyanBright("❤️ Please enter your name ❤️\n")
);

console.log(
  chalk.hex("#DEADED")(
    "\nHi " +
      userName +
      ". Get ready for Level 1. \nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."
  )
);

//variable declaration for score and question-answers
let score = 0;

const question1 = {
  que: "What is the full name of Dr. Abdul Kalam? \na.Avul Jakir Jalaluddin Kalam\nb.Avul Pakir Jainulabdeen Abdul Kalam\nc.Abdul Sakir Jainulabdeen Kalam",
  ans: "b",
  description: "The full name of Dr. Abdul Kalam was Avul Pakir Jainulabdeen Abdul Kalam.",
};

const question2 = {
  que: "When was Dr. A.P.J. Abdul Kalam born? \na.15 October 1931 \nb.2 September 1929 \nc.15 August 1923 ",
  ans: "a",
  description: "Dr. A.P.J. Abdul Kalam was born in Dhanushkodi, Rameswaram, Tamil Nadu, India on 15 October 1931. He was born in a Muslim Family.",
};

const question3 = {
  que: "Which island is named after Dr. A.P.J. Abdul Kalam? \na.Wheeler Island, Odisha \nb.Landfall Island\nc.Bhavani Island",
  ans: "a",
  description: "Wheeler Island, located in Odisha, is currently known as Dr. Abdul Kalam Island. The island is located off the coast of Odisha, approximately 150 kilometers east of the state capital Bhubaneshwar.",
};

const question4 = {
  que: "Which of the following book is not written by Dr. A.P.J. Abdul Kalam? \na.You Are Born to Blossom \nb.Ignited Minds \nc.A House for Mr. Biswas‎ ",
  ans: "c",
  description: "A House for Mr. Biswas was written by V. S. Naipaul in 1961. The rest of the books mentioned above were written by Dr. A.P.J. Abdul Kalam.",
};

const question5 = {
  que: "Which of the following award is not given to Dr. A.P.J. Abdul Kalam? \na.Padma Bhushan \nb.Padma Vibhushan \nc.Shanti Swaroop Bhatnagar",
  ans: "c",
  description:
    "Shanti Swaroop Bhatnagar award is not given to Dr. A.P.J. Abdul Kalam. Kalam received Bharat Ratna (1997), Padma Vibhushan (1990), and Padma Bhushan (1981).",
};

const question6 = {
  que: "Dr. A.P.J. Abdul Kalam was the ......President of India. \na.9th \nb.10th \nc.11th",
  ans: "c",
  description: "Dr. A.P.J. Abdul Kalam was the 11th President of India. He remained in the office from 25 July 2002 to 25 July 2007.",
};

const question7 = {
  que: "When was Avul Pakir Jainulabdeen Abdul Kalam President of India?\na.1992-1997 \nb.2002-2007 \nc.1987-1992",
  ans: "b",
  description: "Avul Pakir Jainulabdeen Abdul Kalam was President of India from 25 July 2002 to 25 July 2007.",
};

const question8 = {
  que: "Dr. A.P.J. Abdul Kalam in the Presidential election in 2002 succeeded:\na.K. R. Narayanan \nb.Lakshmi Sahgal \nc.Krishan Kant",
  ans: "b",
  description: "Abdul Kalam defeated Lakshmi Sahgal in the Presidential election held in 2002. He won the 2002 Presidential election with an electoral vote of 922,884 while Lakshmi Sahgal got just 107,366 votes.",
};

const question9 = {
  que: "Where was Avul Pakir Jainulabdeen Abdul Kalam born?\na.Tuticorin \nb.Vailankanni \nc.Rameswaram",
  ans: "c",
  description: "Dr. APJ Abdul Kalam was born on 15 October, 1931, at Rameshwaram in Tamil Nadu",
};

const question10 = {
  que: "Which college did Avul Pakir Jainulabdeen Abdul Kalam attend?\na. St.Joseph’s College \nb. Loyola College \nc. Madras Christian College",
  ans: "a",
  description: "Answer is St.Joseph’s College",
};
//saving all questions in array
const questionSet1 = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
//defining Leaderboard
const highScore = [
  { nameH: "Sonu", scoreH: "20" },
  { nameH: "Vaiju", scoreH: "18" },
  { nameH: "Anku", scoreH: "16" },
  { nameH: "Pinki", scoreH: "14" },
];

//posting quiz and validating answers
for (let i = 0; i < questionSet1.length; i++) {
  if (i === 3) {
    if (score >= 4) {
      console.log("Congratulations! You have entered Level 2 🤩");
    } else {
      console.log("Aww! you failed level 1");
      break;
    }
  }
  if (i === 6) {
    if (score >= 8) {
      console.log(
        "Congratulations! You have entered Final Level 🤩. Get ready for the toughest questions."
      );
    } else {
      console.log("Hurry! you failed level 2");
      break;
    }
  }
  checkScore(
    i + 1,
    questionSet1[i].que,
    questionSet1[i].ans,
    questionSet1[i].description
  );
}

//posting leaderboard
console.log(chalk.keyword("orange").bold("\n*****Check out Leaderboard*****"));


//compare score with high scores
let scoreBeaten = false;
let index = highScore.findIndex((obj)=> score >= obj.scoreH)
console.log(index)
if (index === -1) {
  highScore.push({
    nameH: `${userName}`,
    scoreH: `${score}`,
  })
} else {
  scoreBeaten = true;
  highScore.splice(index, 0, {
    nameH: `${userName}`,
    scoreH: `${score}`,
  });
}
printScoreBoard(highScore);
console.log("---------------------------------");

//Printing final score
console.log(chalk.hex("#DEADED").bold("Yay! Your Final Score is " + score));
//if score is beaten, print leaderboard with username and score

if (scoreBeaten) {
  console.log(
    chalk.bold.keyword("pink")(
      "Congratulations " + userName + " 🥳 , you are great fan of Dr. APJ Abdul Kalam 😍"
    )
  );

  console.log(chalk.keyword("orange").bold("\n*****Leaderboard*****"));
  printScoreBoard(highScore);
} else {
  console.log(
    chalk.bold.hex("#DEADED")(
      "Sorry " + userName + ", you were so close to be fan of Dr. APJ Abdul Kalam"
    )
  );
}

//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns, description) {
  const userAns = readlineSync.keyIn(
    chalk.cyanBright("\n" + queNo + ") " + checkQue + "\n"),
    { limit: "$<a-c>" }
  );
  if (userAns === checkAns) {
    console.log(chalk.green("You are absolutely right. You get 2 points 🎉"));
    score += 2;
  } else {
    console.log(chalk.redBright(`You are wrong.\n${description}`));
  }
  console.log(chalk.yellowBright("Your current score is " + score));
  console.log("---------------------\n");
}

//function to print leaderBoard
function printScoreBoard(highScore) {
  highScore.forEach((obj)=>{
    console.log(
      chalk
        .keyword("orange")
        .bold(obj.nameH + " : " + obj.scoreH)
    );
  })
}
