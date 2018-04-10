var Song = Backbone.Model.extend()

// ---- Creating collections
var Songs = Backbone.Collection.extend({
    model: Song,
    url: '/api/songs'
})

var songs = new Songs([
    new Song({ title: 'Song 1'}),
    new Song({ title: 'Song 2'}),
    new Song({ title: 'Song 3'})
])

songs.add(new Song({ title: 'Song 4'}))

var firstSong = songs.at(0)

var songWithIdC1 = songs.get('c1')

songs.remove(firstSong)

// ---- Working with collections

songs.add(new Song({ title: 'Song 5', genre: 'Jazz', downloads: 110}), { at: 0 })

songs.push(new Song({ title: 'Song 6', genre: 'Jazz', downloads: 90 }))

var lastSong = songs.pop()

var jazzSongs = songs.where({ genre: 'Jazz'})

var firstJazzSong = songs.findWhere({ genre: 'Jazz' })

var topDownloads = songs.filter(function(song) {
    return song.get('downloads') > 100
})

songs.each(function(song) {
    console.log(song)
})

//--- Connecting to the server
// GET /api/songs
songs.fetch() 

// GET /api/songs?page=2
songs.fetch({
    data: { 
        page: 2
    },
    success: function() {},
    error: function(){}
})