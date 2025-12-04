function checkMood(score) {
  if (score <= 3) {
    return "Sad 😢";
  } else if (score <= 7) {
    return "Neutral 😐";
  } else {
    return "Happy 😄";
  }
}

function showMood() {
  let randomScore = Math.floor(Math.random() * 10) + 1;
  let moodResult = checkMood(randomScore);

  $("#mood-display").html(
    "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
  );
}

$(document).ready(function () {
  $("#mood-button").click(function () {
    showMood();
  });
});