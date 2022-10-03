import CheckIcon from "@mui/icons-material/Check";
import type { NextPage } from "next";
import { CustomButton } from "../src/components";

const Home: NextPage = () => {
  return (
    <div>
      <h1> Boilerplate </h1>
      <CustomButton
        sx={{ borderRadius: 4 }}
        icon={<CheckIcon />}
        label={"Button Example"}
        color={"secondary"}
        onClick={() => {console.log("Hi")}}
      />
    </div>
  );
};

export default Home;
