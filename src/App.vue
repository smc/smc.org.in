<template>
  <v-app id="smc.org.in">
    <v-navigation-drawer v-model="sidebar" right fixed>
      <v-list>
        <v-list-group
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                v-text="$i18n(item.msg || item.title)"
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
      <v-toolbar-title v-text="$i18n('smc')"></v-toolbar-title>
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
      <router-view />
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
        title: "About",
        path: "/about",
        msg: "menu-about",
        items: [
          {
            title: "Contact",
            path: "/contact"
          },
          {
            title: "History",
            path: "/history"
          }
        ]
      },
      {
        title: "Projects",
        path: "/projects",
        msg: "menu-projects"
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
            title: "Karumpi",
            path: "/fonts/karumpi"
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
          }
        ]
      },
      {
        title: "Community",
        path: "/community",
        msg: "menu-community",
        items: [
          {
            title: "People",
            path: "/people"
          },
          {
            title: "Code of conduct",
            path: "/code-of-conduct"
          }
        ]
      }
    ]
  })
};
</script>

<style lang="less">
#smc.org.in {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Manjari", "Gayathri",
    sans-serif;
  text-align: left;
  font-size: 1em;
}
</style>
