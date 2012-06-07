# Backbone.Sortable

Simple way to make your backbone collections sortable by any properties in any directions.

## Usage

    var MyCollection = Sortable.extend({
        model: MyModel,
        url: 'some/url/to/get/data',
        
        // define default sort property
        sort: 'date',
        
        // define default sort direction
        direction: 'desc',
        
        // define sort handlers which we will use
        sorters: {
            date: function(model) {
                return model.get('date');
            },
            name: fuction(model) {
                return model.get('name').toLowerCase();
            },
            participantsSuccess: function(model) {
                return model.get('participants') - model.get('participantsRejected');
            }
        }
    });
    
    var MyView = Backbone.View.extend({
        initialize: function() {
            this.collection = new MyCollection();
            this.collection.fetch();
            
            this.template = _.template('my_template.html');
        },
        render: function() {
            // redefine sort properties and call collection.resort() before rendering
            this.collection.sort = 'name';
            this.collection.direction = 'asc';
            
            this.$el.html(this.template({collection: this.collection.resort()}))
        }
    });