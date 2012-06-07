# Backbone.Sortable

Simple way to make your backbone collections sortable by any properties in any directions.

## Usage

    var MyCollection = Sortable.extend({
        model: MyModel,
        sort: 'date',
        direction: 'desc',
        url: 'some/url/to/get/data',
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
            this.collection.sort = 'name';
            this.collection.direction = 'asc';
            this.collection.fetch();
            
            this.template = _.template('my_template.html');
        },
        render: function() {
            this.$el.html(this.template({collection: this.collection.resort()}))
        }
    });