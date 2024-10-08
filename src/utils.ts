import { KaboomCtx } from "kaboom";
import { scale } from "./constants";

export async function makeMap(k: KaboomCtx, name: string) {
    const mapData = await (await fetch(`./${name}.json`)).json();

    const map = k.make([k.sprite(name), k.scale(scale), k.pos(0)]);

    const spawnPoints: { [key: string]: { x: number; y: number }[] } = {};

    for (const layer of mapData.layers){
      if (layer.name === "colliders") {
        for (const collider of layer.objects){
            map.add([
                k.area({
                    shape: new k.Rect(k.vec2(0), collider.width, collider.height),
                    collisionIgnore: ["platform", "exit", "exit-2", "exit-3"], 
                }),
                collider.name !== "exit" ? k.body({isStatic: true}) : null,
                k.pos(collider.x, collider.y),
                collider.name !== "exit" ? "platform" : "exit",
                collider.name !== "exit-2" ? k.body({isStatic: true}) : null,
                k.pos(collider.x, collider.y),
                collider.name !== "exit-2" ? "platform" : "exit-2",
                collider.name !== "exit-3" ? k.body({isStatic: true}) : null,
                k.pos(collider.x, collider.y),
                collider.name !== "exit-3" ? "platform" : "exit-3"
            ]);
        }
        continue;
      }
      
      if(layer.name === "spawnpoints"){
        for(const spawnPoint of layer.objects){
            if(spawnPoints[spawnPoint.name]){
                spawnPoints[spawnPoint.name].push({
                    x: spawnPoint.x,
                    y: spawnPoint.y,
                });
                continue;
            }

            spawnPoints[spawnPoint.name] = [{ x: spawnPoint.x, y: spawnPoint.y }];
        }
      }
    }

    return {map, spawnPoints };
} 