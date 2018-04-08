var Song = Backbone.Model.extend({
    initialize: function () {
        console.log('A new song has been created.');
    },
    defaults: {
        genre: 'Jazz'
    },
    validate: function(attrs) {
        if(!attrs.title) {
            return "Title is required";
        }
    }
});

var song = new Song({
    title: 'Blue in Green',
    artist: 'Miles Davis',
    publishYear: 1959
});

// set a property or change an existing one
song.set('title', 'Blue in Greeen');

// get property value
var title = song.get('title');

// exist the property?
var hasTitle = song.has('title');

// remove property
song.unset('title');

// remove all property from model
song.clear();

