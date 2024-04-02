var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');
var fondoJuego;

var persona; 
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var nuevo;

var estadoPrincipal = {
    preload: function () {
        juego.load.image('fondo', 'img/bg.jpg');
        juego.load.spritesheet('animacion', 'img/spritesheet1.png', 128, 128);

    },
    create: function () {
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');

        nuevo=juego.add.sprite(200,290, 'animacion');
        nuevo.animations.add('movi',[0,1,2,3,4,5],10,true);

        teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        

        
    },

    update: function(){
        fondoJuego.tilePosition.x-=1;

		if(teclaDerecha.isDown){
		nuevo.x+=2;
		nuevo.animations.play('movi');

		}else if(teclaIzquierda.isDown){
		nuevo.position.x-=2;
		nuevo.animations.play('movi');
		}else if(teclaArriba.isDown){

		}else if(teclaAbajo.isDown){
			nuevo.animations.play('movi');
		}
	}

};


juego.state.add('principal', estadoPrincipal);

juego.state.start('principal');
