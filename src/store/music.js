import {get} from '@/http/axios';
export default {
    namespaced:true,
    state:{
        songs:[]
    },
    getters:{
        
    },
    mutations:{
        refreshSongs(state,songs){
            state.songs = songs
        }
    },
    actions:{
       async findAllSong(context){
           let res = await get('/songs/getAllSongs')
           context.commit('refreshSongs',res.data)
       }
    }
}

