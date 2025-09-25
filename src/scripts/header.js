const userCountryFlag = document.querySelector(".country-change");
import data from "../data/countries.json";
const countries = data.countries;

export const headerHTML = `
<header>
  <div class="left-side-header">
    <a href="/index.html">
      <img src="/images/logo/globeSpotLogo.png" alt="">
    </a>
  </div>

  <div class="middle-side-header">
    <a>Location</a>
    <a>Local Time</a>
    <a>Fun Facts</a>
    <a>Economy</a>
    <a>Weather</a>
    <a>About Us</a>
  </div>

  <div class="right-side-header">
    <a href="/users/sign_in.html" class="log-in">Log In</a>
    <a class="country-change">
      <img src="/images/icons/location-black.png" alt="">
    </a>
    <div class="user-country-dropdown"></div>
  </div>
</header>
`;

export function loadHeader() {
  const container = document.querySelector("#header-container");
  if (!container) {
    console.log('no header')
  };
  console.log('hahah')
  container.innerHTML = headerHTML;

  updateUserCountry();
}



export function updateUserCountry() {
  if (localStorage.getItem("userCountry")) {
    userCountryFlag.innerHTML = `
        <img class="user-country-img"  src="/images/flags/${localStorage
          .getItem("userCountry")
          .toLocaleLowerCase()}.svg" alt="">
        `;

    const dropdownModal = document.querySelector(".user-country-dropdown");
    let links = "";
    countries.forEach((i) => {
      links += `
            <button id="button-country-${i.code}" class="user-button">
            <img src="/images/flags/${i.code.toLowerCase()}.svg" class="user-links-img" />
                ${i.name}
            </button>
            `;
    });

    dropdownModal.innerHTML = links;
  }
}

document.addEventListener("DOMContentLoaded", (i) => {
  updateUserCountry();
});

document.querySelector(".country-change").addEventListener("click", () => {
  const dropdownModal = document.querySelector(".user-country-dropdown");

  countries.forEach((i) => {
    const button = document.querySelector(`#button-country-${i.code}`);

    if (button) {
      button.addEventListener("click", () => {
        if (localStorage.getItem("userCountry") === i.code) {
        } else {
          localStorage.setItem("userCountry", i.code);
          updateUserCountry();
          dropdownModal.style.display = "none";
          console.log(i.code);
        }
      });
    }
  });

  if (dropdownModal.style.display === "none") {
    dropdownModal.style.display = "flex";
  } else {
    dropdownModal.style.display = "none";
  }
});
