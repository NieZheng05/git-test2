var xhr = new XMLHttpRequest;
function ajax(opts){
	xhr.onreadystatechange = function(){
		if(xhr.status==200 && xhr.readyState==4){
			var ret = JSON.parse(xhr.responsText);
			opts.success(ret);
		}
		if(xhr.status == 404){
			opts.error(ret);
		}
	}
	var str = "";
	for(var key in opts.data){
		str += key + "=" + opts.data[key] + "&"
	}
	str = str.substr(0,str.length-1);
	if(opts.type.toLowerCase == "get"){
		xhr.open(opts.type,opts.url+ "?" +str,true);
		xhr.send();
	}
	if(opts.type.toLowerCase=="post"){
		xhr.open(opts.type,opts.url);
		xhr.setRequestHeader("xxx","zzzzzz");
		xhr.send(str);
	}
}


ajax({
	type: "post",
	url: "index.php",
	data: {
		name: wilson,
		age: 31
	},
	success: function(ret){

	}
	error: function(ret){

	}
})