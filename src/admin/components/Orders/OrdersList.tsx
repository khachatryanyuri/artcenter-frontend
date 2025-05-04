import { List, Datagrid, TextField, SearchInput, ListProps } from 'react-admin';

const postFilters = [<SearchInput key="search" source="email" alwaysOn />];

const OrdersList = (props: ListProps) => (
  <List {...props} filters={postFilters} title="Orders" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="orderId" label="Order Id" />
      <TextField source="userId" label="User Id" />
      <TextField source="totalPrice" label="Total Price" />
      <TextField source="paymentMethod" label="Payment Method" />
    </Datagrid>
  </List>
);

export default OrdersList;
