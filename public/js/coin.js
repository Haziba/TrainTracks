var Coin = function(removeCallback){
  var that = this;
  this.sprite = game.add.sprite(800, 300, 'coin');

  this.update = function(){
    that.sprite.x -= 5;

    if(that.sprite.x < -that.sprite.width)
      removeCallback();
  }
}
