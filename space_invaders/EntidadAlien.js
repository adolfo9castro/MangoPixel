function EntidadAlien(){
	//La velocidad de movimiento en el eje X de la nave alien�gena
	this.velocidadMovimiento=75;
	//Puntero al juego para poder notificarle eventos
	this.juego;
	
	this.destruido=0;
	
	/**
	* Constructor de la clase
	*
	* juego es el puntero al juego
	* xIni es la coordenada X inicial
	* yIni es la coordenada Y inicial
	* fila es el numero de la fila donde ir� el alien, para saber que imagen utilizar
	*/
	this.constructor=function(juego,xIni,yIni,fila){
		switch(fila)
		{
			default:this.constructorBase(50,60,[Sprites.get("img/mango.png")],300,xIni,yIni,"a");
			break;
		}
		this.juego=juego;
		this.dx=-this.velocidadMovimiento;
	};
	/**
	* Controla el movimiento de la nave alien�gena utilizando el tiempo delta
	*
	* delta es el tiempo en milisegundos transcurridos desde el �ltimo movimiento
	*/
	this.mover=function(delta){
		//Si la nave alcanza el margen izquierdo del mapa, notifica al juego
		//para cambiar de sentido y avanzar un poco
		if (this.dx<0 && this.x<10)
		{
			this.juego.actualizaLogica();
		}
		//Si la nave alcanza el margen derecho del mapa, notifica al juego
		//para cambiar de sentido y avanzar un poco
		if (this.dx>0 && this.x>juego.getAnchuraCanvas()-(this.ancho+10))
		{
			this.juego.actualizaLogica();
		}
		//Movemos la nave
		this.moverBase(delta);
		
		if (this.destruido>0)
		{
			this.destruido-=delta;
			if (this.destruido<=0)
			{
				this.juego.eliminarEntidad(this);
			}
		}
	};
	/**
	* Actualiza la l�gica del juego respecto a los aliens
	*/
	this.logica=function(){
		//Avanza un poco la nave verticalmente
		this.dx=-this.dx;
		this.y+=10;
		//Si alcanza la zona donde est� la nave del jugador, la partida se acaba
		if (this.y>570)
		{
			this.juego.notificarMuerte();
		}
	};
	
	/**
	* Se encarga de hacer que el m�todo mover elimine la entidad, cuando se le notifica
	* con este m�todo que debe ser destruida.
	*/
	this.destruir=function(){
		this.sprites=[Sprites.get("img/explosion.png")];
		this.spriteActual=0;
		this.destruido=100;
	};
	/**
	* Las colisiones de los aliens son manejadas en otro lugar
	*/
	this.colosionadoCon=function(otro){
	};
}
EntidadAlien.prototype = new Entidad();