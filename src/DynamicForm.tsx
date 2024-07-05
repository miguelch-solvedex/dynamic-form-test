import { FC } from "react";
import { FormField } from "./types";

type Props = {
  config: FormField[];
};

const DynamicForm: FC<Props> = ({ config }) => {
  // TODO: Implement DynamicForm component
  console.log(config);

  return <div>DynamicForm</div>;
};

export default DynamicForm;
