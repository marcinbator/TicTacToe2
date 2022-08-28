function change() {
  $("#menu").css("display", "none");
  $("#container").css("display", "flex");
}
function choose(typ) {
  player.type = typ;
  game();
}
function cover(number) {
  if (player.round == 1) {
    if ($("#pole" + number).text != x && $("#pole" + number).text != "o") {
      console.log("nie");
      if (player.type == "o") {
        $("#pole" + number).text("o");
      } else {
        $("#pole" + number).text("x");
      }
    } else {
      console.log("tak");
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
var field1 = {
  value: "none",
};
var field2 = {
  value: "none",
};
var field3 = {
  value: "none",
};
var field4 = {
  value: "none",
};
var field5 = {
  value: "none",
};
var field6 = {
  value: "none",
};
var field7 = {
  value: "none",
};
var field8 = {
  value: "none",
};
var field9 = {
  value: "none",
};

//////////GAME
function game() {
  ////////MENU
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
