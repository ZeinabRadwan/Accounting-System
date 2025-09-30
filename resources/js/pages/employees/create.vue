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
                <router-link :to="{ name: 'employees.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'employeeCreateForm'" :title="$t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" id="employeeCreateForm" @submit.prevent="saveEmployee" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="employeeName">{{ $t("Employee Name") }}
                    <span class="required">*</span></label>
                  <input id="employeeName" v-model="form.employeeName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('employeeName') }" name="employeeName" :placeholder="$t('Enter an employee name')
                      " />
                  <has-error :form="form" field="employeeName" />
                </div>
                <div class="form-group col-md-4">
                  <label for="department">{{ $t("Department") }}
                    <span class="required">*</span></label>
                  <v-select v-if="items" v-model="form.department" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('department') }" name="department"
                    :placeholder="$t('Department')" />
                  <has-error :form="form" field="department" />
                </div>
                <div class="form-group col-md-4">
                  <label for="designation">{{ $t("Designation") }}
                    <span class="required">*</span></label>
                  <input id="designation" v-model="form.designation" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('designation') }" name="designation"
                    :placeholder="$t('Enter a designation')" />
                  <has-error :form="form" field="designation" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4">
                  <label for="mobileNumber">{{ $t("Contact Number") }}
                    <span class="required">*</span></label>
                  <vue-tel-input :class="{ 'is-invalid': form.errors.has('mobileNumber') }" v-model="form.mobileNumber"
                    :inputOptions="{
                      showDialCode: true,
                    }"
                    defaultCountry="sa"></vue-tel-input>
                  <has-error :form="form" field="mobileNumber" />
                </div>
                <div class="form-group col-md-4">
                  <label for="salary">{{ $t("Salary") }}
                    <span class="required">*</span></label>
                  <input id="salary" v-model="form.salary" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('salary') }" name="salary"
                    :placeholder="$t('Enter a salary')" min="0" />
                  <has-error :form="form" field="salary" />
                </div>
                <div class="form-group col-md-4">
                  <label for="commission">{{ $t("Commission") }}(%)
                  </label>
                  <input id="commission" v-model="form.commission" type="number" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('commission') }" name="commission"
                    :placeholder="$t('Enter a commission')" max="100" />
                  <has-error :form="form" field="commission" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="birthDate">{{
                    $t("Birth Date")
                  }}</label>
                  <input id="birthDate" v-model="form.birthDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('birthDate') }" name="birthDate" />
                  <has-error :form="form" field="birthDate" />
                </div>
                <div class="form-group col-md-3">
                  <label for="gender">{{ $t("Gender") }}
                    <span class="required">*</span></label>
                  <select v-model="form.gender" class="form-control" :class="{ 'is-invalid': form.errors.has('gender') }"
                    name="gender">
                    <option value="" selected disabled>
                      {{ $t("Select a gender") }}
                    </option>
                    <option value="Male">
                      {{ $t("Male") }}
                    </option>
                    <option value="Female">
                      {{ $t("Female") }}
                    </option>
                    <option value="Transgender">
                      {{ $t("Transgender") }}
                    </option>
                    <option value="Other">
                      {{ $t("Other") }}
                    </option>
                  </select>
                  <has-error :form="form" field="gender" />
                </div>
                <div class="form-group col-md-3">
                  <label for="bloodGroup">{{
                    $t("Blood Group")
                  }}</label>
                  <select v-model="form.bloodGroup" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('bloodGroup') }" name="bloodGroup">
                    <option value="" selected disabled>
                      {{ $t("Select a blood group") }}
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <has-error :form="form" field="bloodGroup" />
                </div>
                <div class="form-group col-md-3">
                  <label for="religion">{{
                    $t("Religion")
                  }}</label>
                  <select v-model="form.religion" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('religion') }" name="religion">
                    <option value="" selected disabled>
                      {{ $t("Select a religion") }}
                    </option>
                    <option value="Islam">
                      {{ $t("Islam") }}
                    </option>
                    <option value="Hinduism">
                      {{ $t("Hinduism") }}
                    </option>
                    <option value="Buddhists">
                      {{ $t("Buddhists") }}
                    </option>
                    <option value="Christians">
                      {{ $t("Christians") }}
                    </option>
                    <option value="Animists">
                      {{ $t("Animists") }}
                    </option>
                    <option value="Other">
                      {{ $t("Other") }}
                    </option>
                  </select>
                  <has-error :form="form" field="religion" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="appointmentDate">{{
                    $t("Appointment Date")
                  }}</label>
                  <input id="appointmentDate" v-model="form.appointmentDate" type="date" class="form-control" :class="{
                    'is-invalid': form.errors.has('appointmentDate'),
                  }" name="appointmentDate" />
                  <has-error :form="form" field="appointmentDate" />
                </div>
                <div class="form-group col-md-6">
                  <label for="joiningDate">{{
                    $t("Join Date")
                  }}</label>
                  <input id="joiningDate" v-model="form.joiningDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('joiningDate') }" name="joiningDate" />
                  <has-error :form="form" field="joiningDate" />
                </div>
              </div>
              <div class="form-group">
                <label for="address">{{ $t("Address") }}</label>
                <textarea id="address" v-model="form.address" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Enter an address')" />
                <has-error :form="form" field="address" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t("Profile Picture") }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t("Choose file")
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>
              </div>
              <div class="form-check">
                <input v-model="form.allowLogin" type="checkbox" class="form-check-input" id="allowLogin" />
                <label class="form-check-label" for="allowLogin" style="padding: 0 20px">{{
                  $t("Allow Employee Login")
                }}</label>
              </div>
              <div v-if="form.allowLogin" class="row mt-3">
                <div class="form-group col-md-4">
                  <label for="email">{{ $t("Email") }}
                    <span class="required">*</span></label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter your email address')" />
                  <has-error :form="form" field="email" />
                </div>
                <div class="form-group col-md-4">
                  <label for="password">{{ $t("Password") }}
                    <span class="required">*</span></label>
                  <input id="password" v-model="form.password" type="password" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('password') }" name="password"
                    :placeholder="$t('Enter your password')" />
                  <has-error :form="form" field="password" />
                </div>
                <div class="form-group col-md-4">
                  <label for="role">{{ $t("Role")
                  }}<span class="required">*</span></label>
                  <v-select v-if="roles" v-model="form.role" :options="roles" label="name"
                    :class="{ 'is-invalid': form.errors.has('role') }" name="role"
                    :placeholder="$t('Select a role')" />
                  <has-error :form="form" field="role" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t("Save") }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { VueTelInput } from "vue-tel-input";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Employee") };
  },
  components: {
    VueTelInput,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Employee",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Employees",
        url: "employees.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    url: null,
    form: new Form({
      employeeName: "",
      department: "",
      designation: "",
      salary: "",
      commission: "",
      mobileNumber: "",
      gender: "",
      birthDate: "",
      bloodGroup: "",
      religion: "",
      appointmentDate: "",
      joiningDate: "",
      address: "",
      status: 1,
      image: "",
      allowLogin: false,
      email: "",
      password: "",
      role: "",
    }),
    options: [],
    roles: "",
  }),
  computed: {
    ...mapGetters("operations", ["items"]),
  },
  created() {
    this.getDepartments();
    this.getRoles();
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all departments
    async getDepartments() {
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-departments",
      });
    },

    // get roles
    async getRoles() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-roles"
      );
      this.roles = data.data;
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB")
        );
      }
    },

    // save employee
    async saveEmployee() {
      await this.form
        .post(window.location.origin + "/api/employees")
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: "success",
            title: this.$t("Employee added successfully"),
          });
          this.$router.push({ name: "employees.index" });
        })
        .catch((error) => {
          this.handleSubmitError(error)
        });
    },

    // handle form submission errors
    handleSubmitError(error) {
      if (error?.response?.status === 422 && error.response?.data?.errors) {
        const serverErrors = error.response.data.errors || {}
        const translatedErrors = {}
        Object.keys(serverErrors).forEach((field) => {
          const fieldErrors = serverErrors[field] || []
          translatedErrors[field] = fieldErrors.map((message) => this.translateValidationMessage(message, field))
        })
        this.form.errors.set(translatedErrors)
        toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
      } else {
        const message = error?.response?.data?.message || this.$t('Please check your input and try again.')
        toast.fire({ type: 'error', title: message })
      }
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message)
      if (direct && direct !== message) return direct

      // Field label mapping for employee form fields
      const fieldLabelMap = {
        employeeName: this.$t('Employee Name'),
        department: this.$t('Department'),
        designation: this.$t('Designation'),
        employeeId: this.$t('Employee ID'),
        mobileNumber: this.$t('Mobile Number'),
        phone: this.$t('Phone'),
        salary: this.$t('Salary'),
        commission: this.$t('Commission'),
        gender: this.$t('Gender'),
        bloodGroup: this.$t('Blood Group'),
        religion: this.$t('Religion'),
        appointmentDate: this.$t('Appointment Date'),
        joiningDate: this.$t('Join Date'),
        address: this.$t('Address'),
        status: this.$t('Status'),
        image: this.$t('Profile Picture'),
        email: this.$t('Email'),
        password: this.$t('Password'),
        role: this.$t('Role'),
        note: this.$t('Note'),
      }
      const fieldLabel = fieldLabelMap[field] || field

      // Common Laravel validation patterns
      const patterns = [
        // Required field patterns
        { re: /The\s+.+?\s+field\s+is\s+required\.?/i, ar: `هذا الحقل مطلوب` },
        { re: /Please\s+select\s+an?\s+.+?\.?/i, ar: `يرجى اختيار` },
        { re: /Please\s+enter\s+a\s+.+?\.?/i, ar: `يرجى إدخال` },
        { re: /Please\s+provide\s+a\s+.+?\.?/i, ar: `يرجى تقديم` },
        
        // Selection and choice patterns
        { re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i, ar: `القيمة المحددة غير صالحة` },
        { re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i, ar: `القيمة المحددة غير موجودة` },
        { re: /Please\s+choose\s+a\s+.+?\.?/i, ar: `يرجى اختيار` },
        { re: /You\s+must\s+select\s+a\s+.+?\.?/i, ar: `يجب اختيار` },
        
        // Data type patterns
        { re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i, ar: `يجب أن يكون رقماً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i, ar: `يجب أن يكون عدداً صحيحاً` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i, ar: `يجب أن يكون نصاً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i, ar: `يجب أن يكون مصفوفة` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i, ar: `يجب أن يكون صحيح أو خطأ` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i, ar: `يجب أن يكون بريد إلكتروني صحيح` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i, ar: `يجب أن يكون رابط صحيح` },
        
        // Numeric validation patterns
        { re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يقل عن ${n}` },
        { re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i, ar: (_, n) => `يجب أن يكون أكبر من ${n}` },
        { re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يزيد عن ${n}` },
        { re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i, ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max}` },
        { re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i, ar: (_, n) => `يجب أن يكون بالضبط ${n}` },
        
        // String length patterns
        { re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i, ar: (_, n) => `يجب ألا يتجاوز ${n} حرفاً` },
        { re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i, ar: (_, n) => `يجب أن يكون على الأقل ${n} حرفاً` },
        { re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i, ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max} حرفاً` },
        
        // Date validation patterns
        { re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i, ar: `ليس تاريخاً صحيحاً` },
        { re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i, ar: `لا يطابق التنسيق المطلوب` },
        { re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i, ar: `يجب أن يكون بعد أو يساوي التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i, ar: `يجب أن يكون قبل أو يساوي التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i, ar: `يجب أن يكون بعد التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i, ar: `يجب أن يكون قبل التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i, ar: `يجب أن يكون تاريخ بعد أو يساوي اليوم` },
        
        // Format validation patterns
        { re: /The\s+.+?\s+format\s+is\s+invalid\.?/i, ar: `تنسيق غير صالح` },
        { re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i, ar: `لا يطابق التنسيق المطلوب` },
        { re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i, ar: `يجب أن يطابق النمط المطلوب` },
        
        // Uniqueness patterns
        { re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i, ar: `هذه القيمة مستخدمة بالفعل` },
        { re: /The\s+.+?\s+already\s+exists\.?/i, ar: `موجود بالفعل` },
        { re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i, ar: `هذا مستخدم بالفعل` },
        
        // File upload patterns
        { re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i, ar: `يجب أن يكون ملفاً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i, ar: `يجب أن يكون صورة` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i, ar: `يجب أن يكون صورة صحيحة` },
        { re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i, ar: `الملف كبير جداً` },
        { re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i, ar: (_, n) => `حجم الملف يجب ألا يتجاوز ${n} كيلوبايت` },
        
        // Confirmation patterns
        { re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i, ar: `التأكيد غير متطابق` },
        { re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i, ar: `يجب أن يتطابقا` },
        
        // Custom validation patterns for employee form
        { re: /Employee\s+name\s+is\s+required\.?/i, ar: `اسم الموظف مطلوب` },
        { re: /Department\s+is\s+required\.?/i, ar: `القسم مطلوب` },
        { re: /Designation\s+is\s+required\.?/i, ar: `المنصب مطلوب` },
        { re: /Salary\s+is\s+required\.?/i, ar: `الراتب مطلوب` },
        { re: /Email\s+is\s+required\.?/i, ar: `البريد الإلكتروني مطلوب` },
        { re: /Password\s+is\s+required\.?/i, ar: `كلمة المرور مطلوبة` },
        { re: /Role\s+is\s+required\.?/i, ar: `الدور مطلوب` },
        { re: /Please\s+select\s+a\s+department\.?/i, ar: `يرجى اختيار قسم` },
        { re: /Please\s+select\s+a\s+role\.?/i, ar: `يرجى اختيار دور` },
        { re: /Mobile\s+number\s+is\s+required\.?/i, ar: `رقم الهاتف المحمول مطلوب` },
        { re: /Phone\s+number\s+is\s+required\.?/i, ar: `رقم الهاتف مطلوب` },
        { re: /Address\s+is\s+required\.?/i, ar: `العنوان مطلوب` },
        { re: /Gender\s+is\s+required\.?/i, ar: `الجنس مطلوب` },
        { re: /Blood\s+group\s+is\s+required\.?/i, ar: `فصيلة الدم مطلوبة` },
        { re: /Religion\s+is\s+required\.?/i, ar: `الدين مطلوب` },
        { re: /Appointment\s+date\s+is\s+required\.?/i, ar: `تاريخ التعيين مطلوب` },
        { re: /Joining\s+date\s+is\s+required\.?/i, ar: `تاريخ الانضمام مطلوب` },
        { re: /Profile\s+picture\s+is\s+required\.?/i, ar: `صورة الملف الشخصي مطلوبة` },
        
        // Generic fallback patterns
        { re: /This\s+field\s+is\s+required\.?/i, ar: `هذا الحقل مطلوب` },
        { re: /This\s+field\s+must\s+be\s+filled\.?/i, ar: `يجب ملء هذا الحقل` },
        { re: /This\s+value\s+is\s+invalid\.?/i, ar: `هذه القيمة غير صالحة` },
        { re: /Invalid\s+input\.?/i, ar: `إدخال غير صالح` },
        { re: /Please\s+check\s+your\s+input\.?/i, ar: `يرجى التحقق من المدخلات` },
      ]

      for (const { re, ar } of patterns) {
        const match = message.match(re)
        if (match) {
          const text = typeof ar === 'function' ? ar(...match) : ar
          return `${fieldLabel}: ${text}`
        }
      }

      // Fallback: return original message if nothing matched
      return message
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        employeeName: this.form.employeeName,
        department: this.form.department,
        designation: this.form.designation,
        employeeId: this.form.employeeId,
        phone: this.form.phone,
        email: this.form.email,
        address: this.form.address,
        salary: this.form.salary,
        joiningDate: this.form.joiningDate,
        status: this.form.status,
        note: this.form.note,
        role: this.form.role,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('employeeTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('employeeTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.employeeName = data.employeeName || ''
          this.form.department = data.department || null
          this.form.designation = data.designation || ''
          this.form.employeeId = data.employeeId || ''
          this.form.phone = data.phone || ''
          this.form.email = data.email || ''
          this.form.address = data.address || ''
          this.form.salary = data.salary || ''
          this.form.joiningDate = data.joiningDate || ''
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.note = data.note || ''
          this.form.role = data.role || null
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('employeeTempData')
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
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

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;

  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Custom File Input Styling */
.custom-file-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.custom-file-label {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
  color: #6B7280;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #E5E7EB;
}

/* VueTelInput Styling */
.vue-tel-input {
  padding: 3px;
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
}

.vue-tel-input:focus-within {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.vue-tel-input.is-invalid {
  border-color: #DC3545 !important;
}

/* VueTelInput RTL Styling - Keep country code on the left */
[dir="rtl"] .vue-tel-input .vti__input-container,
html[dir="rtl"] .vue-tel-input .vti__input-container,
body[dir="rtl"] .vue-tel-input .vti__input-container,
.rtl .vue-tel-input .vti__input-container {
  flex-direction: row-reverse !important;
  direction: ltr !important;
}

[dir="rtl"] .vue-tel-input .vti__selection,
html[dir="rtl"] .vue-tel-input .vti__selection,
body[dir="rtl"] .vue-tel-input .vti__selection,
.rtl .vue-tel-input .vti__selection {
  order: 1 !important;
  margin-right: 0 !important;
  margin-left: 8px !important;
}

[dir="rtl"] .vue-tel-input .vti__input,
html[dir="rtl"] .vue-tel-input .vti__input,
body[dir="rtl"] .vue-tel-input .vti__input,
.rtl .vue-tel-input .vti__input {
  order: 2 !important;
  text-align: left !important;
  direction: ltr !important;
}

[dir="rtl"] .vue-tel-input .vti__dropdown,
html[dir="rtl"] .vue-tel-input .vti__dropdown,
body[dir="rtl"] .vue-tel-input .vti__dropdown,
.rtl .vue-tel-input .vti__dropdown {
  order: 1 !important;
  margin-right: 0 !important;
  margin-left: 8px !important;
}

/* Form Check Styling */
.form-check-input {
  margin-top: 0.3rem;
}

.form-check-label {
  font-weight: 500;
  color: #374151;
  margin-left: 0.5rem;
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
