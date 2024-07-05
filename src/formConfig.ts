import { FormField } from "./types";

export const formConfig: FormField[] = [
  {
    type: "text",
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: ["USA", "Canada", "Mexico"],
  },
  {
    type: "checkbox",
    label: "Subscribe to newsletter",
    name: "subscribe",
  },
];
