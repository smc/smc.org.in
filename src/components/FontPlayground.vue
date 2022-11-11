<template>
  <section class="row font-playground">
    <v-slider
      v-model="fontSize"
      min="8"
      max="200"
      label="Fontsize(px)"
      thumb-label="always"
      class="v-col-12"
    />
    <v-slider
      v-if="weights.length"
      v-model="weight"
      min="100"
      max="900"
      step="100"
      label="Font Weight"
      thumb-label="always"
      class="v-col-12"
    />
    <div class="row">
      <p class="v-col-12">
        You can edit the following text and try different font sizes.
      </p>
    </div>
    <div
      contenteditable="true"
      class="editor v-col-12"
      :style="style"
      v-html="previewContent"
    />
  </section>
</template>

<script>
import { computed, ref } from "vue";

const samples = [
  "ആദ്യം നിങ്ങളെ അവർ അവഗണിക്കും, പിന്നെ പരിഹസിക്കും, പിന്നെ പുഛിക്കും, പിന്നെ ആക്രമിക്കും. എന്നിട്ടായിരിക്കും നിങ്ങളുടെ വിജയം",
  "ഒരൊറ്റമതമുണ്ടുലകിന്നുയിരാം പ്രേമ,മതൊന്നല്ലോ പരക്കെ നമ്മെ പാലമൃതൂട്ടും പാർവണശശിബിംബം.",
  "അഹോ! ജയിപ്പൂ ജഗദാധാരമൊരദ്ഭുതദിവ്യമഹസ്സഖണ്ഡമദ്വയമചിന്ത്യവൈഭവമനാദിമദ്ധ്യാന്തം.",
  "അടുത്തുനിൽപ്പോരനുജനെനോക്കാനക്ഷികളില്ലാത്തോർക്കരൂപനീശ്വരനദൃശ്യനായാലതിലെന്താശ്ചര്യം?",
];

export default {
  name: "FontPlayground",
  props: {
    name: String,
    weights: {
      type: [String],
      default: () => [],
    },
    previewContent: {
      type: String,
      default: () => {
        return samples[Math.floor(Math.random() * samples.length)];
      },
    },
  },
  setup(props) {
    const fontSize = ref(20);
    const weight = ref(400);
    const style = computed(() => {
      return {
        fontFamily: props.name,
        fontWeight: weight.value,
        fontSize: `${fontSize.value}px`,
      };
    });
    return {
      style,
      weight,
      fontSize,
    };
  },
};
</script>
<style>
.editor {
  background-color: #fffde7;
  color: #333;
  min-height: 60vh;
  word-break: break-all;
}
</style>
