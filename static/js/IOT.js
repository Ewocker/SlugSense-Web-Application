var print = function(text) {
    console.log(text);
};

var app = function() {

    var self = {};

    Vue.config.silent = false; // show all warnings


    // ============ AJAX =============
    self.get_values = function() {
        $.getJSON(get_values_url,
            function(info) {
                // self.vue.humid = info.humid;
                if (!self.vue.humid_animating) {
                    self.vue.humid_animating = true;
                    // self.vue.humid_old = 380 - (self.vue.humid * 4);
                    self.vue.humid = info.humid;
                    self.update_humid_graph();
                }
                // self.vue.solar = info.solar;
                if (!self.vue.solar_animating) {
                    self.vue.solar_animating = true;
                    // self.vue.solar_old = 380 - (self.vue.solar * 4);
                    self.vue.solar = info.solar;
                    self.update_solar_graph();
                }
                // self.vue.temp = info.temp;
                if (!self.vue.temp_animating) {
                    self.vue.temp_animating = true;
                    // self.vue.temp_old = 380 - (self.vue.temp * 4);
                    self.vue.temp = info.temp;
                    self.update_temp_graph();
                }
                if (!self.vue.moist_animating) {
                    self.vue.moist_animating = true;
                    // self.vue.moist_old = 380 - (self.vue.moist * 4);
                    self.vue.moist = info.moist;
                    self.update_moist_graph();
                }
                print(self.vue.humid);
                print(self.vue.solar);
                print(self.vue.temp);
                print(self.vue.moist);
                print('get success');
                // self.update_moist_graph();
            }
        );
    };

    self.update_moist_graph = function() {
        jQuery('#g-clip-rect').attr('height', self.vue.moist_old);
        var to = 380 - (self.vue.moist * 4);
        if (to < 0) {
            to = 0;
            self.vue.moist = 100;
        }
        jQuery('#moist-animation').attr({ 'from': self.vue.moist_old, 'to': to, 'dur': "4s" });
        self.vue.moist_old = 380 - (self.vue.moist * 4);
        if (self.vue.moist_old < 0) {
            self.vue.moist_old = 0;
        }
        self.vue.moist_animating = false;
    };

    self.update_temp_graph = function() {
        jQuery('#g-clip-rect').attr('height', self.vue.temp_old);
        var to = 380 - (self.vue.temp * 4);
        if (to < 0) {
            to = 0;
            self.vue.temp = 100;
        }
        jQuery('#temp-animation').attr({ 'from': self.vue.temp_old, 'to': to, 'dur': "4s" });
        self.vue.temp_old = 380 - (self.vue.temp * 4);
        if (self.vue.temp_old < 0) {
            self.vue.temp_old = 0;
        }
        self.vue.temp_animating = false;
    };

    self.update_solar_graph = function() {
        jQuery('#g-clip-rect').attr('height', self.vue.solar_old);
        var to = 380 - (self.vue.solar * 4);
        if (to < 0) {
            to = 0;
            self.vue.solar = 99;
        }
        jQuery('#solar-animation').attr({ 'from': self.vue.solar_old, 'to': to, 'dur': "4s" });
        self.vue.solar_old = 380 - (self.vue.solar * 4);
        if (self.vue.solar_old < 0) {
            self.vue.solar_old = 0;
        }
        self.vue.solar_animating = false;
    };

    self.update_humid_graph = function() {
        jQuery('#g-clip-rect').attr('height', self.vue.humid_old);
        var to = 380 - (self.vue.humid * 4);
        if (to < 0) {
            to = 0;
            self.vue.humid = 100;
        }
        jQuery('#humid-animation').attr({ 'from': self.vue.humid_old, 'to': to, 'dur': "4s" });
        self.vue.humid_old = 380 - (self.vue.humid * 4);
        if (self.vue.humid_old < 0) {
            self.vue.humid_old = 0;
        }
        self.vue.humid_animating = false;
    };

    // =========== HELPER ===========
    $(document).ready(function() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    });

    self.tab_name = function(text) {
        if (text == 'home') {
            return '';
        } else if (text == 'temp') {
            return 'Temperature';
        } else if (text == 'moist') {
            return 'Moisture';
        } else if (text == 'humid') {
            return 'Humidity';
        } else if (text == 'heat') {
            return 'Heat Lamp';
        } else if (text == 'solar') {
            return 'Light';
        } else {
            return text;
        }
    }


    // =========== Interaction ===========
    self.change_tab = function(tab) {
        self.vue.active_tab = tab;
    };






    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            'humid': 0,
            'humid_old': 0,
            'humid_animating': 0,
            'solar': 0,
            'solar_old': 0,
            'solar_animating': 0,
            'temp': 0,
            'temp_old': 0,
            'temp_animating': 0,
            'moist': 0,
            'moist_old': 0,
            'moist_animating': 0,
            'heat': 0,
            'active_tab': 'home',
        },
        methods: {
            change_tab: self.change_tab,
            tab_name: self.tab_name,
        },
    });

    self.get_values();
    var get_value_id = setInterval(self.get_values, 2000);

    $("#vue-div").show();
    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function() {
    APP = app();
    console.log('APP returned');

});
