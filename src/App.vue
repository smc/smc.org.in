<template>
  <v-app id="smcorgin" :lang="i18n.locale">
    <v-navigation-drawer v-model="sidebar" right fixed>
      <v-list>
        <template v-for="item in menuItems">
          <v-list-group
            v-if="item.items && item.items.length"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-i18n="item.msg || item.title"
                  :to="item.path"
                  :href="item.href"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.path"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-text="$i18n(subItem.msg || subItem.title)"
                  :to="item.path"
                  :href="item.href"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            :to="item.path"
            :href="item.href"
            v-else
            :key="item.title"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="$i18n(item.msg || item.title)"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevate-on-scroll>
      <div class="d-flex align-center" style="cursor:pointer;">
        <v-img
          alt="SMC Logo"
          class="shrink pr-1"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          @click.stop="$router.push('/')"
          width="48"
        />
      </div>
      <v-toolbar-title v-i18n="'smc'" class="px-1"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu
          :fixed="true"
          offset-y
          v-for="item in menuItems"
          :key="item.title"
          open-on-hover
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="hidden-sm-and-down"
              :to="item.path"
              :href="item.href"
              text
              v-on="on"
              v-i18n="item.msg || item.title"
            >
            </v-btn>
          </template>
          <v-list v-if="item.items">
            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.path"
            >
              <v-list-item-content>
                <v-list-item-title
                  v-i18n="subItem.msg || subItem.title"
                  :to="item.path"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-row align="center" justify="end" class="ma-0 pa-0">
        <v-col class="text-right ma-0 pa-0"
          ><v-btn small text @click="onChangeLocale('en')">English</v-btn>
          <v-btn small text @click="onChangeLocale('ml')">മലയാളം</v-btn></v-col
        >
      </v-row>
      <transition name="slide">
        <router-view :locale="i18n.locale" />
      </transition>
    </v-content>
    <smc-footer></smc-footer>
  </v-app>
</template>

<script>
import smcFooter from "./components/Footer";

export default {
  name: "App",
  components: { smcFooter },
  data: () => ({
    sidebar: false,
    menuItems: [
      {
        title: "Blog",
        msg: "menu-blog",
        path: "/blog"
      },
      {
        title: "Projects",
        path: "/projects",
        msg: "menu-projects"
      },
      {
        title: "Articles",
        path: "/articles",
        msg: "menu-articles"
      },
      {
        title: "Research",
        path: "/research",
        msg: "menu-research"
      },
      {
        title: "Fonts",
        path: "/fonts",
        msg: "menu-fonts",
        items: [
          {
            title: "Anjali",
            path: "/fonts/anjali",
            msg: "anjalioldlipi"
          },
          {
            title: "Chilanka",
            path: "/fonts/chilanka",
            msg: "chilanka"
          },
          {
            title: "Dyuthi",
            path: "/fonts/dyuthi",
            msg: "dyuthi"
          },
          {
            title: "Gayathri",
            path: "/fonts/gayathri",
            msg: "gayathri"
          },
          {
            title: "Karumbi",
            path: "/fonts/karumbi",
            msg: "karumbi"
          },
          {
            title: "Keraleeyam",
            path: "/fonts/keraleeyam",
            msg: "keraleeyam"
          },
          {
            title: "Manjari",
            path: "/fonts/manjari",
            msg: "manjari"
          },
          {
            title: "Meera",
            path: "/fonts/meera",
            msg: "meera"
          },
          {
            title: "Rachana",
            path: "/fonts/rachana",
            msg: "rachana"
          },
          {
            title: "Uroob",
            path: "/fonts/uroob",
            msg: "uroob"
          },
          {
            title: "RaghuMalayalam",
            path: "/fonts/raghumalayalam",
            msg: "raghumalayalamsans"
          }
        ]
      },
      {
        title: "Community",
        path: "/community",
        msg: "menu-community",
        items: [
          {
            title: "About",
            path: "/about",
            msg: "menu-about"
          },
          {
            title: "Contact",
            path: "/contact",
            msg: "menu-contact"
          },
          {
            title: "History",
            path: "/history",
            msg: "menu-history"
          },
          {
            title: "People",
            path: "/people",
            msg: "menu-people"
          },
          {
            title: "Code of conduct",
            msg: "menu-code-of-conduct",
            path: "/code-of-conduct"
          }
        ]
      }
    ]
  }),
  methods: {
    onChangeLocale: function(locale) {
      localStorage.setItem("smc.org.in.locale", locale);
      location.reload();
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
  font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
  text-align: left;
  font-size: 1em;
  overflow-x: hidden;
  .display-2,
  .headline,
  .subtitle-1,
  .title {
    font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
    &[lang="ml"] {
      font-family: "Manjari", "Gayathri", sans-serif !important;
    }
  }
  .v-btn {
    text-transform: none !important;
  }
  &.v-application .display-5 {
    font-size: clamp(1rem, 3vw, 2rem) !important;
    font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
    &[lang="ml"] {
      font-family: "Gayathri", sans-serif !important;
    }
  }
  &.v-application .display-4 {
    font-size: clamp(2rem, 4vw, 3rem) !important;
    font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
    &[lang="ml"] {
      font-family: "Gayathri", sans-serif !important;
    }
  }
  &.v-application .display-3 {
    font-size: clamp(3rem, 5vw, 4rem) !important;
    font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
    &[lang="ml"] {
      font-family: "Gayathri", sans-serif !important;
    }
  }
}
</style>
