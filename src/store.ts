import Vue from 'vue'
import Vuex from 'vuex'
import cartState from '@/components/Header/store';
import galleryState from '@/components/Home/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cartState,
        galleryState
    }
})
