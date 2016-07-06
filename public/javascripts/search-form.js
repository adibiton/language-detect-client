'use strict';
const getLangByCode = require('./language-constants.js');

module.exports = function(document){
	const searchForm = document.querySelector('#searchForm');
	const resultContainer = document.querySelector('.result-container');	
	const queryInput = document.querySelector('input[name=q]');
	
	queryInput.onkeydown = function() {
    		var key = event.keyCode || event.charCode;

    		if( key == 8 || key == 46 )
        		return;
	};
	
	searchForm.addEventListener('submit', function(evt){
		evt.preventDefault();

	
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == XMLHttpRequest.DONE) {
				let response = JSON.parse(xhr.responseText);
				resultContainer.querySelector('p:nth-of-type(1)').innerText = queryInput.value;
				resultContainer.querySelector('p:nth-of-type(2)').innerText = getLangByCode( response.data.detections[0].language );
				resultContainer.classList.remove('invisible');
			}
		}
		xhr.open('GET',`searchForm?q=${queryInput.value}&key=demo`, true);
		xhr.send();
	});
};
