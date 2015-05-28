//Etape 1

function	make_linear_array(n)
{
    var	number = n;
    var	tab = [0];
    for (i = 1; i <= number; i++)
    {
	tab[tab.length] = i;
    }
    return (tab);
}
