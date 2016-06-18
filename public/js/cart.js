var Cart = function(controls){
  var that = this;

  this.sprite = game.add.sprite(400, 460, 'cart');
  this.sprite.anchor.x = 0.5;
  this.sprite.anchor.y = 1;
  this.sprite.angle = 1.5;

  var angleVelocity = 0;
  var yVelocity = 0;

  var jump = function(){
    yVelocity = -10;
  }

  controls.jump.onDown.add(jump, this);

  this.hitBox = function(){
    return new Phaser.Rectangle(that.sprite.x - 30, that.sprite.y - 150, 60, 60);
  }

  this.update = function(){
    if(yVelocity > 0 && this.sprite.y == 460){
      if(that.sprite.angle <= -1.5){
        if(that.sprite.angle >= 0){
          angleVelocity -= 0.75;
        } else {
          angleVelocity += 0.75;
        }
      } else {
        if(that.sprite.angle >= 0){
          angleVelocity -= 0.25;
        } else {
          angleVelocity += 0.25;
        }

        if(Math.abs(angleVelocity) > 0.75)
          angleVelocity = (angleVelocity / Math.abs(angleVelocity)) * 0.75;
      }

      that.sprite.angle += angleVelocity;
    } else {
      that.sprite.y += yVelocity;
      yVelocity += 0.5;

      that.sprite.angle = -30;

      if(that.sprite.y >= 460) {
        that.sprite.y = 460;
      }
    }
  }
}
