//Etape 3

function	obj_contains_key(obj, key)
{
    if (typeof obj[key] !== "undefined")
 	return (true);
    else if (typeof obj[key] === "undefined")
	return (false);
}