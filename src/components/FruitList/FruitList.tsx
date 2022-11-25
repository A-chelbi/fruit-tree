import React from 'react';
import { ComplexItemType } from '../../interfaces/treeItem';
import { ITEM_LIST, ITEM_TREE_LIST } from '../../utils/data';

const filterAlphabetcally = (obj: any) => {
  return obj.sort((a: any, b: any) => a.name.localeCompare(b.name));
};

const filtercategory = (obj: any) => {
  return obj.sort((a: any, b: any) => {
    const categoryA = a.category.split('#');
    const categoryB = b.category.split('#');
    return categoryA[0].localeCompare(categoryB[0]);
  });
};

const filterSubcategory = (obj: any) => {
  return obj.sort((a: any, b: any) => {
    const categoryA = a.category.split('#');
    const categoryB = b.category.split('#');

    return (
      !categoryB[1] === undefined &&
      categoryA[1].localeCompare(categoryB[1])
    );
  });
};

export default function FruitList() {
  const fruitObj = filterAlphabetcally(ITEM_TREE_LIST).filter(
    (obj: ComplexItemType) => {
      const category = obj.category.split('#');
      return category[0] === 'fruit';
    }
  );

  const vegObj = filterAlphabetcally(ITEM_TREE_LIST).filter(
    (obj: ComplexItemType) => {
      const category = obj.category.split('#');
      return category[0] === 'legume';
    }
  );

  console.log(fruitObj);
  console.log(vegObj);

  return (
    <ul>
      <li>fruit</li>
      {fruitObj.map((item: any) => {
        // const category = item.category.split('#');
        return (
          <ul>
            <li>{item.name}</li>
          </ul>
        );
      })}

      <li>legumes</li>
      {vegObj.map((item: any) => {
        return (
          <ul>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </ul>
  );
}
