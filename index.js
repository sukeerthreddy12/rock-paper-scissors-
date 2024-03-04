if (typeof document !== 'undefined') {


    
    let ps= parseInt(localStorage.getItem('playerScore')) ;
    let cs = parseInt(localStorage.getItem('computerScore')) ;

    // Display the scores on the page
    document.getElementById('ps').innerText = ps;
    document.getElementById('cs').innerText = cs;
    

    const openBtn = document.getElementById("openBtn");
    const myDiv = document.getElementById("myDiv");
    const closeBtn = document.getElementById("closeBtn");

    openBtn.addEventListener("click", function() {
        myDiv.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        myDiv.style.display = "none"; 
    });
    
    
   




    const buttonWithImage = document.getElementById('buttonWithImage');
    buttonWithImage.addEventListener('click', () => {
        const imageOptions = [
            'rock.png',
            'paper.png',
            'sci.png',
        ]; 
        const randomIndex = Math.floor(Math.random() * imageOptions.length);
        const randomImage = imageOptions[randomIndex];
        


        localStorage.setItem('pc', randomImage);
        window.location.href = 'selection.html'; 


        const sciurl = 'rock.png'; // Change this to the URL of your image
        localStorage.setItem('sciurl', sciurl);
        window.location.href = 'selection.html'; // Redirect to page2.html
       
    });

    window.onload = function() {
        const buttonWithImage2345 = document.getElementById('buttonWithImage2345');
        const ro = localStorage.getItem('pc');
        if (ro) {
            const sciimg2 = document.getElementById('selectedImage');
            sciimg2.src = ro;
        }

        const buttonWithImage = document.getElementById('buttonWithImage');
        const sciurl = localStorage.getItem('sciurl');
        if (sciurl) {
            const userchoice = document.getElementById('userimage');
            userchoice.src = sciurl;
        }
        const playerChoice = userimage.src.split('/').pop(); // Get only the file name
        const computerChoice = selectedImage.src.split('/').pop(); // Get only the file name
        const resulttxt = document.getElementById('resulttxt');
        determineWinner(playerChoice, computerChoice, resulttxt);
    
    };




// ikkada scissors

    const buttonWithImage2 = document.getElementById('buttonWithImage2');
    buttonWithImage2.addEventListener('click', () => {
    const imageOptions = [
        'rock.png',
        'paper.png',
        'sci.png',
    ]; 
    const randomIndex = Math.floor(Math.random() * imageOptions.length);
    const randomImage = imageOptions[randomIndex];
    


    localStorage.setItem('pc', randomImage);
    window.location.href = 'selection.html'; 


    const sciurl = 'sci.png'; // Change this to the URL of your image
    localStorage.setItem('sciurl', sciurl);
    window.location.href = 'selection.html'; // Redirect to page2.html
       
});


window.onload = function() {
    const buttonWithImage2345 = document.getElementById('buttonWithImage2345');
    const ro = localStorage.getItem('pc');
    if (ro) {
        const sciimg2 = document.getElementById('selectedImage');
        sciimg2.src = ro;
    }
    const buttonWithImage = document.getElementById('buttonWithImage');
    const sciurl = localStorage.getItem('sciurl');
    if (sciurl) {
        const userchoice = document.getElementById('userimage');
        userchoice.src = sciurl;
    }
    const playerChoice = userimage.src.split('/').pop(); // Get only the file name
        const computerChoice = selectedImage.src.split('/').pop(); // Get only the file name
        const resulttxt = document.getElementById('resulttxt');
        determineWinner(playerChoice, computerChoice, resulttxt);
      
    };

    // Function to determine the winner of the game
    



// ikkada paper 

   
const buttonWithImage3 = document.getElementById('buttonWithImage3');
buttonWithImage3.addEventListener('click', () => {
    const imageOptions = [
        'rock.png',
        'paper.png',
        'sci.png',
    ]; 
    const randomIndex = Math.floor(Math.random() * imageOptions.length);
    const randomImage = imageOptions[randomIndex];
    


    localStorage.setItem('pc', randomImage);
    window.location.href = 'selection.html'; 


    const sciurl = 'paper.png';
    localStorage.setItem('sciurl', sciurl);
    window.location.href = 'selection.html'; 
       
});


window.onload = function() {
    const buttonWithImage2345 = document.getElementById('buttonWithImage2345');
    const ro = localStorage.getItem('pc');
    if (ro) {
        const sciimg2 = document.getElementById('selectedImage');
        sciimg2.src = ro;
    }
    const buttonWithImage = document.getElementById('buttonWithImage');
    const sciurl = localStorage.getItem('sciurl');
    if (sciurl) {
        const userchoice = document.getElementById('userimage');
        userchoice.src = sciurl;
    }
    const playerChoice = userimage.src.split('/').pop(); // Get only the file name
    const computerChoice = selectedImage.src.split('/').pop(); // Get only the file name
    const resulttxt = document.getElementById('resulttxt');
    determineWinner(playerChoice, computerChoice, resulttxt);
    // Function to determine the winner of the game

};





function determineWinner(playerChoice, computerChoice, resulttxt) {
      
      
    if (playerChoice === computerChoice) {
        resulttxt.innerHTML = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock.png' && computerChoice === 'sci.png') ||
        (playerChoice === 'paper.png' && computerChoice === 'rock.png') ||
        (playerChoice === 'sci.png' && computerChoice === 'paper.png')
    ) {
        resulttxt.innerHTML = 'YOU WIN AGANIST PC !';
        ps++; // Update player score directly
        document.getElementById('ps').innerText = ps;
        const next = document.getElementById('next');
        next.style.display = "block"; // Assuming 'next' is the element to show after winning
        document.getElementById('buttonWithImage').classList.add('winner-animation');
       
   
        
// ... previous code ...

  // Reset scores when next is clicked
  next.addEventListener('click', () => {
    ps = 0;
    cs = 0;
    localStorage.setItem('playerScore', ps);
    localStorage.setItem('computerScore', cs);
    document.getElementById('ps').innerText = ps; // Update displayed scores
    document.getElementById('cs').innerText = cs;
    next.style.display = "none"; // Hide "Next" button after reset
});

} else {
resulttxt.innerHTML = 'PC WINS AGANIST YOU!';
cs++; // Update computer score directly
document.getElementById('cs').innerText = cs;
document.getElementById('buttonWithImage2345').classList.add('loser-animation');


}


setTimeout(() => {
    document.getElementById('buttonWithImage').classList.remove('winner-animation');
    document.getElementById('buttonWithImage2345').classList.remove('loser-animation');
}, 500);



localStorage.setItem('playerScore', ps);
localStorage.setItem('computerScore', cs);
}


};