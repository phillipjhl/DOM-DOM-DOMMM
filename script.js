

document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    button.innerText = 'Add Square';
    button.style.position = 'absolute';
    document.body.appendChild(button);

    let countClicks = 0
    
    button.addEventListener('click', function() {
        let square = document.createElement('div');
        square.className = 'mysquare';
        square.id = countClicks;
        square.style.backgroundColor = 'black';
        square.style.height = '6em';
        square.style.width = '6em';
        square.style.margin = '2em';
        square.style.cssFloat = 'left';
        countClicks++;        
        document.body.appendChild(square);
    });
});