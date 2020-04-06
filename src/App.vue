<template>
  <v-app id="smcorgin">
    <v-navigation-drawer v-model="sidebar" right fixed>
      <v-list>
        <v-list-group
          v-for="item in menuItems"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-text="$i18n(item.msg || item.title)"
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevate-on-scroll>
      <div class="d-flex align-center">
        <v-img
          alt="SMC Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="48"
        />
      </div>
      <v-toolbar-title v-text="$i18n('smc')" class="px-1"></v-toolbar-title>
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
              class="hidden-xs-only"
              :to="item.path"
              :href="item.href"
              text
              v-on="on"
              v-text="$i18n(item.msg || item.title)"
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
                  v-text="$i18n(subItem.msg || subItem.title)"
                  :to="item.path"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <transition name="slide">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    sidebar: false,
    menuItems: [
      {
        title: "Home",
        msg: "menu-home",
        path: "/"
      },
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
            path: "/fonts/anjali"
          },
          {
            title: "Chilanka",
            path: "/fonts/chilanka"
          },
          {
            title: "Dyuthi",
            path: "/fonts/dyuthi"
          },
          {
            title: "Gayathri",
            path: "/fonts/gayathri"
          },
          {
            title: "Karumbi",
            path: "/fonts/karumbi"
          },
          {
            title: "Keraleeyam",
            path: "/fonts/keraleeyam"
          },
          {
            title: "Manjari",
            path: "/fonts/manjari"
          },
          {
            title: "Meera",
            path: "/fonts/meera"
          },
          {
            title: "Rachana",
            path: "/fonts/rachana"
          },
          {
            title: "Uroob",
            path: "/fonts/uroob"
          },
          {
            title: "RaghuMalayalam",
            path: "/fonts/raghumalayalam"
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
            path: "/contact"
          },
          {
            title: "History",
            path: "/history"
          },
          {
            title: "People",
            path: "/people"
          },
          {
            title: "Code of conduct",
            msg: "menu-code-of-conduct",
            path: "/code-of-conduct"
          }
        ]
      }
    ]
  })
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
  .display-2,
  .headline,
  .title {
    font-family: "Inter", "Manjari", "Gayathri", sans-serif !important;
  }
}
</style>
