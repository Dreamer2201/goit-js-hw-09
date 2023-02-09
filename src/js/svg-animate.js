const rect = document.querySelector('rect');
const rectangle = document.getElementById('rectangle');
const circle = document.querySelector('circle');
const ellipse = document.querySelector('ellipse');
const line = document.querySelector('line');
const polylyne = document.querySelector('polygon');
const pathLine = document.getElementById('path-line');


function getLenthSvg(x) {
    x.style.strokeDasharray = `${x.getTotalLength()}`;
    x.style.strokeDashoffset = `${x.getTotalLength()}`;
}
getLenthSvg(rect);
getLenthSvg(rectangle);
getLenthSvg(circle);
getLenthSvg(ellipse);
getLenthSvg(line);
getLenthSvg(polylyne);
getLenthSvg(pathLine);