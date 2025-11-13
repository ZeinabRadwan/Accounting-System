import Popper from 'popper.js'
import jQuery from 'jquery'
import 'admin-lte'
import 'bootstrap'

try {
    window.Popper = Popper;
    window.$ = window.jQuery = jQuery;
    
    // AdminLTE 3.2.0 includes Treeview functionality by default
    // The Treeview plugin is built into AdminLTE 3.x
} catch (e) {}
