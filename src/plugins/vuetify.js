import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light:  {
            primary: '#00BFA5',
            secondary: '#8bc34a',
            accent: '#cddc39',
            error: '#f44336',
            warning: '#607d8b',
            info: '#ffeb3b',
            success: '#4caf50'
            }
        },
      },
});
