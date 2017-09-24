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
    }
	}
});
