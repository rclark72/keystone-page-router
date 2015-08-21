var keystone = require('keystone');
var Types = keystone.Field.Types;
var BasePage = require('./BasePage');

var Gallery = new keystone.List('Gallery', { inherits: BasePage });
Gallery.add({
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages }
});
Gallery.schema.statics.view_name = 'gallery';
Gallery.register();