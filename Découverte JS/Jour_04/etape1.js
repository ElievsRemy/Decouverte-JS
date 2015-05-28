//Etape 1

function	prepare_dom()
{
    var	div1 = document.createElement("div");
    var	div2 = document.createElement("div");
    var	div3 = document.createElement("div");
    var	div4 = document.createElement("div");
    var	div5 = document.createElement("div");
    var	body = document.getElementsByTagName("body");
    var	input = document.createElement("input");
    var	input2 = document.createElement("input");
    var	button = document.createElement("button");
    document.body.appendChild(div1);
    input.type = "text";
    div1.appendChild(input);
    document.body.appendChild(div2);
    input2.type = "text";
    div2.appendChild(input2);
    document.body.appendChild(div3);
    button.type = "button";
    div3.appendChild(button);
    document.body.appendChild(div4);
    document.body.appendChild(div5);
    input.setAttribute("id", "name");
    input2.setAttribute("id", "level");
    button.setAttribute("id", "submit");
    div4.setAttribute("id", "collection");
    div5.setAttribute("id", "details");
}