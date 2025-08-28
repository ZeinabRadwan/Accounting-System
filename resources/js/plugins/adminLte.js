try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('admin-lte');
    require('bootstrap');
    
    // AdminLTE 4.x uses data attributes and CSS for treeview functionality
    // No need for separate jQuery plugin
} catch (e) {}
