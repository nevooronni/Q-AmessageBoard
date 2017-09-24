import Ember from 'ember';

export default Ember.Component.extend({
	isImageShowing: false,
	updateQuestionForm: false,
	actions: {
		imageShow: function() {
			this.set('isImageShowing', true);
		},
		imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
	}
});
