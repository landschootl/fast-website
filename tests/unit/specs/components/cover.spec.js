import { shallowMount } from '@vue/test-utils'
import Cover from '@/components/Cover.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)


describe('Cover component', () => {
    it('renders a Vue instance', () => {
        const wrapper = shallowMount(Cover, {
            /* mocks    : {
               $t: key => key,
             },*/
            propsData: {
                data: {},
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
