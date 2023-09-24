export enum Command {
  POWER_ON = "power-on",
  POWER_OFF = "power-off",
  POWER_TOGGLE = "power-toggle",
  VOLUME_UP = "volume-up",
  VOLUME_DOWN = "volume-down",
}

const baseUrl = { ip: "https://remote-service.gauravranjit.com/" };
// let apiRoutes: { [k in Command]: string };
// Object.keys(Command).forEach((eachCommand) => {
//   apiRoutes[eachCommand as Command] = `${baseUrl}/command/${eachCommand}`;
// });

const apiRoutes = {
  command: `${baseUrl.ip}/command`,
};

export { apiRoutes, baseUrl };
