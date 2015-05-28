//Etape 1

var	formulaire = document.createElement("form");
var	body = document.getElementsByTagName("body");
var	input = document.createElement("input");
var	input2 = document.createElement("input");
document.body.appendChild(formulaire);
input.type = "text";
formulaire.appendChild(input);
input2.type = "text";
formulaire.appendChild(input2);
var	button = document.createElement("button");
button.type = "button";
formulaire.appendChild(button);

//Etape 2

input.placeholder = "Name";
input.setAttribute("name", "name");
input2.placeholder = "Age";
input2.setAttribute("name", "age");

//Etape 3

function	select_body()
{
    return (document.getElementsByTagName("body")[0]);
}

function	select_input_name()
{
    return (document.getElementsByName("name")[0]);
}

function	add_input_to(node)
{
    var	to = document.createElement("input");
    node.appendChild(to);
}

function	del_input_from(node)
{
    node.getElementsByTagName("input")[0].remove();
}

function	select_node(id)
{
     return (document.getElementsById(id));
}

function	detach_node(id)
{
    var	detache = document.getElementsById(id);
    detache.parentNode.removeChild(detache);
    return (detache);
}

function	insert_node(node, parent)
{
    parent.appendChild(node);
}
