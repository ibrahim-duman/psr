// Phaser 3 oyununu oluştur
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // Yüklemeler buraya gelecek
}

function create ()
{
    // Oyun sahnesi oluşturulduğunda çalışacak fonksiyon

    // Örneğin, rastgele renklerde toplar oluşturalım
    for (var i = 0; i < 20; i++) {
        var x = Phaser.Math.Between(50, 750); // X koordinatı rastgele seçilsin
        var y = Phaser.Math.Between(50, 550); // Y koordinatı rastgele seçilsin
        var color = Phaser.Display.Color.RandomRGB(); // Rastgele bir renk seçilsin

        var ball = this.add.circle(x, y, 20, color.color); // Topu ekleyelim
        this.physics.add.existing(ball); // Fizik motoruna topu ekle
        ball.setCollideWorldBounds(true); // Sınırlarla çarpışmaları etkinleştir

        // Rastgele bir hız ve yönde topa bir hız verelim
        var velocityX = Phaser.Math.Between(-200, 200);
        var velocityY = Phaser.Math.Between(-200, 200);
        ball.body.setVelocity(velocityX, velocityY);
    }
}