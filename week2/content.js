
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}



function execute() {
	var cont = document.getElementsByTagName("*");

	var num = 0;

	for (var i = 0; i < cont.length; i++) {
		var many = getAllIndexes(cont[i].innerHTML, "입니다");
		// 입니다가 있는 모든 인덱스를 many라는 배열에 저장

		for (var j = 0; j < many.length; j++) {
			var ch = cont[i].innerHTML[many[j] - 1];
			// 바로 전 글자
			var before = (cont[i].innerHTML[many[j] - 1]).charCodeAt(0);
			// 바로 전 글자 유니코드

			if ((before - 0xAC00) % 28 > 0) {	// 바로 앞글자 받침 있음
				var regex = new RegExp(ch + "입니다.");
				cont[i].innerHTML = cont[i].innerHTML.replace(regex, ch+"이라능!");
			}
			else {								// 바로 앞글자 받침 없음
				var regex = new RegExp(ch + "입니다.");
				cont[i].innerHTML = cont[i].innerHTML.replace(regex, ch+"라능!");
				
				for (var k = j + 1; k < many.length; k++) {
					many[k]--;
				}
				// 바로 앞 글자 받침이 없는 경우
				// 입니다. 가 라능! 으로 한 글자 줄어들기 때문에
				// 그 뒤의 입니다를 찾은 인덱스들을 1씩 줄여줌
			}
			num++;
		}
		

		var many2 = getAllIndexes(cont[i].innerHTML, "습니다");

		
		for (var j = 0; j < many2.length; j++) {

			cont[i].innerHTML = cont[i].innerHTML.replace("습니다.", "다...랄까?");

			for (var k = j + 1; k < many2.length; k++) {
				many2[k] = many2[k] + 3;
			}
			// 입니다. 가 라능! 으로 한 글자 줄어들기 때문에
			// 그 뒤의 입니다를 찾은 인덱스들을 1씩 줄여줌
			num++;
		}

		var many3 = getAllIndexes(cont[i].innerHTML, "합니다");

		
		for (var j = 0; j < many3.length; j++) {

			cont[i].innerHTML = cont[i].innerHTML.replace("합니다.", "한다라든지?");
			cont[i].innerHTML = cont[i].innerHTML.replace("합니다!", "한다라든지?");
			
			for (var k = j + 1; k < many3.length; k++) {
				many3[k] += 2;
			}
			// 입니다. 가 라능! 으로 한 글자 줄어들기 때문에
			// 그 뒤의 입니다를 찾은 인덱스들을 1씩 줄여줌
			num++;
		}

		var many4 = getAllIndexes(cont[i].innerHTML, "됩니다");

		
		for (var j = 0; j < many4.length; j++) {

			cont[i].innerHTML = cont[i].innerHTML.replace("됩니다.", "된다구. 쿠쿡..");
			cont[i].innerHTML = cont[i].innerHTML.replace("됩니다!", "된다구. 쿠쿡..");
			
			for (var k = j + 1; k < many4.length; k++) {
				many4[k] += 5;
			}
			// 입니다. 가 라능! 으로 한 글자 줄어들기 때문에
			// 그 뒤의 입니다를 찾은 인덱스들을 1씩 줄여줌
			num++;
		}

		var manyy = getAllIndexes(cont[i].innerHTML, "다.");
		// 다.가 있는 모든 인덱스를 many라는 배열에 저장

		for (var j = 0; j < manyy.length; j++) {
			var ch = cont[i].innerHTML[manyy[j] - 1];
			// 바로 전 글자
			var before = ch.charCodeAt(0);
			// 바로 전 글자 유니코드
			var temp = cont[i].innerHTML[manyy[j] + 2];

			if ((before - 0xAC00) % 28 == 20 && (temp == ' ' || temp == '\n')) {	// 바로 앞글자 받침 ㅆ
				var regex = new RegExp(ch + "다."+temp);
				console.log(ch+"다."+temp);
				
				cont[i].innerHTML = cont[i].innerHTML.replace(regex, ch+"다능!!"+temp);
				
				for (var k = j + 1; k < manyy.length; k++) {
					manyy[k] += 2;
				}

				num++;
			}

		}



	}


	chrome.runtime.sendMessage({num : num});


}


execute(document);
