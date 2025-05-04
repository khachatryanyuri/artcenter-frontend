import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, BooleanField, ImageField, ShowProps } from 'react-admin';

const ApplicationFormShow = (props: ShowProps) => (
  <Show {...props} title="Application Form Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id number" />
      <TextField source="fullName.arm" label="Full Name(arm)" />
      <TextField source="fullName.eng" label="Full Name(eng)" />
      <TextField source="fullName.rus" label="Full Name(rus)" />
      <TextField source="email" label="Email" />
      <TextField source="phoneNumber" label="Phone Number" />
      <TextField source="preferredCommunicationMethod.eng" label="Preferred Communication Method(eng)" />
      <TextField source="preferredCommunicationMethod.arm" label="Preferred Communication Method (arm)" />
      <TextField source="preferredCommunicationMethod.rus" label="Preferred Communication Method (rus)" />

      <DateField source="birthday" label="Birthday" />
      <BooleanField source="haveWeapon" label="Have Weapon" />
      <TextField source="weaponName.eng" label="Weapon Name(eng)" />
      <TextField source="weaponName.arm" label="Weapon Name (arm)" />
      <TextField source="weaponName.rus" label="Weapon Name (rus)" />

      <TextField source="weaponCaliber.eng" label="Weapon Caliber(eng)" />
      <TextField source="weaponCaliber.arm" label="Weapon Caliber (arm)" />
      <TextField source="weaponCaliber.rus" label="Weapon Caliber (rus)" />

      <TextField source="howYouKnow.eng" label="How You Know(eng)" />
      <TextField source="howYouKnow.arm" label="How You Know (arm)" />
      <TextField source="howYouKnow.rus" label="How You Know (rus)" />

      <TextField source="reasonToJoin.eng" label="Reason to Join(eng)" />
      <TextField source="reasonToJoin.arm" label="Reason to Join (arm)" />
      <TextField source="reasonToJoin.rus" label="Reason to Join (rus)" />
      <BooleanField source="familiarizedWithCharter" label="Familiarized with Charter" />
      <ImageField source="picture" title="Application Form Picture" />
      <TextField source="createdAt" label="Created At" />
      <TextField source="updatedAt" label="Updated At" />
    </SimpleShowLayout>
  </Show>
);

export default ApplicationFormShow;
