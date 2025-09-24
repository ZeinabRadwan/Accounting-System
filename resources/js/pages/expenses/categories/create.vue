<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'expenseCats.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'expenseCategoryCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->

          <!-- form start -->
          <form id="expenseCategoryCreateForm" role="form" @submit.prevent="saveCategory" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-12">
                  <label for="note">{{ $t('Note') }}</label>
                  <vue-editor  id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="form.note" :editorToolbar="customToolbar"></vue-editor>
                </div>
              </div>

            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" class="btn btn-success">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { VueEditor } from "vue2-editor";
export default {

  components: {
    VueEditor
  },

  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Expense Category') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Expense Category',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Categories',
        url: 'expenseCats.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      note: '',
      status: 1,
    }),
    loading: true,
    customToolbar: [
    [{
      header: [false, 1, 2, 3, 4, 5, 6]}],
      ["bold", "italic", "underline", "strike"],
      [{align: ""}, {align: "center"}, {align: "right"}, {align: "justify"}],
      ["blockquote", "code-block"],
      [{list: "ordered"}, {list: "bullet"}],
      [{color: []}, {background: []}],
      ["link", "image",]
    ],
  }),
  methods: {
    // save category
    async saveCategory() {
      console.log(this.form);
      await this.form
        .post(window.location.origin + '/api/expense-categories')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Category added successfully'),
          })
          this.$router.push({ name: 'expenseCats.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },

      // editor image upload
      handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      formData.append("target_dir", "expenseCategories");

      axios({
        url:  window.location.origin + "/api/rich-editor-file-upload",
        method: "POST",
        data: formData
      })
        .then(result => {
          const url = result.data.url; // Get url from response
          console.log(url);
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    }

  },
}
</script>

<style scoped>
/* Header buttons styling to match invoices page */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling to match invoices page */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Vue Editor Styling */
#editor {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  min-height: 200px;
}

#editor .ql-editor {
  background: #fff !important;
  border-radius: 10px;
  font-size: 14px;
  padding: 12px 16px;
}

#editor .ql-toolbar {
  background: #F8F9FA !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px 10px 0 0;
  border-bottom: none;
}

#editor .ql-container {
  border: 1px solid #E5E7EB;
  border-radius: 0 0 10px 10px;
  border-top: none;
}

#editor:focus-within {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
