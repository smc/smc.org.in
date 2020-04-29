<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="text-center pt-12 pb-4">
      <v-card-text>
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon :title="link.title">{{ link.icon }}</v-icon>
          </v-btn>
        </v-row>
      </v-card-text>

      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong> {{ $i18n("smc") }}.</strong>
        <br />
        Unless otherwise stated, content is available under the
        <br />
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          class="grey--text text--darken-1"
          >Creative Commons Attribution-ShareAlike License</a
        >.
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import {
  mdiTwitter,
  mdiFacebook,
  mdiTelegram,
  mdiInstagram,
  mdiMastodon,
  mdiChat,
  mdiAsterisk,
  mdiChatAlert,
  mdiGithubCircle,
  mdiGitlab
} from "@mdi/js";

export default {
  data: () => ({
    links: [
      {
        name: "gitlab",
        title: "GitLab",
        url: "https://gitlab.com/smc",
        icon: mdiGitlab
      },
      {
        name: "github",
        title: "Github",
        url: "https://github.com/smc",
        icon: mdiGithubCircle
      },
      {
        name: "telegram",
        title: "Telegram",
        url: "https://t.me/smc_project",
        icon: mdiTelegram
      },
      {
        name: "facebook",
        title: "Facebook",
        url: "https://facebook.com/smcproject",
        icon: mdiFacebook
      },
      {
        name: "instagram",
        title: "Instagram",
        url: "https://instagram.com/smcproject",
        icon: mdiInstagram
      },
      {
        name: "twitter",
        title: "Twitter",
        url: "https://twitter.com/smcproject",
        icon: mdiTwitter
      },
      {
        name: "diaspora",
        title: "Diaspora",
        url: "https://diasp.org/people/71abaf650562c0a9",
        icon: mdiAsterisk
      },
      {
        name: "mastodon",
        title: "Mastodon",
        url: "https://floss.social/@smc",
        icon: mdiMastodon
      },
      {
        name: "matrix",
        title: "matrix",
        url: "https://matrix.to/#/#smc-project:matrix.org",
        icon: mdiChatAlert
      },
      {
        name: "irc",
        title: "IRC on freenode",
        url: "https://webchat.freenode.net/?randomnick=0&channels=smc-project",
        icon: mdiChat
      }
    ]
  })
};
</script>
