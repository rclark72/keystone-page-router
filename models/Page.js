var keystone = require('keystone');
var Types = keystone.Field.Types;
var BasePage = require('./BasePage');

var Page = new keystone.List('Page', { inherits: BasePage });
Page.add({
	content: { type: Types.Html, wysiwyg: true }
});
Page.schema.statics.view_name = 'generic_page';
Page.register();