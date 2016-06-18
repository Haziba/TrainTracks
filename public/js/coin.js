var Coin = function(removeCallback){
  var that = this;
  this.sprite = game.add.sprite(800, 300, 'coin');

  this.hitBox = function(){
    return new Phaser.Rectangle(that.sprite.x + 10, that.sprite.y + 10, that.sprite.height - 20, that.sprite.width - 20);
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
