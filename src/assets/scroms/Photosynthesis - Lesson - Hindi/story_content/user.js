function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ULgZ8RX355":
        Script1();
        break;
      case "6ZstjVjJSYq":
        Script2();
        break;
      case "5XAenVyv9Ep":
        Script3();
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

function Script3()
{
  var p = GetPlayer();
var score = p.GetVar("MyScore");
AndroidLOTApp.sendScore("Score", score);
var replayStatus = p.GetVar("Replay_1");
AndroidLOTApp.repeatCourse("Replay", replayStatus);
}

