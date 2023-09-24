import axios from "axios";
import { Command, apiRoutes } from "./api.constants";

export function sendCommand(command: Command) {
  return axios
    .post(apiRoutes.command, { command })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
