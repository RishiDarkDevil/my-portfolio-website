window.onload = function () {
<<<<<<< HEAD
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "View Portfolio";
=======
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Come back'
>>>>>>> 75f90faf6a75532095d37cfb33a5368472d41e42

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_male.svg'
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/My_Photo.png";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
      document.title = pageTitle;
      favicon.href = "./assets/images/My_Photo.png";
    } else {
      document.title = attentionMessage;
      favicon.href = "./assets/images/My_Photo.png";
    }
  }
}
