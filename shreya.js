const music = new Audio('audio/1.mp3');

//create array

const songs= [
    {
        id: 1,
        songName: `Megham Karukatha
        <br>
        <div class="subtitle">Thiruchitrambalam</div>`,
        poster:"img/shreya/1.jpg"
    },
    {
        id: 2,
        songName: `Arabic Kuthu
        <br>
        <div class="subtitle">Beast</div>`,
        poster:"img/shreya/2.jpg"
    },
    {
        id: 3,
        songName: `Pathala Pathala
        <br>
        <div class="subtitle">Vikram</div>`,
        poster:"img/shreya/3.jpg"
    },
    {
        id: 4,
        songName: `Kanja Poovu Kannala
        <br>
        <div class="subtitle">KGF-2</div>`,
        poster:"img/shreya/4.jpg"
    },
    {
        id: 5,
        songName: `Kaadhal En Kaviye
        <br>
        <div class="subtitle">Sid Sriram</div>`,
        poster:"img/shreya/5.jpg"
    },
    {
        id: 6,
        songName: `Adiye
        <br>
        <div class="subtitle">Bachelor</div>`,
        poster:"img/shreya/6.jpg"
    },
    {
        id: 7,
        songName: `Adheera
        <br>
        <div class="subtitle">Cobra</div>`,
        poster:"img/shreya/7.jpg"
    },
    {
        id: 8,
        songName: `Tum Tum
        <br>
        <div class="subtitle">Enemy</div>`,
        poster:"img/shreya/8.jpg"
    },
    {
        id: 9,
        songName: `Mudhal Nee Mudivum Nee
        <br>
        <div class="subtitle">Mudhal Nee Mudivum Nee</div>`,
        poster:"img/shreya/9.jpg"
    },
    {
        id: 10,
        songName: `Mangalyam
        <br>
        <div class="subtitle">Eeswaran</div>`,
        poster:"img/shreya/10.jpg"
    },
    {
        id: 11,
        songName: `Param Sundari
        <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster:"img/shreya/11.jpg"
    },
    {
        id: 12,
        songName: `Boom Padi
        <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster:"img/shreya/12.jpg"
    },
    {
        id: 13,
        songName: `Samjhawan
        <br>
        <div class="subtitle">Humpty Sharma Ki Dulhania</div>`,
        poster:"img/shreya/13.jpg"
    },
    {
        id: 14,
        songName: `Radha
        <br>
        <div class="subtitle">Student of the year</div>`,
        poster:"img/shreya/14.jpg"
    },
    {
        id: 15,
        songName: `Chikni Chameli
        <br>
        <div class="subtitle">Agneepath</div>`,
        poster:"img/shreya/15.jpg"
    },
    {
        id: 16,
        songName: `Jab Saiyaan
        <br>
        <div class="subtitle">Gangubai Kathiawadi</div>`,
        poster:"img/shreya/16.jpg"
    },
    {
        id: 17,
        songName: `Taar Maar Takkar Maar
        <br>
        <div class="subtitle"></div>`,
        poster:"img/shreya/17.jpg"
    },
    {
        id: 18,
        songName: `Chaka Chak
        <br>
        <div class="subtitle">Atrangi Re</div>`,
        poster:"img/shreya/18.jpg"
    },
    {
        id: 19,
        songName: `Dil
        <br>
        <div class="subtitle">Ek Villain Returns</div>`,
        poster:"img/shreya/19.jpg"
    },
    {
        id: 20,
        songName: `Go Go Govinda
        <br>
        <div class="subtitle">Oh My God</div>`,
        poster:"img/shreya/20.jpg"
    },
]
/*Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}
)*/
//search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href ="#"+ id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=> {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
        wave.classList.remove('active2');
    }
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgba(105, 105, 170, .0)';
    })
} 
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music =document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeALLPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/shreya/${index}.mp3`;
        poster_master_play.src=`img/shreya/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        download_music.href =`audio/shreya/${index}.mp3`;
        //download_music.setAttribute('download', songName);
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName,poster} = elss;
          title.innerHTML = songName;
          download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgba(105, 105, 170, .1)";
        wave.classList.add('active2'); 
    })
})
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft +=330;
});

pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -=330;
});

/*let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=> {
    if(vol.value == 0){
        vol_icon.classList.remove('bi bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol.value / 100;
});
*/

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime =seek.value * music.duration / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
    index -=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `audio/shreya/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName,poster} = elss;
          title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgba(105, 105, 170, .1)";
        wave.classList.add('active2')
});

next.addEventListener('click', ()=> {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;

    }
    music.src = `audio/shreya/${index}.mp3`;
        poster_master_play.src=`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let{songName,poster} = elss;
          title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgba(105, 105, 170, .1)";
        wave.classList.add('active2')
});

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}
);

//let poster_master_play = document.getElementById('poster_master_pla
