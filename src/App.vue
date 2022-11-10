<template>
  <v-app id="smcorgin" :lang="locale">
    <v-navigation-drawer v-model="sidebar" location="right">
      <v-list>
          <v-list-item
          v-for="item in menuItems"
            :to="item.path"
            :href="item.href"
          >
              <v-list-item-title
                v-i18n="item.msg || item.title"
              ></v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevate-on-scroll color="primary" dark>
      <div class="d-flex align-center" style="cursor: pointer">
        <router-link to="/" class="text--primary text-decoration-none">
          <v-img
            alt="SMC Logo"
            class="shrink pr-1"
            contain
            src="src/assets/logo.svg"
            transition="scale-transition"
            width="48"
          />
        </router-link>
      </div>
      <v-toolbar-title
        class="pa-2 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
      >
        {{ $i18n("smc") }}
      </v-toolbar-title>
      <v-toolbar-title class="pa-2 d-flex d-sm-none">
        {{ $i18n("smc-short") }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
        <v-menu
          :fixed="true"
          offset-y
          v-for="item in menuItems"
          :key="item.title"
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="hidden-sm-and-down"
              :to="item.path"
              :href="item.href"
              text
              v-bind="props"
              v-i18n="item.msg || item.title"
            ></v-btn>
          </template>
          <v-list v-if="item.items">
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.path"
            >
                <v-list-item-title
                  v-i18n="subItem.msg || subItem.title"
                  :to="item.path"
                ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-row align="center" justify="end" class="ma-0 pa-0">
        <v-col class="text-right ma-0 pa-0">
          <v-btn small text @click="onChangeLocale('en')">English</v-btn>
          <v-btn small text @click="onChangeLocale('ml')">മലയാളം</v-btn>
        </v-col>
      </v-row>
      <transition name="slide">
        <router-view :locale="locale" />
      </transition>
    </v-main>
    <smc-footer></smc-footer>
  </v-app>
</template>

<script>
import smcFooter from "./components/Footer";
import { useI18n } from "vue-banana-i18n";
import {ref, computed} from "vue";
const menuItems = [
      {
        title: "Blog",
        msg: "menu-blog",
        path: "/blog",
      },
      {
        title: "Projects",
        path: "/projects",
        msg: "menu-projects",
      },
      {
        title: "Articles",
        path: "/articles",
        msg: "menu-articles",
      },
      {
        title: "Research",
        path: "/research",
        msg: "menu-research",
      },
      {
        title: "Fonts",
        path: "/fonts",
        msg: "menu-fonts",
      },
      {
        title: "Community",
        path: "/about",
        msg: "menu-community",
        items: [
          {
            title: "About",
            path: "/about",
            msg: "menu-about",
          },
          {
            title: "Contact",
            path: "/contact",
            msg: "menu-contact",
          },
          {
            title: "History",
            path: "/history",
            msg: "menu-history",
          },
          {
            title: "People",
            path: "/people",
            msg: "menu-people",
          },
          {
            title: "Code of conduct",
            msg: "menu-code-of-conduct",
            path: "/code-of-conduct",
          },
          {
            title: "Media",
            msg: "menu-media",
            path: "/media",
          },
        ],
      },
    ];

export default {
  name: "App",
  components: { smcFooter },
  setup(){
    const sidebar=ref(false);
    const locale = computed( () => {
      const bananaI18n = useI18n();
      return bananaI18n.locale;
    } );
    const onChangeLocale= (locale) =>{
      localStorage.setItem("smc.org.in.locale", locale);
      location.reload();
    };
    return {
      sidebar,
      menuItems,
      locale,
      onChangeLocale
    }
  }

};
</script>

<style lang="less">
@import "./assets/fonts.less";
#smcorgin {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: left;
  font-size: 1em;
  overflow-x: hidden;
  .text-h3,
  .text-h2,
  .text-h5,
  .text-subtitle-1,
  .title {
    &[lang="ml"] {
      font-family: "Manjari", "Gayathri", sans-serif !important;
    }
  }

  &.v-application .display-5 {
    font-size: clamp(1rem, 3vw, 2rem) !important;
  }
  &.v-application .text-h1 {
    font-size: clamp(2rem, 4vw, 3rem) !important;
  }
  &.v-application .text-h2 {
    font-size: clamp(3rem, 5vw, 4rem) !important;
  }
}
</style>
