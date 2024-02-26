const overview = document.getElementById("overview");
const outcomes = document.getElementById("outcomes");
const jobs = document.getElementById("jobs");
const questions = document.getElementById("questions");

const overviewIntro = document.getElementById("overview-intro");
const outcomesIntro = document.getElementById("outcomes-intro");
const jobsIntro = document.getElementById("jobs-intro");
const questionsIntro = document.getElementById("questions-intro");

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");

const allAns = document.querySelectorAll(".answer");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const ans5 = document.getElementById("ans5");

const expendAll = document.querySelectorAll(".expend-more-icon");
const expend1 = document.getElementById("expend1");
const expend2 = document.getElementById("expend2");
const expend3 = document.getElementById("expend3");
const expend4 = document.getElementById("expend4");
const expend5 = document.getElementById("expend5");

const allIntro = document.querySelectorAll(".deaprt-intro-content");

overview.addEventListener("click", () => {
  if (!overviewIntro.classList.contains("active")) {
    allIntro.forEach((intro) => {
      intro.classList.remove("active");
    });
    overviewIntro.classList.toggle("active");
  } else {
  }
});

outcomes.addEventListener("click", () => {
  if (!outcomesIntro.classList.contains("active")) {
    allIntro.forEach((intro) => {
      intro.classList.remove("active");
    });
    outcomesIntro.classList.toggle("active");
  } else {
  }
});

jobs.addEventListener("click", () => {
  if (!jobsIntro.classList.contains("active")) {
    allIntro.forEach((intro) => {
      intro.classList.remove("active");
    });
    jobsIntro.classList.toggle("active");
  } else {
  }
});

questions.addEventListener("click", () => {
  if (!questionsIntro.classList.contains("active")) {
    allIntro.forEach((intro) => {
      intro.classList.remove("active");
    });
    questionsIntro.classList.toggle("active");
  } else {
  }
});

q1.addEventListener("click", () => {
  if (!ans1.classList.contains("active")) {
    allAns.forEach((allA) => {
      allA.classList.remove("active");
    });
    expendAll.forEach((expendA) => {
      expendA.src = "../../../icons/down.svg";
    });
    expend1.src = "../../../icons/up.svg";
    ans1.classList.toggle("active");
  } else {
    ans1.classList.remove("active");
    expend1.src = "../../../icons/down.svg";
  }
});

q2.addEventListener("click", () => {
  if (!ans2.classList.contains("active")) {
    allAns.forEach((allA) => {
      allA.classList.remove("active");
    });
    expendAll.forEach((expendA) => {
      expendA.src = "../../../icons/down.svg";
    });
    expend2.src = "../../../icons/up.svg";
    ans2.classList.toggle("active");
  } else {
    ans2.classList.remove("active");
    expend2.src = "../../../icons/down.svg";
  }
});

q3.addEventListener("click", () => {
  if (!ans3.classList.contains("active")) {
    allAns.forEach((allA) => {
      allA.classList.remove("active");
    });
    expendAll.forEach((expendA) => {
      expendA.src = "../../../icons/down.svg";
    });
    expend3.src = "../../../icons/up.svg";
    ans3.classList.toggle("active");
  } else {
    ans3.classList.remove("active");
    expend3.src = "../../../icons/down.svg";
  }
});

q4.addEventListener("click", () => {
  if (!ans4.classList.contains("active")) {
    allAns.forEach((allA) => {
      allA.classList.remove("active");
    });
    expendAll.forEach((expendA) => {
      expendA.src = "../../../icons/down.svg";
    });
    expend4.src = "../../../icons/up.svg";
    ans4.classList.toggle("active");
  } else {
    ans4.classList.remove("active");
    expend4.src = "../../../icons/down.svg";
  }
});

q5.addEventListener("click", () => {
  if (!ans5.classList.contains("active")) {
    allAns.forEach((allA) => {
      allA.classList.remove("active");
    });
    expendAll.forEach((expendA) => {
      expendA.src = "../../../icons/down.svg";
    });
    expend5.src = "../../../icons/up.svg";
    ans5.classList.toggle("active");
  } else {
    ans5.classList.remove("active");
    expend5.src = "../../../icons/down.svg";
  }
});
