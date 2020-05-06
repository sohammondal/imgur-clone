import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
}

const getters = {
    allImages: state => state.images
}

const actions = {

    fetchImages: async (context) => {
        // console.log(context);
        const { rootState, commit } = context;
        const { data } = await api.fetchImages(rootState.auth.token);
        commit('setImages', data.data);
    },
    uploadImages: async ({ rootState }, images) => {

        await api.uploadImages(images, rootState.auth.token);

        router.push('/');

    }

}

const mutations = {

    setImages: (state, images) => state.images = images

}

export default {
    state,
    getters,
    actions,
    mutations
}