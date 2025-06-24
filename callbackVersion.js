function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback(true);
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    const awake = Math.random() > 0.2; // 80% chance to stay awake
    if (awake) {
      console.log(`${name} finished using the weed eater.`);
      callback(true);
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
      callback(false);
    }
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    const awake = Math.random() > 0.3;
    if (awake) {
      console.log(`${name} finished trimming the hedges.`);
      callback(true);
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
      callback(false);
    }
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(() => {
    const awake = Math.random() > 0.4;
    if (awake) {
      console.log(`${name} finished collecting wood.`);
      callback(true);
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
      callback(false);
    }
  }, 2500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    const awake = Math.random() > 0.2;
    if (awake) {
      console.log(`${name} finished watering the garden.`);
      callback(true);
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
      callback(false);
    }
  }, 500);
}

function doSummerChores(name) {
  mowYard(name, (success) => {
    if (success) {
      weedEat(name, (success) => {
        if (success) {
          trimHedges(name, (success) => {
            if (success) {
              collectWood(name, (success) => {
                if (success) {
                  waterGarden(name, (success) => {
                    if (success) {
                      console.log(`${name} finished all their chores!`);
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

// Start the process
doSummerChores("Kim");
