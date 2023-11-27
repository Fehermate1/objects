let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Anakin", lastName: "Skywalker", job: "jedi"},
    {firstName: "Luke", lastName: "Skywalker", job: "jedi"},
    {firstName: "Din", lastName: "Djarin", job: "fejvadász"},
  ];

  function renderHeroes() {
    let heroesDiv = document.getElementById("heroes");
    heroesDiv.innerHTML = "";
    heroes.forEach(hero => {
      let heroCard = `
        <div class="card">
          <h3>${hero.firstName} ${hero.lastName}</h3>
          <p>${hero.job}</p>
        </div>
      `;
      heroesDiv.innerHTML += heroCard;
    });
  }

  renderHeroes();