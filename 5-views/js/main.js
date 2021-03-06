var Song = Backbone.Model.extend()

var Songs = Backbone.Collection.extend({
    model: Song
})

var SongView = Backbone.View.extend({
    tagName: 'li',

    render: function () {
        var template = _.template($("#songTemplate").html())
        var html = template(this.model.toJSON())
        this.$el.html(html)
        //this.$el.html(this.model.get('title') + " <button>Listen</button>")
        //this.$el.attr("id", this.model.id)

        return this
    }
})

var SongsView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
        this.model.on("add", this.onSongAdded, this)
        this.model.on("remove", this.onSongRemoved, this)
    },

    onSongAdded: function(song) {
        var songView = new SongView({ model: song })

        this.$el.append(songView.render().$el)
    },

    onSongRemoved: function(song) {
        // this.$el.find("li#" + song.id).remove()
        this.$("li#" + song.id).remove()
    },

    render: function() {
        var self = this

        this.model.forEach(function(song){
            var songView = new SongView({ model: song })
            self.$el.append(songView.render().$el)
        })
    }
})

var songs = new Songs([
    new Song({ id: 1, title: 'Blue in Green', plays: 10 }),
    new Song({ id: 2, title: 'So What', plays: 1100 }),
    new Song({ id: 3, title: 'All Blues', plays: 1 })
])

var songsView = new SongsView({ el: '#songs', model: songs })
songsView.render()

