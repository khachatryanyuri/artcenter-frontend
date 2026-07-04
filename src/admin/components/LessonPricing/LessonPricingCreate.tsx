import React, { Fragment } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  required,
  CreateProps,
  ReferenceInput,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

// ─── Static choices ────────────────────────────────────────────────────────

const DURATION_CHOICES = [
  { id: 30, name: '30 min' },
  { id: 45, name: '45 min' },
  { id: 60, name: '60 min' },
];

const DISCOUNT_CONDITION_CHOICES = [
  { id: 'fullCourse', name: 'Full course / level payment (5%)' },
  { id: '8lessons', name: 'Advance payment for 8 lessons (3%)' },
];

// ─── Component ─────────────────────────────────────────────────────────────

const LessonPricingCreate = (props: CreateProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    // Mirror the Loading pattern used across the codebase
    return null;
  }

  return (
    <Create title="Create Lesson Pricing" {...props}>
      <SimpleForm>

        {/* ── Identity ── */}
        <ReferenceInput source="courseId" reference="courses" label="Course" required>
          <SelectInput optionText="title.ru" fullWidth />
        </ReferenceInput>

        {/* ── Localised label — one TextInput per language from the DB ── */}
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`Label (${language.code})`}
              source={`label.${language.code}`}
              fullWidth
            />
          </Fragment>
        ))}

        {/* ── Sections ───────────────────────────────────────────────────
            Outer loop: one section (e.g. Basic, Advanced, Individual, Group)
            Contains localized title, optional description, optional levels,
            and an inner array of pricing tiers.
        ── */}
        <ArrayInput source="sections" label="Pricing Sections">
          <SimpleFormIterator>
            {/* Section Title (localized) */}
            {languages.map((language) => (
              <Fragment key={`title-${language.id}`}>
                <TextInput
                  label={`Section Title (${language.code})`}
                  source={`title.${language.code}`}
                  validate={language.code === 'ru' ? required() : undefined}
                  fullWidth
                />
              </Fragment>
            ))}

            {/* Section Description (localized) */}
            {languages.map((language) => (
              <Fragment key={`desc-${language.id}`}>
                <TextInput
                  label={`Section Description (${language.code})`}
                  source={`description.${language.code}`}
                  fullWidth
                />
              </Fragment>
            ))}

            {/* Levels (A, B, C) */}
            <ArrayInput source="levels" label="Levels (e.g. A, B, C)">
              <SimpleFormIterator inline>
                <TextInput source="" label="Level" validate={required()} helperText={false} />
              </SimpleFormIterator>
            </ArrayInput>

            {/* Tiers */}
            <ArrayInput source="tiers" label="Pricing Tiers">
              <SimpleFormIterator>
                <NumberInput
                  source="participantCount"
                  label="Participants (1 = individual, 2 = pair…)"
                  validate={required()}
                  min={1}
                  defaultValue={1}
                />
                <ArrayInput source="durations" label="Duration Variants">
                  <SimpleFormIterator inline>
                    <SelectInput
                      source="duration"
                      label="Duration"
                      choices={DURATION_CHOICES}
                      validate={required()}
                    />
                    <NumberInput
                      source="priceAMD"
                      label="Price (AMD)"
                      validate={required()}
                      min={0}
                    />
                  </SimpleFormIterator>
                </ArrayInput>
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>

        {/* ── Discounts ── */}
        <ArrayInput source="discounts" label="Discounts">
          <SimpleFormIterator inline>
            <SelectInput
              source="condition"
              label="Condition"
              choices={DISCOUNT_CONDITION_CHOICES}
              validate={required()}
            />
            <NumberInput
              source="percentage"
              label="Percentage (%)"
              validate={required()}
              min={0}
              max={100}
            />
          </SimpleFormIterator>
        </ArrayInput>

        {/* ── Status ── */}
        <BooleanInput source="isActive" label="Active" defaultValue={true} />

      </SimpleForm>
    </Create>
  );
};

export default LessonPricingCreate;
