function isGood(password) {
    var password_strength = $("#password-text");

    //TextBox left blank.
    if (password.length == 0) {
      password_strength.html("");
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Display status.
    var strength = "";
    switch (passed) {
      case 0:
      case 1:
      case 2:
        strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
        break;
      case 3:
        strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
        break;
      case 4:
        strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
        break;

    }
    password_strength.html(strength);

  }