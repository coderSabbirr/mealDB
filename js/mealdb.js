const searchFood = () => {
    const searchField = document.getElementById('search-filed')
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
       console.log('error');
    } 
    else {
        // console.log(searchText);

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            // console.log(url);
            .then(response => response.json())
            .then(data => displaySeacrhReuslt(data.meals));
    }


}


const displaySeacrhReuslt = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = ` 
            <div onclick="loadMealDeatail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            
                </div>
            </div>
    `;


        searchResult.appendChild(div)
    })
}


const loadMealDeatail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDeatils(data.meals[0]));

}


const displayMealDeatils = meal => {
    const mealDeatils = document.getElementById('meal-deatis')
    mealDeatils.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDeatils.appendChild(div);
}