/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const searchForm = __webpack_require__(1);
	searchForm(document);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	const getLangByCode = __webpack_require__(2);

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function getLangByCode(code){
		return languageMap[code] ? languageMap[code] : 'Not identified language';
	}

	module.exports = getLangByCode;

	const languageMap = {
	aa : "Afar",
	ab : "Abkhazian",
	  af : "Afrikaans",
	  ak : "Akan",
	  am : "Amharic",
	  ar : "Arabic",
	  as : "Assamese",
	  ay : "Aymara",
	  az : "Azerbaijani",
	  ba : "Bashkir",
	  be : "Belarusian",
	  bg : "Bulgarian",
	  bh : "Bihari",
	  bi : "Bislama",
	  bn : "Bengali",
	  bo : "Tibetan",
	  br : "Breton",
	  bs : "Bosnian",
	  ca : "Catalan",
	  ceb : "Cebuano",
	  chr : "Cherokee",
	  co : "Corsican",
	  crs : "Seselwa",
	  cs : "Czech",
	  cy : "Welsh",
	  da : "Danish",
	  de : "German",
	  dv : "Dhivehi",
	  dz : "Dzongkha",
	  el : "Greek",
	  en : "English",
	  eo : "Esperanto",
	  es : "Spanish",
	  et : "Estonian",
	  eu : "Basque",
	  fa : "Persian",
	  fi : "Finnish",
	  fj : "Fijian",
	  fo : "Faroese",
	  fr : "French",
	  fy : "Frisian",
	  ga : "Irish",
	  gd : "Scots Gaelic",
	  gl : "Galician",
	  gn : "Guarani",
	  gu : "Gujarati",
	  gv : "Manx",
	  ha : "Hausa",
	  haw : "Hawaiian",
	  hi : "Hindi",
	  hmn : "Hmong",
	  hr : "Croatian",
	  ht : "Haitian Creole",
	  hu : "Hungarian",
	  hy : "Armenian",
	  ia : "Interlingua",
	  id : "Indonesian",
	  ie : "Interlingue",
	  ig : "Igbo",
	  ik : "Inupiak",
	  is : "Icelandic",
	  it : "Italian",
	  iu : "Inuktitut",
	  iw : "Hebrew",
	  ja : "Japanese",
	  jw : "Javanese",
	  ka : "Georgian",
	  kha : "Khasi",
	  kk : "Kazakh",
	  kl : "Greenlandic",
	  km : "Khmer",
	  kn : "Kannada",
	  ko : "Korean",
	  ks : "Kashmiri",
	  ku : "Kurdish",
	  ky : "Kyrgyz",
	  la : "Latin",
	  lb : "Luxembourgish",
	  lg : "Ganda",
	  lif : "Limbu",
	  ln : "Lingala",
	  lo : "Laothian",
	  lt : "Lithuanian",
	  lv : "Latvian",
	  mfe : "Mauritian Creole",
	  mg : "Malagasy",
	  mi : "Maori",
	  mk : "Macedonian",
	  ml : "Malayalam",
	  mn : "Mongolian",
	  mr : "Marathi",
	  ms : "Malay",
	  mt : "Maltese",
	  my : "Burmese",
	  na : "Nauru",
	  ne : "Nepali",
	  nl : "Dutch",
	  no : "Norwegian",
	  nr : "Ndebele",
	  nso : "Pedi",
	  ny : "Nyanja",
	  oc : "Occitan",
	  om : "Oromo",
	  or : "Oriya",
	  pa : "Punjabi",
	  pl : "Polish",
	  ps : "Pashto",
	  pt : "Portuguese",
	  qu : "Quechua",
	  rm : "Rhaeto Romance",
	  rn : "Rundi",
	  ro : "Romanian",
	  ru : "Russian",
	  rw : "Kinyarwanda",
	  sa : "Sanskrit",
	  sco : "Scots",
	  sd : "Sindhi",
	  sg : "Sango",
	  si : "Sinhalese",
	  sk : "Slovak",
	  sl : "Slovenian",
	  sm : "Samoan",
	  sn : "Shona",
	  so : "Somali",
	  sq : "Albanian",
	  sr : "Serbian",
	  ss : "Siswant",
	  st : "Sesotho",
	  su : "Sundanese",
	  sv : "Swedish",
	  sw : "Swahili",
	  syr : "Syriac",
	  ta : "Tamil",
	  te : "Telugu",
	  tg : "Tajik",
	  th : "Thai",
	  ti : "Tigrinya",
	  tk : "Turkmen",
	  tl : "Tagalog",
	  tn : "Tswana",
	  to : "Tonga",
	  tr : "Turkish",
	  ts : "Tsonga",
	  tt : "Tatar",
	  ug : "Uighur",
	  uk : "Ukrainian",
	  ur : "Urdu",
	  uz : "Uzbek",
	  ve : "Venda",
	  vi : "Vietnamese",
	  vo : "Volapuk",
	  war : "Waray Philippines",
	  wo : "Wolof",
	  xh : "Xhosa",
	  yi : "Yiddish",
	  yo : "Yoruba",
	  za : "Zhuang",
	  zh : "Chinese",
	  "zh-Hant" : "Chineset",
	  zu : "Zulu"
	  };


/***/ }
/******/ ]);