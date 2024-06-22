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
}

gameSetup();