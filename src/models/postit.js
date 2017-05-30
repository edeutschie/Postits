// postit.js
import Backbone from 'backbone';

var Postit = Backbone.Model.extend({
  defaults: {
    "text": "blank note",
    // "color": "yellow"
    // "size": 8
  }
});

export default Postit;
