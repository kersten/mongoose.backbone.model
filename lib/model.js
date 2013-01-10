(function(root, factory) {
    if (typeof exports !== undefined) {
        var Backbone = require("backbone"),
            _ = require("underscore"),
            validation = require("backbone-validation"),
            Schema = require("mongoose").Schema;

        module.exports = factory(root, _, Backbone, validation, Schema);
    } else if (typeof define === "function" && define.amd) {
        // AMD :: No Schema needed
        define(["underscore", "backbone", "backbone-validation"], function(_, Backbone, validation) {
            return factory(root, MongooseBackboneModel);
        });
    }
}(this, function(root, _, Backbone, validation, Schema) {
    _.extend(Backbone.Model.prototype, validation.mixin);

    function Model (options) {
        "use strict";

        _.each(options, function (value, key) {

        });

        if (typeof exports !== undefined) {
            _.each(options, function (value, key) {
                if (typeof(value) === "function") {
                    delete(options[key]);
                }
            });

            return Schema(options);
        } else {
            return Backbone.model.extend(options);
        }
    }

    return Model;
}));

