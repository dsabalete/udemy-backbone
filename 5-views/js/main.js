var SongView = Backbone.View.extend({
    render: function () {
        this.$el.html('Hello World')

        return this
    }
})

var songView = new SongView({ el: '#container' })
songView.render()

// ---

// if you don't especify the element:
var songView = new SongView()

$('#container').html(songView.render().$el)

// ---

// you can customize the view
var CustomizedSongView = Backbone.View.extend({
    tagName: 'span',

    className: 'song',

    id: '1234',

    attributes: {
        'data-genre': 'Jazz'
    },

    render: function () {
        this.$el.html('Hello World')

        return this
    }
})


