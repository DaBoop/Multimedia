(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.6,1,1).p("AAJAAQAAAEgDACQgCADgEAAQgCAAgDgDQgCgCAAgEQAAgDACgCQADgDACAAQAEAAACADQADACAAADg");
	this.shape.setTransform(5.4,-50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.7,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFg");
	this.shape_1.setTransform(-15.6,-50.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.2,1,1).p("AAMAAQAAAFgEADQgDADgFAAQgEAAgDgDQgDgDAAgFQAAgEADgEQADgCAEAAQAFAAADACQAEAEAAAEg");
	this.shape_2.setTransform(5.4,-50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AC0kdQBGAtA6BZQAeAwAXA1QA+CRAAC7QAAD9hzCzQh0C0ijAAQijAAh0i0QhzizAAj9QAAi7A+iRQAXg1AegwQAng7AsgnQBYhRBsAAQBSAABFAtIG1pgAinj5InBp0AkvgyQFoCDEwiD");
	this.shape_3.setTransform(-7.5,-36.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AlLBrQAXg1AegvQAng7ArgnQBYhQBsAAQBSAABFAtQBHAsA5BZQAeAvAXA1QiYBCimAAQilAAi0hCgAh6AQQAAAGADAEQAFADAFAAQAHAAADgDQAFgEAAgGQAAgHgFgDQgDgFgHAAQgFAAgFAFQgDADAAAHIAAAAgABZANQAAAFADADQADADAFABQAGgBACgDQAEgDAAgFQAAgFgEgDQgCgEgGAAQgFAAgDAEQgDADAAAFIAAAAgAh3AaQgDgEAAgGQAAgHADgDQAFgFAFAAQAHAAADAFQAFADAAAHQAAAGgFAEQgDADgHAAQgFAAgFgDgABcAVQgDgDAAgFQAAgFADgDQADgEAFAAQAGAAACAEQAEADAAAFQAAAFgEADQgCADgGABQgFgBgDgDgABcAMQAAAEADACQACADADAAQAEAAACgDQADgCAAgEQAAgDgDgCQgCgDgEAAQgDAAgCADQgDACAAADIAAAAgABfASQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDgAheAQIAAAAgABtAMIAAAAg");
	this.shape_4.setTransform(-4.7,-52.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AkWElQh0izAAj8QAAi7A/iSQFoCEEviEQA+CSAAC7QAAD8hzCzQh0C0ijAAQijAAhzi0g");
	this.shape_5.setTransform(-4.7,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-127.2,126.4,181.7);


(lib.Стоп = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlsxuILZAAMAAAAjdIrZAAg");
	this.shape.setTransform(-60.5,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEERvMAAAgjdILaAAMAAAAjdgAvdRvMAAAgjdILaAAMAAAAjdg");
	this.shape_1.setTransform(2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-118.9,199,229);


(lib.Пуск = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AQAAAI//SfMAAAgk9g");
	this.shape.setTransform(41.2,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Av/yeIf/SeI//Sfg");
	this.shape_1.setTransform(41.2,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-114.2,206.8,238.6);


(lib.Назад = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("An+AAIP9pMIAASZg");
	this.shape.setTransform(-61,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An+AAIP8pMIAASZg");
	this.shape_1.setTransform(-61,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqEkDIUJAAIAAIHI0JAAg");
	this.shape_2.setTransform(20.5,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqEEEIAAoHIUJAAIAAIHg");
	this.shape_3.setTransform(20.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-60.8,199.1,119.8);


(lib.Лапастатика = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ADJo0QhuAogcELICaDgQjeBAhwC3QhFBxgVBgQgQBNAOBB");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-57.9,46.3,116);


(lib.Лапа = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Лапастатика("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.3,-67,1,1,0,0,0,21.7,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.8,rotation:-33.2,x:89.4,y:-67.1},4).to({regX:21.7,rotation:0.2,x:89.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.4,-68.5,46.4,116);


(lib.Жук = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Лапа("synched",6);
	this.instance.parent = this;
	this.instance.setTransform(59.7,53.4,0.599,0.599,-144,0,0,76.8,-8.7);

	this.instance_1 = new lib.Лапа("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.9,60.9,0.599,0.599,0,129,-51,76.8,-8.8);

	this.instance_2 = new lib.Лапа("synched",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.9,122.4,0.599,0.599,0,-44.9,135.1,76.9,-8.4);

	this.instance_3 = new lib.Лапа("synched",2);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72,129.4,0.599,0.599,44.9,0,0,76.9,-8.4);

	this.instance_4 = new lib.Лапа("synched",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.8,172.9,0.7,0.7,0,-15,165,76.9,-8.4);

	this.instance_5 = new lib.Лапа("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-52.6,177.4,0.7,0.7,15,0,0,76.9,-8.4);

	this.instance_6 = new lib.Теложука("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.3,-58,1,1,0,0,0,8.4,-170.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,-14.4,192.6,225.9);


(lib.Жукнаспине = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHHAAQAAELiFC9QiFC9i9AAQi8AAiFi9QiFi9AAkLQAAkKCFi9QCFi9C8AAQC9AACFC9QCFC9AAEKg");
	this.shape.setTransform(-1.5,96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AlBHIQiFi9AAkLQAAkKCFi9QCFi9C8AAQC8AACGC9QCFC9AAEKQAAELiFC9QiGC9i8AAQi8AAiFi9g");
	this.shape_1.setTransform(-1.5,96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.Жук();
	this.instance.parent = this;
	this.instance.setTransform(2.2,72.7,1,1,0,0,0,-0.6,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Жукнаспине, new cjs.Rectangle(-106.5,-22.5,212.6,232.1), null);


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
	this.instance.setTransform(113.6,366.8,0.5,0.5,80,0,0,-0.4,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:109.3,rotation:79.6,x:107.6,y:366.5},0).wait(1).to({rotation:78.9,x:117.5,y:364.8},0).wait(1).to({rotation:77.6,x:135.2,y:361.7},0).wait(1).to({rotation:74.3,x:169.8,y:355.5},0).wait(1).to({rotation:56.2,x:225.7,y:343.6},0).wait(1).to({rotation:28.1,x:267.1,y:320.3},0).wait(1).to({rotation:-42.7,x:287.3,y:296.9},0).wait(1).to({rotation:-43.5,x:278.2,y:282.8},0).wait(1).to({rotation:-69.9,x:274.5,y:267.8},0).wait(1).to({rotation:-70.3,x:265.6,y:262.5},0).wait(1).to({rotation:-75.8,x:258.9,y:257.2},0).wait(1).to({rotation:-76.1,x:252.5,y:254.1},0).wait(1).to({rotation:-76.4,x:247.3,y:251.6},0).wait(1).to({rotation:-76.6,x:243.3,y:249.6},0).wait(1).to({rotation:-76.8,x:240,y:247.9},0).wait(1).to({rotation:-76.9,x:237.3,y:246.7},0).wait(1).to({rotation:-77,x:235.1,y:245.6},0).wait(1).to({rotation:-77.1,x:233.3,y:244.7},0).wait(1).to({rotation:-77.2,x:231.9,y:244.1},0).wait(1).to({x:230.9,y:243.5},0).wait(1).to({rotation:-77.3,x:230.1,y:243.1},0).wait(1).to({x:229.5,y:242.8},0).wait(1).to({x:229.2,y:242.7},0).wait(2).to({x:229.3,y:242.8},0).wait(1).to({x:229.6,y:242.9},0).wait(1).to({x:230.2,y:243.2},0).wait(1).to({rotation:-77.2,x:230.9,y:243.5},0).wait(1).to({x:231.8,y:243.9},0).wait(1).to({rotation:-77.1,x:232.8,y:244.5},0).wait(1).to({x:234.1,y:245.1},0).wait(1).to({rotation:-77,x:235.5,y:245.8},0).wait(1).to({rotation:-76.9,x:237.1,y:246.5},0).wait(1).to({rotation:-76.8,x:238.8,y:247.4},0).wait(1).to({rotation:-76.7,x:240.7,y:248.3},0).wait(1).to({rotation:-76.6,x:242.8,y:249.4},0).wait(1).to({rotation:-76.5,x:245.2,y:250.5},0).wait(1).to({rotation:-76.4,x:247.6,y:251.7},0).wait(1).to({rotation:-76.3,x:250.3,y:253},0).wait(1).to({rotation:-76.1,x:253.3,y:254.4},0).wait(1).to({rotation:-75.9,x:256.5,y:256},0).wait(1).to({rotation:-75.8,x:260,y:257.7},0).wait(1).to({rotation:-70.5,x:263.2,y:261},0).wait(1).to({rotation:-70.3,x:267.3,y:263.5},0).wait(1).to({rotation:-70,x:271.7,y:266.2},0).wait(1).to({rotation:-43.9,x:272.6,y:274.3},0).wait(1).to({rotation:-43.6,x:276.4,y:280},0).wait(1).to({rotation:-43.2,x:280.9,y:287},0).wait(1).to({rotation:-42.8,x:286.9,y:296.1},0).wait(1).to({rotation:29.5,x:266.5,y:320.5},0).wait(1).to({rotation:48,x:239.1,y:337.7},0).wait(1).to({rotation:47,x:241.7,y:336.1},0).wait(1).to({rotation:46.2,x:243.7,y:334.9},0).wait(1).to({rotation:44.9,x:247,y:332.7},0).wait(1).to({rotation:43.5,x:251.3,y:329.7},0).wait(1).to({rotation:42,x:256.1,y:326.1},0).wait(1).to({rotation:40.6,x:261.2,y:322.1},0).wait(1).to({rotation:24.5,x:268.5,y:319.8},0).wait(1).to({rotation:3.6,x:275.9,y:315.2},0).wait(1).to({rotation:-7.4,x:279,y:308},0).wait(1).to({rotation:2.4,x:277.4,y:300.5},0).wait(1).to({rotation:-43,x:283.8,y:291.5},0).wait(1).to({rotation:-43.3,x:279.8,y:285.2},0).wait(1).to({rotation:-43.7,x:275.7,y:278.9},0).wait(1).to({rotation:-69.9,x:275.1,y:268.2},0).wait(1).to({rotation:-70.2,x:268.5,y:264.2},0).wait(1).to({rotation:-70.6,x:261.6,y:260},0).wait(1).to({rotation:-76.1,x:254.4,y:255},0).wait(1).to({rotation:-76.5,x:246.3,y:251},0).wait(1).to({rotation:-76.9,x:237.9,y:246.9},0).wait(1).to({rotation:-77.3,x:229.2,y:242.7},0).wait(1).to({rotation:-77.8,x:220.3,y:238.4},0).wait(1).to({rotation:-78.2,x:211.2,y:233.9},0).wait(1).to({rotation:-78.7,x:201.9,y:229.4},0).wait(1).to({rotation:-79.1,x:192.3,y:224.7},0).wait(1).to({rotation:-68.1,x:187.8,y:218.5},0).wait(1).to({rotation:-68.6,x:179.1,y:211.9},0).wait(1).to({rotation:-69.1,x:170.3,y:205.2},0).wait(1).to({rotation:-16.4,x:152.5,y:207.3},0).wait(1).to({rotation:-17,x:152.6,y:196},0).wait(1).to({rotation:-17.5,x:152.8,y:184.6},0).wait(1).to({rotation:-18,x:152.9,y:173.2},0).wait(1).to({rotation:71.5,x:141.2,y:156},0).wait(1).to({rotation:-19,x:159.9,y:156.7},0).wait(1).to({rotation:-19.5,x:166.7,y:151.8},0).wait(1).to({rotation:44.9,x:160.7,y:140.7},0).wait(1).to({rotation:44.4,x:171.3,y:135.9},0).wait(1).to({rotation:43.9,x:182,y:131},0).wait(1).to({rotation:43.4,x:192.7,y:126.2},0).wait(1).to({rotation:67.9,x:201.1,y:119.5},0).wait(1).to({rotation:32.3,x:215.8,y:121.3},0).wait(1).to({rotation:60.4,x:222.7,y:113.6},0).wait(1).to({rotation:58.8,x:234.2,y:112.5},0).wait(1).to({rotation:57.2,x:245.6,y:111.3},0).wait(1).to({rotation:55.6,x:257,y:109.9},0).wait(1).to({rotation:54.1,x:268.3,y:108.2},0).wait(1).to({rotation:52.5,x:279.5,y:106.3},0).wait(1).to({rotation:50.9,x:290.6,y:104.3},0).wait(1).to({rotation:49,x:301.6,y:102.1},0).wait(1).to({rotation:45.8,x:312.6,y:99.8},0).wait(1).to({rotation:42.5,x:323.1,y:97.1},0).wait(1).to({rotation:39.3,x:333.5,y:93.9},0).wait(1).to({rotation:36,x:343.7,y:90.2},0).wait(1).to({rotation:32.7,x:353.6,y:86},0).wait(1).to({rotation:29.4,x:363.2,y:81.3},0).wait(1).to({rotation:34,x:371.2,y:75.8},0).wait(1).to({rotation:59.5,x:376.8,y:67.9},0).wait(1).to({rotation:-31.6,x:399.6,y:68.9},0).wait(1).to({rotation:-33.1,x:399.7,y:59.8},0).wait(1).to({rotation:-34.8,y:50.7},0).wait(1).to({rotation:-34,x:399,y:42},0).wait(1).to({rotation:-27.5,x:397.8,y:33.9},0).wait(1).to({rotation:-20.7,x:397.5,y:26},0).wait(1).to({rotation:-14.1,x:398.2,y:18.2},0).wait(1).to({rotation:-7.9,x:399.9,y:10.8},0).wait(1).to({rotation:-1.7,x:402.2,y:3.8},0).wait(1).to({rotation:4.5,x:405.3,y:-2.7},0).wait(1).to({rotation:10.3,x:409.1,y:-8.8},0).wait(1).to({rotation:15.5,x:413.3,y:-14.2},0).wait(1).to({regX:-0.4,regY:81.5,rotation:20,x:424,y:-31.4},0).wait(1));

	// Жук_2
	this.instance_1 = new lib.Жук();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-64,370.6,0.3,0.3,30,0,0,-0.4,81);

	this.instance_2 = new lib.Жукнаспине();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182,233.2,0.3,0.299,0,109,-71,0,80.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-3.2,regY:109.3,rotation:30.2,x:-63.6,y:369.6},0).wait(1).to({rotation:30.5,x:-58.9,y:362.7},0).wait(1).to({rotation:30.8,x:-52.9,y:353.9},0).wait(1).to({rotation:31.3,x:-45.7,y:343.6},0).wait(1).to({rotation:31.9,x:-36.9,y:330.8},0).wait(1).to({rotation:33,x:-25.4,y:314.6},0).wait(1).to({rotation:35.9,x:-9.9,y:293.4},0).wait(1).to({rotation:47.4,x:16.2,y:263.1},0).wait(1).to({rotation:78.7,x:58.9,y:239.4},0).wait(1).to({rotation:81.8,x:109,y:233.2},0).wait(1).to({x:131.4,y:230.1},0).wait(1).to({rotation:89.1,x:146.1,y:228},0).wait(1).to({rotation:94.8,x:155.4,y:227.6},0).wait(1).to({rotation:99.6,x:162.3,y:227.8},0).wait(1).to({rotation:103.3,x:167.2,y:228.3},0).wait(1).to({rotation:106,x:170.5,y:228.8},0).wait(1).to({regX:-0.4,regY:80.9,rotation:107.8,x:180.5,y:232.6},0).wait(1).to({regX:-3.2,regY:109.3,scaleX:0.15,rotation:0,skewX:127.9,skewY:-10.2,x:174.4,y:227.8},0).wait(1).to({scaleX:0.1,skewX:128.5,skewY:-51.5,x:175.1,y:228},0).wait(1).to({regX:-0.5,regY:80.8,skewX:109,skewY:-71,x:181.9,y:233.1},0).to({_off:true,regX:0,regY:80.5,scaleX:0.3,scaleY:0.3,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},4).to({_off:false,regX:0.7,regY:80.2,scaleX:0.1,scaleY:0.3,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},14).to({regX:0.6,scaleX:0.3,scaleY:0.3,rotation:109,skewX:0,skewY:0,guide:{path:[182,233.1,182,233.1,182.1,233.1], orient:'auto'}},4).wait(1).to({regX:-3.2,regY:109.3,x:174.2,y:229.2},0).wait(6).to({y:229.3},0).wait(1).to({rotation:109.1,x:174.3},0).wait(2).to({rotation:109.2,x:174.4},0).wait(1).to({rotation:109.3,x:174.5},0).wait(1).to({rotation:109.4,x:174.7},0).wait(1).to({rotation:109.6,x:174.8,y:229.4},0).wait(1).to({rotation:109.8,x:175.2},0).wait(1).to({rotation:110.1,x:175.6,y:229.5},0).wait(1).to({rotation:110.6,x:176,y:229.7},0).wait(1).to({rotation:111.1,x:176.6,y:229.8},0).wait(1).to({rotation:111.7,x:177.3,y:230},0).wait(1).to({rotation:112.5,x:178.1,y:230.2},0).wait(1).to({rotation:113.4,x:179.1,y:230.4},0).wait(1).to({rotation:114.4,x:180.2,y:230.8},0).wait(1).to({rotation:115.6,x:181.4,y:231.2},0).wait(1).to({rotation:116.9,x:182.9,y:231.7},0).wait(1).to({rotation:118.3,x:184.4,y:232.3},0).wait(1).to({rotation:121.5,x:187.7,y:233.6},0).wait(1).to({scaleY:0.3,rotation:127.9,x:193.6,y:236.6},0).wait(1).to({rotation:134.5,x:200.5,y:241.4},0).wait(1).to({rotation:140.2,x:207.3,y:247.7},0).wait(1).to({rotation:144.6,x:213.5,y:254.6},0).wait(1).to({rotation:148.1,x:219,y:261.9},0).wait(1).to({rotation:150.6,x:224.1,y:269.7},0).wait(1).to({rotation:151.3,x:229.5,y:279.2},0).wait(1).to({rotation:149.9,x:235,y:289.5},0).wait(1).to({rotation:146.5,x:239.6,y:297.7},0).wait(1).to({rotation:140.9,x:244.1,y:305.3},0).wait(1).to({rotation:128.8,x:250.1,y:313.7},0).wait(1).to({rotation:113.2,x:257.8,y:320.9},0).wait(1).to({rotation:95.2,x:268.3,y:326.1},0).wait(1).to({rotation:81.9,x:280.7,y:327.3},0).wait(1).to({rotation:75.3,x:292,y:325.8},0).wait(1).to({rotation:66.1,x:302.6,y:323.3},0).wait(1).to({rotation:51.3,x:314,y:318.6},0).wait(1).to({rotation:47.5,x:324.9,y:308.8},0).wait(1).to({rotation:56.4,x:333.1,y:299.9},0).wait(1).to({rotation:67.8,x:345.9,y:290.6},0).wait(1).to({rotation:76.1,x:360.8,y:283.7},0).wait(1).to({rotation:81.1,x:375.8,y:279.2},0).wait(1).to({rotation:85,x:395,y:275.3},0).wait(1).to({rotation:87.7,x:414,y:272.7},0).wait(1).to({scaleY:0.3,rotation:89.6,x:431.4,y:271},0).wait(1).to({rotation:90.4,x:447.7,y:269.9},0).wait(1).to({rotation:88.5,x:464.6,y:269},0).wait(1).to({rotation:86.5,x:485.6,y:266.9},0).wait(1).to({rotation:84.8,x:507,y:264},0).wait(1).to({rotation:83.5,x:527.4,y:260.5},0).wait(1).to({rotation:82.4,x:546.8,y:256.6},0).wait(1).to({rotation:81.5,x:565.5,y:252.5},0).wait(1).to({rotation:80.7,x:583.4,y:248.2},0).wait(1).to({rotation:80.1,x:600.7,y:243.7},0).wait(1).to({rotation:79.6,x:617.3,y:239.2},0).wait(1).to({rotation:79.1,x:633.4,y:234.5},0).wait(1).to({rotation:78.7,x:649.1,y:229.8},0).wait(1).to({rotation:78.4,x:664.2,y:225.1},0).wait(1).to({rotation:78.1,x:678.8,y:220.4},0).wait(1).to({rotation:77.8,x:692.9,y:215.7},0).wait(1).to({rotation:77.7,x:706.4,y:211.1},0).wait(1).to({scaleY:0.3,rotation:77.5,x:718.1,y:207.1},0).wait(1).to({rotation:77.4,x:729.7,y:203},0).wait(1).to({rotation:77.2,x:741,y:198.9},0).wait(1).to({rotation:77,x:752,y:194.9},0).wait(1).to({rotation:76.8,x:762.7,y:190.9},0).wait(1).to({rotation:76.6,x:773,y:187},0).wait(1).to({rotation:76.4,x:782.9,y:183.1},0).wait(1).to({rotation:76.1,x:792.4,y:179.4},0).wait(1).to({rotation:75.9,x:801.5,y:175.7},0).wait(1).to({rotation:75.6,x:810.1,y:172.1},0).wait(1).to({rotation:75.3,x:818.3,y:168.7},0).wait(1).to({regX:-0.1,regY:81,rotation:75,x:834.8,y:164.4},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},4).to({_off:true,regX:0.7,regY:80.2,scaleX:0.1,scaleY:0.3,guide:{path:[181.9,233.1,181.9,233.1,181.9,233.1], orient:'auto'}},14).wait(83));

	// Жук_3
	this.instance_3 = new lib.Жук();
	this.instance_3.parent = this;
	this.instance_3.setTransform(564.5,334.3,0.4,0.45,-80,0,0,-0.4,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[564.4,334.3,499.3,322.9,449.3,304.8,411.6,291.1,376.6,271.1,366.5,265.3,349.8,255,333.3,244.8,326,240.6,299.9,225.8,276.9,220.7,247.6,214.2,237.3,212.6,225,210.6,217.9,211.8,213.3,212.6,202.3,217.2,187.9,223.1,173.9,227.4,156.2,232.7,148.3,237.6,144.9,239.7,137.7,246.6,131.1,253,120.8,258.6,105.6,267.1,76.5,278,9.6,303,-52.2,308.3,-82.1,310.9,-102.9,307.5,-124.9,304,-133.6,294.2], orient:'auto'}},120).wait(1));

	// Слой_1
	this.stopButton = new lib.Стоп();
	this.stopButton.parent = this;
	this.stopButton.setTransform(292.9,350.8,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton, 0, 1, 1);

	this.backButton = new lib.Назад();
	this.backButton.parent = this;
	this.backButton.setTransform(247.8,350.1,0.259,0.259);
	new cjs.ButtonHelper(this.backButton, 0, 1, 1);

	this.startButton = new lib.Пуск();
	this.startButton.parent = this;
	this.startButton.setTransform(330.4,348.5,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton, 0, 1, 1);

	this.stopButton_1 = new lib.Стоп();
	this.stopButton_1.parent = this;
	this.stopButton_1.setTransform(292.9,350.8,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton_1, 0, 1, 1);

	this.backButton_1 = new lib.Назад();
	this.backButton_1.parent = this;
	this.backButton_1.setTransform(247.8,350.1,0.259,0.259);
	new cjs.ButtonHelper(this.backButton_1, 0, 1, 1);

	this.startButton_1 = new lib.Пуск();
	this.startButton_1.parent = this;
	this.startButton_1.setTransform(330.4,348.5,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton_1, 0, 1, 1);

	this.stopButton_2 = new lib.Стоп();
	this.stopButton_2.parent = this;
	this.stopButton_2.setTransform(292.9,350.8,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.stopButton_2, 0, 1, 1);

	this.backButton_2 = new lib.Назад();
	this.backButton_2.parent = this;
	this.backButton_2.setTransform(247.8,350.1,0.259,0.259);
	new cjs.ButtonHelper(this.backButton_2, 0, 1, 1);

	this.startButton_2 = new lib.Пуск();
	this.startButton_2.parent = this;
	this.startButton_2.setTransform(330.4,348.5,0.166,0.166,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.startButton_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startButton_2},{t:this.backButton_2},{t:this.stopButton_2},{t:this.startButton_1},{t:this.backButton_1},{t:this.stopButton_1},{t:this.startButton},{t:this.backButton},{t:this.stopButton}]}).wait(121));

	// Жук_4
	this.instance_4 = new lib.Жук();
	this.instance_4.parent = this;
	this.instance_4.setTransform(634,35.4,0.417,0.365,-100,0,0,-0.7,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.5,regY:81.3,scaleX:0.35,scaleY:0.3,rotation:-115,guide:{path:[633.9,35.4,588.3,38.4,561.1,34.9,546.7,33,532,27.6,526.7,25.6,523.9,25.2,519.7,24.6,514.7,25.9,504.8,28.1,477.3,42,451.8,55,434.9,81.3,425.3,96.4,412.1,129.5,406.2,144.5,402.8,151.6,397.4,162.8,391.9,169.8,378.5,186.3,357,185.4,333.3,184.3,301.9,190.5,271.4,196.5,239.5,207.9,206.9,219.7,179.6,234.9,150.7,251.1,132.6,268.3,119.6,280.8,99.5,308.3,78,337.4,66.4,349.4,45.7,370.9,21.3,381.8,-8.2,395,-47.9,395.4], orient:'auto'}},120).wait(1));

	// Жук_5
	this.instance_5 = new lib.Жук();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.9,58.3,0.399,0.3,56,0,0,-0.4,81.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:81.2,rotation:151,guide:{path:[2,58.4,19.5,48,31.6,36.9,34.6,34.2,39.2,29.9,42.9,26.6,46.3,24.7,54.2,20.5,72.3,18.6,89.6,16.9,135.7,15.4,177.6,14.1,200.7,20.9,218.7,26.1,229.1,38,232.4,41.8,236.9,48.7,242.1,56.9,244.2,59.6,253.9,72.3,269.4,78.4,335.6,104.6,382.1,111.8,458.7,123.7,469.9,82.2,476.8,56.5,482.3,43.7,488.6,28.7,497.2,20.7,505.8,12.7,520.2,8.4,532.8,4.8,556.8,2.1,594.4,-2.1,658.1,74.5,690,112.8,714.4,151.9], orient:'auto'}},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169.9,189.5,791.8,432.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Записьonlineaudioconvertercom.mp3?1614683444643", id:"Записьonlineaudioconvertercom"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;