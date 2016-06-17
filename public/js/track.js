var Track = function(i, total){
  var that = this;

  this.sprite = game.add.sprite(i * 80, 400, 'tracks');

  this.update = function(){
    this.sprite.x -= 4;

    if(this.sprite.x < -this.sprite.width){
      this.sprite.x += this.sprite.width * total;
    }
  }
}
