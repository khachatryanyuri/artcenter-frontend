import { Create, required, SimpleForm, TextInput } from 'react-admin';

const LanguagesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" label="language code" validate={required()} />
    </SimpleForm>
  </Create>
);

export default LanguagesCreate;
