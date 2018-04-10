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

var cars = new Vehicles([
    new Vehicle({ registrationNumber: 'XLI887', color: 'Blue'}),
    new Vehicle({ registrationNumber: 'ZNP123', color: 'Blue'}),
    new Vehicle({ registrationNumber: 'XUV456', color: 'Gray'})
])

var blueCars = cars.where({ color: 'Blue' })
blueCars.forEach((car) => console.log(car))

var car2delete = cars.findWhere({ registrationNumber: 'XLI887' })
console.log(car2delete)

cars.remove(car2delete)
console.log(cars.toJSON())

cars.forEach((car) => console.log(car))