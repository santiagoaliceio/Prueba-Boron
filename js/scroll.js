window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").className = "header-none";
    document.getElementById("header-scrolled").className = "header-scrolled";
    document.getElementById("sidebar").className = "sidebar";
  } else {
    document.getElementById("header").className = "header";
    document.getElementById("header-scrolled").className = "header-none";
  }
}
