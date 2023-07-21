const state = () => ({
    user: null,
});

const actions = {
    async signIn({ commit, dispatch }) {
        try {
            await this.$nhost.auth.signUp({
                email: 'joe@example.com',
                password: 'secret-password',
                options: {
                    allowedRoles: ['user'],
                },
            });
            console.log('Successfully signed up');
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    },
};

const mutations = {};
const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
