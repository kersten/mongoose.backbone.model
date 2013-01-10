(function(root, factory) {
    // Set up Backbone appropriately for the environment.
    if (typeof exports !== "undefined") {
        // Node/CommonJS, no need for jQuery in that case.
        module.exports = factory(root, require("./index"));
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(["MongooseBackboneModel"], function(MongooseBackboneModel) {
            return factory(root, MongooseBackboneModel);
        });
    }
}(this, function(root, Model) {
    var user = new Model({
        username: {
            type : String,
            index: {
                unique: true
            },

            validation: [
                {
                    required: true,
                    msg     : "Username is required"
                },
                {
                    minLength: 5,
                    msg      : "Username must be at least 5 characters long"
                },
                {
                    pattern: /[a-zA-Z]/,
                    msg    : "Username only allows alphabetic characters (e.g. a-z, A-Z)"
                }
            ]
        },

        getDeliveryProgress: function () {
            var numberOfNormalStatuses = 0, numberOfStatusesWhenShipmentIsCompleted = 5;

            _.each(this.get("statuses"), function (status) {
                if ("OK" === status.severity) {
                    numberOfNormalStatuses++;
                }
            });

            return numberOfNormalStatuses / numberOfStatusesWhenShipmentIsCompleted;
        }
    });

    user.static("authenticate", function (username, password, cb) {
        console.log("Rave");
    });

    console.log(user);

    return Model;
}));
