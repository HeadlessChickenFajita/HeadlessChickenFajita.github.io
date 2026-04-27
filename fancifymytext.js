function makeTextBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

function fancifyChange() {
	var ta = document.getElementById("userText");
	if (document.getElementById("fancyShmancy").checked) {
		ta.style.fontWeight = "bold";
		ta.style.color = "blue";
		ta.style.textDecoration = "underline";
	} else {
		ta.style.fontWeight = "normal";
		ta.style.color = "";
		ta.style.textDecoration = "none";
	}
}

function handleMoo() {
	var ta = document.getElementById("userText");
	var original = ta.value;
	var endsWithPeriod = original.trim().endsWith(".");
	var text = original.toUpperCase();
	var segments = text.split(".");
	var pieces = [];
	for (var i = 0; i < segments.length; i++) {
		var s = segments[i].trim();
		if (s.length === 0) {
			continue;
		}
		var words = s.split(/\s+/);
		words[words.length - 1] = words[words.length - 1] + "-Moo";
		pieces.push(words.join(" "));
	}
	text = pieces.join(". ");
	if (endsWithPeriod) {
		text += ".";
	}
	ta.value = text;
}
