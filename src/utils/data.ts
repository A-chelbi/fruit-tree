import { ComplexItemType, ItemType } from '../interfaces/treeItem';

export const ITEM_LIST: ItemType[] = [
  {
    name: 'tomate',
    category: 'fruit',
  },
  {
    name: 'pomme de terre',
    category: 'legume',
  },
  {
    name: 'poireau',
    category: 'legume',
  },
  {
    name: 'courgette',
    category: 'legume',
  },
  {
    name: 'cerise',
    category: 'fruit',
  },
  {
    name: 'fraise',
    category: 'fruit',
  },
];

export const ITEM_TREE_LIST: ComplexItemType[] = [
  {
    name: 'pomme de terre',
    category: 'legume#tubercule',
  },
  {
    name: 'fraise des bois',
    category: 'fruit#rouge#fraise',
  },
  {
    name: 'oignon',
    category: 'legume#tubercule',
  },
  {
    name: 'poireau',
    category: 'legume',
  },
  {
    name: 'courgette',
    category: 'legume',
  },
  {
    name: 'fraise Gariguette',
    category: 'fruit#rouge#fraise',
  },
  {
    name: 'cassis',
    category: 'fruit#rouge',
  },
];
