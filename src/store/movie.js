import {get} from '@/http/axios';
export default {
    namespaced:true,
    state:{
        videos:[]
    },
    getters:{
        
    },
    mutations:{
        refreshVideos(state,videos){
            state.videos = videos
        }
    },
    actions:{
       async findAllVideo(context){
           alert(1)
           let res = await get('/videos/getAllVideos')
           context.commit('refreshVideos',res.data)
       }
    }
}
