import "../styles/main.css";
import data from "../data/countries.json";
import "./header.js"
import "./background.js"
import { updateUserCountry, loadHeader } from './header.js'
const countries = data.countries;
const modalDIV = document.querySelector("#modal");

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

if (localStorage.getItem("userCountry")) {
} else {
  document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#modal").style.display = "block";
    const userCountry = document.querySelector("#user-country");
    const chooseCountry = document.querySelector("#choose-country");
    const modal = document.querySelector(".modal-dropdown");
    
    let links = "";
    countries.forEach((i) => {
      links += `
            <button id="button-${i.code}">
            <img src="/images/flags/${i.code.toLowerCase()}.svg" class="links-img" />
                ${i.name}
            </button>
            `;
    });

    modal.innerHTML = links;

    chooseCountry.addEventListener("click", (i) => {
      if (modal.style.display === "none") {
        modal.style.display = "flex";
      } else {
        modal.style.display = "none";
      }
    });
    countries.forEach((i) => {
      const button = document.querySelector(`#button-${i.code}`);

      if (button) {
        button.addEventListener("click", () => {
          if (localStorage.getItem("userCountry") === i.code) {
          } else {
            localStorage.setItem("userCountry", i.code);
            console.log(i.code);
          }
          updateUserCountry()
          modalDIV.style.display = "none";
        });
      }
    });

    // NOTE: User Country (IP ADDRESS)
    userCountry.addEventListener("click", (i) => {
      localStorage.setItem("userPrivacy", "true");
      userIpAddress().then((data) => {
        fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=at_oLQZT7zyqACOYSM4DFiP7DmP0WvQS&ipAddress=${data.ip}`
        )
          /* INFO: IP API PARAMETERS
ip: "***.**.*.***"
isp: "MEO Residential"

location:

country: "PT"
region:"Distrito de Santarém"
timezone: "+01:00"
*/
          .then((response) => response.json())
          .then((data) => {
            if (localStorage.getItem("userCountry") === data.location.country) {
            } else {
              localStorage.setItem("userCountry", data.location.country);
              console.log(localStorage.getItem("userCountry"));
            }
          });
      });
      modalDIV.style.display = "none";
    });
  });
}
export async function userIpAddress() {
  return fetch("https://api.ipify.org?format=json").then((response) =>
    response.json()
  );
}