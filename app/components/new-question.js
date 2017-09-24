import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        author: this.get('author'),
        email: this.get('email'),
        topic: this.get('topic'),
        question: this.get('question'),
        image: this.get('image'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});