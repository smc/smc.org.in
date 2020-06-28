<template>
  <section class="row font-playground">
    <v-slider
      v-model="fontSize"
      min="8"
      max="200"
      label="Fontsize(px)"
      thumb-label="always"
      class="col-12"
    ></v-slider>
    <div class="row">
      <span class="col-12"
        >You can edit the following text and try different font sizes.</span
      >
    </div>
    <div
      contenteditable="true"
      class="editor col-12"
      :style="style"
      v-html="previewContent"
    ></div>
  </section>
</template>

<script>
export default {
  name: "FontPlayground",
  data: () => ({
    fontSize: 20
  }),
  props: {
    name: String,
    previewContent: {
      type: String,
      default: () => {
        const samples = [
          "ആദ്യം നിങ്ങളെ അവർ അവഗണിക്കും, പിന്നെ പരിഹസിക്കും, പിന്നെ പുഛിക്കും, പിന്നെ ആക്രമിക്കും. എന്നിട്ടായിരിക്കും നിങ്ങളുടെ വിജയം",
          "ഒരൊറ്റമതമുണ്ടുലകിന്നുയിരാം പ്രേമ,മതൊന്നല്ലോ പരക്കെ നമ്മെ പാലമൃതൂട്ടും പാർവണശശിബിംബം.",
          "അഹോ! ജയിപ്പൂ ജഗദാധാരമൊരദ്ഭുതദിവ്യമഹസ്സഖണ്ഡമദ്വയമചിന്ത്യവൈഭവമനാദിമദ്ധ്യാന്തം.",
          "അടുത്തുനിൽപ്പോരനുജനെനോക്കാനക്ഷികളില്ലാത്തോർക്കരൂപനീശ്വരനദൃശ്യനായാലതിലെന്താശ്ചര്യം?"
        ];
        return samples[Math.floor(Math.random() * samples.length)];
      }
    }
  },
  computed: {
    style() {
      return {
        fontFamily: this.name,
        backgroundColor: "#fffde7",
        color: "#333",
        minHeight: "60vh",
        fontSize: `${this.fontSize}px`,
        wordBreak: "break-all"
      };
    }
  }
};
</script>
