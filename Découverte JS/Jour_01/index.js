//Projet Javascript

//Etape 2:
console.log('Hello');

//Etape 3
var conc = "Hello"+" world !";
console.log(conc);

//Etape 4
function	aff_x_times(x,str)
{
    var n = 0;
    while (n < x)
    {
	console.log(str);
	n++;
    }
}

//Etape 5
function	pow(x, n)
{
    var	res = x;

    for (num = 1; num < n; num++)
    {
	res *= x;
    }
    console.log(res);
}

//Etape 6
function aff_fac_delayed(n, t)
{
    setTimeout(fact(), t);
    function fact()
    {
	var res = 1;
	for (i = 1; i <= n; i++)
	{
	    res *= i;
	}
	console.log(res);
	return (res);
    }
}

//Etape 7
function	countdown(n)
{
    count = n;
    var	counter = setInterval(timer, 1000);
    function	timer()
    {
	count -= 1;
	if (count <= 0)
	{
	    clearInterval(counter);
	}
	console.log(count);
    }
    console.log(count);
}