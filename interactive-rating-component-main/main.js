const ratings = document.querySelectorAll(".ratings");
const submit = document.getElementById("submit");

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const target = e.currentTarget;

    if (target) {
      target.classList.toggle("checked");
      target.classList.remove("hover:bg-MediumGrey");
      rating.classList.add("bg-MediumGrey");
    } else {
      target.classList.remove("checked");
      target.classList.remove("hover:bg-MediumGrey");
      rating.classList.remove("bg-MediumGrey");
    }
  });
});
