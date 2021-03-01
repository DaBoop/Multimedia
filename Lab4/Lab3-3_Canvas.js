(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.КартаМинска = function() {
	this.initialize(img.КартаМинска);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,668,555);


(lib.ТеатроперыибалетаКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Театроперыибалетаvolume");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsIgBCRQAHAwAAAzQAAA3gIA1QgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRATlBFIgBDPATXAAQAJAiAFAjATmhMQgFAngKAlQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEAzqB7IAABaQgBgXAAgWQAAgXABgWgAzqh/IAAD6QAEg/AQg8QgQg9gEhCg");
	this.shape.setTransform(-13,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D50000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDg");
	this.shape_1.setTransform(-13,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A70000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_2.setTransform(-13.3,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ATlhmQAHAwAAAyQAAA2gJA1gAzrgEQAAgXABgWIAABZQgBgWAAgWg");
	this.shape_3.setTransform(-13,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ATlABQAHAvAAAyQAAA3gIA1QgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRAzrhJIAAgYQAAgDAAgDIAAgEQAFlnFskAQFxkDIJAAQIKAAFxEDQFxEEAAFtQAAAygHAwQAAAAAAABIgBDMATlACQgsEvk+DfQlxEDoKAAQoJAAlxkDQk/jggrkwQgFgjgCgmIABB+QACgbAEgaAzqA1IAABaQgBgXAAgWQAAgXABgWg");
	this.shape_4.setTransform(-13.8,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A70000").s().p("At3DoQlajygWlRIAAhaQACgbADgaQAsEwE/DfQFxEDIJAAQIKAAFxkDQE9jeAtkvIgCDMQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_5.setTransform(-14.1,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D50000").s().p("At6JxQk/jggrkvQgFglgCglIAAgYIAAgGIAAgDQAFloFsj/QFxkDIJAAQIKAAFxEDQFxEDAAFtQAAAygHAwIAAACQgsEuk+DfQlxEDoKAAQoJAAlxkDgATlBkIAAgCQAHAvAAAyQAAA3gIA1gAzrDDQAAgWACgXIAABaQgCgXAAgWg");
	this.shape_6.setTransform(-13.8,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Слой 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsIgBCRIgBDPQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaATlBFQAHAwAAAzQAAA3gIA1ATXAAQAJAiAFAjATmhMQgFAngKAlQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQgQg9gEhCIAAD6QAEg/AQg8");
	this.shape_7.setTransform(-13,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C30000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_8.setTransform(-13.3,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D50000").s().p("Azoh8QAEBBAQA9QgPA8gEA/gATaACQAJgkAGgoIgCCRQgFgjgIgig");
	this.shape_9.setTransform(-13.2,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDgATlDtQAHAwAAAyQAAA4gJA0gAzrFPQAAgWABgXIAABaQgBgWAAgXg");
	this.shape_10.setTransform(-13,-50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjIgBDPQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRATlBFQAHAwAAAzQAAA3gIA1ATmhMIgBCRAzqB7QAEg/AQg8QgQg9gEhCIAAD6IAABaQgBgXAAgWQAAgXABgWgATXAAQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkE");
	this.shape_11.setTransform(-13,-33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("At6MYQlajygWlRIAAhaQAEg/AQg8QBDEEEZDGQFxEDIJAAQIKAAFxkDQEZjGBDkEQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQgQg9gEhBIgBgpIABgmQASlVFej2QFxkCIJgBQIKABFxECQFJDnAkE8QAEAmAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjIgCDPIACjPQAHAwAAAzQAAA3gJA1QgvEpk5DbQlxEDoKABQoJgBlxkDgAzrCoQAAgXABgWIAABaQgBgXAAgWgAzqB7g");
	this.shape_12.setTransform(-13,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_11}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-139.4,254,212.3);


(lib.НациональнаябиблиотекаКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Национальнаябиблиотека");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsIgBCRQAHAwAAAzQAAA3gIA1QgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRATlBFIgBDPATXAAQAJAiAFAjATmhMQgFAngKAlQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEAzqB7IAABaQgBgXAAgWQAAgXABgWgAzqh/IAAD6QAEg/AQg8QgQg9gEhCg");
	this.shape.setTransform(-13,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D50000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDg");
	this.shape_1.setTransform(-13,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A70000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_2.setTransform(-13.3,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ATlhmQAHAwAAAyQAAA2gJA1gAzrgEQAAgXABgWIAABZQgBgWAAgWg");
	this.shape_3.setTransform(-13,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ATlABQAAAAAAABIgBDMQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaAzrhJIAAgYQAAgDAAgDIAAgEQAFlnFskAQFxkDIJAAQIKAAFxEDQFxEEAAFtQAAAygHAwQAHAvAAAyQAAA3gIA1ATlACQgsEvk+DfQlxEDoKAAQoJAAlxkDQk/jggrkwQgFgjgCgmIABB+QACgbAEga");
	this.shape_4.setTransform(-13.8,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A70000").s().p("At3DoQlajygWlRIAAhaQACgbADgaQAsEwE/DfQFxEDIJAAQIKAAFxkDQE9jeAtkvIgCDMQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_5.setTransform(-14.1,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D50000").s().p("At6JxQk/jggrkvQgFglgCglIAAgYIAAgGIAAgDQAFloFsj/QFxkDIJAAQIKAAFxEDQFxEDAAFtQAAAygHAwQAHAvAAAyQAAA3gIA1IABjLQgsEuk+DfQlxEDoKAAQoJAAlxkDgATlBkIAAgCIAAACgAzrDDQAAgWACgXIAABaQgCgXAAgWg");
	this.shape_6.setTransform(-13.8,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Слой 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsIgBCRIgBDPQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaATlBFQAHAwAAAzQAAA3gIA1ATXAAQAJAiAFAjATmhMQgFAngKAlQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQgQg9gEhCIAAD6QAEg/AQg8");
	this.shape_7.setTransform(-13,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C30000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_8.setTransform(-13.3,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D50000").s().p("Azoh8QAEBBAQA9QgPA8gEA/gATaACQAJgkAGgoIgCCRQgFgjgIgig");
	this.shape_9.setTransform(-13.2,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDgATlDtQAHAwAAAyQAAA4gJA0gAzrFPQAAgWABgXIAABaQgBgWAAgXg");
	this.shape_10.setTransform(-13,-50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjIgBDPQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRATlBFQAHAwAAAzQAAA3gIA1ATmhMIgBCRAzqB7QAEg/AQg8QgQg9gEhCIAAD6IAABaQgBgXAAgWQAAgXABgWgATXAAQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkE");
	this.shape_11.setTransform(-13,-33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("At6MYQlajygWlRIAAhaQAEg/AQg8QBDEEEZDGQFxEDIJAAQIKAAFxkDQEZjGBDkEQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQgQg9gEhBIgBgpIABgmQASlVFej2QFxkCIJgBQIKABFxECQFJDnAkE8QAEAmAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjIgCDPIACjPQAHAwAAAzQAAA3gJA1QgvEpk5DbQlxEDoKABQoJgBlxkDgAzrCoQAAgXABgWIAABaQgBgXAAgWgAzqB7g");
	this.shape_12.setTransform(-13,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_11}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-139.4,254,212.3);


(lib.МузейКнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Беларускийнародныймузейнароднойархитектурыибыта");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjQAHAwAAAzQAAA3gIA1QgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaATmhMIgBCRIgBDPAzWAAQgQg9gEhCIAAD6QAEg/AQg8gATXAAQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkE");
	this.shape.setTransform(-13,-33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D50000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDg");
	this.shape_1.setTransform(-13,-50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A70000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_2.setTransform(-13.3,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ATlhmQAHAwAAAyQAAA2gJA1gAzrgEQAAgXABgWIAABZQgBgWAAgWg");
	this.shape_3.setTransform(-13,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ATlACIgBDMQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaATlABQAHAvAAAyQAAA3gIA1AzrhJIAAgYQAAgDAAgDIAAgEQAFlnFskAQFxkDIJAAQIKAAFxEDQFxEEAAFtQAAAygHAwQAAAAAAABQgsEvk+DfQlxEDoKAAQoJAAlxkDQk/jggrkwQgFgjgCgmIABB+QACgbAEga");
	this.shape_4.setTransform(-13.8,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A70000").s().p("At3DoQlajygWlRIAAhaQACgbADgaQAsEwE/DfQFxEDIJAAQIKAAFxkDQE9jeAtkvIgCDMQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_5.setTransform(-14.1,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D50000").s().p("At6JxQk/jggrkvQgFglgCglIAAgYIAAgGIAAgDQAFloFsj/QFxkDIJAAQIKAAFxEDQFxEDAAFtQAAAygHAwIAAACQgsEuk+DfQlxEDoKAAQoJAAlxkDgATlBkIAAgCQAHAvAAAyQAAA3gIA1gAzrDDQAAgWACgXIAABaQgCgXAAgWg");
	this.shape_6.setTransform(-13.8,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Слой 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjIgBDPQgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRATmhMIgBCRQAHAwAAAzQAAA3gIA1AzWAAQgQg9gEhCIAAD6QAEg/AQg8gAzqB7IAABaQgBgXAAgWQAAgXABgWgATXAAQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkE");
	this.shape_7.setTransform(-13,-33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C30000").s().p("At3ELQlajzgWlQIAAhaQAEg/APg8QBDEEEaDGQFxECIJAAQIKAAFxkCQEZjGBDkEQAJAiAFAjIgCDPQgvEok5DcQlxEDoKAAQoJAAlxkDg");
	this.shape_8.setTransform(-13.3,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D50000").s().p("Azoh8QAEBBAQA9QgPA8gEA/gATaACQAJgkAGgoIgCCRQgFgjgIgig");
	this.shape_9.setTransform(-13.2,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("At6JxQkZjFhDkEQgQg+gEhCIgBgoIABglQASlWFej1QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAnQAAAugGAsQgFAogKAmQhDEDkZDGQlxEDoKAAQoJAAlxkDgATlDtQAHAwAAAyQAAA4gJA0gAzrFPQAAgWABgXIAABaQgBgWAAgXg");
	this.shape_10.setTransform(-13,-50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Azqh/QgBgTAAgVQAAgTABgSQASlWFej2QFxkDIJAAQIKAAFxEDQFJDnAkE7QAEAnAAAoQAAAvgGAsIgBCRQAHAwAAAzQAAA3gIA1QgwEpk5DcQlxEDoKAAQoJAAlxkDQlajzgWlRQgBgXAAgWQAAgXABgWIAABaATXAAQAJAiAFAjIgBDPATmhMQgFAngKAlQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQgQg9gEhCIAAD6QAEg/AQg8");
	this.shape_11.setTransform(-13,-33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("At6MYQlajygWlRIAAhaQAEg/AQg8QgQg9gEhBIgBgpIABgmQASlVFej2QFxkCIJgBQIKABFxECQFJDnAkE8QAEAmAAAoQAAAvgGAsQgFAngKAlQAJAiAFAjQAHAwAAAzQAAA3gJA1IACjPIgCDPQgvEpk5DbQlxEDoKABQoJgBlxkDgAt6HKQFxEDIJAAQIKAAFxkDQEZjGBDkEQhDEEkZDGQlxEDoKAAQoJAAlxkDQkZjGhDkEQBDEEEZDGgAzrCoQAAgXABgWIAABaQgBgXAAgWgAzqB7g");
	this.shape_12.setTransform(-13,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_11}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-139.4,254,212.3);


// stage content:
(lib.Lab33_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.МузейКнопка();
	this.instance.parent = this;
	this.instance.setTransform(60.1,1079.9,0.2,0.2,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.МузейКнопка(), 3);

	this.instance_1 = new lib.НациональнаябиблиотекаКнопка();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1072,324.4,0.2,0.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.НациональнаябиблиотекаКнопка(), 3);

	this.instance_2 = new lib.ТеатроперыибалетаКнопка();
	this.instance_2.parent = this;
	this.instance_2.setTransform(733.6,499.5,0.2,0.2,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.ТеатроперыибалетаКнопка(), 3);

	this.instance_3 = new lib.КартаМинска();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-7,2.039,2.085);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(675,568,1362.2,1157);
// library properties:
lib.properties = {
	width: 1350,
	height: 1150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/КартаМинска_.png?1614082831189", id:"КартаМинска"},
		{src:"sounds/Беларускийнародныймузейнароднойархитектурыибыта_.mp3?1614082831189", id:"Беларускийнародныймузейнароднойархитектурыибыта"},
		{src:"sounds/Национальнаябиблиотека_.mp3?1614082831189", id:"Национальнаябиблиотека"},
		{src:"sounds/Театроперыибалетаvolume.mp3?1614082831189", id:"Театроперыибалетаvolume"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;