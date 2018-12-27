
/*	Smooth Warner definition
	config:
	{
		msg:"Hello how are you?",
		title:"Title here",
		append_to:pure_js_dom_element to append smoothWarner, otherwise document.body
		extra_classes:["a", "b"], further customization
		body_curtains:true,
		callback:fn(pack_result)
		{
			pack_result:
			{
				answer:true/false or null if not applicable,
				sholine_box:the element showLine itself
			}
		}
	}

*/

function smoothWarner(pack)
{
	var config = pack || {};
	var smooth_warner_el = null; //Here we take the structure, please look the commit ahead
	var classes = config.extra_classes || [];
	
	classManager(smooth_warner_el, classes);

	var append_to = config.append_to || 
	(
		function ()
		{
			//If the body is the container, there is no reason to the smooth_warner container not to be fixed positioned
			classManager(smooth_warner_el, ["fixed"]);
			return document.body;
		}
	)();

	var msg_el = smooth_warner_el.getElementsByClassName("middle")[0].children[0];
	var header = smooth_warner_el.getElementsByClassName("header")[0];
	var title_el = header.getElementsByClassName("title")[0];
	var x = smooth_warner_el.getElementsByClassName("x")[0];
	x.appendChild
	(
		document.getElementById("if_SVGS")
		.getElementsByClassName("close")[0].cloneNode(true)
	);
	x.click_response = false;
	x.addEventListener("click", callback);

	msg_el.innerHTML = config.msg || "";
	title_el.innerHTML = 
		(
			function ()
			{
				if(!!config.title === true)
				{
					return config.title
				}
				return false;
			}
		)() || 
		(
			function (ev)
			{
				header.parentElement.removeChild(header);	
			}
		)();
	
	var joined_classes = classes.join("");

	if (joined_classes.match(/bts/) !== null)
	{
		var bts = smooth_warner_el.getElementsByClassName("bt");
		bts[0].click_response = true;
		bts[1].click_response = false;
		bts[0].addEventListener("click", callback);
		bts[1].addEventListener("click", callback);
	}
	else if (joined_classes.match(/bt/) !== null)
	{
		var bts = smooth_warner_el.getElementsByClassName("bt");
		bts[0].click_response = true;
		bts[0].addEventListener("click", callback);
	}
	else
	{
		classManager(smooth_warner_el, ["timing"]);
		var answer = null;
		smooth_warner_el.addEventListener
		(
			"animationend", 
			function (ev)
			{
				(ev.animationName === "horizontalgrow") && 
				callback.bind({click_response:null})();
			}
		)
	}

	(config.body_curtains === true) && (classManager(document.body, ["curtains"]))

	append_to.appendChild(smooth_warner_el);

	function callback(ev)
	{
		classManager(smooth_warner_el, ["leave"]);
//		console.log("Check callback scope: ", smooth_warner_el, append_to);
		setTimeout
		(
			function ()
			{
				append_to.removeChild(smooth_warner_el);
			},
			500
		);
		classManager(document.body, ["curtains"], "remove");
		(!!config.callback === true) && 
		(
			config.callback
			(
				{
					smooth_warner_el:smooth_warner_el,
					answer:this.click_response
				}
			)
		);
	}
	return {kill:callback}
}

