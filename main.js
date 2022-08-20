let rate = document.querySelectorAll("ul li");

rate.forEach((ele) => {
  ele.onclick = function () {
    console.log(ele);
    rate.forEach((re) => {
      re.classList.remove("rate");
    });
    ele.classList.add("rate");
  };
});

let btn = document.querySelector("input");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let rateCount = document.querySelector(".num .r");
let alertMessage = document.querySelector(".alert");
btn.addEventListener("click", function (e) {
  rate.forEach((ele) => {
    if (ele.classList.contains("rate")) {
      front.style.display = "none";
      back.style.display = "flex";
      let count = ele.textContent;
      rateCount.textContent = count;
    } else {
      alertMessage.style.display = "block";
    }
  });
  console.log(e.currentTarget);
});
