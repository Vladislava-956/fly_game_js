function movementFly(){
	alert("~Помогите Тому избавиться от надоедливых мух~");
	var elem = document.getElementById("myAnimation1");

	var id = setInterval(frame,15);

	var top = [];
	var left = [];
	var id2 = setInterval(verifi_t(),1);
	var id3 = setInterval(verifi_l(),1);

	function verifi_t() {
		let top1 = Math.trunc(Math.random() * 1000);
		
		if (top1 > 450) {
			let digit;
			digit = Math.trunc(Math.random() * 1000);
			top.push(digit);
		}
		else {
			top.push(top1);
			clearInterval(id2);
		}
	}
	function verifi_l() {
		let left1 = Math.trunc(Math.random() * 1000);
		if (left1 > 950) {
			let digit;
			digit = Math.trunc(Math.random() * 1000);
			left.push(digit);
		}
		else {
			left.push(left1);
			clearInterval(id2);
		}
	}

	function frame() {
		if (position==450) {
			clearInterval(id);
		} 	
		else {
			position++;
			elem.style.top = top + "px";
			elem.style.left = left + "px";
		}
	}
}