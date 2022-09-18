
(function () {
    const BodyElement = document.body;
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Hello Vaibhav!";
    div.appendChild(h1);
    const textNode = document.createTextNode("OHH!!");
    div.appendChild(textNode);
    const a = document.createElement('a');
    a.setAttribute("href", 'https://www.google.com/');
    a.setAttribute("target", '_blank');
    a.textContent = "Go To Google";
    a.style.color = "#000";
    a.style.textDecoration = "none"
    a.style.padding = '30px'
    a.style.border = "1px solid #000"
    div.appendChild(a);

    BodyElement.appendChild(div)



})(window);