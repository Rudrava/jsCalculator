let buffer = "0";
let total = "";
let op = "";
let flag = false;

const buttons = document.querySelector(".calcButtons");
const screen = document.querySelector(".screen");

function rerender() {
	screen.innerText = buffer;
}

function handleMath(val) {
	if (isNaN(val)) {
		if (buffer === "0") {
			return;
		} else if (val === "=") {
			flag = true;
			buffer = "" + eval(buffer);
		} else {
			flag = false;
			if (isNaN(buffer.charAt(buffer.length - 1))) {
				buffer = buffer.substring(0, buffer.length - 1);
				buffer += val;
			} else {
				buffer += val;
			}
		}
	} else if (!isNaN(val) && !flag) {
		if (buffer === "0") {
			buffer = val;
		} else {
			buffer += val;
		}
	} else if (!isNaN(val) && flag) {
		buffer = val;
		flag = false;
	}
	// console.log(buffer);
	rerender();
}

function handleInput(val) {
	switch (val) {
		case "C":
			buffer = "0";
			rerender();
			break;
		case "⌫":
			if (buffer.length === 1) {
				console.log("here");
				buffer = "0";
			} else {
				console.log("here");
				buffer = buffer.substring(0, buffer.length - 1);
				if (buffer === "-") {
					buffer = "0";
				}
			}
			rerender();
			break;
		default:
			handleMath(val);
	}
}

buttons.addEventListener("click", function (event) {
	handleInput(event.target.innerText);
});
