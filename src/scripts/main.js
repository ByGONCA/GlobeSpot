import "../styles/main.css";

document.addEventListener("DOMContentLoaded", (event) => {
  document.body.innerHTML = `
    <div id="modal" class="main-modal">
      <div id="upper-modal" class="upper-modal">
        <h1> 
            Welcome to GlobeSpot
        </h1>

        <h4>
            Discover everything you need to know about a country in one place:
        </h4>

        <p>
            &#x2022 Local Time & Time Zones
        </p>
        <p>
            &#x2022 Real-time Weather
        </p>
        <p>
            &#x2022 Maps & Location Info
        </p>
        <p>
            &#x2022 Holidays & Important Dates
        </p>
        <p>
            &#x2022 Economy & Statistics
        </p>
      </div>
    <div id="lower-modal" class="lower-modal">
        <button>
            Choose a Country
        </button>
        <button>
            Your Country
        </button>
        <footer>
        Using this button you give us acess to your basic information.
        </footer>
      </div>
    </div>
    `;
});
