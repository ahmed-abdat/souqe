
// userfiltet
function filteruserLogin() {
  if (userLogin.value) {
    filterar = obj
      .filter(function (el) {
        return (
          el.name == userLogin.value.trim() ||
          el.email == userLogin.value.toLowerCase().trim()
        );
      })
      .map(function (el) {
        return el.password;
      });
    console.log(filterar);
    passLogin.focus();
  }
}

// filter password
function filterpassword() {
  if (passLogin.value && passLogin.value !== " ") {
    passfilter = filterar.filter((ele) => {
      return ele == passLogin.value;
    });
    console.log(passfilter);
  }
}
// filter user and password
function checkeuspasword() {
  if (userLogin.value.length >= 1 && passLogin.value.length >= 1) {
    if (filterar.length > 0 && passfilter.length > 0) {
      check.style.display = "block";
      check.classList.remove("wrong");
      check.classList.add("corect");
      check.innerHTML = "إسم المستخدم و كلمة السر صحيحين";
      setTimeout(() => {
        check.style.display = "none";
        userLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
        passLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
      }, 6000);
    } else {
      check.style.display = "block";
      check.classList.remove("corect");
      check.classList.add("wrong");
      userLogin.classList.remove("foucus");
      userLogin.style.cssText = "border-color: #ea8d96;border-width: 2px;";
      passLogin.classList.remove("foucus");
      passLogin.style.cssText = "border-color: #ea8d96;border-width: 2px;";
      check.innerHTML = "إسم المستخدم أو كلمة السر خطأ";
      userLogin.value = "";
      setTimeout(() => {
        check.style.display = "none";
        userLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
        passLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
      }, 6000);
    }
  }
}

userLogin.addEventListener("blur", () => {
  passLogin.focus();
});

// user event
userLogin.onfocus = () => {
  userLogin.classList.add("foucus");
  userLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
};
// onblur
userLogin.addEventListener("blur", () => {
  userLogin.classList.remove("foucus");
  passLogin.focus();
});

// pass events
passLogin.onfocus = () => {
  passLogin.classList.add("foucus");
  passLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
};
// onblur
passLogin.addEventListener("blur", () => {
  passLogin.classList.remove("foucus");
});

userLogin.addEventListener("blur", filteruserLogin);

passLogin.addEventListener("blur", () => {
  filterpassword();
  btnLogin.click();
});

btnLogin.addEventListener("click", checkeuspasword);
