class Tardis {
  constructor( //constructor
    name,
    color,
    type,
    doctorname,
    doctorhair,
    doctorsuit,
    doctorshoes,
    vortexStatus
  ) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.doctor = {
      docname: doctorname,
      dochair: doctorhair,
      docsuit: doctorsuit,
      docshoes: doctorshoes,
    };
    this.vortexStatus = vortexStatus;
  }
  //methods
  useVortex(newstat) {
    this.vortexStatus = newstat;
  }
}

export default Tardis;
