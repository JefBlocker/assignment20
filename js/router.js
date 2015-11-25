import Backbone from 'backbone';
import $ from 'jquery';

import {Contacts as ContactsCollection} from './resources';
import {Contact as ContactModel} from './resources';
import {Contact as ContactView} from './views';
import {Contacts as ContactsView} from './views';
import {AddContact} from './views';
import {Spinner} from './views';

export default Backbone.Router.extend({

  routes: {
    ""              : "redirectToContacts",
    "contacts"      : "showContacts",
    "contact/:id"   : "showContact",
    "addContact"    : "newContact"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new ContactsCollection();

    this.$el.on('click', '.contact-list-item', (event) => {
      let $li = $(event.currentTarget);
      let contactId = $li.data('contact-id');
      this.navigate(`contact/${contactId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.create-contact', (event) => {
      console.log('Redirect to AddContact');
      let $li = $(event.currentTarget);
      this.navigate(`addContact`, {trigger: true});
    });

    this.$el.on('click', '.add-new-contact', (event) => {

    let name = $(this.$el).find('.Name').val();
    let email = $(this.$el).find('.Email').val();
    let phone = $(this.$el).find('.Phone').val();
    let location = $(this.$el).find('.Location').val();

    let model = new ContactModel ({
      Name: name,
      Email: email,
      Phone: phone,
      Location: location
    });

    this.collection.add(model);
    model.save().then( () => {
      this.navigate(`contacts`, {trigger: true});
    });

  });
},

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html( Spinner() );
  },

  redirectToContacts() {
    this.navigate('contacts', {
      replace: true,
      trigger: true
    });
  },

  showContacts() {
    this.showSpinner();
    this.collection.fetch().then(() => {
      this.$el.html(ContactsView(this.collection.toJSON()));
    });
  },

  showContact(id) {
    let contact = this.collection.get(id);

    if (contact) {
      this.$el.html(ContactView(contact.toJSON()));
    } else {
      this.showSpinner();
      contact = this.collection.add({objectId: id});
      contact.fetch().then(() => {
        this.$el.html(ContactView(contact.toJSON()));
      });
    }
  },

  newContact() {
    this.showSpinner();
    this.$el.html(AddContact());
  }
  
});