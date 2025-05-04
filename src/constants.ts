const SERVICES_TYPE = [
  { name: 'Shooting', id: 'shooting' },
  { name: 'Free Entry', id: 'freeEntry' },
  { name: 'Team Events', id: 'teamEvents' },
  { name: 'Gift Cards', id: 'giftCards' },
  { name: 'Another', id: 'another' },
];

const MEMBERS_TYPE = [
  { name: 'Board', id: 'board' },
  { name: 'Auditors', id: 'auditors' },
  { name: 'Nomination committee', id: 'nominationCommittee' },
  { name: 'Staff', id: 'staff' },
];

const GIFT_CARDS = 'giftCards';
const SHOOTING = 'shooting';

const RESOURCES_REQUIRING_FORM_DATA = [
  'stations-and-shops',
  'products',
  'news',
  'courses',
  'members',
  'full-membership-request',
  'user/edit-info',
  'application-form',
  'user/register',
  'services',
];

const MAX_IMAGE_COUNT = 2;

export { SERVICES_TYPE, GIFT_CARDS, RESOURCES_REQUIRING_FORM_DATA, MAX_IMAGE_COUNT, SHOOTING, MEMBERS_TYPE };
