const holes = $('.hole');
const scoreBoard = $('.score');
const moles = $('.mole');


function startGame() {

    let holeRandom;
    let random;
    let min = Math.ceil(200);
    let max = Math.floor(1000);
    let randomTime = Math.floor(Math.random() * (max - min) + min);


    let compteur = 0;
    $('#startGame').click(function (){
        let timer = 10;
        setInterval(function (){
            if (timer > 0) {
                timer--;
            }
        }, 1000)

        setInterval(function () {
            if (timer > 0) {
                random = Math.trunc(Math.random() * 8);
                holeRandom = $(`.hole${random}`);
                holeRandom.addClass('up');
            }
        }, randomTime);

        let mole = $('.mole');
        mole.click(function () {
            compteur++;
            $('.score').html(compteur);
            holeRandom.removeClass('up');
        })
    })

}

startGame();
