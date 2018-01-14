function clickMeal(mealId) {
	var meal = document.querySelector("" + mealId);
	meal.addEventListener("click", function() {
		meal.classList.remove("bg-danger");
		meal.classList.add("bg-success");
	});
}

clickMeal("#meal1");
clickMeal("#meal2");
clickMeal("#meal3");
clickMeal("#meal4");
	
	