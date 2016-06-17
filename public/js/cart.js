var Cart = function(){
  var that = this;

  this.sprite = game.add.sprite(400, 460, 'cart');
  this.sprite.anchor.x = 0.5;
  this.sprite.anchor.y = 1;
  this.sprite.angle = 1.5;

  var angleVelocity = 0;

  this.update = function(){
    if(that.sprite.angle >= 0){
      angleVelocity -= 0.25;
    } else {
      angleVelocity += 0.25;
    }

    that.sprite.angle += angleVelocity;
  }
}
