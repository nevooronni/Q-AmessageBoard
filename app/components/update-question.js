import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        email: this.get('email'),
        topic: this.get('topic'),
        question: this.get('question'),
        image: this.get('image'), 
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});