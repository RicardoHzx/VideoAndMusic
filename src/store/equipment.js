import { get } from '../http/axios'

export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async openLight1(context, data) {
            let response = await get('/device/deviceOn?id=1')
            return response;
        },
        async closeLight1(context, data) {
            let response = await get('/device/deviceOff?id=1')
            return response;
        },
    }
}