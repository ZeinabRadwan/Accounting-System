try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('admin-lte');
    require('bootstrap');
    
    // AdminLTE 3.2.0 includes Treeview functionality by default
    // The Treeview plugin is built into AdminLTE 3.x
} catch (e) {}
