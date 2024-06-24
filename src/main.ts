import { k } from "./kaboomctx";

async function gameSetup() {
k.loadSprite("assets", "./kirby-like.png", {//loadSprite used to load from kaboom which is k
    sliceX: 9,
    sliceY: 10,
    anims: {
        kirbIdle: 0,
        kirbInhaling: 1,
        kirbFull: 2,
        kirbInhaleEffect: {from : 3, to: 8, speed: 15, loop: true}, //loop property used and made true so you can stop when you want to
        shootingStar: 9,
        flame: {from: 36, to: 37, speed: 4, loop: true },
        guyIdle: 18,
        guyWalk: {from: 18, to: 19, speed: 4, loop: true },
        bird: {from : 27, to: 28, speed: 4, loop: true },
    },
});

k.loadSprite("level-1", "./level-1.json.png");

k.scene("level-1", () => {
  k.setGravity(2100);
  k.add([
    k.rect(k.width(), k.height()), 
    k.color(k.Color.fromHex("#f7d7db")),
    k.fixed(),
]);
});

k.go("level-1");


}

gameSetup();