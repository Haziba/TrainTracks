var Cart = function(controls){
  var that = this;

  this.sprites = {
    up: game.add.sprite(0, 0, 'cart_up'),
    down: game.add.sprite(0, 0, 'cart_down'),
  };

  for(var sprite in this.sprites){
    this.sprites[sprite].anchor.x = 0.5;
    this.sprites[sprite].anchor.y = 1;

    this.sprites[sprite].x = 400;
    this.sprites[sprite].y = 460;

    this.sprites[sprite].visible = false;
  }

  this.sprite = this.sprites.up;
  this.sprite.visible = true;
  this.sprite.angle = 1.5;

  var angleVelocity = 0;
  var yVelocity = 0;
  var down = false;

  var jump = function(){
    yVelocity = -10;
  }

  var changeSpriteTo = function(sprite){
    that.sprite.visible = false;
    sprite.x = that.sprite.x;
    sprite.y = that.sprite.y;
    sprite.angle = that.sprite.angle;
    that.sprite = sprite;
    that.sprite.visible = true;
  }

  var goDown = function(){
    if(!down){
      down = true;
      changeSpriteTo(that.sprites.down);
    }
  }

  var goUp = function(){
    if(down){
      down = false;
      changeSpriteTo(that.sprites.up);
    }
  }

  controls.jump.onDown.add(jump, this);
  controls.down.onDown.add(goDown, this);
  controls.down.onUp.add(goUp, this);

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
