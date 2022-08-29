function change() {
  $("#menu").css("display", "none");
  $("#container").css("display", "flex");
}
function choose(typ) {
  player.type = typ;
  if (player.type == "o") {
    si.type = "x";
  } else {
    si.type = "o";
  }
  game();
}
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//SELECTOR
$("#x").on("click", function () {
  choose("x");
});
$("#o").on("click", function () {
  choose("o");
});
/////////OBJECTS
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
var fields = [
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
  {
    value: "none",
  },
];
//////////GAME
function game() {
  function clear() {
    for (i = 0; i < 9; i++) {
      fields[i].value = "none";
      var a = i + 1;
      $("#pole" + a).text("");
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
  function end() {
    if (
      fields[0].value == fields[1].value &&
      fields[1].value == fields[2].value &&
      fields[0].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[0].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(1, 2, 3);
      setTimeout(clear, 900);
    } else if (
      fields[3].value == fields[4].value &&
      fields[4].value == fields[5].value &&
      fields[3].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[3].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(4, 5, 6);
      setTimeout(clear, 900);
    } else if (
      fields[6].value == fields[7].value &&
      fields[7].value == fields[8].value &&
      fields[6].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[6].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(7, 8, 9);
      setTimeout(clear, 900);
    } else if (
      fields[0].value == fields[3].value &&
      fields[3].value == fields[6].value &&
      fields[6].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[0].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(1, 4, 7);
      setTimeout(clear, 900);
    } else if (
      fields[1].value == fields[4].value &&
      fields[4].value == fields[7].value &&
      fields[1].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[1].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(2, 5, 8);
      setTimeout(clear, 900);
    } else if (
      fields[2].value == fields[5].value &&
      fields[5].value == fields[8].value &&
      fields[2].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[2].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(3, 6, 9);
      setTimeout(clear, 900);
    } else if (
      fields[0].value == fields[4].value &&
      fields[4].value == fields[8].value &&
      fields[0].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[0].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(1, 5, 9);
      setTimeout(clear, 900);
    } else if (
      fields[2].value == fields[4].value &&
      fields[4].value == fields[6].value &&
      fields[6].value != "none"
    ) {
      $("#current").text("Wygrywa " + fields[6].value + "!!!");
      setTimeout(function () {
        $("#current").text("");
      }, 2000);
      light(3, 5, 7);
      setTimeout(clear, 900);
    } else {
      var howmany = 0;
      for (i = 0; i < 9; i++) {
        if (fields[i].value != "none") {
          howmany++;
        }
      }
      if (howmany == 9) {
        $("#current").text("Remis!");
        setTimeout(function () {
          $("#current").text("");
        }, 800);
        setTimeout(clear, 1000);
      }
    }
  }
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
  setTimeout(whostarts(), 1000);
  if (player.type != "none") {
    $("#play").on("click", change);
    $("#play").keypress(change);
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
        setTimeout(end, 1000);
        player.round = 0;
        si.round = 1;
        end();
        simove();
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
          end();
        }, 1000);
        player.round = 1;
        si.round = 0;
        found = 1;
      }
    }
  }
  ////////PLAYERTYPE
  $("#typ").text(" " + player.type);
  var color;
  if (player.type == "o") {
    color = "blue";
  } else {
    color = "red";
  }
  $("#typ").css("color", color);
  ////////KEYS
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
}
