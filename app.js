const music = new Audio('Audio/3.mp3');
//mus.play();

const songs = [
    {
        id:  "1",
        songName: 'Love Me Like You Do <br> <div class="subtitle">Ellie Goulding</div>',
        poster: "IMG/2.jpg",
    },
    {
        id:  "2",
        songName: 'Perfect <br> <div class="subtitle">Ed Sheeran</div>',
        poster: "IMG/perfect.jpg",
    },
    {
        id:  "3",
        songName: 'Until I Found You <br> <div class="subtitle">Stephen Sanchez</div>',
        poster: "IMG/until.jpg",
    },
    {
        id: "4",
        songName: 'Let Me Down Slowly <br> <div class="subtitle">Alec Benjamin</div>',
        poster: "IMG/slowly.jpg",
    },
    {
        id:  "5",
        songName: 'Unholy <br> <div class="subtitle">Kim Petras | Sam Smith</div>',
        poster: "IMG/unholy.jpg",
    },
    {
        id:  "6",
        songName: 'Deva Deva <br> <div class="subtitle">Arijit Singh</div>',
        poster: "IMG/deva.jpg",
    },
    {
        id:  "7",
        songName: 'Enna Sona <br> <div class="subtitle">Arijit Singh</div>',
        poster: "IMG/ennas.jpg",
    },
    {
        id:  "8",
        songName: 'Ae Dil Hai Mushkil <br> <div class="subtitle">Arijit Singh</div>',
        poster: "IMG/adhm.jpg",
    },
    {
        id:  "9",
        songName: 'Hawayein <br> <div class="subtitle">Arijit Singh</div>',
        poster: "IMG/hawa.jpg",
    },
    {
        id:  "10",
        songName: 'Ve Mahii <br> <div class="subtitle">Arijit Singh</div>',
        poster: "IMG/vmahi.jpg",
    },
    {
        id:  "11",
        songName: 'Banarasiya <br> <div class="subtitle">Shreya Ghoshal</div>',
        poster: "IMG/banarasiya.jpg",
    },
    {
        id:  "12",
        songName: 'Nagad Sang Dhol <br> <div class="subtitle">Shreya Ghoshal</div>',
        poster: "IMG/dhol.jpg",
    },
    {
        id:  "13",
        songName: 'O Re Piya <br> <div class="subtitle">Shreya Ghoshal | Atif Aslam</div>',
        poster: "IMG/piya.jpg",
    },
    {
        id:  "14",
        songName: 'Ishaqazade <br> <div class="subtitle">Shreya Ghoshal</div>',
        poster: "IMG/ishaqa.jpg",
    },
    {
        id:  "15",
        songName: 'Soniyo O Soniyo <br> <div class="subtitle">Shreya Ghoshal | Sonu Nigam</div>',
        poster: "IMG/soni.jpg",
    },
    {
        id:  "16",
        songName: 'Aashayein <br> <div class="subtitle">KK</div>',
        poster: "IMG/aashayein.jpg",
    },
    {
        id:  "17",
        songName: 'O Meri Jaan <br> <div class="subtitle">KK</div>',
        poster: "IMG/jaan.jpg",
    },
    {
        id:  "18",
        songName: 'Tujhe Sochta Hoon <br> <div class="subtitle">KK</div>',
        poster: "IMG/sochta.jpg",
    },
    {
        id:  "19",
        songName: 'Mere Bina <br> <div class="subtitle">KK</div>',
        poster: "IMG/merebina.jpg",
    },
    {
        id:  "20",
        songName: 'Zindagi Do Pal Ki <br> <div class="subtitle">KK</div>',
        poster: "IMG/dipal.jpg",
    },
    {
        id:  "21",
        songName: 'Mahi Ve <br> <div class="subtitle">A. R. Rahman</div>',
        poster: "IMG/mahi.jpg",
    },
    {
        id:  "22",
        songName: 'Jashn-E-Bahara <br> <div class="subtitle">A. R. Rahman</div>',
        poster: "IMG/jeb.jpg",
    },
    {
        id:  "23",
        songName: 'Luka Chuppi <br> <div class="subtitle">A. R. Rahman</div>',
        poster: "IMG/luka.jpg",
    },
    {
        id:  "24",
        songName: 'Kun Faya Kun <br> <div class="subtitle">A. R. Rahman</div>',
        poster: "IMG/faya.jpg",
    },
    {
        id:  "25",
        songName: 'Tere Bina Beswaadi <br> <div class="subtitle">A. R. Rahman</div>',
        poster: "IMG/terebina.jpg",
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
     e.getElementsByTagName('img')[0].src = songs[i].poster;
     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//search data start
let searchresults = document.getElementsByClassName('searchresults')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    //console.log(id)
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
      <img src="${poster}" alt="">
                        <div class="cont">
                         ${songName}
                        </div>
    `;
    searchresults.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = searchresults.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('cont')[0];
        let text_value = as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) >-1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
        if (input.value == 0) {
            searchresults.style.display = "none";
        } else {
            searchresults.style.display = "";
        }
        

    }
})

//search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let i = 0;
let postermasterplay = document.getElementById('postermasterplay');
let downloadmusic = document.getElementById('downloadmusic');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        i = el.target.id;
        //console.log(index);
        music.src = `Audio/${i}.mp3`;
        /*postermasterplay.src = `IMG/${i}.jpg`;*/
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles = songs.filter((els) =>{
            return els.id == i;
        });

        songTitles.forEach(elss =>{
            let{songName, poster} = elss;
            title.innerHTML = songName;
            postermasterplay.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
});



let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
   // console.log(music_dur);

   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);
if(sec1 < 10){
    sec1 = `0${sec1}`
}
   currentend.innerText = `${min1}:${sec1}`;
   
   let min2 = Math.floor(music_curr / 60);
   let sec2 = Math.floor(music_curr % 60);
   if(sec2 < 10){
    sec2 = `0${sec2}`
}
   currentstart.innerText = `${min2}:${sec2}`;

   let progressBar = parseInt((music_curr / music_dur) * 100);
   seek.value = progressBar;
   //console.log(seek.value);
   let seekBar = seek.value;
   bar2.style.width = `${seekBar}%`;
   dot.style.left = `${seekBar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let volicon = document.getElementById('volicon');
let vol = document.getElementById('vol');
let volbar = document.getElementById('volbar');
let voldot = document.getElementById('voldot');


let popsongleft = document.getElementById('popsongleft');
let popsongright = document.getElementById('popsongright');
let popsong = document.getElementsByClassName('popsong')[0];

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.add('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        volicon.classList.add('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    volbar.style.width = `${vol_a}%`;
    voldot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    i -= 1;
    if(i < 1){
        i = Array.from(document.getElementsByClassName('songItem')).length;
    }
        music.src = `Audio/${i}.mp3`;
        /*postermasterplay.src = `IMG/${i}.jpg`;*/
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == i;
        });

        songTitles.forEach(elss =>{
            let{songName, poster} = elss;
            title.innerHTML = songName;
            postermasterplay.src = poster;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');

})

next.addEventListener('click',()=>{
    i ++;
    if(i > Array.from(document.getElementsByClassName('songItem')).length){
        i = 1;
    }
    music.src = `Audio/${i}.mp3`;
    /*postermasterplay.src = `IMG/${i}.jpg`;*/
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == i;
    });

    songTitles.forEach(elss =>{
        let{songName, poster} = elss;
        title.innerHTML = songName;
        postermasterplay.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});

popsongright.addEventListener('click',()=>{
    popsong.scrollLeft += 330;
});

popsongleft.addEventListener('click',()=>{
    popsong.scrollLeft -= 330;
});

let popartleft = document.getElementById('popartleft');
let popartright = document.getElementById('popartright');
let item = document.getElementsByClassName('item')[0];

popartright.addEventListener('click',()=>{
    item.scrollLeft += 330;
});

popartleft.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=>{
    let a =shuffle.innerHTML;

    switch (a){
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;


    }
});


const nextmusic = () =>{
    if (i == songs.length) {
        i = 1;
       } 
       else 
       {
        i++;
        }
            music.src = `Audio/${i}.mp3`;
            /*postermasterplay.src = `IMG/${i}.jpg`;*/
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            let songTitles = songs.filter((els) =>{
                return els.id == i;
            });
    
            songTitles.forEach(elss =>{
                let{songName, poster} = elss;
                title.innerHTML = songName;
                postermasterplay.src = poster;
            });
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
            makeAllplays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
   
}

const repeatmusic = () =>{
            i;
            music.src = `Audio/${i}.mp3`;
            /*postermasterplay.src = `IMG/${i}.jpg`;*/
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            let songTitles = songs.filter((els) =>{
                return els.id == i;
            });
    
            songTitles.forEach(elss =>{
                let{songName, poster} = elss;
                title.innerHTML = songName;
                postermasterplay.src = poster;
            });
    
            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
            makeAllplays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
   
}

const randommusic = () =>{
    if (i == songs.length) {
        i = 1;
       } 
       else 
       {
        i = Math.floor((Math.random()* songs.length) + 1);
        }
    music.src = `Audio/${i}.mp3`;
    /*postermasterplay.src = `IMG/${i}.jpg`;*/
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = songs.filter((els) =>{
        return els.id == i;
    });

    songTitles.forEach(elss =>{
        let{songName, poster} = elss;
        title.innerHTML = songName;
        postermasterplay.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[i-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

}


music.addEventListener('ended', ()=>{
       let b = shuffle.innerHTML;
       switch (b) {
        case 'repeat':
            repeatmusic();
            break;
        case 'next':
            nextmusic();
            break;
        case 'random':
            randommusic();
            break;
        
       }
});







