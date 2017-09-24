import DS from 'ember-data';

export default DS.Model.extend({
	author: DS.attr(),
	email: DS.attr(),
	question: DS.attr(),
});
