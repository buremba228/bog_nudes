// Получаем элементы DOM
const audio = document.getElementById('bgMusic');
const startButton = document.getElementById('startButton');
const exitButton = document.getElementById('exitButton');
const backgroundGifs = document.getElementById('background-gifs');
const welcomeText = document.getElementById('welcomeText');
const scaryImage = document.getElementById('scary-image');
const audioHor = new Audio();
audioHor.preload = 'auto';
audioHor.src = 'files/strashnye-zvuki-sirena.mp3';
const scareSound = new Audio();
scareSound.preload = 'auto';
scareSound.src = 'files/phantom-mallie-screamer.mp3';
const scareSound1 = new Audio();
scareSound1.preload = 'auto';
scareSound1.src = 'files/mixkit-cinematic-whoosh-deep-impact-1143.mp3';
const kikli = new Audio();
kikli.preload = 'auto';
kikli.src = 'files/56b309777180ab6.mp3';
let isMuted = false;
let isPlaying = false;
let scareTriggered = false;
let audioPlayed = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const horZv = ['files/gdfgdgf.mp3',]
// Массив гифок (замените на свои URL)
const gifsDef = [{ normal: 'https://media1.tenor.com/m/slSkVdQDJ74AAAAd/scary-dude-slamming-his-hand-against-the-screen-breaking-it.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
    { normal: 'https://media.tenor.com/lINLTLRoEFAAAAAj/scary.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
     { normal: 'https://media.tenor.com/RO7kryZdGWUAAAAj/fnaf-freddy.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
      { normal: 'https://media1.tenor.com/m/46ziTEuUqO4AAAAd/scary-twilight-sparkle.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
       { normal: 'https://media.tenor.com/W92_0Xh2XTMAAAAj/kuchisake-0nna-nexbot.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
        { normal: 'https://media.tenor.com/EZn-kDHBDIwAAAAj/kitty-cat.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
         { normal: 'https://media1.tenor.com/m/UrgclUKRT7AAAAAd/scary-ghost.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
          { normal: 'https://media.tenor.com/s0VCX1AsJoUAAAAj/cartoon-cat-trevor-henderson.gif', hover: 'https://media.tenor.com/Hm9Pxru3YrEAAAAi/scary-creepy.gif' },
           { normal: 'https://media1.tenor.com/m/juLrdDA4ocQAAAAd/yapping-creepy.gif', hover: 'https://media1.tenor.com/m/B3jeoS7CfZQAAAAd/patternbase-8-bit.gif' },
            { normal: 'https://media.tenor.com/X5cozBeliO4AAAAj/colin-raff-grotesque.gif', hover: 'https://media1.tenor.com/m/B3jeoS7CfZQAAAAd/patternbase-8-bit.gif' },
             

];
var badGif = ['https://media1.tenor.com/m/fLtzQ_cgp5AAAAAC/cant-sleep.gif'];
var goodGif = 'https://media1.tenor.com/m/B3jeoS7CfZQAAAAd/patternbase-8-bit.gif';
var Gorin = 'https://media1.tenor.com/m/TAnNY98-iA4AAAAd/gennadiy-gorin.gif';
// Функция для создания гифок на заднем фоне
function createGifBackground() {
    var kol = parseInt((document.documentElement.scrollWidth*document.documentElement.scrollHeight)/19800);
    var kox = [];
    var kodi = [];
    var GoodWay = 0;
    while(kox.length<8){
        var kk = getRandomInt(kol);
        if(!kox.includes(kk)){
            kox.push(kk);
            if(kox.length == 1)
                GoodWay = kk;
            else kodi.push(kk);
        }
    }
    for(var i = 0; i<kol;i++){
        const gifItem = document.createElement('div');
        var im = getRandomInt(gifsDef.length);
        gifItem.className = 'gif-item';
        gifItem.style.backgroundImage = `url(${gifsDef[im].normal})`;
        
        // Сохраняем URL обычной и hover гифки в data-атрибутах
        gifItem.dataset.normal = gifsDef[im].normal;
        if(GoodWay==i)
            gifItem.dataset.hover = Gorin;
        else if(kodi.includes(i))
            gifItem.dataset.hover = badGif[getRandomInt(badGif.length)];
        else{
        gifItem.dataset.hover = goodGif;
        gifItem.addEventListener('mouseleave', function() {
            this.style.backgroundImage = `url(${this.dataset.normal})`;
        });
        }
        // Обработчики событий для смены гифок
        gifItem.addEventListener('click', function() {
            this.style.backgroundImage = `url(${this.dataset.hover})`;
            this.style.backgroundSize = 'cover';
            CheckDi(this);
        });
        
        
        
        backgroundGifs.appendChild(gifItem);
    }
}
function CheckDi(gifsa){
    if(badGif.includes(gifsa.dataset.hover)){
        clearInterval(fisx);
        FirstSpok();
    }
}
function FirstSpok(){
    audio.pause();
    audioHor.play();
    var koma = setInterval(()=>{if(backgroundGifs.children.length == 0){ clearInterval(koma);setTimeout(()=>{startButton.remove();kikli.play();},1000);
    setTimeout(()=>{exitButton.remove();kikli.play();},2000);
    setTimeout(()=>{document.getElementById('textContainer').remove();kikli.play();},4000);
    setTimeout(()=>{dot.style.display = 'block';audioHor.pause();scareSound1.play(); document.addEventListener('mousemove', function(e) {
                if (scareTriggered) return;
                
                const dotRect = dot.getBoundingClientRect();
                const dotCenter = {
                    x: dotRect.left + dotRect.width / 2,
                    y: dotRect.top + dotRect.height / 2
                };
                
                const distance = Math.sqrt(
                    Math.pow(e.clientX - dotCenter.x, 2) + 
                    Math.pow(e.clientY - dotCenter.y, 2)
                );
                
                
                
                // Увеличиваем точку и меняем цвет при приближении
                const scale = 1 + (150 / Math.max(distance, 1));
                dot.style.transform = `scale(${Math.min(scale, 3)})`;
                
                // Меняем цвет точки в зависимости от расстояния
                
                
                // Если расстояние меньше 50px - запускаем скример
                if (distance < 100 && !scareTriggered) {
                    triggerScare();
                    scareTriggered = true;
                }
            });},7000);
}
        else {backgroundGifs.children[getRandomInt(backgroundGifs.children.length)].remove();}
    },130);
    
}
function getRandomPosition() {
            const x = Math.random() * (window.innerWidth - 200) + 100;
            const y = Math.random() * (window.innerHeight - 100) + 50;
            return { x, y };
        }
function moveButton(button) {
            const position = getRandomPosition();
        
           // button.classList.add('teleport');
            button.style.left = `${position.x}px`;
            button.style.top = `${position.y}px`;
            button.style.transform = 'translate(0, 0)';
            
          
                button.classList.remove('teleport');
            
        }
        
        
var Kom = 100;
var fisx = setInterval(()=>{ChangeGif();},Kom);
function ChangeGif(){
    
    var len =getRandomInt(backgroundGifs.children.length);
     var im = getRandomInt(gifsDef.length);
    if(getRandomInt(2)==1)
        backgroundGifs.children[len].style.backgroundSize = 'auto';
    else backgroundGifs.children[len].style.backgroundSize = 'cover';
    backgroundGifs.children[len].dataset.normal = gifsDef[im].normal;
    backgroundGifs.children[len].style.backgroundImage = `url(${gifsDef[im].normal})`;
}
var cliksDo = 0;

 function addNewText() {
          
            cliksDo++;
            // Создаем новый элемент с текстом
            
            const newText = document.createElement('h1');
            newText.className = 'new-text';
            newText.textContent = 'Добро пожаловать';
             if(cliksDo>7){
                newText.style.color = '#c70303ff';
                
            }
            if(cliksDo==10){
                setInterval(()=>{addNewText();},200);
            }
            // Добавляем в контейнер
            textContainer.appendChild(newText);
            
            // Добавляем обработчик для нового текста
            newText.addEventListener('click', addNewText);
           
            
        }
// Функция для начала воспроизведения
function start() {
    if(!isPlaying)
    audio.play().then(() => {
        isPlaying = true;
        
    }).catch(error => {
        console.log('Ошибка воспроизведения: ', error);
       // alert('Не удалось воспроизвести музыку. Возможно, файл не найден или формат не поддерживается.');
    });
}

 
setInterval(()=>{ moveButton(startButton);},3000);
setInterval(()=>{ moveButton(exitButton);},5000);
// Функция выхода
var answerWhenOut = ['Малыш, попридержи коней, ты только зашел, будь тактичен со мной','Я тебя чем то обидел? Зачем ты нажал на эту кнопку, я просто хочу найти себе друзей','Не уходи...побудь еще немного рядом...','Любопытный такой) Давай не будем думать о таком))']
function exit() {
   alert(answerWhenOut[getRandomInt(answerWhenOut.length)],);
}

// Назначаем обработчики событий

            function triggerScare() {
                // Показываем страшное изображение
                scaryImage.src ='https://media1.tenor.com/m/PBRd50IUdbIAAAAC/creepy-woman-talking.gif' ;
               scaryImage.style.display = 'flex';
                
                // Воспроизводим звук
                if (!audioPlayed) {
                    scareSound.play();
                    audioPlayed = true;
                }
                
                
                dot.style.display='none';
                // Убираем изображение через 2 секунды
                setTimeout(() => {
                    scaryImage.style.display = 'none';
                    scareTriggered = false;
                    
                    
                    
                    
                  
                }, 2000);
            }
startButton.addEventListener('click',function() {start();moveButton(this);});
exitButton.addEventListener('click', function() {
            exit();
            // Всегда перемещаем кнопку выхода при нажатии
            moveButton(this);
            
        });
 welcomeText.addEventListener('click', addNewText);
// Создаем фон с гифками при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createGifBackground();
});

// Обработка ошибки загрузки музыки
audio.addEventListener('error', function() {
    console.error('Ошибка загрузки аудиофайла');
    alert('Файл музыки не найден. Убедитесь, что файл music.mp3 находится в той же папке, что и index.html');
});
