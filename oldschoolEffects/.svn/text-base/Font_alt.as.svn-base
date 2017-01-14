import flash.geom.*;
import mx.transitions.Tween;

class oldschoolEffects.Font_alt extends MovieClip{
	private var _arrayPixelLetters:Array;
	private var _arrayStringLetters:Array;
	public var xpos:Number; 
	public var ypos:Number; 
	//public var this:MovieClip;
	public var dir:Number;
	private var interval_start:Number;
	private var interval:Number;
	private var ga:Array;
	private var ga_pos:Array;
	private var agl:Number;
	private var sinRunBool:Boolean;
	

	
	
	public function Font_alt(){
		
		dir = 0;
		xpos = 120;
		ypos = 40;
		sinRunBool = false;
		
		_arrayPixelLetters = new Array();
		
		var a:Array = [[0,1,1,0], 
						[1,0,0,1], 
						[1,1,1,1], 
						[1,0,0,1], 
						[1,0,0,1]];

		var b:Array = [ [1,1,1,0], 
						[1,0,0,1], 
						[1,1,1,0], 
						[1,0,0,1], 
						[1,1,1,0]];

		var c:Array = [ [0,1,1,1],
						[1,0,0,0],
						[1,0,0,0],
						[1,0,0,0],
						[0,1,1,1]];

		var d:Array = [ [1,1,1,0],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,1,1,0]];

		var e:Array = [ [1,1,1,1],
						[1,0,0,0],
						[1,1,1,0],
						[1,0,0,0],
						[1,1,1,1]];

		var f:Array = [ [1,1,1,1],
						[1,0,0,0],
						[1,1,1,0],
						[1,0,0,0],
						[1,0,0,0]];

		var g:Array = [ [1,1,1,1],
						[1,0,0,0],
						[1,0,1,1],
						[1,0,0,1],
						[1,1,1,1]];

		var h:Array = [ [1,0,0,1],
						[1,0,0,1],
						[1,1,1,1],
						[1,0,0,1],
						[1,0,0,1]];

		var i:Array = [ [1,1,1,0],
						[0,1,0,0],
						[0,1,0,0],
						[0,1,0,0],
						[1,1,1,0]];

		var j:Array = [ [0,1,1,1],
						[0,0,0,1],
						[0,0,0,1],
						[1,0,0,1],
						[0,1,1,0]];

		var k:Array = [ [1,0,0,1],
						[1,0,0,1],
						[1,1,1,0],
						[1,0,0,1],
						[1,0,0,1]];

		var l:Array = [ [1,0,0,0],
						[1,0,0,0],
						[1,0,0,0],
						[1,0,0,0],
						[1,1,1,1]];

		var m:Array = [ [1,1,1,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,0,1]];

		var n:Array = [ [1,0,0,1],
						[1,1,0,1],
						[1,0,1,1],
						[1,0,0,1],
						[1,0,0,1]];

		var o:Array = [ [1,1,1,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,1,1,1]];

		var p:Array = [ [1,1,1,1],
						[1,0,0,1],
						[1,1,1,1],
						[1,0,0,0],
						[1,0,0,0]];

		var q:Array = [ [1,1,1,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,1,0],
						[1,1,0,1]];

		var r:Array = [ [1,1,1,1],
						[1,0,0,1],
						[1,1,1,1],
						[1,0,1,0],
						[1,0,0,1]];

		var s:Array = [ [1,1,1,1],
						[1,0,0,0],
						[1,1,1,1],
						[0,0,0,1],
						[1,1,1,1]];

		var t:Array = [ [1,1,1,1],
						[0,0,1,0],
						[0,0,1,0],
						[0,0,1,0],
						[0,0,1,0]];

		var u:Array = [ [1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,1,1,1]];

		var v:Array = [ [1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,0,1,1],
						[1,1,0,0]];

		var w:Array = [ [1,0,0,1],
						[1,0,0,1],
						[1,0,0,1],
						[1,1,1,1],
						[1,0,0,1]];

		var x:Array = [ [1,0,0,1],
						[0,1,1,0],
						[0,1,1,0],
						[0,1,1,0],
						[1,0,0,1]];

		var y:Array = [ [1,0,0,1],
						[1,1,0,1],
						[0,0,1,1],
						[0,0,0,1],
						[0,0,0,1]];

		var z:Array = [ [1,1,1,1],
						[0,0,0,1],
						[0,0,1,0],
						[0,1,0,0],
						[1,1,1,1]];

		var space:Array = [ [0,0,0,0],
							[0,0,0,0],
							[0,0,0,0],
							[0,0,0,0],
							[0,0,0,0]];

		_arrayPixelLetters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,y,z,space]; 
		_arrayStringLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","y","z"," "];
		
	}
	
	public function getPixelLetter(s:String):Array{
		var myIndex:Number = -1;
		var myPixelLetterResult:Array;
		for(var i:Number = 0; i < _arrayStringLetters.length; i++){
			if (_arrayStringLetters[i] == s) {
				myIndex = i;
			}
		}
		
		if (i == -1) {
			myPixelLetterResult =  _arrayPixelLetters[0];
		} else {
			myPixelLetterResult =  _arrayPixelLetters[myIndex];
		}
		
		return myPixelLetterResult;
	}


	public function makeGlobalArray(chaine:String):Void{ //trace("makeGlobalArray"); 
		//trace(a);
		var global_array:Array;//trace("on est dans makeGlobalArray"+" "+this);
		global_array = new Array();
		var a:Number = 0; 
			for(var i:Number = 0; i < chaine.length; i++){ 
				var lettre_array:Array = this.getPixelLetter(chaine.charAt(i));
				for(var j:Number = 0; j <= 4; j++){ 
					for(var k:Number = 0; k <= 3; k++){ 
						global_array[a] = lettre_array[j][k]; //trace("global_array[a] = lettre_array[j][k] : "+global_array[a]);
						a++; 
					}
				}
			}
		ga = global_array;// trace("on trace : "+ga);
		}



	public function affiche_alt():Void{ //trace("affiche_alt()"); 
		//trace(this);
		ga_pos = new Array();
		var indice = 0;
		var init_xpos = xpos;
		for(var i:Number = 0; i < (ga.length / 20); i++){ 
			for(var j:Number = 0; j < 5; j++){
				for(var k:Number = 0; k < 4; k++){
					if(ga[indice] == 1){ 
						this.attachMovie("carre", "carre"+indice, this.getNextHighestDepth()); 
						this["carre"+indice]._x = xpos;
						this["carre"+indice]._y = ypos;
						var colorTrans:ColorTransform = new ColorTransform();
						colorTrans.redOffset = Math.floor((indice / 255)*100+90);
						colorTrans.blueOffset = Math.floor((indice / 255)*100);
						colorTrans.greenOffset = ((indice%255)+1)*2;
						var transCouleur:Transform = new Transform(this["carre"+indice]);
						transCouleur.colorTransform = colorTrans;
						ga_pos[indice] = this["carre"+indice]; //trace("hello"+indice);
					} 
					else {
						ga_pos[indice] = null;
					}			
				indice++; 
				xpos += 5;
				}
			xpos -= 20;
			ypos += 5;
			}
		ypos -= 25;
		xpos += 22;
		}
	
	}
	
	private function dissolve(ga_pos:Array):Void{ 
		for(var i:Number=0; i < ga_pos.length; i++){ //trace(ga[i]._x);
			if(ga_pos[i] != null){
				var myTween:Tween = new Tween(ga_pos[i], "_y", mx.transitions.easing.Back.easeInOut, ga_pos[i]._y, ga_pos[i]._y+300, (Math.floor(((Math.random()+1)*100)-100)/10)+2, true);
				var myTween3:Tween = new Tween(ga_pos[i], "_x", mx.transitions.easing.Back.easeInOut, ga_pos[i]._x, ga_pos[i]._x-100, (Math.floor(((Math.random()+1)*100)-100)/10)+2, true);
				if(getTimer() > 500){
					clearInterval(interval_start);
				}
			}
		} 
	}

	private function dissolve_up(ga_pos:Array):Void{ 
		for(var i:Number=0; i < ga_pos.length; i++){ //trace(ga[i]._x);
			if(ga_pos[i] != null){
				var myTween2:Tween = new Tween(ga_pos[i], "_y", mx.transitions.easing.Back.easeInOut, ga_pos[i]._y, ga_pos[i]._y-300, (Math.floor(((Math.random()+1)*100)-100)/10)+1, true);
				var myTween3:Tween = new Tween(ga_pos[i], "_x", mx.transitions.easing.Back.easeInOut, ga_pos[i]._x, ga_pos[i]._x+100, (Math.floor(((Math.random()+1)*100)-100)/10)+1, true);
			}
		} 
	}

	public function move(){
	if (dir == 0){
		dissolve(ga_pos);
		dir = 1;
		
	} 
	else if(dir == 1) {
		dissolve_up(ga_pos);
		dir = 0;
			
	}
}		

	public function setIntervalStart(n:Number):Void{
		interval_start = setInterval(this, "move", n);
	}

	public function setIntervalRunning(n:Number):Void{
		interval = setInterval(this, "move", n);
	
	}
	
	private function sined():Void{ 
		var myAgl:Number = agl;
		//trace("sined");
		for(var k:Number = 0; k < 20; k+=4){ //k est le nombre de ligne horizontale 
			for(var j:Number = k; j < ga_pos.length; j += 20 ){
				for(var i:Number = 0; i < 4; i ++){
					if(ga_pos[i+j] != null){ 
						ga_pos[i+j]._y += (200 + (Math.sin(myAgl))*15); 
						myAgl += 0.015*4;
					}
					else {
						myAgl += 0.015*4;
					}
				}
			}
		}
	}
	
	public function launchSin(angle:Number):Void{
		agl = angle;
		sinRunBool = true;
	}
	
	public function stopSin():Void{
		sinRunBool = false;
	}
	
	/*private function onEnterFrame():Void{
		trace("onenterframe");
		if(sinRunBool){
			sined();
			agl += 0.4;
		}
	}
*/

	public function debug():Void{
		trace("in debug function");
	}
}


