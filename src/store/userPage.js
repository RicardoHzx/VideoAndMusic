import {get} from '@/http/axios';
export default {
    namespaced:true,
    state:{
        movie:[]
    },
    getters:{
        
    },
    mutations:{
        refreshSongs(state,movie){
            state.movie = movie
        }
    },
    actions:{
       async findAllMovie(context){
           let res = await get('/songs/getAllSongs')
           context.commit('refreshSongs',res.data)
       }
    }
}
