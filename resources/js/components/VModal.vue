<template>
  <vue-final-modal
  v-model="modelValue"
  :lock-scroll="true"
  v-slot="{ params, close }"
  v-bind="$attrs"
  classes="z-50 custom-modal-dialog"
  content-class="modal-content"
    v-on="$listeners">
    <span class="modal-header">
      <slot name="title"></slot>
      <button @click="handleClose(close)" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </span>
    <div class="modal-body">
      <slot v-bind:params="params"></slot>
    </div>
    <!-- <div class="modal-footer">
      <v-button class="vfm-btn" @click="$emit('confirm', close)">confirm</v-button>
      <v-button class="vfm-btn" @click="$emit('cancel', close)">cancel</v-button>
    </div> -->
    <div class="modal-footer">
      <slot name="modal-footer"></slot>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'VModal',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'close'],
  watch: {
    modelValue(newVal) {
      if (!newVal) {
        this.$emit('update:modelValue', false);
      }
    }
  },
  methods: {
    handleClose(close) {
      this.$emit('close');
      close();
      this.$emit('update:modelValue', false);
    }
  }
}
</script>

<style lang="scss">
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
  width: 100%;
}

.custom-modal-dialog {
  overflow: auto
}

.modal-body {
  max-height: 70vh;
  overflow: auto;
}

/* Ensure the modal overlay and container render above the fixed sidebar (z-index: 1000) */
.vfm__overlay {
  z-index: 2000 !important;
}

.vfm__container {
  z-index: 2001 !important;
}

/* Responsive modal sizing */
@media (max-width: 1400px) {
  .modal-content {
    max-width: 900px;
  }
}

@media (max-width: 1300px) {
  .modal-content {
    max-width: 800px;
  }
}

@media (max-width: 1200px) {
  .modal-content {
    max-width: 700px;
  }
}

@media (max-width: 987px) {
  .modal-content {
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 100%;
    margin: 0.5rem;
  }
}

/* Size variants */
.modal-content[data-size="md"] {
  max-width: 500px;
}

.modal-content[data-size="sm"] {
  max-width: 400px;
}

.modal-content[data-size="lg"] {
  max-width: 800px;
}
</style>


