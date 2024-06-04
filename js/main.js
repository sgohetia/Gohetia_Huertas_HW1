(function () {
  console.log("linked!"); //This means that our JS is connected

  //This script here is for the burger menu toggle on mobile display
  //To select the nav-menu, menu-icon and the link inside the menu-icon we use the getElementById and querySelector

  const iconNav = document.querySelector("#menu-icon");
  const navMenu = document.querySelector("#nav-menu");
  const iconLink = iconNav.querySelector("a");

  //Then to toggle the active class on the nav-menu when clicked, we add the event listener to the menu-icon
  iconNav.addEventListener("click", function (event) {
    event.preventDefault(); //This will prevent the default behavior of the <a> (anchor tag) when clicked

    //In this condition, we change the icon inside the menu-icon based on whether the nav-menu is active or not.
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      iconLink.innerHTML = "<ion-icon name='menu-outline'></ion-icon>";
    } else {
      navMenu.classList.add("active");
      iconLink.innerHTML = "<ion-icon name='close-outline'></ion-icon>";
    }
  });

  //This script here is for the SVG icon interaction when clicked
  //To select all elements in the node list we use querySelectorAll
  const clickFruits = document.querySelectorAll(".icon-container object");
  console.log(clickFruits);

  //In this condition or function, we implement it directly to the SVG using the script tag since we are using Object tag.

  //This is a funtion to execute the event for the forEach method
  // function logId() {
  //   console.log(this.id);
  // }
  //This is a loop through the clickFruits nodelist usig forEach method
  // clickFruits.forEach(function (object) {
  //   object.addEventListener("click", logId);
  // });
})();
