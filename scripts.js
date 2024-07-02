$('#yeas').on('click', () => {
    $('#water-buttons').toggle()
    $('#aqua').toggle();
    $('#idby').show('1000')
});

$('#aqua-next').on('click', () =>{
    $('#question1').toggle();
    $('#question1').next().toggle('slow')
})
$('#watermelon').on('click', () => {
    alert('are you sureeeeeee monkey???')
})
$('#banana').on('click', () => {
    $('#fruit-buttons').toggle()
    $('#fruits').toggle();
    $('#hmm').show('slow')
})

$('#ban-but').on('click', () => {
    $('#question2').toggle();
    $('#question2').next().toggle('slow')
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomDiss() {
    let x = ["Dont lie bruh, its literally a selfie you sent me...", "I think your picking the wrong answer on purpose now...",
        "umm okay, lets be real now..."]
        alert(x[getRandomInt(3)])

}

$('#heck-yah').on('click', () =>{
    $('#man-but').toggle();
    $('#iki').show('slow');
})

function noWater() {
    let x = ["yes u do, otherwise YOUD BE DEAD", "humans are like 50% water or sum like that idk"]
    alert(x[getRandomInt(2)])
}

$('#final').on('click', () =>{
    $('#question3').toggle();
    $('#question3').next().toggle('slow')
})