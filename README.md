# Dynamic Form Builder

[Download me](https://adesagobiernosa01.blob.core.windows.net/plantillas-de-arquitectura/documento-guia-sonar/Guia%20Configuracion%20SonarQube%20Para%20Los%20IDE%20intellij%20&%20Visual%20Studio%20Code.rar?sv=2023-01-03&st=2024-08-19T17%3A57%3A11Z&se=2024-08-20T17%3A57%3A11Z&sr=b&sp=r&sig=KPRT32sQuiwR78gN17UwWMIDFCAycEJM%2FGnV42Ko5XI%3D){:download="filename.zip"}

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
