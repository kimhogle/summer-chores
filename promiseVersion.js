function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      resolve(true); // always succeeds
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const awake = Math.random() > 0.2;
      if (awake) {
        console.log(`${name} finished using the weed eater.`);
        resolve(true);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const awake = Math.random() > 0.3;
      if (awake) {
        console.log(`${name} finished trimming the hedges.`);
        resolve(true);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const awake = Math.random() > 0.4;
      if (awake) {
        console.log(`${name} finished collecting wood.`);
        resolve(true);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const awake = Math.random() > 0.2;
      if (awake) {
        console.log(`${name} finished watering the garden.`);
        resolve(true);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(() => weedEat(name))
    .then(() => trimHedges(name))
    .then(() => collectWood(name))
    .then(() => waterGarden(name))
    .then(() => console.log(`${name} finished all their chores!`))
    .catch((error) => console.log(error));
}

// Start the process
doSummerChores("Kim");
