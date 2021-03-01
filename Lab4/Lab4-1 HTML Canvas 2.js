(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Lab4_1 HTML Canvas 2_atlas_", frames: [[128,161,57,79],[200,0,32,81],[187,161,55,63],[0,184,69,29],[128,0,70,80],[128,82,67,77],[0,0,126,182]]}
];


// symbols:



(lib.CachedTexturedBitmap_105 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_106 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_107 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_108 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_109 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_110 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_112 = function() {
	this.initialize(ss["Lab4_1 HTML Canvas 2_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Теложука = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_112();
	this.instance.parent = this;
	this.instance.setTransform(-70.75,-127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-127.2,126,182);


(lib.Стоп = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.CachedTexturedBitmap_110();
	this.instance.parent = this;
	this.instance.setTransform(-99.9,-120.9,3.0195,3.0195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-120.9,202.3,232.5);


(lib.Пуск = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.CachedTexturedBitmap_109();
	this.instance.parent = this;
	this.instance.setTransform(-64.3,-116.25,3.0195,3.0195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-116.2,211.39999999999998,241.5);


(lib.Назад = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.CachedTexturedBitmap_107();
	this.instance.parent = this;
	this.instance.setTransform(-113.95,-61.7,1.9318,1.9318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.CachedTexturedBitmap_108();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.95,-28.85,1.9318,1.9318);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-61.7,201.3,121.7);


(lib.Лапастатика = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_106();
	this.instance.parent = this;
	this.instance.setTransform(-23.05,-57.85,1.4286,1.4286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-57.8,45.7,115.69999999999999);


(lib.Лапа = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Лапастатика("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.25,-67.1,1,1,0,0,0,21.7,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.8,rotation:-33.2107,x:89.5,y:-67.15},4).to({regX:21.7,rotation:0.2308,y:-67.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.3,-68.8,108.60000000000001,124.3);


(lib.Жук = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Лапа("synched",6);
	this.instance.parent = this;
	this.instance.setTransform(59.7,53.4,0.5993,0.5992,-143.9711,0,0,76.8,-8.7);

	this.instance_1 = new lib.Лапа("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.95,60.85,0.5993,0.5992,0,128.9688,-51.0283,76.8,-8.8);

	this.instance_2 = new lib.Лапа("synched",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.9,122.4,0.599,0.599,0,-44.9061,135.0939,76.9,-8.4);

	this.instance_3 = new lib.Лапа("synched",2);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72,129.35,0.599,0.599,44.9061,0,0,76.9,-8.4);

	this.instance_4 = new lib.Лапа("synched",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.75,172.9,0.7,0.7,0,-14.9987,165.001,76.9,-8.4);

	this.instance_5 = new lib.Лапа("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-52.6,177.4,0.7,0.7,14.9987,0,0,76.9,-8.4);

	this.instance_6 = new lib.Теложука("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.3,-58,1,1,0,0,0,8.4,-170.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.2,-14.4,212.4,240.20000000000002);


(lib.Жукнаспине = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.CachedTexturedBitmap_105();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,29.75,1.6685,1.6685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.Жук();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.2,72.65,1,1,0,0,0,-0.6,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Жукнаспине, new cjs.Rectangle(-106.4,-22.5,212.4,231.8), null);


// stage content:
(lib.Lab41HTMLCanvas2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		//function startFunc(args) {play();}
		this.stopButton.addEventListener(MouseEvent.CLICK, function () {stop();});
		this.startButton.addEventListener(MouseEvent.CLICK, function () {play();});
		this.backButton.addEventListener(MouseEvent.CLICK, function () {gotoAndStop(0);});
		
		*/
		this.stop();
		
		function startFunc(args) {this.play();}
		function stopFunc(args) {this.stop();}
		function backFunc(args) {this.gotoAndStop(0);}
		
		
		this.stopButton.addEventListener("click", stopFunc.bind(this));
		this.startButton.addEventListener("click", startFunc.bind(this));
		this.backButton.addEventListener("click", backFunc.bind(this));
	}
	this.frame_1 = function() {
		playSound("Записьonlineaudioconvertercom");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(120));

	// Жук_1
	this.instance = new lib.Жук();
	this.instance.parent = this;
	this.instance.setTransform(113.6,366.75,0.5,0.5,79.9995,0,0,-0.4,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:109.2,rotation:79.555,x:107.65,y:366.45},0).wait(1).to({rotation:78.8705,x:117.5,y:364.75},0).wait(1).to({rotation:77.6227,x:135.2,y:361.65},0).wait(1).to({rotation:74.3219,x:169.85,y:355.45},0).wait(1).to({rotation:56.1655,x:225.7,y:343.55},0).wait(1).to({rotation:28.0624,x:267.1,y:320.25},0).wait(1).to({rotation:-42.7167,x:287.3,y:296.85},0).wait(1).to({rotation:-43.4702,x:278.15,y:282.75},0).wait(1).to({rotation:-69.887,x:274.4,y:267.75},0).wait(1).to({rotation:-70.3475,x:265.55,y:262.45},0).wait(1).to({rotation:-75.8312,x:258.8,y:257.1},0).wait(1).to({rotation:-76.145,x:252.45,y:254},0).wait(1).to({rotation:-76.4029,x:247.25,y:251.55},0).wait(1).to({rotation:-76.6074,x:243.2,y:249.55},0).wait(1).to({rotation:-76.7723,x:239.9,y:247.9},0).wait(1).to({rotation:-76.9064,x:237.25,y:246.6},0).wait(1).to({rotation:-77.0153,x:235,y:245.5},0).wait(1).to({rotation:-77.1031,x:233.25,y:244.7},0).wait(1).to({rotation:-77.1726,x:231.85,y:244},0).wait(1).to({rotation:-77.2262,x:230.8,y:243.45},0).wait(1).to({rotation:-77.2655,x:230,y:243.1},0).wait(1).to({rotation:-77.2918,x:229.45,y:242.8},0).wait(1).to({rotation:-77.3062,x:229.15,y:242.7},0).wait(1).to({rotation:-77.3096,x:229.1,y:242.65},0).wait(1).to({rotation:-77.3026,x:229.25,y:242.75},0).wait(1).to({rotation:-77.2858,x:229.55,y:242.85},0).wait(1).to({rotation:-77.2596,x:230.1,y:243.15},0).wait(1).to({rotation:-77.2243,x:230.8,y:243.45},0).wait(1).to({rotation:-77.1802,x:231.7,y:243.9},0).wait(1).to({rotation:-77.1275,x:232.8,y:244.45},0).wait(1).to({rotation:-77.0663,x:234,y:245},0).wait(1).to({rotation:-76.9965,x:235.4,y:245.75},0).wait(1).to({rotation:-76.9182,x:237,y:246.5},0).wait(1).to({rotation:-76.8311,x:238.7,y:247.35},0).wait(1).to({rotation:-76.7352,x:240.65,y:248.3},0).wait(1).to({rotation:-76.6302,x:242.75,y:249.3},0).wait(1).to({rotation:-76.5155,x:245.1,y:250.45},0).wait(1).to({rotation:-76.3907,x:247.5,y:251.65},0).wait(1).to({rotation:-76.2551,x:250.25,y:252.95},0).wait(1).to({rotation:-76.1077,x:253.2,y:254.4},0).wait(1).to({rotation:-75.9475,x:256.4,y:255.95},0).wait(1).to({rotation:-75.7728,x:259.9,y:257.65},0).wait(1).to({rotation:-70.4748,x:263.15,y:261},0).wait(1).to({rotation:-70.264,x:267.2,y:263.45},0).wait(1).to({rotation:-70.0294,x:271.65,y:266.15},0).wait(1).to({rotation:-43.9247,x:272.55,y:274.25},0).wait(1).to({rotation:-43.6181,x:276.3,y:280},0).wait(1).to({rotation:-43.2484,x:280.85,y:286.9},0).wait(1).to({rotation:-42.7597,x:286.8,y:296.1},0).wait(1).to({rotation:29.5287,x:266.55,y:320.4},0).wait(1).to({rotation:48.0123,x:239.05,y:337.6},0).wait(1).to({rotation:47.0204,x:241.7,y:336},0).wait(1).to({rotation:46.2194,x:243.7,y:334.85},0).wait(1).to({rotation:44.9393,x:247,y:332.6},0).wait(1).to({rotation:43.4593,x:251.35,y:329.65},0).wait(1).to({rotation:41.9846,x:256.15,y:326.1},0).wait(1).to({rotation:40.5966,x:261.2,y:322.05},0).wait(1).to({rotation:24.5451,x:268.5,y:319.7},0).wait(1).to({rotation:3.5783,x:275.85,y:315.15},0).wait(1).to({rotation:-7.3948,x:278.95,y:307.9},0).wait(1).to({rotation:2.4306,x:277.4,y:300.4},0).wait(1).to({rotation:-43.0052,x:283.8,y:291.5},0).wait(1).to({rotation:-43.3421,x:279.7,y:285.15},0).wait(1).to({rotation:-43.6789,x:275.6,y:278.85},0).wait(1).to({rotation:-69.8516,x:275.05,y:268.15},0).wait(1).to({rotation:-70.196,x:268.45,y:264.2},0).wait(1).to({rotation:-70.5621,x:261.5,y:259.95},0).wait(1).to({rotation:-76.054,x:254.3,y:254.95},0).wait(1).to({rotation:-76.4565,x:246.25,y:251},0).wait(1).to({rotation:-76.8745,x:237.85,y:246.9},0).wait(1).to({rotation:-77.3063,x:229.15,y:242.7},0).wait(1).to({rotation:-77.7505,x:220.25,y:238.35},0).wait(1).to({rotation:-78.2059,x:211.1,y:233.9},0).wait(1).to({rotation:-78.6713,x:201.8,y:229.3},0).wait(1).to({rotation:-79.1456,x:192.2,y:224.7},0).wait(1).to({rotation:-68.1338,x:187.7,y:218.5},0).wait(1).to({rotation:-68.6231,x:179.05,y:211.85},0).wait(1).to({rotation:-69.1186,x:170.25,y:205.1},0).wait(1).to({rotation:-16.4495,x:152.45,y:207.2},0).wait(1).to({rotation:-16.9552,x:152.55,y:195.9},0).wait(1).to({rotation:-17.465,x:152.75,y:184.55},0).wait(1).to({rotation:-17.9781,x:152.9,y:173.1},0).wait(1).to({rotation:71.5059,x:141.2,y:155.9},0).wait(1).to({rotation:-19.0124,x:159.85,y:156.6},0).wait(1).to({rotation:-19.5323,x:166.65,y:151.75},0).wait(1).to({rotation:44.9224,x:160.75,y:140.6},0).wait(1).to({rotation:44.4007,x:171.35,y:135.8},0).wait(1).to({rotation:43.8787,x:182,y:130.95},0).wait(1).to({rotation:43.357,x:192.65,y:126.15},0).wait(1).to({rotation:67.8602,x:201.15,y:119.45},0).wait(1).to({rotation:32.288,x:215.8,y:121.2},0).wait(1).to({rotation:60.359,x:222.7,y:113.55},0).wait(1).to({rotation:58.7863,x:234.2,y:112.5},0).wait(1).to({rotation:57.2126,x:245.65,y:111.25},0).wait(1).to({rotation:55.6388,x:257.05,y:109.8},0).wait(1).to({rotation:54.0675,x:268.3,y:108.15},0).wait(1).to({rotation:52.5014,x:279.55,y:106.3},0).wait(1).to({rotation:50.9432,x:290.65,y:104.2},0).wait(1).to({rotation:48.9949,x:301.65,y:102.05},0).wait(1).to({rotation:45.7781,x:312.55,y:99.8},0).wait(1).to({rotation:42.5455,x:323.1,y:97.05},0).wait(1).to({rotation:39.2628,x:333.5,y:93.8},0).wait(1).to({rotation:35.9575,x:343.7,y:90.1},0).wait(1).to({rotation:32.6584,x:353.6,y:85.9},0).wait(1).to({rotation:29.3949,x:363.15,y:81.25},0).wait(1).to({rotation:33.966,x:371.2,y:75.8},0).wait(1).to({rotation:59.5077,x:376.85,y:67.85},0).wait(1).to({rotation:-31.5602,x:399.55,y:68.85},0).wait(1).to({rotation:-33.1079,x:399.65,y:59.7},0).wait(1).to({rotation:-34.8318,x:399.7,y:50.65},0).wait(1).to({rotation:-34.0062,x:398.95,y:41.95},0).wait(1).to({rotation:-27.5402,x:397.8,y:33.85},0).wait(1).to({rotation:-20.7103,x:397.45,y:25.95},0).wait(1).to({rotation:-14.0516,x:398.2,y:18.15},0).wait(1).to({rotation:-7.9147,x:399.8,y:10.75},0).wait(1).to({rotation:-1.6961,x:402.2,y:3.8},0).wait(1).to({rotation:4.4803,x:405.3,y:-2.75},0).wait(1).to({rotation:10.2912,x:409.1,y:-8.85},0).wait(1).to({rotation:15.4999,x:413.3,y:-14.25},0).wait(1).to({regX:-0.4,regY:81.5,rotation:20,x:424,y:-31.45},0).wait(1));

	// Жук_2
	this.instance_1 = new lib.Жук();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64,370.6,0.3,0.3,29.9976,0,0,-0.4,81);

	this.instance_2 = new lib.Жукнаспине();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.95,233.15,0.2997,0.2987,0,109.0226,-70.9773,0,80.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-3.2,regY:109.2,rotation:30.2412,x:-63.6,y:369.55},0).wait(1).to({scaleX:0.2999,rotation:30.4999,x:-58.9,y:362.6},0).wait(1).to({scaleY:0.2999,rotation:30.8388,x:-52.9,y:353.85},0).wait(1).to({rotation:31.2842,x:-45.75,y:343.6},0).wait(1).to({rotation:31.9292,x:-36.9,y:330.8},0).wait(1).to({rotation:33.0236,x:-25.4,y:314.55},0).wait(1).to({scaleX:0.2998,rotation:35.8566,x:-9.9,y:293.35},0).wait(1).to({scaleY:0.2998,rotation:47.4324,x:16.25,y:263.05},0).wait(1).to({rotation:78.6765,x:58.9,y:239.4},0).wait(1).to({scaleX:0.2997,rotation:81.7667,x:109,y:233.15},0).wait(1).to({scaleY:0.2997,rotation:81.8019,x:131.4,y:230.05},0).wait(1).to({rotation:89.1225,x:146.15,y:228},0).wait(1).to({rotation:94.7843,x:155.45,y:227.6},0).wait(1).to({rotation:99.5564,x:162.3,y:227.8},0).wait(1).to({rotation:103.2831,x:167.2,y:228.3},0).wait(1).to({rotation:105.9963,x:170.55,y:228.85},0).wait(1).to({regX:-0.4,regY:80.9,rotation:107.7882,x:180.5,y:232.6},0).wait(1).to({regX:-3.2,regY:109.2,scaleX:0.1464,rotation:0,skewX:127.942,skewY:-10.1781,x:174.45,y:227.85},0).wait(1).to({scaleX:0.0999,skewX:128.523,skewY:-51.4723,x:175.05,y:228},0).wait(1).to({regX:-0.5,regY:80.8,skewX:109.0227,skewY:-70.9727,x:181.9,y:233.1},0).to({_off:true,regX:0,regY:80.5,scaleX:0.2997,scaleY:0.2987,skewX:109.0226,skewY:-70.9773,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},4).to({_off:false,regX:0.7,regY:80.2,scaleX:0.0999,scaleY:0.2978,skewX:109.0246,skewY:-70.9727,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},14).to({regX:0.6,scaleX:0.2997,scaleY:0.2974,rotation:109.027,skewX:0,skewY:0,guide:{path:[182,233.1,182,233.1,182.1,233.1], orient:'auto'}},4).wait(1).to({regX:-3.2,regY:109.2,x:174.25,y:229.2},0).wait(3).to({rotation:109.0271},0).wait(1).to({rotation:109.0287},0).wait(1).to({rotation:109.0343},0).wait(1).to({rotation:109.0473,y:229.25},0).wait(1).to({rotation:109.0716},0).wait(1).to({rotation:109.1123,x:174.3},0).wait(1).to({rotation:109.1757,x:174.35,y:229.3},0).wait(1).to({rotation:109.2691,x:174.5},0).wait(1).to({rotation:109.4016,x:174.65},0).wait(1).to({rotation:109.5838,x:174.85,y:229.35},0).wait(1).to({rotation:109.8279,x:175.2,y:229.45},0).wait(1).to({rotation:110.1475,x:175.55,y:229.5},0).wait(1).to({rotation:110.5571,x:176,y:229.65},0).wait(1).to({scaleY:0.2975,rotation:111.0711,x:176.6,y:229.75},0).wait(1).to({rotation:111.7029,x:177.25,y:229.95},0).wait(1).to({rotation:112.4638,x:178.1,y:230.2},0).wait(1).to({rotation:113.3613,x:179.15,y:230.4},0).wait(1).to({rotation:114.3985,x:180.2,y:230.85},0).wait(1).to({rotation:115.574,x:181.45,y:231.25},0).wait(1).to({rotation:116.882,x:182.9,y:231.65},0).wait(1).to({rotation:118.3128,x:184.35,y:232.25},0).wait(1).to({rotation:121.5418,x:187.65,y:233.6},0).wait(1).to({rotation:127.9059,x:193.6,y:236.65},0).wait(1).to({rotation:134.5419,x:200.5,y:241.4},0).wait(1).to({scaleY:0.2976,rotation:140.1601,x:207.35,y:247.65},0).wait(1).to({rotation:144.5625,x:213.5,y:254.55},0).wait(1).to({rotation:148.0561,x:219,y:261.9},0).wait(1).to({scaleY:0.2977,rotation:150.5682,x:224.1,y:269.7},0).wait(1).to({rotation:151.3041,x:229.5,y:279.2},0).wait(1).to({rotation:149.9128,x:235,y:289.5},0).wait(1).to({scaleY:0.2978,rotation:146.5082,x:239.55,y:297.75},0).wait(1).to({rotation:140.8546,x:244.1,y:305.35},0).wait(1).to({rotation:128.7644,x:250.15,y:313.75},0).wait(1).to({scaleY:0.2979,rotation:113.218,x:257.75,y:320.9},0).wait(1).to({rotation:95.2135,x:268.3,y:326.1},0).wait(1).to({scaleY:0.298,rotation:81.8817,x:280.7,y:327.25},0).wait(1).to({rotation:75.3453,x:292,y:325.75},0).wait(1).to({scaleY:0.2981,rotation:66.1143,x:302.65,y:323.25},0).wait(1).to({rotation:51.3353,x:314,y:318.55},0).wait(1).to({scaleY:0.2982,rotation:47.4648,x:324.9,y:308.75},0).wait(1).to({scaleX:0.2998,rotation:56.3802,x:333.15,y:299.85},0).wait(1).to({scaleY:0.2983,rotation:67.8269,x:345.9,y:290.55},0).wait(1).to({rotation:76.0922,x:360.85,y:283.7},0).wait(1).to({scaleY:0.2984,rotation:81.0705,x:375.8,y:279.2},0).wait(1).to({rotation:85.042,x:395,y:275.3},0).wait(1).to({scaleY:0.2985,rotation:87.7027,x:414,y:272.7},0).wait(1).to({scaleY:0.2986,rotation:89.5571,x:431.4,y:271},0).wait(1).to({rotation:90.3962,x:447.75,y:269.95},0).wait(1).to({scaleY:0.2987,rotation:88.5304,x:464.6,y:268.95},0).wait(1).to({rotation:86.534,x:485.65,y:266.85},0).wait(1).to({scaleY:0.2988,rotation:84.8487,x:506.95,y:263.95},0).wait(1).to({rotation:83.4938,x:527.45,y:260.45},0).wait(1).to({scaleY:0.2989,rotation:82.3991,x:546.85,y:256.6},0).wait(1).to({scaleY:0.299,rotation:81.4995,x:565.5,y:252.5},0).wait(1).to({rotation:80.7494,x:583.4,y:248.2},0).wait(1).to({scaleX:0.2999,scaleY:0.2991,rotation:80.1168,x:600.7,y:243.7},0).wait(1).to({rotation:79.5793,x:617.3,y:239.15},0).wait(1).to({scaleY:0.2992,rotation:79.1201,x:633.4,y:234.5},0).wait(1).to({rotation:78.726,x:649.05,y:229.8},0).wait(1).to({scaleY:0.2993,rotation:78.387,x:664.2,y:225.1},0).wait(1).to({scaleY:0.2994,rotation:78.095,x:678.8,y:220.4},0).wait(1).to({rotation:77.8433,x:692.95,y:215.7},0).wait(1).to({scaleY:0.2995,rotation:77.675,x:706.4,y:211.1},0).wait(1).to({rotation:77.5464,x:718.1,y:207.05},0).wait(1).to({scaleY:0.2996,rotation:77.3965,x:729.7,y:202.95},0).wait(1).to({rotation:77.2294,x:741,y:198.9},0).wait(1).to({scaleY:0.2997,rotation:77.0445,x:752,y:194.85},0).wait(1).to({rotation:76.8418,x:762.7,y:190.85},0).wait(1).to({scaleY:0.2998,rotation:76.6217,x:773,y:186.9},0).wait(1).to({rotation:76.3849,x:782.9,y:183.1},0).wait(1).to({rotation:76.1322,x:792.4,y:179.35},0).wait(1).to({scaleY:0.2999,rotation:75.8651,x:801.5,y:175.65},0).wait(1).to({scaleX:0.3,rotation:75.5852,x:810.15,y:172.1},0).wait(1).to({rotation:75.2951,x:818.3,y:168.65},0).wait(1).to({regX:-0.1,regY:81,scaleY:0.3,rotation:74.9974,x:834.8,y:164.35},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},4).to({_off:true,regX:0.7,regY:80.2,scaleX:0.0999,scaleY:0.2978,skewX:109.0246,skewY:-70.9727,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},14).wait(83));

	// Жук_3
	this.instance_3 = new lib.Жук();
	this.instance_3.parent = this;
	this.instance_3.setTransform(564.45,334.3,0.4,0.45,-80.0017,0,0,-0.4,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[564.4,334.3,499.3,322.9,449.3,304.8,411.6,291.1,376.6,271.1,366.5,265.3,349.8,255,333.3,244.8,326,240.6,299.9,225.8,276.9,220.7,247.6,214.2,237.3,212.6,225,210.6,217.9,211.8,213.3,212.6,202.3,217.2,187.9,223.1,173.9,227.4,156.2,232.7,148.3,237.6,144.9,239.7,137.7,246.6,131.1,253,120.8,258.6,105.6,267.1,76.5,278,9.6,303,-52.2,308.3,-82.1,310.9,-102.9,307.5,-124.9,304,-133.6,294.2], orient:'auto'}},120).wait(1));

	// Слой_1
	this.stopButton = new lib.Стоп();
	this.stopButton.name = "stopButton";
	this.stopButton.parent = this;
	this.stopButton.setTransform(292.85,350.75,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 1);

	this.backButton = new lib.Назад();
	this.backButton.name = "backButton";
	this.backButton.parent = this;
	this.backButton.setTransform(247.75,350.05,0.2588,0.2588);
	new cjs.ButtonHelper(this.backButton, 0, 1, 1);

	this.startButton = new lib.Пуск();
	this.startButton.name = "startButton";
	this.startButton.parent = this;
	this.startButton.setTransform(330.45,348.5,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.stopButton_1 = new lib.Стоп();
	this.stopButton_1.name = "stopButton_1";
	this.stopButton_1.parent = this;
	this.stopButton_1.setTransform(292.85,350.75,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton_1, 0, 1, 1);

	this.backButton_1 = new lib.Назад();
	this.backButton_1.name = "backButton_1";
	this.backButton_1.parent = this;
	this.backButton_1.setTransform(247.75,350.05,0.2588,0.2588);
	new cjs.ButtonHelper(this.backButton_1, 0, 1, 1);

	this.startButton_1 = new lib.Пуск();
	this.startButton_1.name = "startButton_1";
	this.startButton_1.parent = this;
	this.startButton_1.setTransform(330.45,348.5,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton_1, 0, 1, 1);

	this.stopButton_2 = new lib.Стоп();
	this.stopButton_2.name = "stopButton_2";
	this.stopButton_2.parent = this;
	this.stopButton_2.setTransform(292.85,350.75,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton_2, 0, 1, 1);

	this.backButton_2 = new lib.Назад();
	this.backButton_2.name = "backButton_2";
	this.backButton_2.parent = this;
	this.backButton_2.setTransform(247.75,350.05,0.2588,0.2588);
	new cjs.ButtonHelper(this.backButton_2, 0, 1, 1);

	this.startButton_2 = new lib.Пуск();
	this.startButton_2.name = "startButton_2";
	this.startButton_2.parent = this;
	this.startButton_2.setTransform(330.45,348.5,0.1656,0.1656,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startButton_2},{t:this.backButton_2},{t:this.stopButton_2},{t:this.startButton_1},{t:this.backButton_1},{t:this.stopButton_1},{t:this.startButton},{t:this.backButton},{t:this.stopButton}]}).wait(121));

	// Жук_4
	this.instance_4 = new lib.Жук();
	this.instance_4.parent = this;
	this.instance_4.setTransform(633.95,35.35,0.4166,0.3651,-99.9992,0,0,-0.7,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.5,regY:81.2,scaleX:0.35,scaleY:0.3,rotation:-115.0007,guide:{path:[633.9,35.4,588.3,38.4,561.1,34.9,546.7,33,532,27.6,526.7,25.6,523.9,25.2,519.7,24.6,514.7,25.9,504.8,28.1,477.3,42,451.8,55,434.9,81.3,425.3,96.4,412.1,129.5,406.2,144.5,402.8,151.6,397.4,162.8,391.9,169.8,378.5,186.3,357,185.4,333.3,184.3,301.9,190.5,271.4,196.5,239.5,207.9,206.9,219.7,179.6,234.9,150.7,251.1,132.6,268.3,119.6,280.8,99.5,308.3,78,337.4,66.4,349.4,45.7,370.9,21.3,381.8,-8.2,395,-47.9,395.4], orient:'auto'}},120).wait(1));

	// Жук_5
	this.instance_5 = new lib.Жук();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.9,58.25,0.3994,0.2995,56.0023,0,0,-0.4,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:151.027,guide:{path:[2,58.4,19.5,48,31.6,36.9,34.6,34.2,39.2,29.9,42.9,26.6,46.3,24.7,54.2,20.5,72.3,18.6,89.6,16.9,135.7,15.4,177.6,14.1,200.7,20.9,218.7,26.1,229.1,38,232.4,41.8,236.9,48.7,242.1,56.9,244.2,59.6,253.9,72.3,269.4,78.4,335.6,104.6,382.1,111.8,458.7,123.7,469.9,82.2,476.8,56.5,482.3,43.7,488.6,28.7,497.2,20.7,505.8,12.7,520.2,8.4,532.8,4.8,556.8,2.1,594.4,-2.1,658.1,74.5,690,112.8,714.4,151.9], orient:'auto'}},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.3,111.8,772.6,321.5);
// library properties:
lib.properties = {
	id: '72981CB1ED281448A4A30220E2CA4794',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Lab4_1 HTML Canvas 2_atlas_.png?1614627936217", id:"Lab4_1 HTML Canvas 2_atlas_"},
		{src:"sounds/Записьonlineaudioconvertercom.mp3?1614627936344", id:"Записьonlineaudioconvertercom"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['72981CB1ED281448A4A30220E2CA4794'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;