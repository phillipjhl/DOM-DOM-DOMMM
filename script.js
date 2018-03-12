

document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.innerText = 'Add Square';
    button.style.position = 'absolute';
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        let num = document.body.getElementsByClassName('square').length;
        let div = document.createElement('div');
        div.className = 'square';
        div.id = num;
        div.style.backgroundColor = 'black';
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.margin = '30px';
        div.style.cssFloat = 'left';
        document.body.appendChild(div);

        div.addEventListener('mouseover', function () {
            this.innerText = '' + this.id + '';
            this.style.color = 'white';
            this.style.textAlign = 'center';
            this.style.verticalAlign = 'middle';
            this.style.lineHeight = '100px';
            div.addEventListener('mouseleave', function () {
                this.innerText = '';
            });
        });

        div.addEventListener('click', function () {
            let colors = ['blue', 'red', 'purple', 'green', 'black', 'yellow', 'pink'];
            let color = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = color;
        });

        div.addEventListener('dblclick', function () {
            let id = Number(this.id);
            let right = document.getElementById(id + 1);
            let left = document.getElementById(id - 1);
            if (id % 2 === 0) {
                if (!right) {
                    alert('There are no more boxes to the right!')
                }
                else {
                    let removeDiv = document.getElementById(id + 1);
                    document.body.removeChild(removeDiv);
                }
            }
            else {
                if (!left) {
                    alert('There are no boxes to the left!');
                }
                else {
                    let removeDiv = document.getElementById(id - 1);
                    document.body.removeChild(removeDiv);
                }
            }
        });
    });
});