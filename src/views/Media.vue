<template>
  <v-row class="mb-6" justify="center">
    <v-col xl="8" sm="10" xs="10">
      <section class="pa-2">
        <h1 class="text-h2 my-10" v-i18n="'media'"></h1>
        <!--  -->
        <v-flex md12 v-for="link in links.sort(date_sort)" :key="link.link">
          <v-card class="mb-6">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  <v-btn value="featured" v-if="link.featured" text>
                    <v-icon>{{ mdiCrownOutline }}</v-icon>
                    <span>{{ $i18n("featured") }}</span>
                  </v-btn>
                </div>
                <a :href="link.url" target="_blank" rel="noopener noreferrer">
                  <v-list-item-title class="headline mb-1">
                    {{ link.title }}
                  </v-list-item-title>
                </a>
                <v-list-item-subtitle>
                  <span>{{ $i18n("published-on") }} </span>
                  {{ link.publishing_date }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                v-if="hasArchived(link)"
                text
                :href="link.archive_url"
                target="_blank"
                rel="noopener noreferrer"
                value="archiveorg"
              >
                <v-icon :title="link.title">{{ mdiLaunch }}</v-icon>
                <span>{{ $i18n("archive") }}</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </section>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCrownOutline, mdiLaunch } from "@mdi/js";

export default {
  name: "Media",
  data: () => ({
    mdiCrownOutline,
    mdiLaunch,
    links: {},
  }),
  created() {
    return fetch("/press/media.json")
      .then((response) => response.json())
      .then((data) => {
        this.links = data;
      });
  },
  methods: {
    hasArchived: (link) => {
      return link.archive_url !== "" || link.archive_url.length !== 0;
    },
    date_sort: (a, b) => {
      return (
        new Date(a.publishing_date).getTime() -
        new Date(b.publishing_date).getTime()
      );
    },
  },
};
</script>
