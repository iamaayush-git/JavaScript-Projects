let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
	button.addEventListener('click',(e)=>{
		if(e.target.innerHTML == '='){
			string = document.getElementById('display').value;
			string = eval(string);
			document.getElementById('display').value = string;
			
		}
		else if(e.target.innerHTML == "AC"){
			string = "";
			document.getElementById('display').value =string;
		}
		else if(e.target.innerHTML == "DEL"){
			string = string.slice(0,-1);
			document.getElementById('display').value = string;
		}
		else{
		string = string + e.target.innerHTML;
		document.getElementById('display').value = string;
		}
	});
})
