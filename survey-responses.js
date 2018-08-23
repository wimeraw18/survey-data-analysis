// objects and arrays
const alex = {
  player: "alex",
  "strawberry sasquatch": 4,
  "purple skin tan": 3,
  nickname: 2,
  gopackgo: 9,
  "ron wolf stink bomb": 1,
  "50 shades of clay": 6,
  "the goal scorers": 7,
  peekaboo: 5,
  "mr rodgers neighborhood": null,
  "elephant punch": 8
};

const dianita = {
  player: "dianita",
  "strawberry sasquatch": 5,
  "purple skin tan": 8,
  nickname: 9,
  gopackgo: 3,
  "ron wolf stink bomb": 4,
  "50 shades of clay": null,
  "the goal scorers": 6,
  peekaboo: 2,
  "mr rodgers neighborhood": 1,
  "elephant punch": 7
};

const alton = {
  player: "alton",
  "strawberry sasquatch": 1,
  "purple skin tan": 3,
  nickname: null,
  gopackgo: 5,
  "ron wolf stink bomb": 7,
  "50 shades of clay": 6,
  "the goal scorers": 9,
  peekaboo: 8,
  "mr rodgers neighborhood": 4,
  "elephant punch": 2
};

const roy = {
  player: "roy",
  "strawberry sasquatch": 3,
  "purple skin tan": null,
  nickname: 9,
  gopackgo: 8,
  "ron wolf stink bomb": 4,
  "50 shades of clay": 1,
  "the goal scorers": 7,
  peekaboo: 6,
  "mr rodgers neighborhood": 2,
  "elephant punch": 5
};

const katy = {
  player: "katy",
  "strawberry sasquatch": 2,
  "purple skin tan": 5,
  nickname: 7,
  gopackgo: 9,
  "ron wolf stink bomb": 1,
  "50 shades of clay": 3,
  "the goal scorers": null,
  peekaboo: 8,
  "mr rodgers neighborhood": 4,
  "elephant punch": 6
};

const dale = {
  player: "dale",
  "strawberry sasquatch": 3,
  "purple skin tan": 4,
  nickname: 5,
  gopackgo: 9,
  "ron wolf stink bomb": 2,
  "50 shades of clay": 6,
  "the goal scorers": 1,
  peekaboo: 7,
  "mr rodgers neighborhood": 8,
  "elephant punch": null
};

const eli = {
  player: "eli",
  "strawberry sasquatch": 3,
  "purple skin tan": 9,
  nickname: 1,
  gopackgo: null,
  "ron wolf stink bomb": 4,
  "50 shades of clay": 2,
  "the goal scorers": 5,
  peekaboo: 7,
  "mr rodgers neighborhood": 6,
  "elephant punch": 8
};

const minji = {
  player: "minji",
  "strawberry sasquatch": 4,
  "purple skin tan": 2,
  nickname: 9,
  gopackgo: 8,
  "ron wolf stink bomb": 1,
  "50 shades of clay": 5,
  "the goal scorers": 7,
  peekaboo: null,
  "mr rodgers neighborhood": 6,
  "elephant punch": 3
};

const ric = {
  player: "ric",
  "strawberry sasquatch": 2,
  "purple skin tan": 1,
  nickname: 8,
  gopackgo: 9,
  "ron wolf stink bomb": null,
  "50 shades of clay": 4,
  "the goal scorers": 7,
  peekaboo: 3,
  "mr rodgers neighborhood": 5,
  "elephant punch": 6
};

const jessica = {
  player: "jessica",
  "strawberry sasquatch": null,
  "purple skin tan": 1,
  nickname: 8,
  gopackgo: 9,
  "ron wolf stink bomb": 3,
  "50 shades of clay": 4,
  "the goal scorers": 7,
  peekaboo: 6,
  "mr rodgers neighborhood": 2,
  "elephant punch": 5
};

const survey = [
  alex,
  dianita,
  alton,
  roy,
  katy,
  dale,
  eli,
  minji,
  ric,
  jessica
];

const teamNames = [
  "strawberry sasquatch",
  "purple skin tan",
  "nickname",
  "gopackgo",
  "ron wolf stink bomb",
  "50 shades of clay",
  "the goal scorers",
  "peekaboo",
  "mr rodgers neighborhood",
  "elephant punch"
];
// variables
const button = document.querySelector("button");
let dataResultArea = document.querySelector("#data-analysis");
let voterListArea = document.querySelector("#voterListArea");
const input1 = document.querySelector("#select1");
const input2 = document.querySelector("#select2");
let score1 = 0;
let score2 = 0;

// functions
function display(area, message) {
  area.innerHTML = message;
}

function resetScore() {
  score1 = 0;
  score2 = 0;
}

function resetTeams() {
  input1.value = "";
  input2.value = "";
}

function timesRankedHigher() {
  let team1 = input1.value
    .toLowerCase()
    .replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let team2 = input2.value
    .toLowerCase()
    .replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  if (teamNames.indexOf(team1) === -1 || teamNames.indexOf(team2) === -1) {
    display(
      dataResultArea,
      "<p>Sorry, one or both of the team names you entered are invalid. Please try again.</p>"
    );
  } else if (team1 === team2) {
    display(
      dataResultArea,
      "<p>Sorry, you entered two teams with same name. Please try again.</p>"
    );
  } else {
    for (let i = 0; i < survey.length; i++) {
      if (survey[i][team1] === null || survey[i][team2] === null) {
        score1 += 0;
        score2 += 0;
      } else if (survey[i][team1] < survey[i][team2]) {
        score1 += 1;
      } else if (survey[i][team2] < survey[i][team1]) {
        score2 += 1;
      } else if (survey[i][team1] === survey[i][team2]) {
        score1 += 0;
        score2 += 0;
      }
    }
  }

  if (score1 === score2 && score1 > 0 && score2 > 0) {
    display(
      dataResultArea,
      "<h3>It's a tie! 4 people ranked each team higher than the other.</h3>"
    );
  } else if (score1 > score2) {
    display(
      dataResultArea,
      `<p>More people thought <strong><span style="text-transform:capitalize;">${team1}</span></strong> was a better team name than <strong><span style="text-transform:capitalize;">${team2}</span></strong>.</p>`
    );
  } else if (score2 > score1) {
    display(
      dataResultArea,
      `<p>More people thought <strong><span style="text-transform:capitalize;">${team2}</span></strong> was a better team name than <strong><span style="text-transform:capitalize;">${team1}</span></strong>.</p>`
    );
  }
}

function createVoterList() {
  let team1 = input1.value
    .toLowerCase()
    .replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let team2 = input2.value
    .toLowerCase()
    .replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let list1 = `<div id="voteList1Wrapper"><h3 id="team1">${team1}:</h3><ol id="voteList1">`;
  let list2 = `<div id="voteList2Wrapper"><h3 id="team2">${team2}:</h3><ol id="voteList2">`;
  for (let a = 0; a < survey.length; a++) {
    if (
      survey[a][team1] < survey[a][team2] &&
      survey[a][team1] !== null &&
      survey[a][team2] !== null
    ) {
      list1 += `<li>${survey[a].player}</li>`;
    } else if (
      survey[a][team2] < survey[a][team1] &&
      survey[a][team1] !== null &&
      survey[a][team2] !== null
    ) {
      list2 += `<li>${survey[a].player}</li>`;
    }
  }
  list1 += `</ol></div>`;
  list2 += `</ol></div>`;
  display(
    voterListArea,
    `${list1}
${list2}`
  );
  if (list1.length > list2.length) {
    document.querySelector("#team1").style.color = "#3f6c45";
    document.querySelector("#team2").style.color = "#cb0000";
  } else if (list2.length > list1.length) {
    document.querySelector("#team2").style.color = "#3f6c45";
    document.querySelector("#team1").style.color = "#cb0000";
  } else {
    document.querySelector("#team2").style.color = "black";
    document.querySelector("#team1").style.color = "black";
  }
}

// event listner
button.addEventListener("click", function() {
  timesRankedHigher();
  createVoterList();
  resetScore();
  resetTeams();
});
