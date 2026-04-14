document.addEventListener("DOMContentLoaded", function () {
  let musicBtn = document.getElementById("musicBtn");
  let song = document.getElementById("song");
  let btn = document.getElementById("nextBtn");
  let continueBtn = document.getElementById("continueBtn");

  let container = document.querySelector(".container");
  let letterPage = document.getElementById("letterPage");

  let starsContainer = document.getElementById("stars");

  for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.className = "star";

    let size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    starsContainer.appendChild(star);
  }


  btn.onclick = function () {
    song.play().catch(() => { });
    goToNext(container, letterPage);
  };


  continueBtn.onclick = function () {
    let page3 = document.getElementById("page3");

    goToNext(letterPage, page3);

    setTimeout(() => {
      startPage3Animation();
    }, 1000);
  };

  function startPage3Animation() {

    let lines = [
      "But please believe me..",
      "I wish I could fix everything…",
      "I never meant to lose you…",
      "You still mean everything to me…🥺"
    ];

    let index = 0;
    let text = document.getElementById("page3Text");

    function showLine() {

      text.style.opacity = 0;

      setTimeout(() => {
        text.innerHTML = lines[index];
        text.style.opacity = 1;

        index++;

        if (index >= lines.length) {
          index = 0;
        }

      }, 500);
    }

    setInterval(showLine, 2500);
    showLine();
  }

  function goToNext(currentPage, nextPage) {

    currentPage.classList.add("exit-up");

    setTimeout(() => {

      currentPage.style.display = "none";

      setTimeout(() => {

        nextPage.classList.remove("hidden");

      }, 1000);

    }, 1000);
  }
  let readBtn = document.getElementById("readLetterBtn");

  if (readBtn) {
    readBtn.onclick = function () {

      let page3 = document.getElementById("page3");
      let page4 = document.getElementById("page4");

      goToNext(page3, page4);
    };
  }
  let needBtn = document.getElementById("needYouBtn");

  if (needBtn) {
    needBtn.onclick = function () {

      let page4 = document.getElementById("page4");
      let page5 = document.getElementById("page5");

      goToNext(page4, page5);
    };
  }

  let sorryBtn = document.getElementById("sorryBtn");

  if (sorryBtn) {
    sorryBtn.onclick = function () {

      let page5 = document.getElementById("page5");
      let page6 = document.getElementById("page6");

      goToNext(page5, page6);
    };
  }
  let yesBtn = document.getElementById("yesBtn");

  if (yesBtn) {
    yesBtn.onclick = function () {

      let page6 = document.getElementById("page6");
      let page7 = document.getElementById("page7");

      page6.classList.add("exit-up");

      setTimeout(() => {
        page6.style.display = "none";

        setTimeout(() => {
          page7.classList.remove("hidden");
        }, 1000);

      }, 1000);
    };
  }
  let giftBtn = document.getElementById("giftBtn");

  if (giftBtn) {
    giftBtn.onclick = function () {

      let page7 = document.getElementById("page7");
      let page8 = document.getElementById("page8");

      goToNext(page7, page8);
    };
  }
  let giftBox = document.getElementById("giftBox");

  if (giftBox) {
    giftBox.onclick = function () {

      let page8 = document.getElementById("page8");
      let page9 = document.getElementById("page9");

      goToNext(page8, page9);
    };
  }

  if (musicBtn && song) {
    musicBtn.onclick = function () {

      if (song.muted) {

        song.muted = false;
        musicBtn.innerHTML = "🔊";
        musicBtn.classList.remove("muted");
      } else {

        song.muted = true;
        musicBtn.innerHTML = "🔇";
        musicBtn.classList.add("muted");
      }

    };
  }
});

