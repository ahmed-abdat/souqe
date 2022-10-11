let email = document.getElementById("userEmail"),
  checkEmail = document.getElementById("checkEmail");
  // regular Expression For Email
let validEmail = /^([a-z0-9\d*_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,})/gi

window.onload = () => {
  user.focus();
  pass.setAttribute("disabled", "");
  email.setAttribute("disabled", "");
  btn.style.opacity = "0.7";
  btn.classList.remove("active");
  btn.style.pointerEvents = "none";
};
// user event
// onkeyup
user.onkeyup = () => {
  if (user.value.length >= 3) {
    email.removeAttribute("disabled");
  } else {
    email.setAttribute("disabled", "");
    btn.style.opacity = "0.6";
    pass.setAttribute("disabled", "");
    btn.classList.remove("active");
    btn.style.pointerEvents = "none";
  }
};
// user onfocus
user.onfocus = ()=>{
  user.style.cssText = "border-color: lightgray;border-width: 1px;"
  user.classList.add("foucus")
}
// user onblur
user.addEventListener("blur", () => {
  user.classList.remove("foucus")
  email.focus();
});
// email events
// onkeyup
email.onkeyup = () => {
  if (email.value.length >= 5) {
    pass.removeAttribute("disabled");
  }
};
// email onfocus
email.onfocus = ()=>{
  email.style.cssText = "border-color: lightgray;border-width: 1px;"
  email.classList.add("foucus")
}
// email onblur
email.onblur = () => {
  email.classList.remove("foucus")
  if(email.value.length >= 4){
    pass.focus();
  }
};
// pass events

// onkeyup
pass.onkeyup = () => {
  if (pass.value.length >= 4) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
    btn.classList.add("active");
  } else {
    btn.style.opacity = "0.6";
    btn.classList.remove("active");
    btn.style.pointerEvents = "none";
  }
};
// pass onfocus
pass.onfocus = ()=>{
  pass.classList.add("foucus")
}
// pass blur
pass.addEventListener("blur", () => {
  pass.classList.remove("foucus")
});
// push the new object user
btn.onclick = () => {
  if (pass.value && email.value && user.value) {
    let objNme = {
      name: user.value,
      email: email.value,
      password: pass.value,
    };
    
    let vlidobj = obj.filter((el) => {
      return el.email === email.value;
    });
    let namevldtion = obj.filter((el) => {
      return el.name === user.value;
    });
    let validResult = validEmail.test(email.value)
  if(validResult == true){
    console.log("this has activated")
    if (namevldtion.length > 0) {
      user.classList.remove("foucus")
      checknew.classList.add("wrong");
      user.style.cssText = "border-color: #ea8d96;border-width: 2px;"
      checknew.innerHTML = "إسم المستخدم موجود بلفعل الرجاء المحاولة مرة أخرى";
      checknew.style.display = "block";
      user.value = "";
    } else if (vlidobj.length > 0) {
      checkEmail.style.display = "block";
      email.classList.remove("foucus")
      checkEmail.classList.add("wrong");
      email.style.cssText = "border-color: #ea8d96;border-width: 2px;"
      checkEmail.innerHTML = "البريد موجود بلفعل الرجاء المحاولة مرة أخرى";
      email.value = "";
    } else{
      obj.push(objNme);
      localStorage.setItem("note", JSON.stringify(obj));
      email.value = "";
      user.value = "";
      pass.value = "";
      console.log(obj);
    }
    
    setTimeout(() => {
      email.style.cssText = "border-color: lightgray;border-width: 1px;"
      user.style.cssText = "border-color: lightgray;border-width: 1px;"
      checkEmail.style.display = "none";
      checknew.style.display = "none";
      checkEmail.innerHTML = "";
      checknew.innerHTML = "";
    }, 6000);
  }else{
    checkEmail.style.display = "block";
    email.classList.remove("foucus")
    checkEmail.classList.add("wrong");
    email.style.cssText = "border-color: #ea8d96;border-width: 2px;"
    checkEmail.innerHTML = "الرجاء إدخال بريد إلكتروني صالح والمحاولة مرة أخرى";
    setTimeout(() => {
      email.style.cssText = "border-color: lightgray;border-width: 1px;"
      checkEmail.style.display = "none";
    }, 5000);
  }
  }
};
