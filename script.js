//GlobalObjects
var player = {
  score: 0,
  type: "none",
  round: 1,
};
var si = {
  type: "none",
  score: 0,
  round: 0,
};
var fields = [];
for (i = 0; i < 9; i++) {
  fields[i] = { value: "none" };
}
//
//GlobalFunctions
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
//Menu
////Functions
function choose(typ) {
  player.type = typ;
  if (player.type == "o") {
    si.type = "x";
  } else {
    si.type = "o";
  }
  submit();
}
function submit() {
  $("#play").on("click", change);
  $("#play").css("background", "rgb(3, 24, 116)");
  $("#play").css("border", "rgb(19, 48, 176)");
  $("#play").hover(function () {
    $(this).css("cursor", "pointer");
  });
  $("#play").hover(
    function () {
      $(this).css("color", "rgb(211, 211, 211)");
    },
    function () {
      $(this).css("color", "inherit");
    }
  );
  $("#play").hover(
    function () {
      $(this).css("background", "rgb(2, 18, 87)");
    },
    function () {
      $(this).css("background", "rgb(3, 24, 116)");
    }
  );
  $("#play").hover(
    function () {
      $(this).css("transform", "scale(1.1)");
    },
    function () {
      $(this).css("transform", "scale(1.0)");
    }
  );
  game();
}
function change() {
  $("#menu").css("display", "none");
  $("#container").css("display", "flex");
}
////
////StartInstructions
$("#x").on("click", function () {
  choose("x");
});
$("#o").on("click", function () {
  choose("o");
});
////
//
//Game
function game() {
  ////Objects
  var sets = [
    {
      v1: 0,
      v2: 1,
      v3: 2,
    },
    {
      v1: 3,
      v2: 4,
      v3: 5,
    },
    {
      v1: 6,
      v2: 7,
      v3: 8,
    },
    {
      v1: 0,
      v2: 3,
      v3: 6,
    },
    {
      v1: 1,
      v2: 4,
      v3: 7,
    },
    {
      v1: 2,
      v2: 5,
      v3: 8,
    },
    {
      v1: 0,
      v2: 4,
      v3: 8,
    },
    {
      v1: 2,
      v2: 4,
      v3: 6,
    },
  ];
  ////
  ////Functions
  function whostarts() {
    var nr = random(1, 2);
    if (nr == 1) {
      player.round = 1;
      si.round = 0;
      $("#current").text("Zaczynasz!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
    } else {
      player.round = 0;
      si.round = 1;
      simove();
      $("#current").text("Zaczyna przeciwnik.");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
    }
  }
  function playertype() {
    $("#typ").text(" " + player.type);
    var color;
    if (player.type == "o") {
      color = "blue";
    } else {
      color = "red";
    }
    $("#typ").css("color", color);
  }
  function cover(number) {
    if (player.round == 1) {
      if (fields[number - 1].value == "none") {
        if (player.type == "o") {
          $("#pole" + number).text("o");
          fields[number - 1].value = "o";
        } else {
          $("#pole" + number).text("x");
          fields[number - 1].value = "x";
        }
        player.round = 0;
        si.round = 1;
        end("player");
      } else {
        $("#current").text("Pole " + number + " jest już zajęte!");
        setTimeout(function () {
          $("#current").text("");
        }, 1000);
      }
    } else {
      $("#current").text("Czekaj! Kolej na przeciwnika");
      setTimeout(function () {
        $("#current").text("");
      }, 1000);
    }
  }
  function simove() {
    var found = 0;
    while (found != 1) {
      var num = random(0, 8);
      number1 = num + 1;
      if (fields[num].value == "none") {
        setTimeout(function () {
          if (si.type == "o") {
            $("#pole" + number1).text("o");
            fields[num].value = "o";
          } else {
            $("#pole" + number1).text("x");
            fields[num].value = "x";
          }
          player.round = 1;
          si.round = 0;
          end("si");
        }, 1000);

        found = 1;
      }
    }
  }
  function end(who) {
    var ifwin;
    for (i = 0; i < 8; i++) {
      if (
        fields[sets[i].v1].value == fields[sets[i].v2].value &&
        fields[sets[i].v2].value == fields[sets[i].v3].value &&
        fields[sets[i].v1].value != "none"
      ) {
        $("#current").text("Wygrywa " + fields[sets[i].v1].value + "!!!");
        ifwin = 1;
        if (fields[sets[i].v1].value == player.type) {
          score("player");
        } else {
          score("si");
        }
        setTimeout(function () {
          $("#current").text("");
        }, 2000);
        light(sets[i].v1 + 1, sets[i].v2 + 1, sets[i].v3 + 1);
        setTimeout(clear, 900);
        setTimeout(whostarts, 900);
        break;
      }
    }
    if (ifwin != 1) {
      var ile = 0;
      for (i = 0; i < 9; i++) {
        if (fields[i].value != "none") {
          ile++;
        }
      }
      if (ile == 9) {
        $("#current").text("Remis!");
        setTimeout(function () {
          $("#current").text("");
        }, 2000);
        for (i = 0; i < 9; i++) {
          var a = i + 1;
          fields[i].value = "none";
          $("#pole" + a).text("");
        }
        whostarts();
      } else {
        if (who != "si") {
          simove();
        }
      }
    }
  }
  function light(p1, p2, p3) {
    $("#pole" + p1).css("color", "red");
    $("#pole" + p2).css("color", "red");
    $("#pole" + p3).css("color", "red");
    setTimeout(function () {
      $("#pole" + p1).css("color", "white");
      $("#pole" + p2).css("color", "white");
      $("#pole" + p3).css("color", "white");
    }, 900);
  }
  function score(who) {
    if (who == "player") {
      score1++;
    } else {
      score2++;
    }
    $("#wynik").text(" " + score1 + " : " + score2);
  }
  function clear() {
    for (i = 0; i < 9; i++) {
      fields[i].value = "none";
      var a = i + 1;
      $("#pole" + a).text("");
    }
  }
  ////
  ////StartInstructions
  var score1 = 0;
  var score2 = 0;
  setTimeout(whostarts(), 1000);
  playertype();
  $("#pole1").on("click", function () {
    cover(1);
  });
  $("#pole2").on("click", function () {
    cover(2);
  });
  $("#pole3").on("click", function () {
    cover(3);
  });
  $("#pole4").on("click", function () {
    cover(4);
  });
  $("#pole5").on("click", function () {
    cover(5);
  });
  $("#pole6").on("click", function () {
    cover(6);
  });
  $("#pole7").on("click", function () {
    cover(7);
  });
  $("#pole8").on("click", function () {
    cover(8);
  });
  $("#pole9").on("click", function () {
    cover(9);
  });
  ////
}
//
