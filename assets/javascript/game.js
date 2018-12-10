$(document).ready(function() {

    let computerChoice = Math.floor(Math.random() * 102) + 19;
        console.log("computerChoice: "+ computerChoice);
        $(".randomNumber").html("Get to this number: " + computerChoice);

    let crystalOne = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 1: " + crystalOne);
        $("#crystal1").html("<img src=" + "assets/images/crystal1.jpg" + " value=" + crystalOne + ">");

    let crystalTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 2: " + crystalTwo);
        $("#crystal2").html("<img src=" + "assets/images/crystal2.jpg" + " value=" + crystalTwo + ">");

    let crystalThree = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 3: " + crystalThree);
        $("#crystal3").html("<img src=" + "assets/images/crystal3.jpg" + " value=" + crystalThree + ">");

    let crystalFour = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 4: " + crystalFour);
        $("#crystal4").html("<img src=" + "assets/images/crystal4.jpg" + " value=" + crystalFour + ">");

    let wins = 0;
        console.log("Wins: " + wins);

    let losses = 0;
        console.log("Losses: " + losses);
    
    let score = 0;
        console.log("Your total score is: " + score);

    function reset () {
        computerChoice = Math.floor(Math.random() * 102) + 19;
            console.log("computerChoice" + computerChoice);
        $(".randomNumber").html(computerChoice);

        score = 0;
        $(".scoreView").html(score);

        crystalOne = Math.floor(Math.random () * 12) + 1;
            console.log("Crystal 1: " + crystalOne);
        $("#crystal1").html("<img src=" + "assets/images/crystal1.jpg" + " value=" + crystalOne + ">");

        
        crystalTwo = Math.floor(Math.random () * 12) + 1;
            console.log("Crystal 2: " + crystalTwo);
        $("#crystal2").html("<img src=" + "assets/images/crystal2.jpg" + " value=" + crystalTwo + ">");


        crystalThree = Math.floor(Math.random () * 12) + 1;
            console.log("Crystal 3: " + crystalThree);
        $("#crystal3").html("<img src=" + "assets/images/crystal3.jpg" + " value=" + crystalThree + ">");


        crystalFour = Math.floor(Math.random () * 12) + 1;
            console.log("Crystal 4: " + crystalFour);
        $("#crystal4").html("<img src=" + "assets/images/crystal4.jpg" + " value=" + crystalFour + ">");

    
    
    
    
    
    }   





























});