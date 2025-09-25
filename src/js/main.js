document.addEventListener("DOMContentLoaded", function () {
  const exercice1 = document.querySelector("#exercice-1");
  const exercice2 = document.querySelector("#exercice-2");
  const exercice3 = document.querySelector("#exercice-3");

  if (exercice1) {
    // Ecrire ici tout lquerySelector()e code pour l'exercice 1: Sélecteurs JavaScript
    //document.querySelector('[data-type="broccoli"]').remove(".broccoli");
    //document.querySelector("#green-veggie").remove(".broccoli");
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
    document.querySelector(".broccoli").remove();
  }

  if (exercice2) {
    // Ecrire ici tout le code pour l'exercice 2: Modification des classes
    document.querySelector(".pizza.raw").classList.add("cooked");
    document.querySelector(".pizza.hot").classList.remove("burned");
    document.querySelector("#pizza-special").classList.toggle("highlighted");
    document
      .querySelector('[data-type="pizza"]')
      .classList.add("premium", "deluxe");

    document.querySelector(".pizza.cold.reheated").classList.remove("cold");
    document.querySelector("#leftover-pizza").classList.add("hot");

    document
      .querySelector("#pizza-resize")
      .classList.replace(".pizza regular-size", '[data-order="large"]');
  }
  if (exercice3) {
    // Ecrire ici tout le code pour l'exercice 3: Ecouteurs d'événement
    const heeee = document.querySelector("#exercice-3-1");

    heeee.addEventListener("click", function () {
      heeee.classList.add("highlight");
    });

    const bhaa = document.querySelector("#exercice-3-2 button");
    const ha = document.querySelector("#exercice-3-2");

    bhaa.addEventListener("click", function () {
      ha.classList.toggle("highlight");
    });

    const raaah = document.querySelector("#exercice-3-3");

    raaah.addEventListener("mouseenter", function () {
      raaah.classList.add("highlight");
    });

    raaah.addEventListener("mouseleave", function () {
      raaah.classList.remove("highlight");
    });
  }
});
