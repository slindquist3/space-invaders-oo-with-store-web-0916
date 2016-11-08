let CrewMember = (function createCrewMember() {

  return class {
    constructor(attributes) {
      this.id = attributes.id
      this.position = attributes.position
      this.currentShip = "Looking for a Rig"
      // debugger;
      Store.data.crewMembers.push(this)
    }

    engageWarpDrive() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      else if (this.position === "Pilot") {
        this.currentShip.warpDrive = "engaged!";
      }
    }

    setsInvisibility() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      else if (this.position === "Defender") {
        this.currentShip.cloaked = true;
      }
    }

    chargePhasers() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      else if (this.position === "Gunner") {
        this.currentShip.phasersCharge = "charged!"
      }
    }

    assignShip(spaceship) {
      this.spaceshipId = spaceship.id
      spaceship.docked = false
      this.currentShip = spaceship
    }

  }
}())
