import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DeleteButton,
  EditButton,
  DateField,
  ListProps,
  ReferenceField,
} from 'react-admin';

const LessonPricingList = (props: ListProps) => (
  <List {...props} title="Lesson Pricing" perPage={25}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <ReferenceField source="courseId" reference="courses" label="Course">
        <TextField source="title.ru" />
      </ReferenceField>
      <TextField source="label.ru" label="Label (RU)" />
      <BooleanField source="isActive" label="Active" />
      <DateField source="updatedAt" label="Last Updated" showTime />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default LessonPricingList;
