import { FunctionComponent, useState } from "react";
import { Command } from "../../services/api/api.constants";
import { sendCommand } from "../../services/api/command.api";

const Home: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  function commandHandler(command: Command) {
    return () => {
      // API Call for the command here.
      setLoading(true);
      sendCommand(command)
        .then((res) => console.log(res))
        .catch((err) => console.log("ERRRRRRRoR", err))
        .finally(() => {
          setLoading(false);
        });
    };
  }
  return (
    <>
      <button onClick={commandHandler(Command.POWER_ON)}>Power on</button>
      <button onClick={commandHandler(Command.POWER_OFF)}>Power off</button>
      {loading && <p>loading...</p>}
    </>
  );
};

export default Home;
