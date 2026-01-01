<template>
  <div>
    <div class="row no-print tabs-header-row">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between align-items-center" v-if="showTabs">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a 
                  class="nav-link" 
                  :class="{ active: activeTab === 'details' }"
                  href="#details" 
                  data-toggle="tab" 
                  @click="handleDetailsClick">
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}
                </a>
              </li>
              <li class="nav-item">
                <a 
                  class="nav-link" 
                  :class="{ active: activeTab === 'activity-log' }"
                  href="#activity-log" 
                  data-toggle="tab"
                  @click="handleActivityClick">
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}
                </a>
              </li>
            </ul>
          <slot name="actions"></slot>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'details' }" id="details">
        <slot name="details"></slot>
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'activity-log' }" id="activity-log">
        <slot name="activity-log"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsActivityTabs",
  props: {
    showTabs: {
      type: Boolean,
      default: true,
    },
    defaultTab: {
      type: String,
      default: "details",
    },
  },
  data() {
    return {
      activeTab: this.defaultTab,
    };
  },
  methods: {
    handleDetailsClick() {
      this.switchTab("details");
      this.$emit("details-clicked");
    },
    handleActivityClick() {
      this.switchTab("activity-log");
      this.$emit("activity-clicked");
    },
    switchTab(tab) {
      if (this.activeTab === tab) {
        return;
      }
      this.activeTab = tab;
      this.$emit("tab-changed", tab);
    },
  },
  mounted() {
    // Set initial active tab
    this.activeTab = this.defaultTab;
    
    // Listen for Bootstrap tab events to keep state in sync
    if (typeof $ !== "undefined") {
      $('a[data-toggle="tab"]').on("shown.bs.tab", (e) => {
        const target = $(e.target).attr("href");
        if (target === "#details") {
          this.activeTab = "details";
        } else if (target === "#activity-log") {
          this.activeTab = "activity-log";
        }
      });
    }
  },
};
</script>

<style scoped>
.tabs-header-row {
  margin-bottom: 1.5rem;
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: none;
  margin-bottom: 0;
  background: #0775AF1A;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
  align-self: center;
}

.nav-item {
  flex: 1 1 0;
}

.nav-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  color: #000000;
  font-family: DINNextLTArabic;
  font-weight: 400;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link.active {
  background: #0775AF;
  color: #FFFFFF !important;
}

.nav-link:hover {
  filter: brightness(0.96);
}

@media (max-width: 576px) {
  .nav-tabs {
    gap: 6px;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
}
</style>

