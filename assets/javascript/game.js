// Global Variables
let wins = 0;
let losses = 0;
let counter = 0;
let computerChoice = "";
let imagesCrystals = ["./assets/images/crystal1.png", "./assets/images/crystal2.png", "./assets/images/crystal3.png", "./assets/images/crystal4.png"];

    // Functions
    function randomComputerChoice () {
        computerChoice = Math.floor(Math.random() * 102) + 19;
    }

    function resetCrystals () {
        for (let i = 0; i < imagesCrystals.length; i++) {
            let crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", imagesCrystals[i]);
            crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            $(".crystal-pics").append(crystal); 
        }
    }

    function resetGame() {
        $(".randomNumber").html("<p>Get to this number: " + computerChoice);
        $(".counterWinsLosses").html("<p>Wins: " + wins + "<p>" + "<p>Losses: " + losses + "<p>");
        $(".scoreUser").html(counter);
        $(".crystal-pics").empty();
    }

    function totalReset () {
        randomComputerChoice ();
        counter = 0;
        resetGame ();
        resetCrystals ();
    }

    // Run Code
    randomComputerChoice ();
    resetGame ();
    resetCrystals ();

    // Click Function
    $(document).on("click", ".crystal", crystalClick);

    function crystalClick () {
        counter += parseInt($(this).attr("value"));
        $(".scoreUser").html(counter);
        if (counter === computerChoice) {
            wins++;
            alert("YOU WIN!")
            totalReset();
        } else if (counter > computerChoice) {
            losses++;
            alert("YOU LOSE!")
            totalReset();
        };
    };
    
    