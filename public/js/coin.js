var Coin = function(removeCallback){
  var that = this;
  this.sprite = game.add.sprite(800, 320, 'coin');

  this.hitBox = function(){
    return new Phaser.Rectangle(that.sprite.x + 15, that.sprite.y + 10, that.sprite.width - 40, that.sprite.height - 20);
  }

  this.collect = function(){
    that.sprite.destroy();
  }

  this.update = function(){
    that.sprite.x -= 5;

    if(that.sprite.x < -that.sprite.width)
      removeCallback();
  }
}
