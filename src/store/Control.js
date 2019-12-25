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
        

        async openLight2(context, data) {
            let response = await get('/device/deviceOn?id=2')
            return response;
        },
        async closeLight2(context, data) {
            let response = await get('/device/deviceOff?id=2')
            return response;
        },


        async openLight3(context, data) {
            let response = await get('/device/deviceOn?id=3')
            return response;
        },
        async closeLight3(context, data) {
            let response = await get('/device/deviceOff?id=3')
            return response;
        },


        async opencurtain(context, data) {
            let response = await get('/device/deviceOn?id=4')
            return response;
        },
        async closecurtain(context, data) {
            let response = await get('/device/deviceOff?id=4')
            return response;
        },
    }
}