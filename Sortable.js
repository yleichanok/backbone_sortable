/*jslint white: true, maxerr: 50, indent: 4, nomen: true */
(function(window) {

    /**
     * Backbone.Sortable.
     * Simple way to make your backbone collections sortable by any properties in any directions.
     * @version 0.1
     * @license Available as is
     * @author <a href="https://github.com/yleichanok/backbone_sortable">Yauheni Leichanok</a>
     * Usage:
     * var MyCollection = Sortable.extend({
     *     sort: 'name',
     *     direction: 'desc',
     *     sorters: {
     *         name: function(model) {return model.get('name');}
     *     }
     * });
     * 
     * In a view, simply call collection.resort() before rendering.
     * 
     */

    'use strict';
    
    var Backbone = window.Backbone,
        _ = window._;

    window.Sortable = Backbone.Collection.extend({
        sort: 'base',
        direction: 'asc',
        sorters: {
            base: function(model) {
                return model.get('id');
            }
        },
        resort: function() {
            var sorter = this.sorters[this.sort];

            if (!sorter) {
                sorter = this.sorters.base;
            }
            
            this.models = _.sortBy(this.models, sorter);
            if (this.direction === 'desc') {
                this.models.reverse();
            }
            
            return this.models;
        }
    });
    
}(this));