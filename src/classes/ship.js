class Ship{
	constructor(name, size){
		this.name = name ? name : '';
		this.size = size ? size : 0;
		this.sunk = false;
		this.hits = [];
	}

	hit(pos){
		if(pos > this.size)
			return false;

		/* Success */
		this.hits.push(pos);
		return this.hits;
	}
}

export { Ship };
