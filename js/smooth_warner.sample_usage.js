document.addEventListener
(
	"DOMContentLoaded",
	sample
);


function sample(ev)
{

	if (false) //or true
	{
		smoothWarner({msg:"Hello", title:"Title", upholstery:"the-smooth-warner"});
	}
	else
	{
		smoothWarner({msg:"Hello", title:"Title", extra_classes:["bts"], upholstery:"the-smooth-warner"});
	}
}
