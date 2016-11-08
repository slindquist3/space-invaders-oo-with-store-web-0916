
let Spaceship = (function createSpaceship() {
  var id = 0;

  return class {
    constructor(attributes) {
      this.id = attributes.id
      this.name = attributes.name
      this.phasers = attributes.phasers
      this.shields = attributes.shields
      this.cloaked = false
      this.warpDrive = "disengaged"
      this.phasersCharge = "uncharged"
      this.docked = true

      // Store.push(Object.assign({}, {spaceships: [...store().spaceships, this]}))
    }
  }
}())
