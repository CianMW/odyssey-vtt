  import THREE from 'threejs'
  const DiceRoller = () => {

  // Setup your threejs scene
  var scene = new THREE.Scene();
  // ...
  
  // Setup your cannonjs world
  var world = new CANNON.World();
  // ...
  
  DiceManager.setWorld(world);
  
  // Create a dice
  var dice = new DiceD6({backColor: "#ff0000"}); 
  //DiceD6 for six-sided dice; for options see DiceObject
  scene.add(dice.getObject());
  
  // If you want to place the mesh somewhere else, you have to update the body
  dice.getObject().position.x = 150;
  dice.getObject().position.y = 100;
  dice.getObject().rotation.x = 20 * Math.PI / 180;
  dice.updateBodyFromMesh();
  
  // Set the value of the side, which will be upside after the dice lands
  DiceManager.prepareValues([{dice: dice, value: 6}]);
  
  //Animate everything
  function animate() {
      world.step(1.0 / 60.0);
      
      dice.updateMeshFromBody(); 
      // Call this after updating the physics world for rearranging the mesh according to the body
      
      renderer.render(scene, camera);
      
      requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

    return(
    <></>
    )
  }