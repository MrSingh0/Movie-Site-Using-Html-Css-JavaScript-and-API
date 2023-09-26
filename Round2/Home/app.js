let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
var title = document.getElementById('title');
var video = document.getElementById('myVideo');
let para = document.getElementById('para');
let label = document.getElementById('label');
let gen = document.getElementById('gen');
let year = document.getElementById('year');
let rate = document.getElementById('rate');
let link = document.getElementById('link');
let pop = document.getElementById('pop');
let vid = document.querySelector('.vid');
let value = document.querySelector(".value");
let sub = document.querySelector(".submit");
let card = document.querySelector(".card");
let rcards = document.querySelector('.rcards');
let tcards = document.querySelector('.tcards');
let scards = document.querySelector('.scards');
let pcards = document.querySelector('.pcards');
let searching = document.querySelector(".searching");
let valu = document.querySelector(".valu");
let search_data = document.querySelector(".search_data");

let search = "https://api.themoviedb.org/3/search/movie?api_key=78171c84f7f7f7823c86e398c0fbe59c&query=";

let Oname = "";

searching.addEventListener('click', async () => {
  Oname = valu.value;
  search_data.style.display = "block";
  await ser();
});

async function ser() {
  let data = await get_data(search);


  data.results.forEach((ele, i) => {
    let { original_title, original_language, release_date, backdrop_path, poster_path, vote_average } = ele;
    let seac = document.createElement('a');
    seac.classList.add('seac');
    seac.href = "#";
    seac.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" srcset="">
      <div class="conti">
          <h3>${original_title}</h3>
          <p>${original_language}, ${release_date}<span>IMDB</span><i class="bi bi-star-fill"></i>${vote_average}</p>
      </div>`;
    search_data.appendChild(seac);
  });
}

async function get_data(search) {
  try {
    const response = await axios.get(`${search}`);
    return response.data;
  } catch (error) {
    console.log("Error Occurred:", error);
  }
}



card1.addEventListener('click', () => {
    video.src = 'assets/video/John.mp4';
    title.innerText = "John Wick-4";
    para.innerText = "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.";
    label.innerText = "Amazon Prime";
    year.innerText = "2023";
    rate.innerText = "7.8";
    pop.src = "https://www.youtube.com/watch?v=qEVUtrk8_B4&ab_channel=LionsgateMovies"
});

card2.addEventListener('click', () => {
    video.src = 'assets/video/Jawan.mp4';
    title.innerText = "Jawan";
    para.innerText = "A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many."
    label.innerText = "Red chilli";
    year.innerText = "2023";
    rate.innerText = "7.6";
    pop.src = "https://www.youtube.com/watch?v=COv52Qyctws&ab_channel=RedChilliesEntertainment";
});

card3.addEventListener('click', () => {
    video.src = 'assets/video/Skand.mp4';
    title.innerText = "Skanda";
    para.innerText = "Skanda is an upcoming Indian Telugu-language action drama film directed by Boyapati Sreenu and produced by Srinivasaa Chitturi under Srinivasaa Silver Screen in collaboration with Zee Studios. The film features Ram Pothineni, Sreeleela, Saiee Manjrekar and Prince Cecil."
    label.innerText = "Zee Studios";
    year.innerText = "2023";
    rate.innerText = "7";
    link.href = "https://www.youtube.com/watch?v=rFnxNiiw1wI&ab_channel=JungleeMusicTelugu";
});

card4.addEventListener('click', () => {
    video.src = 'assets/video/Gandh.mp4';
    title.innerText = "Gandeevadhari Arjuna";
    para.innerText = "A combat officer is tasked with the security of an environmental minister attending a UN summit; there is also a personal reason to fight against climate change and biohazard waste. A combat officer is tasked with the security of an environmental minister attending a UN summit; there is also a personal reason to fight against climate change and biohazard waste"
    label.innerText = "Cloud 9";
    year.innerText = "2023";
    rate.innerText = "7.1";
    link.href = "https://www.youtube.com/watch?v=wwCAv5rDEs8&ab_channel=JungleeMusicTelugu";
});

card5.addEventListener('click', () => {
    video.src = 'assets/video/Hidden.mp4';
    title.innerText = "Hidden Strike";
    para.innerText = "Two former soldiers face nonstop danger as they travel along one of the most dangerous roads in the world. Two ex-special forces soldiers must escort a group of civilians along Baghdad's Highway of Death to the safety of the Green Zone."
    label.innerText = "A Netflix Original Film";
    year.innerText = "2023";
    rate.innerText = "5.3";
    link.href = "https://www.youtube.com/watch?v=Kut3nPN04U4&ab_channel=MovieTrailersSource";
});





let url = "https://api.themoviedb.org/3/movie/";
let tv = "https://api.themoviedb.org/3/tv/";
let key = "78171c84f7f7f7823c86e398c0fbe59c";
let r = ["now_playing", "popular", "top_rated", "on_the_air"];


async function recently() {
    let h = await get_data(url, r[0]);

    h.results.forEach((ele, i) => {
        let { original_title, original_language, backdrop_path, poster_path, vote_average } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = "#";
        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="poster" alt="">
        <div class="rest_card">
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="">;
            <div class="cont">
                <h4>"${original_title}"</h4>
                <div class="sub">
                    <p>"${original_language}"</p>
                    <h3><span>Rating</span>"${vote_average}"</p></h3>
                </div>
            </div>
        </div>`
        rcards.appendChild(card);
    });

}

async function popular() {
    let h = await get_data(url, r[1]);

    h.results.forEach((ele, i) => {
        let { original_title, original_language, backdrop_path, poster_path, vote_average } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = "#";
        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="poster" alt="">
        <div class="rest_card">
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="">;
            <div class="cont">
                <h4>"${original_title}"</h4>
                <div class="sub">
                    <p>"${original_language}"</p>
                    <h3><span>Rating</span>"${vote_average}"</p></h3>
                </div>
            </div>
        </div>`
        pcards.appendChild(card);
    });

}

async function best() {
    let h = await get_data(url, r[2]);

    h.results.forEach((ele, i) => {
        let { original_title, original_language, backdrop_path, poster_path, vote_average } = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = "#";
        card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}" class="poster" alt="">
        <div class="rest_card">
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="">;
            <div class="cont">
                <h4>"${original_title}"</h4>
                <div class="sub">
                    <p>"${original_language}"</p>
                    <h3><span>Rating</span>"${vote_average}"</p></h3>
                </div>
            </div>
        </div>`
        tcards.appendChild(card);
    });

}

async function get_data(url, endpoint) {
    try {
        const response = await axios.get(`${url}${endpoint}?api_key=${key}`);
        return response.data;
    }
    catch {
        console.log("Error Occured");
    }
}

recently();
popular();
best();


