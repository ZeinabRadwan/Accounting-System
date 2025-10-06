<template>
  <vue-final-modal
  :lock-scroll="true"
  v-slot="{ params, close }"
  v-bind="$attrs"
  classes="z-50 custom-modal-dialog"
  content-class="modal-content"
  overlay-class="custom-modal-overlay"
    v-on="$listeners">
    <span class="modal-header">
      <slot name="title"></slot>
      <button @click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
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
  inheritAttrs: false
}
</script>

<style lang="scss">
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
  width: 100%;
  z-index: 10000 !important; /* above overlay */
}

.custom-modal-dialog {
  overflow: auto;
  z-index: 10000 !important; /* ensure modal container above everything */
}

.custom-modal-overlay {
  z-index: 9990 !important; /* above sidebar, below content */
}

.modal-body {
  max-height: 75vh;
  overflow: auto;
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
</style>
