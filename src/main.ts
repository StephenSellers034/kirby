import { 
    makeBirdEnemy,
    makeFlameEnemy, 
    makeGuyEnemy,
     makePlayer,
      setControls
     } from "./entites";
import { k } from "./kaboomctx";
import { makeMap } from "./utils";

async function gameSetup() {
k.loadSprite("assets", "./kirby-like.png", { //loadSprite used to load from kaboom which is k
    sliceX: 9,
    sliceY: 10,
    anims: {
        kirbIdle: 0,
        kirbInhaling: 1,
        kirbFull: 2,
        kirbInhaleEffect: { from: 3, to: 8, speed: 15, loop: true }, //loop property used and made true so you can stop when you want to
        shootingStar: 9,
        flame: { from: 36, to: 37, speed: 4, loop: true },
        guyIdle: 18,
        guyWalk: { from: 18, to: 19, speed: 4, loop: true },
        bird: { from: 27, to: 28, speed: 4, loop: true },
    },
});
//dc
k.loadSprite("level-1", "./level-1.png");

const {map: level1Layout, spawnPoints: level1SpawnPoints} = await makeMap(
    k,
     "level-1"
    ); 

k.scene("level-1", () => {
  k.setGravity(2100);
  k.add([
    k.rect(k.width(), k.height()), 
    k.color(k.Color.fromHex("#f7d7db")),
    k.fixed(),
]);

k.add(level1Layout);

const kirb = makePlayer(
    k,
    level1SpawnPoints.player[0].x,
    level1SpawnPoints.player[0].y
);

setControls(k, kirb);
k.add(kirb);
k.camScale(0.7, 0.7);
k.onUpdate(() => {
    if(kirb.pos.x < level1Layout.pos.x + 432)
        k.camPos(kirb.pos.x + 500, 890);
});

for (const flame of level1SpawnPoints.flame) {
    makeFlameEnemy(k, flame.x, flame.y);
}

for (const guy of level1SpawnPoints.guy) {
    makeGuyEnemy(k, guy.x, guy.y);
}

for (const bird of level1SpawnPoints.bird) {
    const possibleSpeeds = [100, 200, 300];
    k.loop(10, () => {
      makeBirdEnemy(
        k,
        bird.x,
        bird.y,
        possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
      );
    });
}
});

k.loadSprite("level-2", "./level-2.png");

const{map: level2Layout, spawnPoints: level2SpawnPoints} = await makeMap(
    k,
    "level-2"
);

k.scene("level-2", () => {
    k.setGravity(2100);
    k.add([
        k.rect(k.width(), k.height()),
        k.color(k.Color.fromHex("#dbc6ae")),
        k.fixed(),
    ]);

    k.add(level2Layout);

    const kirb = makePlayer(
        k,
        level2SpawnPoints.player[0].x,
        level2SpawnPoints.player[0].y
    );

    setControls(k, kirb);
    k.add(kirb);
    k.camScale(0.7, 0.7);
    k.onUpdate(() => {
            k.camPos(kirb.pos);
    });

    for (const flame of level2SpawnPoints.flame) {
        makeFlameEnemy(k, flame.x, flame.y);
    }
    
    for (const guy of level2SpawnPoints.guy) {
        makeGuyEnemy(k, guy.x, guy.y);
    }
    
    for (const bird of level2SpawnPoints.bird) {
        const possibleSpeeds = [200, 300, 400];
        k.loop(10, () => {
          makeBirdEnemy(
            k,
            bird.x,
            bird.y,
            possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
          );
        });
    }
   
});

k.loadSprite("level-3", "./level-3.png");

const{map: level3Layout, spawnPoints: level3SpawnPoints} = await makeMap(
    k,
    "level-3"
);

k.scene("level-3", () => {
    k.setGravity(2100);
    k.add([
        k.rect(k.width(), k.height()),
        k.color(k.Color.fromHex("#93b208")),
        k.fixed(),
    ]);

    k.add(level3Layout);

    const kirb = makePlayer(
        k,
        level3SpawnPoints.player[0].x,
        level3SpawnPoints.player[0].y
    );

    setControls(k, kirb);
    k.add(kirb);
    k.camScale(0.7, 0.7);
    k.onUpdate(() => {
            k.camPos(kirb.pos);
    });

    for (const flame of level3SpawnPoints.flame) {
        makeFlameEnemy(k, flame.x, flame.y);
    }
    
    for (const guy of level3SpawnPoints.guy) {
        makeGuyEnemy(k, guy.x, guy.y);
    }
    
    for (const bird of level3SpawnPoints.bird) {
        const possibleSpeeds = [200, 300, 400];
        k.loop(10, () => {
          makeBirdEnemy(
            k,
            bird.x,
            bird.y,
            possibleSpeeds[Math.floor(Math.random() * possibleSpeeds.length)]
          );
        });
    }
   
});

k.go("level-3");
k.go("level-2");
k.go("level-1");




}


gameSetup();