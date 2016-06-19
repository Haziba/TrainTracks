var Track = function(i, total){
  var that = this;

  this.sprite = game.add.sprite(i * 80, 400, 'tracks');

  var danger;

  var recreate = function(){
    var prevDanger = danger;
    danger = Math.random() < 0.125;

    if(!prevDanger && danger){
      that.dangerSprite = game.add.sprite(i * 80, 400, 'danger_tracks');
    }
    if(prevDanger && !danger){
      that.dangerSprite.destroy();
    }
  }

  recreate();

  this.danger = function(){
    return danger;
  }

  this.dangerHitBox = function(){
    return new Phaser.Rectangle(that.sprite.x + 25, that.sprite.y, 30, 30);
  }

  this.collide = function(){
    this.dangerSprite.destroy();
    danger = false;
  }

  this.update = function(){
    that.sprite.x -= 400 * game.time.elapsed/1000;

    if(that.sprite.x < -that.sprite.width){
      that.sprite.x += that.sprite.width * total;

      recreate();
    }

    if(danger)
      that.dangerSprite.x = that.sprite.x;
  }
}
