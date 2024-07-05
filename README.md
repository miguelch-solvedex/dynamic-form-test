# Dynamic Form Builder

### Problem Statement:

Create a dynamic form builder using React. The form should be able to render different types of form fields (text input, select box, checkbox, etc.) based on a given JSON configuration. The JSON configuration will be provided as a prop to the component.

### Requirements

- Render the form fields based on the JSON configuration.
- Handle form submission and console log the form data.

### JSON Configuration Example:

```json
[
  {
    "type": "text",
    "label": "Name",
    "name": "name",
    "placeholder": "Enter your name"
  },
  {
    "type": "email",
    "label": "Email",
    "name": "email",
    "placeholder": "Enter your email"
  },
  {
    "type": "select",
    "label": "Country",
    "name": "country",
    "options": ["USA", "Canada", "Mexico"]
  },
  {
    "type": "checkbox",
    "label": "Subscribe to newsletter",
    "name": "subscribe"
  }
]
```
