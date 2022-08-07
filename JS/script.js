

// let board = document.querySelector(".outer-container");
// let button1 = document.createElement('BUTTON');
// button1.innerHTML = 'button1';
// board.appendChild(button1);

var row1 = document.querySelector('.row-1');

let count = 1;
for (i = 0; i < 8; i++){
    var button = document.createElement("button");
    button.innerHTML = `Do Something ${i}`;
    button.setAttribute("class", `button ${i}`);

    if (count % 2 === 1){
        button.style.background = 'white';
        count++;
        console.log(count);
    }
    else{
        button.style.background = 'black';
        count++;
    }

    row1.appendChild(button);
}



// var myDiv = document.getElementById("outer-container");

// // create the button object and add the text to it
// var button = document.createElement("BUTTON");
// button.innerHTML = "Button";

// // add the button to the div
// myDiv.appendChild(button);






