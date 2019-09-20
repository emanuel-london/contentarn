import React from 'react';

export default class Transform extends React.Component {
  transformJson(obj) {
    let nodes = [];
    if (typeof obj.data.type !== 'undefined' && obj.data.type == 'recipes') {
      item = obj.data;
      const node = {
        id: item.id,
        title: item.attributes.title,
        difficulty: item.attributes.difficulty || '',
        ingredients: item.attributes.ingredients || [],
        numberofServices: item.attributes.numberofServices || 0,
        preparationTime: item.attributes.preparationTime || '',
        instructions: item.attributes.instructions || '',
        totalTime: item.attributes.totalTime || '',
        image: transformJsonGetImage(obj, item.relationships.image.data.id),
        category:
          typeof item.relationships.category !== 'undefined'
            ? transformJsonGetCat(
                obj,
                item.relationships.category.data.id,
                'categories',
              )
            : '',
      };
      nodes[0] = node;
    } else {
      obj.data.forEach(function(item, index) {
        const node = {
          id: item.id,
          title: item.attributes.title,
          difficulty: item.attributes.difficulty || '',
          ingredients: item.attributes.ingredients || [],
          numberofServices: item.attributes.numberofServices || 0,
          preparationTime: item.attributes.preparationTime || '',
          instructions: item.attributes.instructions || '',
          totalTime: item.attributes.totalTime || '',
          image: transformJsonGetImage(obj, item.relationships.image.data.id),
          category:
            typeof item.relationships.category !== 'undefined'
              ? transformJsonGetCat(
                  obj,
                  item.relationships.category.data.id,
                  'categories',
                )
              : '',
          tags:
            typeof item.relationships.tags !== 'undefined'
              ? transformJsonGetTags(obj, item.relationships.tags)
              : '',
        };
        nodes.push(node);
      });
    }

    return nodes;
  }
}
// Gets tags.
export function transformJsonGetTags(res, obj) {
  let tags = [];
  obj.data.forEach(function(item, index) {
    tags.push(transformJsonGetCat(res, item.id, 'tags'));
  });
  return tags;
}
// Gets category of item.
export function transformJsonGetCat(obj, id, type = 'tags') {
  name = '';
  obj.included.forEach(function(item, index) {
    if (item.id == id && item.type == type) {
      name = item.attributes.name;
    }
  });

  return name;
}
// Gets image
export function transformJsonGetImage(obj, id) {
  fid = '';
  src = '';
  obj.included.forEach(function(item, index) {
    if (item.id == id && item.type == 'images') {
      fid = item.relationships.thumbnail.data.id;
    }
  });
  obj.included.forEach(function(item, index) {
    if (item.id == fid && item.type == 'files') {
      src = item.attributes.url;
    }
  });
  return src;
}
