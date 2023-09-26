let btn = document.querySelector(".bt");
let year = document.querySelector(".year");
let lang = document.querySelector(".lang");
let genre = document.querySelector(".genre");
let rcards = document.querySelector(".rcards");
let scards = document.querySelector(".scards");
let check = document.getElementById("menu-toggle");
let extra = document.querySelector(".extra");
let page = document.querySelector(".page");
let inf = document.querySelector(".inf");
let clos = document.querySelector(".clos");
let inp = document.querySelector(".inp");
let searching = document.querySelector(".searching");
let value = document.querySelector(".value");
let search_data = document.querySelector(".search_data");

let url = "https://api.themoviedb.org/3/discover/movie?api_key=78171c84f7f7f7823c86e398c0fbe59c";


btn.addEventListener("click", async () => {
  check.checked = false;
  extra.style.display = "none";
  let lan = lang.value;
  let yea = year.value;
  let gen = genre.value;

  let apiUrl = url;

  if (yea) {
    apiUrl += `&primary_release_year=${yea}`;
  }

  if (gen) {
    apiUrl += `&with_genres=${gen}`;
  }

  if (lan) {
    apiUrl += `&with_original_language=${lan}`;
  }

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.results) {
      rcards.innerHTML = "";

      data.results.forEach((ele, i) => {
        let {
          original_title,
          original_language,
          backdrop_path,
          overview,
          poster_path,
          vote_average,
        } = ele;
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="poster" alt="">
                    <div class="rest_card">
                        <div class="cont">
                            <h4>${original_title}</h4>
                            <div class="sub">
                                <p>${original_language}</p>
                                <h3><span>Rating:</span> ${vote_average}</h3>
                            </div>
                        </div> 
                    </div>`;
        card.addEventListener("click", () => {
          page.style.display = "flex";
          let title = original_title;
          inf.innerHTML = `
                    <img class="back" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="">
                    <div class="conte">
                    <img class="front" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
                    <div class="data">
                    <h1 class="title">${original_title}</h1>
                    <p class="about">${overview}</p>
                    <div class="bten">
                        <button class="play">Play</button>
                        <button class="rel">${original_language}</button>
                        <button class="rat">${vote_average}</button>
                    </div>
                </div>
            </div>`;
        });

        rcards.appendChild(card);
      });
    } else {
      console.error("No results found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

clos.addEventListener("click", () => {
  page.style.display = "none";
});







































// let btn = document.querySelector(".bt");
// let year = document.querySelector(".year");
// let lang = document.querySelector(".lang");
// let genre = document.querySelector(".genre");
// let rcards = document.querySelector(".rcards");
// let scards = document.querySelector(".scards");
// let check = document.getElementById("menu-toggle")
// let extra = document.querySelector(".extra");
// let page = document.querySelector(".page");
// let inf = document.querySelector(".inf");
// let clos = document.querySelector(".clos");

// let url = "https://api.themoviedb.org/3/discover/movie?api_key=78171c84f7f7f7823c86e398c0fbe59c";

// btn.addEventListener('click', async () => {
//     check.checked = false;
//     extra.style.display = "none";
//     let lan = lang.value;
//     let yea = year.value;
//     let gen = genre.value;

//     // Build the base URL
//     let apiUrl = url;

//     // Add year filter if selected
//     if (yea) {
//         apiUrl += `&primary_release_year=${yea}`;
//     }

//     // Add genre filter if selected
//     if (gen) {
//         apiUrl += `&with_genres=${gen}`;
//     }

//     // Add language filter if selected
//     if (lan) {
//         apiUrl += `&with_original_language=${lan}`;
//     }

//     try {
//         let response = await fetch(apiUrl);
//         let data = await response.json();

//         if (data.results) {
//             rcards.innerHTML = "";

//             data.results.forEach((ele, i) => {
//                 let { original_title, original_language, backdrop_path, overview, poster_path, vote_average } = ele;
//                 let card = document.createElement('div');
//                 card.classList.add('card');
//                 card.innerHTML = `
//                     <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="poster" alt="">
//                     <div class="rest_card">
//                         <div class="cont">
//                             <h4>${original_title}</h4>
//                             <div class="sub">
//                                 <p>${original_language}</p>
//                                 <h3><span>Rating:</span> ${vote_average}</h3>
//                             </div>
//                         </div>
//                     </div>`;
//                 card.addEventListener('click', () => {
//                     page.style.display = "flex";
//                     let title = original_title;
//                     inf.innerHTML = `
//                     <img class="back" src="https://image.tmdb.org/t/p/w500/${backdrop_path}"alt="">
//                     <div class="conte">
//                     <img class="front" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
//                     <div class="data">
//                     <h1 class="title">${original_title}</h1>
//                     <p class="about">${overview}</p>
//                     <div class="bten">
//                         <button class="play">Play</button>
//                         <button class="rel">${original_language}</button>
//                         <button class="rat">${vote_average}</button>
//                     </div>
//                 </div>
//             </div>
//             <h3>Suggestion</h3>`;
//                 });


//                 const playButton = card.querySelector('.play');
//                 playButton.addEventListener('click', () => {
//                     // Call the playTrailer function with the movie ID
//                     playTrailer(ele.id);
//                 });
//                 rcards.appendChild(card);
//             });
//         } else {
//             console.error("No results found.");
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// });

// clos.addEventListener('click', () => {
//     page.style.display = "none";
// })






