function check() {
	var flag = document.querySelector('input').value;
	var shaObj = new jsSHA(flag, "TEXT");
	var hash = shaObj.getHash("SHA-384", "HEX");
	var results = document.querySelector('#result')
		for (var i = 0; i < sha384hash.length; ++i) {
			if (hash == sha384hash[i].hash) {
				var div = document.createElement('div');
				div.setAttribute('style', 'background:#1f8dd6;padding:0.3em 1em;border-radius:3px;color:#fff;');
				var p1 = document.createElement('p');
				p1.appendChild(document.createTextNode(flag + " is correct!!!"));
				var p2 = document.createElement('p');
				p2.appendChild(document.createTextNode("You got " + sha384hash[i].point + "pt!! "));
				var a = document.createElement('a');
				var tweetText = '柚子胡椒CTFの' + document.querySelector('header > h1').innerHTML + 'を解いて' + sha384hash[i].point + 'ポイント獲得しました';
				a.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=mzyy94CTF&text=' + encodeURIComponent(tweetText) + '&url=' + encodeURIComponent(location.href));
				a.setAttribute('style', 'color:#fff;');
				a.appendChild(document.createTextNode('Tweetする！'));
				div.appendChild(p1);
				div.appendChild(p2);
				p2.appendChild(a);
				results.insertBefore(div, results.firstChild);

				return false;
			}
		}
	var p = document.createElement('p');
	p.appendChild(document.createTextNode(flag + " is incorrect."));
	results.insertBefore(p, results.firstChild);

	return false;
}

function toggleHint() {
	var hint = document.querySelector('#hint');
	hint.style.display = hint.style.display ? "" : "none";
	var hintBtn = document.querySelector('button.hint');
	hintBtn.classList.toggle('pure-button-active');
}
