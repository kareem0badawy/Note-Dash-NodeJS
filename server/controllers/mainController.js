

// homepage
exports.homepage =  (req, res) => {
    const locals = {
        title: 'Note Dash',
        description: 'Simple note taking app',
    }

    res.render('index', {
        locals: locals,
        layout: '../views/layouts/front-page'
    });
}

// about
exports.about = (req, res) => {
    res.render('about', {
        title: 'About - Note Dash',
        description: 'Simple note taking app'
    });
}