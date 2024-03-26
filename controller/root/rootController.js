const rootController_GET = {
	home: (req, res) => {
		res.render('home');
	},
	contact: (req, res) => {
		res.render('contact');
	},
	about: (req, res) => {
		res.render('about');
	}
};

export { rootController_GET };