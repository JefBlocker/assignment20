import $ from 'jquery';

const APP_ID = '5nanxgv8fEV2Uxww89idhvEnjOLJm6pJndiasktS';
const API_KEY = 'g7EJHDDalLAR58zOmYGFpt2JlJYXjx0rjFQtlXlS';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});