export type ItemType = {
  name: string;
  category: 'fruit' | 'legume';
};

export type MainCateroryType = 'fruit' | 'legume';
export type FruiteType = 'rouge';
export type SubFruiteType = 'fraise';
export type VegType = 'tubercule';

export type ComplexItemType = {
  name: string;
  category:
    | MainCateroryType
    | `${MainCateroryType}#${FruiteType}`
    | `${MainCateroryType}#${FruiteType}#${SubFruiteType}`
    | `${MainCateroryType}#${VegType}`;
};
