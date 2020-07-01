function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dVeKEJi9V0":
        Script1();
        break;
      case "6lX4wKzC1xf":
        Script2();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();
var score = p.GetVar("MyScore");
AndroidLOTApp.sendScore("Score", score);
var replayStatus = p.GetVar("Replay_1");
AndroidLOTApp.repeatCourse("Replay", replayStatus);
}

function Script2()
{
  var p = GetPlayer();
var score = p.GetVar("MyScore");
AndroidLOTApp.sendScore("Score", score);
var replayStatus = p.GetVar("Replay_1");
AndroidLOTApp.repeatCourse("Replay", replayStatus);
}

