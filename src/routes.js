import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from './components/Landing';
import Slogan from './components/Slogan';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Groups from './components/Groups';
import Footer from './components/Footer';

Vue.use(VueRouter);

export default [
    {
        path: '/', components: {
            "landing": Landing,
            "slogan": Slogan,
            "aboutus": AboutUs,
            "gallery": Gallery,
            "groups": Groups,
            "footer": Footer,
        }
    }
];