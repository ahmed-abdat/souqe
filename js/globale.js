let user = document.getElementById("user"),
  pass = document.getElementById("pass"),
  btn = document.getElementById("btn"),
  check = document.getElementById("check"),
  checkpass = document.getElementById("checkpass");
  let checknew = document.getElementById("checknew")
  let userLogin = document.getElementById("userLogin")
let passLogin = document.getElementById("passLogin")
let btnLogin = document.getElementById("btnLogin")

const obj = JSON.parse(localStorage.getItem("note") || "[]");

// filter user

let filterar = [];
let passfilter = [];

function filteruser() {
  if (user.value) {
    filterar = obj
      .filter(function (el) {
        return (
          el.name == user.value.trim() ||
          el.email == user.value.toLowerCase().trim()
        );
      })
      .map(function (el) {
        return el.password;
      });
    console.log(filterar);
    pass.focus();
  }
}

// filter password

function filterpass() {
  if (pass.value && pass.value !== " ") {
    passfilter = filterar.filter((ele) => {
      return ele == pass.value;
    });
    console.log(passfilter);
  }
}

// check user custome

function checkusercustom() {
  if (filterar.length > 0) {
    check.style.display = "block";
    check.classList.add("corect");
    check.innerHTML = "تم التأكد من صحة حسابك";
  } else {
    user.classList.remove("foucus")
    check.style.display = "block";
    user.style.cssText = "border-color: #ea8d96;border-width: 2px;"
    check.innerHTML = "إسم المستخدم أو البريد خطأ !";
    check.classList.add("wrong");
    // user.value = "";
  }
  // setTimeout(() => {
  //   user.style.cssText = "border-color: lightgray;border-width: 1px;"
  //   check.innerHTML = "";
  //   check.style.display = "none";
  // }, 3000);
}

// check user
function checkuser() {
  if (filterar.length > 0) {
    check.style.display = "block";
    check.classList.add("corect");
    check.innerHTML = "تم التأكد من صحة حسابك";
  } else {
    check.style.display = "block";
    user.style.cssText = "border-color: #ea8d96;border-width: 2px;"
    check.innerHTML = "إسم المستخدم أو البريد خطأ !";
    check.classList.add("wrong");
    user.value = "";
  }
  setTimeout(() => {
    user.style.cssText = "border-color: lightgray;border-width: 1px;"
    check.innerHTML = "";
    check.style.display = "none";
  }, 3000);
}

//check user and password

function checker() {
  if (user.value.length >= 1 && pass.value.length >= 1) {
    if (filterar.length > 0) {
      check.style.display = "block";
      check.style.color = "green";
      check.classList.add("corect");
      check.innerHTML = "إسم المستخدم أو البريد صحيح";
    } else {
      check.style.display = "block";
      check.classList.add("wrong");
      check.innerHTML = "إسم المستخدم أو البريد غير صحيح";
      user.value = "";
    }
    // pass
    if (passfilter.length > 0) {
      checkpass.style.display = "block";
      checkpass.classList.add("corect");
      checkpass.innerHTML = "كلمة السر صحيحة !";
    } else {
      checkpass.style.display = "block";
      checkpass.classList.add("wrong");
      checkpass.innerHTML = "كلمة السر غير صحيحة  !";
      pass.value = "";
    }
    setTimeout(() => {
      check.style.display = "none";
      checkpass.style.display = "none";
      checkpass.innerHTML = "";
      check.innerHTML = "";
    }, 5000);
  } else {
    console.log("not valid");
  }
}

// tst function checkuser and pass
function checkeuspas() {
  if (user.value.length >= 1 && pass.value.length >= 1) {
    if (filterar.length > 0 && passfilter.length > 0) {
      check.style.display = "block";
      check.classList.add("corect");
      check.innerHTML = "إسم المستخدم و كلمة السر صحيحين";
    } else {
      check.style.display = "block";
      check.classList.add("wrong");
      user.classList.remove("foucus");
      user.style.cssText = "border-color: #ea8d96;border-width: 2px;";
      pass.classList.remove("foucus");
      pass.style.cssText = "border-color: #ea8d96;border-width: 2px;";
      check.innerHTML = "إسم المستخدم أو كلمة السر خطأ";
      user.value = "";
      pass.value = "";
    }

    setTimeout(() => {
      check.style.display = "none";
      check.innerHTML = "";
      user.style.cssText = "border-color: lightgray;border-width: 1px;";
      pass.style.cssText = "border-color: lightgray;border-width: 1px;";
    }, 6000);
  } else {
    console.log("not valid");
  }
}
// remove useeer

function remove() {
  obj.forEach((el, index) => {
    if (
      filterar.length > 0 &&
      !(user.value === "") &&
      passfilter.length > 0 &&
      pass.value != ""
    ) {
      if (
        el.name == user.value.trim() ||
        el.email == user.value.toLowerCase().trim()
      ) {
        let reponce = confirm("هل أنت متأكد من حذف حسابك ؟");
        if (reponce) {
          obj.splice(index, 1);
          localStorage.setItem("note", JSON.stringify(obj));
          console.log(obj);
        }
      }
    } else {
      checker();
    }
  });
}

// btn click

user.addEventListener("blur", () => {
  pass.focus();
});

// user event
user.onfocus = () => {
  user.classList.add("foucus");
  user.style.cssText = "border-color: lightgray;border-width: 1px;";
};
// onblur
user.addEventListener("blur", () => {
  user.classList.remove("foucus");
  pass.focus();
});

// pass events
pass.onfocus = () => {
  pass.classList.add("foucus");
  pass.style.cssText = "border-color: lightgray;border-width: 1px;";
};
// onblur
pass.addEventListener("blur", () => {
  pass.classList.remove("foucus");
});
