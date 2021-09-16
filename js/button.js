const tip_button = document.querySelector("#tip_button");


tip_button.addEventListener("mouseover", () => {
	tip_button.style.backgroundColor = "var(--white)";
	tip_button.style.borderRadius = "20px";
	tip_button.style.color = "var(--black)";
	tip_button.style.border = "1px solid var(--white)";
	tip_button.style.transition = "1s all";

});

tip_button.addEventListener("mouseout", () => {
	tip_button.style.border = "1px solid white";
	tip_button.style.background = "none";
	tip_button.style.borderRadius = "0px";
	tip_button.style.color = "var(--white)";
	tip_button.style.transition = "1s all";
});


