import Backbone from 'backbone';
import Contact from './contact';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/contacts',

  model: Contact,

  parse(data) {
    return data.results;
  }

});