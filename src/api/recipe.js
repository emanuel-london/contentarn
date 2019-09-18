import RestClient from 'react-native-rest-client';

export default class RecipeApi extends RestClient {
  constructor () {
    // Initialize with your base URL
    super('https://live-contentacms.pantheonsite.io/api');
  }
  getAll(limit = 4, offset = 0) {
    const query = {
        'include': 'image,image.thumbnail',
        'fields[recipes]': 'id,title,image',
        'fields[categories]': 'name',
        'fields[images]': 'thumbnail',
        'fields[files]': 'url',
        'sort': '-created',
        'page[limit]': limit,
        'page[offset]': offset,
    };
    return this.GET('/recipes', query).then(response => response);
  }
  getPromoted (limit = 4, offset = 0) {
    const query = {
      'include': 'category,image,image.thumbnail',
      'fields[recipes]': 'id,category,title,image',
      'fields[categories]': 'name',
      'fields[images]': 'thumbnail',
      'fields[files]': 'url',
      'filter[isPromoted][value]': 1,
      'filter[isPublished][value]': 1,
      'sort': '-created',
      'page[limit]': limit,
      'page[offset]': offset,
      };
    return this.GET('/recipes', query).then(response => response);
  }

  get(id) {
    const query = {
      'include': 'category,tags,image,image.thumbnail',
      'fields[recipes]': 'id,title,image,category,difficulty,ingredients,instructions,numberOfServices,tags,totalTime',
      'fields[categories]': 'id,name',
      'fields[tags]': 'id,name',
      'fields[images]': 'thumbnail',
      'fields[files]': 'url',
    }
    return this.GET(`/recipes/${id}`, query).then(response => response);
  }
}