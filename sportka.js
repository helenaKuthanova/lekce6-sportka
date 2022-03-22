// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 49
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let tazenaCisla = [];
let vyherniCisla = document.querySelector("#vyherni-cisla");

// vytvořím osudí
for (let i=1; i<50; i++) {
    osudi.push(i);
}

// 7 náhodných čísel z osudí
for (let i=0; i<7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];
    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1); // odstraňuju číslo na výherním indexu

    console.log(tazenaCisla)
    console.log(osudi)
}

// výpis do HTML
for (let i=0; i < tazenaCisla.length; i++) {
    vyherniCisla.innerHTML += "<span class='cislo'>" + tazenaCisla[i] + "</span>";
}