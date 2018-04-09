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

var Car = Vehicle.extend({
    start: function() {
        console.log('Car with registration number ' + this.get('registrationNumber') + ' started')
    }
})

var blueCar = new Car({ 
    registrationNumber: 'XLI887',
    color: 'Blue'
})

blueCar.unset('registrationNumber')

if (!blueCar.isValid()) {
    console.log(blueCar.validationError)
}

blueCar.set('registrationNumber', 'XLI887')

if (!blueCar.isValid()) {
    console.log(blueCar.validationError)
}

blueCar.start()

