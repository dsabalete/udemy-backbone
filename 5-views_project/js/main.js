var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',
	
	urlRoot: '/api/vehicles',
	
    validate: function(attrs) {
        if (!attrs.registrationNumber == null || attrs.registrationNumber == undefined) {
            return 'Registration number is required.'
        }
	},
	
    start: function() {
        console.log('Vehicle started')
    }
})

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
})

var VehicleView = Backbone.View.extend({
	tagName: 'li',
	
	className: 'vehicle',
	
	attributes: {
		"data-color": "white"
	},
	
	events: {
		"click .delete": "onDelete"
	},

	onDelete: function(e) {
		this.remove()
	},

	render: function() {
		var source = $("#vehicleTemplate").html()
		var template = _.template(source)
		
		this.$el.html(template(this.model.toJSON()))
		this.$el.attr("data-color", this.model.get("color"))

		return this
	}
})

var VehiclesView = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each(function(vehicle) {
			var vehicleView = new VehicleView({ model: vehicle })
			this.$el.append(vehicleView.render().$el)
		}, this)
		return this
	}
})

var vehicles = new Vehicles([
	new Vehicle({ registrationNumber: 'XLI887', color: 'Blue'}),
	new Vehicle({ registrationNumber: 'ZNP123', color: 'Blue'}),
	new Vehicle({ registrationNumber: 'XUV456', color: 'Gray'})
])

var vehiclesView = new VehiclesView({ collection: vehicles })
$("#container").html(vehiclesView.render().$el)