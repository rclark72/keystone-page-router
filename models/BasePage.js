var keystone = require('keystone');
var BasePage = new keystone.List('BasePage', {
	map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
});
BasePage.add({
	title: { type: String, required: true },
    slug: { type: String, readonly: true },
    publishedDate: { type: Date, default: Date.now },
    metaDescription: { type: String }
});
BasePage.register();

exports = module.exports = BasePage;