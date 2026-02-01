<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar">
    <!-- Brand Logo -->
    <router-link :to="{ name: 'home' }" class="brand-link">
      <img
        v-if="appInfo"
        :src="appInfo.blackLogo"
        :alt="appInfo.companyName"
        class="lg-logo light-logo"
      />
      <img
        v-if="appInfo"
        :src="appInfo.logo"
        :alt="appInfo.companyName"
        class="lg-logo dark-logo"
      />
      <img
        v-if="appInfo"
        :src="appInfo.smallLogo"
        alt="appInfo.companyName"
        class="sm-logo"
      />
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar custom-sidebar">
      <!-- Sidebar Menu -->
      <nav class="custom-nav-padding">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
        >
          <!-- لوحة التحكم -->
          <li class="nav-header text-bold">
            {{ $t("Dashboard") }}
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">
              <i class="nav-icon fas fa-home" />
              <p>{{ $t("Dashboard") }}</p>
            </router-link>
          </li>

          <!-- Sales & Customers -->
          <li class="nav-header text-bold">{{ $t("Sales & Customers") }}</li>
          <li
            v-if="$isPOS() && ($can('invoice-list') || $can('invoice-create'))"
            class="nav-item"
          >
            <router-link :to="{ name: 'pos.create' }" class="nav-link pos-link">
              <i class="fas fa-cash-register nav-icon"></i>
              <p>{{ $t("POS") }}</p>
            </router-link>
          </li>
          <li
            v-if="
              !$isPOS() &&
              ($can('quotation-list') ||
                $can('quotation-create') ||
                $can('quotation-view') ||
                $can('quotation-edit') ||
                $can('quotation-delete') ||
                $can('quotation-to-invoice') ||
                $can('invoice-list') ||
                $can('invoice-create') ||
                $can('invoice-view') ||
                $can('invoice-edit') ||
                $can('invoice-delete') ||
                $can('invoice-return-list') ||
                $can('invoice-return-create') ||
                $can('invoice-return-view') ||
                $can('invoice-return-edit') ||
                $can('invoice-return-delete'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('quotations') ||
              menuOpen('invoices') ||
              menuOpen('invoiceReturns') ||
              menuOpen('creditNotes') ||
              menuOpen('pos') ||
              menuOpen('clients')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-shopping-bag" />
              <p>
                {{ $t("Sales") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('quotations') ||
                menuOpen('invoices') ||
                menuOpen('invoiceReturns') ||
                menuOpen('creditNotes') ||
                menuOpen('pos') ||
                menuOpen('clients')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('quotation-list') ||
                  $can('quotation-create') ||
                  $can('quotation-view') ||
                  $can('quotation-edit') ||
                  $can('quotation-delete') ||
                  $can('quotation-to-invoice')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'quotations.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-th-list nav-icon" />
                  <p>{{ $t("Quotations List") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('invoice-list') ||
                  $can('invoice-create') ||
                  $can('invoice-view') ||
                  $can('invoice-edit') ||
                  $can('invoice-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'invoices.index' }" class="nav-link">
                  <i class="fas fa-file-invoice nav-icon" />
                  <p>
                    {{ $t("Invoices List") }}
                    <router-link
                      v-if="$can('invoice-create')"
                      :to="{ name: 'invoices.create' }"
                      class="add-btn-inline"
                      @click.stop
                    >
                      <i class="fas fa-plus"></i>
                    </router-link>
                  </p>
                </router-link>
              </li>
              <li
                v-if="
                  ($can('invoice-list') ||
                    $can('invoice-create') ||
                    $can('invoice-view') ||
                    $can('invoice-edit') ||
                    $can('invoice-delete')) &&
                  ($canAccessModule('pos') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'pos.create' }"
                  class="nav-link pos-link"
                >
                  <i class="fas fa-cash-register nav-icon"></i>
                  <p>{{ $t("POS") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('invoice-return-list') ||
                  $can('invoice-return-create') ||
                  $can('invoice-return-view') ||
                  $can('invoice-return-edit') ||
                  $can('invoice-return-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'invoiceReturns.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-undo-alt nav-icon" />
                  <p>
                    {{
                      isSaudiArabia ? $t("Credit notes") : $t("Returns List")
                    }}
                  </p>
                </router-link>
              </li>
              <!-- <li
                v-if="
                  $can('invoice-return-list') ||
                  $can('invoice-return-create') ||
                  $can('invoice-return-view')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'creditNotes.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-file-invoice-dollar nav-icon" />
                  <p>{{ $t("Credit Note") }}</p>
                </router-link>
              </li> -->
              <li
                v-if="
                  $can('client-list') ||
                  $can('client-create') ||
                  $can('client-view') ||
                  $can('client-edit') ||
                  $can('client-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'clients.index' }" class="nav-link">
                  <i class="fas fa-users nav-icon" />
                  <p>{{ $t("Clients") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Purchases & Suppliers -->
          <li class="nav-header text-bold" v-if="!$isPOS()">
            {{ $t("Purchases & Suppliers") }}
          </li>
          <li
            v-if="
              $can('purchase-list') ||
              $can('purchase-create') ||
              $can('purchase-edit') ||
              $can('purchase-view') ||
              $can('purchase-delete') ||
              $can('purchase-return-list') ||
              $can('purchase-return-create') ||
              $can('purchase-return-edit') ||
              $can('purchase-return-view') ||
              $can('purchase-return-delete')
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('purchases') ||
              menuOpen('purchaseReturns') ||
              menuOpen('purchase-order') ||
              menuOpen('suppliers')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-shopping-basket" />
              <p>
                {{ $t("Purchases") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('purchases') ||
                menuOpen('purchaseReturns') ||
                menuOpen('purchase-order') ||
                menuOpen('suppliers')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('purchase-order-list') ||
                  $can('purchase-order-create') ||
                  $can('purchase-order-edit') ||
                  $can('purchase-order-view') ||
                  $can('purchase-order-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'purchase-order.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-file-invoice nav-icon" />
                  <p>{{ $t("Purchase Orders") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('purchase-list') ||
                  $can('purchase-create') ||
                  $can('purchase-edit') ||
                  $can('purchase-view') ||
                  $can('purchase-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'purchases.index' }" class="nav-link">
                  <i class="fas fa-truck-loading nav-icon" />
                  <p>
                    {{ $t("Purchases List") }}
                    <router-link
                      v-if="$can('purchase-create')"
                      :to="{ name: 'purchases.create' }"
                      class="add-btn-inline"
                      @click.stop
                    >
                      <i class="fas fa-plus"></i>
                    </router-link>
                  </p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('purchase-return-list') ||
                  $can('purchase-return-create') ||
                  $can('purchase-return-edit') ||
                  $can('purchase-return-view') ||
                  $can('purchase-return-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'purchaseReturns.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-undo-alt nav-icon" />
                  <p>
                    {{ isSaudiArabia ? $t("Debit notes") : $t("Returns List") }}
                  </p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('supplier-list') ||
                  $can('supplier-create') ||
                  $can('supplier-view') ||
                  $can('supplier-edit') ||
                  $can('supplier-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'suppliers.index' }" class="nav-link">
                  <i class="fas fa-people-carry nav-icon" />
                  <p>{{ $t("Suppliers") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Human Resources -->
          <li class="nav-header text-bold" v-if="!$isPOS()">
            {{ $t("Human Resources") }}
          </li>
          <li
            v-if="
              $can('department-list') ||
              $can('department-create') ||
              $can('department-edit') ||
              $can('department-delete') ||
              $can('employee-list') ||
              $can('employee-create') ||
              $can('employee-edit') ||
              $can('employee-delete') ||
              $can('employee-view') ||
              $can('increment-list') ||
              $can('increment-create') ||
              $can('increment-edit') ||
              $can('increment-view') ||
              $can('increment-delete')
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('departments') ||
              menuOpen('employees') ||
              menuOpen('increments')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users-cog" />
              <p>
                {{ $t("Employees") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('departments') ||
                menuOpen('employees') ||
                menuOpen('increments')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('department-list') ||
                  $can('department-create') ||
                  $can('department-edit') ||
                  $can('department-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'departments.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-server nav-icon" />
                  <p>{{ $t("Departments") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('employee-list') ||
                  $can('employee-create') ||
                  $can('employee-edit') ||
                  $can('employee-delete') ||
                  $can('employee-view')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'employees.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t("Employees List") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('increment-list') ||
                  $can('increment-create') ||
                  $can('increment-edit') ||
                  $can('increment-view') ||
                  $can('increment-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'increments.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t("Increments") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Accounting & Finance -->
          <li
            class="nav-header text-bold"
            v-if="$canAccessModule('accounting') || $canAccessModule('both')"
          >
            {{ $t("Accounting & Finance") }}
          </li>
          <li
            v-if="
              ($can('account-list') ||
                $can('account-create') ||
                $can('account-view') ||
                $can('account-edit') ||
                $can('account-delete') ||
                $can('chart-of-account-list') ||
                $can('chart-of-account-create') ||
                $can('chart-of-account-edit') ||
                $can('chart-of-account-view') ||
                $can('chart-of-account-delete') ||
                $can('account-balance-list') ||
                $can('account-balance-create') ||
                $can('account-balance-edit') ||
                $can('account-balance-delete') ||
                $can('account-transfer-balance-list') ||
                $can('account-transfer-balance-create') ||
                $can('account-transfer-balance-edit') ||
                $can('account-transfer-balance-view') ||
                $can('account-transfer-balance-delete') ||
                $can('transaction-history')) &&
              ($canAccessModule('accounting') || $canAccessModule('both'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('accounts') ||
              menuOpen('balances') ||
              menuOpen('transferBalances') ||
              menuOpen('transactions') ||
              menuOpen('chart-of-accounts')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book" />
              <p>
                {{ $t("Cashbook & Accounts") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('accounts') ||
                menuOpen('balances') ||
                menuOpen('transferBalances') ||
                menuOpen('transactions') ||
                menuOpen('chart-of-accounts')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('chart-of-account-list') ||
                  $can('chart-of-account-create') ||
                  $can('chart-of-account-edit') ||
                  $can('chart-of-account-view') ||
                  $can('chart-of-account-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'chart-of-accounts.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-list nav-icon" />
                  <p>{{ $t("Chart of Accounts") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('chart-of-account-list') ||
                  $can('chart-of-account-create') ||
                  $can('chart-of-account-edit') ||
                  $can('chart-of-account-view') ||
                  $can('chart-of-account-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'chart-of-accounts.sub-accounts' }"
                  class="nav-link"
                >
                  <i class="fas fa-code-branch nav-icon" />
                  <p>{{ $t("Sub Accounts") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('account-list') ||
                  $can('account-create') ||
                  $can('account-view') ||
                  $can('account-edit') ||
                  $can('account-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'accounts.index' }" class="nav-link">
                  <i class="fas fa-university nav-icon" />
                  <p>{{ $t("Accounts (Bank / Cash)") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('account-balance-list') ||
                  $can('account-balance-create') ||
                  $can('account-balance-edit') ||
                  $can('account-balance-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'balances.index' }" class="nav-link">
                  <i class="fas fa-sliders-h nav-icon" />
                  <p>{{ $t("Balance Adjustments") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('account-transfer-balance-list') ||
                  $can('account-transfer-balance-create') ||
                  $can('account-transfer-balance-edit') ||
                  $can('account-transfer-balance-view') ||
                  $can('account-transfer-balance-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'transferBalances.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-exchange-alt nav-icon" />
                  <p>{{ $t("Balance Transfers") }}</p>
                </router-link>
              </li>
              <li v-if="$can('transaction-history')" class="nav-item">
                <router-link
                  :to="{ name: 'transactions.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-history nav-icon" />
                  <p>{{ $t("Transaction History") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Cost Centers -->
          <li
            v-if="
              ($can('view_cost_centers') ||
                $can('create_cost_center') ||
                $can('update_cost_center') ||
                $can('delete_cost_center')) &&
              ($canAccessModule('accounting') || $canAccessModule('both'))
            "
            class="nav-item has-treeview"
            :class="menuOpen('cost-centers') ? 'menu-is-opening menu-open' : ''"
          >
            <a href="#" class="nav-link">
              <i class="fas fa-sitemap nav-icon" />
              <p>
                {{ $t("Cost Centers") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('cost-centers') ? 'display: block' : 'display: none'
              "
            >
              <li v-if="$can('view_cost_centers')" class="nav-item">
                <router-link
                  :to="{ name: 'cost-centers.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-list nav-icon" />
                  <p>{{ $t("All Cost Centers") }}</p>
                </router-link>
              </li>
              <li v-if="$can('view_cost_centers')" class="nav-item">
                <router-link
                  :to="{ name: 'cost-centers.tree' }"
                  class="nav-link"
                >
                  <i class="fas fa-sitemap nav-icon" />
                  <p>{{ $t("Tree View") }}</p>
                </router-link>
              </li>
              <li v-if="$can('create_cost_center')" class="nav-item">
                <router-link
                  :to="{ name: 'cost-centers.create' }"
                  class="nav-link"
                >
                  <i class="fas fa-plus nav-icon" />
                  <p>{{ $t("Create Cost Center") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Cost Allocations -->
          <!-- Hidden for now -->
          <!--
          <li
            v-if="
              ($can('view_cost_centers') ||
              $can('create_cost_center')) &&
              ($canAccessModule('accounting') || $canAccessModule('both'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('cost-allocations') ? 'menu-is-opening menu-open' : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="fas fa-share-alt nav-icon" />
              <p>
                {{ $t("Cost Allocations") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('cost-allocations') ? 'display: block' : 'display: none'
              "
            >
              <li v-if="$can('view_cost_centers')" class="nav-item">
                <router-link
                  :to="{ name: 'cost-allocations.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-list nav-icon" />
                  <p>{{ $t("Allocation Rules") }}</p>
                </router-link>
              </li>
              <li v-if="$can('create_cost_center')" class="nav-item">
                <router-link
                  :to="{ name: 'cost-allocations.create' }"
                  class="nav-link"
                >
                  <i class="fas fa-plus nav-icon" />
                  <p>{{ $t("Create Rule") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          -->

          <!-- القيود المحاسبية -->
          <li
            v-if="
              ($can('journal-entry-list') ||
                $can('journal-entry-create') ||
                $can('journal-entry-view') ||
                $can('journal-entry-edit')) &&
              ($canAccessModule('accounting') || $canAccessModule('both'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('journal-entries') ? 'menu-is-opening menu-open' : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="fas fa-book nav-icon" />
              <p>
                {{ $t("Journal Entries") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('journal-entries') ? 'display: block' : 'display: none'
              "
            >
              <li v-if="$can('journal-entry-list')" class="nav-item">
                <router-link
                  :to="{ name: 'journal-entries.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-list nav-icon" />
                  <p>{{ $t("All Entries") }}</p>
                </router-link>
              </li>
              <li v-if="$can('journal-entry-create')" class="nav-item">
                <router-link
                  :to="{ name: 'journal-entries.create' }"
                  class="nav-link"
                >
                  <i class="fas fa-plus nav-icon" />
                  <p>{{ $t("New Entry") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- المصروفات -->
          <li
            v-if="
              !$isPOS() &&
              ($can('expense-category-list') ||
                $can('expense-category-create') ||
                $can('expense-category-edit') ||
                $can('expense-category-delete') ||
                $can('expense-sub-category-list') ||
                $can('expense-sub-category-create') ||
                $can('expense-sub-category-edit') ||
                $can('expense-sub-category-delete') ||
                $can('expense-list') ||
                $can('expense-create') ||
                $can('expense-edit') ||
                $can('expense-view') ||
                $can('expense-delete'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('expenseCats') ||
              menuOpen('expenseSubCats') ||
              menuOpen('expenses')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-calculator" />
              <p>
                {{ $t("Expenses") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('expenseCats') ||
                menuOpen('expenseSubCats') ||
                menuOpen('expenses')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('expense-category-list') ||
                  $can('expense-category-create') ||
                  $can('expense-category-edit') ||
                  $can('expense-category-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'expenseCats.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t("Categories") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('expense-sub-category-list') ||
                  $can('expense-sub-category-create') ||
                  $can('expense-sub-category-edit') ||
                  $can('expense-sub-category-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'expenseSubCats.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-code-branch nav-icon" />
                  <p>{{ $t("Sub Categories") }}</p>
                </router-link>
              </li>
              <li v-if="$can('expense-list')" class="nav-item">
                <router-link :to="{ name: 'expenses.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>
                    {{ $t("Expenses List") }}
                    <router-link
                      v-if="$can('expense-create')"
                      :to="{ name: 'expenses.create' }"
                      class="add-btn-inline"
                      @click.stop
                    >
                      <i class="fas fa-plus"></i>
                    </router-link>
                  </p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- السندات (Vouchers) -->
          <li
            v-if="
              !$isPOS() &&
              ($can('payment-voucher-list') ||
                $can('payment-voucher-create') ||
                $can('payment-voucher-edit') ||
                $can('payment-voucher-view') ||
                $can('payment-voucher-delete'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('receiveVouchers') || menuOpen('sendVouchers')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file-invoice-dollar" />
              <p>
                {{ $t("Vouchers") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('receiveVouchers') || menuOpen('sendVouchers')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('payment-voucher-list') ||
                  $can('payment-voucher-create') ||
                  $can('payment-voucher-edit') ||
                  $can('payment-voucher-view') ||
                  $can('payment-voucher-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'receiveVouchers.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-arrow-down nav-icon" />
                  <p>{{ $t("Receive Vouchers") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('payment-voucher-list') ||
                  $can('payment-voucher-create') ||
                  $can('payment-voucher-edit') ||
                  $can('payment-voucher-view') ||
                  $can('payment-voucher-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'sendVouchers.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-arrow-up nav-icon" />
                  <p>{{ $t("Send Vouchers") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- Payments section hidden for now -->
          <!--
          <li
            v-if="!$isPOS() && (
              $can('non-purchase-payment-list') ||
              $can('non-purchase-payment-create') ||
              $can('non-purchase-payment-edit') ||
              $can('non-purchase-payment-view') ||
              $can('non-purchase-payment-delete') ||
              $can('purchase-payment-list') ||
              $can('purchase-payment-create') ||
              $can('purchase-payment-edit') ||
              $can('purchase-payment-view') ||
              $can('purchase-payment-delete') ||
              $can('non-invoice-payment-list') ||
              $can('non-invoice-payment-create') ||
              $can('non-invoice-payment-edit') ||
              $can('non-invoice-payment-view') ||
              $can('non-invoice-payment-delete') ||
              $can('invoice-payment-list') ||
              $can('invoice-payment-create') ||
              $can('invoice-payment-view') ||
              $can('invoice-payment-edit') ||
              $can('invoice-payment-delete')
            )"
            class="nav-item has-treeview"
            :class="
              menuOpen('nonInvoicePayments') ||
              menuOpen('invoicePayments') ||
              menuOpen('purchasePayments') ||
              menuOpen('nonPurchasePayments')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-receipt" />
              <p>
                {{ $t("Payments") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('nonInvoicePayments') ||
                menuOpen('invoicePayments') ||
                menuOpen('purchasePayments') ||
                menuOpen('nonPurchasePayments')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('non-invoice-payment-list') ||
                  $can('non-invoice-payment-create') ||
                  $can('non-invoice-payment-edit') ||
                  $can('non-invoice-payment-view') ||
                  $can('non-invoice-payment-delete') ||
                  $can('invoice-payment-list') ||
                  $can('invoice-payment-create') ||
                  $can('invoice-payment-view') ||
                  $can('invoice-payment-edit') ||
                  $can('invoice-payment-delete')
                "
                class="nav-item has-treeview"
                :class="
                  menuOpen('nonInvoicePayments') || menuOpen('invoicePayments')
                    ? 'menu-is-opening menu-open'
                    : ''
                "
              >
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-users" />
                  <p>
                    {{ $t("Clients") }}
                    <span class="toggle-icon"></span>
                  </p>
                </a>
                <ul
                  class="nav nav-treeview"
                  :style="
                    menuOpen('nonInvoicePayments') ||
                    menuOpen('invoicePayments')
                      ? 'display: block'
                      : 'display: none'
                  "
                >
                  <li
                    v-if="
                      $can('invoice-payment-list') ||
                      $can('invoice-payment-create') ||
                      $can('invoice-payment-view') ||
                      $can('invoice-payment-edit') ||
                      $can('invoice-payment-delete')
                    "
                    class="nav-item"
                  >
                    <router-link
                      :to="{ name: 'invoicePayments.index' }"
                      class="nav-link"
                    >
                      <i class="fas fa-file-invoice nav-icon" />
                      <p>{{ $t("Invoice") }}</p>
                    </router-link>
                  </li>
                  <li
                    v-if="
                      $can('non-invoice-payment-list') ||
                      $can('non-invoice-payment-create') ||
                      $can('non-invoice-payment-edit') ||
                      $can('non-invoice-payment-view') ||
                      $can('non-invoice-payment-delete')
                    "
                    class="nav-item"
                  >
                    <router-link
                      :to="{ name: 'nonInvoicePayments.index' }"
                      class="nav-link"
                    >
                      <i class="fas fa-file-alt nav-icon" />
                      <p>{{ $t("Non Invoice") }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>

              <li
                v-if="
                  $can('purchase-payment-list') ||
                  $can('purchase-payment-create') ||
                  $can('purchase-payment-edit') ||
                  $can('purchase-payment-view') ||
                  $can('purchase-payment-delete') ||
                  $can('non-purchase-payment-list') ||
                  $can('non-purchase-payment-create') ||
                  $can('non-purchase-payment-edit') ||
                  $can('non-purchase-payment-view') ||
                  $can('non-purchase-payment-delete')
                "
                class="nav-item has-treeview"
                :class="
                  menuOpen('nonPurchasePayments') ||
                  menuOpen('purchasePayments')
                    ? 'menu-is-opening menu-open'
                    : ''
                "
              >
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-people-carry" />
                  <p>
                    {{ $t("Suppliers") }}
                    <span class="toggle-icon"></span>
                  </p>
                </a>
                <ul
                  class="nav nav-treeview"
                  :style="
                    menuOpen('nonPurchasePayments') ||
                    menuOpen('purchasePayments')
                      ? 'display: block'
                      : 'display: none'
                  "
                >
                  <li
                    v-if="
                      $can('purchase-payment-list') ||
                      $can('purchase-payment-create') ||
                      $can('purchase-payment-edit') ||
                      $can('purchase-payment-view') ||
                      $can('purchase-payment-delete')
                    "
                    class="nav-item"
                  >
                    <router-link
                      :to="{ name: 'purchasePayments.index' }"
                      class="nav-link"
                    >
                      <i class="fas fa-plane-departure nav-icon" />
                      <p>{{ $t("Purchase") }}</p>
                    </router-link>
                  </li>
                  <li
                    v-if="
                      $can('non-purchase-payment-list') ||
                      $can('non-purchase-payment-create') ||
                      $can('non-purchase-payment-edit') ||
                      $can('non-purchase-payment-view') ||
                      $can('non-purchase-payment-delete')
                    "
                    class="nav-item"
                  >
                    <router-link
                      :to="{ name: 'nonPurchasePayments.index' }"
                      class="nav-link"
                    >
                      <i class="fas fa-truck-pickup nav-icon" />
                      <p>{{ $t("Non Purchase") }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          -->
          <li
            v-if="
              !$isPOS() &&
              ($can('loan-authority-list') ||
                $can('loan-authority-create') ||
                $can('loan-authority-view') ||
                $can('loan-authority-edit') ||
                $can('loan-authority-delete') ||
                $can('loan-list') ||
                $can('loan-create') ||
                $can('loan-view') ||
                $can('loan-edit') ||
                $can('loan-delete') ||
                $can('loan-payment-list') ||
                $can('loan-payment-create') ||
                $can('loan-payment-view') ||
                $can('loan-payment-edit') ||
                $can('loan-payment-delete'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('authorities') ||
              menuOpen('loans') ||
              menuOpen('loanPayments')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-piggy-bank" />
              <p>
                {{ $t("Loan Management") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('authorities') ||
                menuOpen('loans') ||
                menuOpen('loanPayments')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('loan-authority-list') ||
                  $can('loan-authority-create') ||
                  $can('loan-authority-view') ||
                  $can('loan-authority-edit') ||
                  $can('loan-authority-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'authorities.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-building nav-icon" />
                  <p>{{ $t("Authorities") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('loan-list') ||
                  $can('loan-create') ||
                  $can('loan-view') ||
                  $can('loan-edit') ||
                  $can('loan-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'loans.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t("Loans") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('loan-payment-list') ||
                  $can('loan-payment-create') ||
                  $can('loan-payment-view') ||
                  $can('loan-payment-edit') ||
                  $can('loan-payment-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'loanPayments.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-receipt nav-icon" />
                  <p>{{ $t("Payments") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-if="
              !$isPOS() &&
              ($can('asset-type-list') ||
                $can('asset-type-create') ||
                $can('asset-type-edit') ||
                $can('asset-type-delete') ||
                $can('asset-list') ||
                $can('asset-create') ||
                $can('asset-view') ||
                $can('asset-edit') ||
                $can('asset-delete'))
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('assetTypes') || menuOpen('assets')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-couch" />
              <p>
                {{ $t("Asset Management") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('assetTypes') || menuOpen('assets')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li
                v-if="
                  $can('asset-type-list') ||
                  $can('asset-type-create') ||
                  $can('asset-type-edit') ||
                  $can('asset-type-delete')
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'assetTypes.index' }"
                  class="nav-link"
                >
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t("Types") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('asset-list') ||
                  $can('asset-create') ||
                  $can('asset-view') ||
                  $can('asset-edit') ||
                  $can('asset-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'assets.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t("Assets") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-if="
              !$isPOS() &&
              ($can('payroll-list') ||
                $can('payroll-create') ||
                $can('payroll-view') ||
                $can('payroll-edit') ||
                $can('payroll-delete'))
            "
            class="nav-item"
          >
            <router-link :to="{ name: 'payroll.index' }" class="nav-link">
              <i class="nav-icon fas fa-clipboard-list" />
              <p>{{ $t("Payroll") }}</p>
            </router-link>
          </li>

          <!-- Inventory Management -->
          <li class="nav-header text-bold">
            {{ $t("Inventory Management") }}
          </li>

          <!-- Items & Products -->
          <li
            v-if="
              $can('units-management') ||
              $can('product-category-create') ||
              $can('product-category-edit') ||
              $can('product-category-delete') ||
              $can('product-sub-category-create') ||
              $can('product-sub-category-edit') ||
              $can('product-sub-category-delete') ||
              $can('product-create') ||
              $can('product-view') ||
              $can('product-edit') ||
              $can('product-delete') ||
              $can('print-barcode') ||
              $can('inventory-view')
            "
            class="nav-item has-treeview"
            :class="
              menuOpen('units') ||
              menuOpen('productCats') ||
              menuOpen('productSubCats') ||
              menuOpen('products') ||
              menuOpen('itemsDirectory') ||
              menuOpen('count')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-box" />
              <p>
                {{ $t("Items & Products") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('units') ||
                menuOpen('productCats') ||
                menuOpen('productSubCats') ||
                menuOpen('products') ||
                menuOpen('itemsDirectory') ||
                menuOpen('count')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <!-- Configuration -->
              <li v-if="$can('units-management')" class="nav-item">
                <router-link :to="{ name: 'units.index' }" class="nav-link">
                  <i class="fas fa-balance-scale nav-icon" />
                  <p>{{ $t("Units of Measurement") }}</p>
                </router-link>
              </li>

              <!-- Categories -->
              <li
                v-if="
                  $can('product-category-create') ||
                  $can('product-category-edit') ||
                  $can('product-category-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'productCats.index' }" class="nav-link">
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t("Categories") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('product-sub-category-create') ||
                  $can('product-sub-category-edit') ||
                  $can('product-sub-category-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'productSubCats.index' }" class="nav-link">
                  <i class="fas fa-code-branch nav-icon" />
                  <p>{{ $t("Sub Categories") }}</p>
                </router-link>
              </li>

              <!-- Items -->
              <li
                v-if="
                  $can('product-create') ||
                  $can('product-view') ||
                  $can('product-edit') ||
                  $can('product-delete')
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'products.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t("Items") }}</p>
                </router-link>
              </li>
              <li v-if="$can('print-barcode')" class="nav-item">
                <router-link :to="{ name: 'barcode.print' }" class="nav-link">
                  <i class="fas fa-barcode nav-icon" />
                  <p>{{ $t("Barcode") }}</p>
                </router-link>
              </li>
              <li v-if="$can('inventory-view')" class="nav-item">
                <router-link :to="{ name: 'inventory.itemsDirectory.index' }" class="nav-link">
                  <i class="fas fa-book nav-icon" />
                  <p>{{ $t("Items Directory") }}</p>
                </router-link>
              </li>

              <!-- Stock Operations -->
              <li v-if="$can('inventory-view')" class="nav-item">
                <router-link :to="{ name: 'inventory.count' }" class="nav-link">
                  <i class="fas fa-clipboard-check nav-icon" />
                  <p>{{ $t("Inventory Count") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-bold" v-if="!$isPOS()">
            {{ $t("REPORTS") }}
          </li>
          <li
            v-if="
              !$isPOS() &&
              ($can('account-statement') ||
                $can('balance-sheet') ||
                $can('vat-report') ||
                $can('today-profit') ||
                $can('summary-report') ||
                $can('profit-loss') ||
                $can('expense-report') ||
                $can('sales-by-user-report') ||
                $can('collection-by-user-report') ||
                $can('invoice-list'))
            "
            class="nav-item has-treeview"
            :class="menuOpen('reports') ? 'menu-is-opening menu-open' : ''"
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-bar" />
              <p>
                {{ $t("Reports") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="menuOpen('reports') ? 'display: block' : 'display: none'"
            >
              <!-- Account Reports -->
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.accountStatement' }"
                  class="nav-link"
                >
                  <p>{{ $t("Account Statement") }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.groupAccountStatement' }"
                  class="nav-link"
                >
                  <p>{{ $t("Group Account Statement") }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.analyticalAccountStatement' }"
                  class="nav-link"
                >
                  <p>{{ $t("Analytical Account Statement") }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.analyticalAccountDashboard' }"
                  class="nav-link"
                >
                  <p>{{ $t("Analytical Account Dashboard") }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.cashFlowAnalysis' }"
                  class="nav-link"
                >
                  <p>{{ $t("Cash Flow Analysis") }}</p>
                </router-link>
              </li>
              <!-- Financial Statements -->
              <li
                v-if="
                  $can('balance-sheet') &&
                  ($canAccessModule('accounting') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'reports.balanceSheet' }"
                  class="nav-link"
                >
                  <p>{{ $t("Balance Sheet") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('balance-sheet') &&
                  ($canAccessModule('accounting') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'reports.trialBalance' }"
                  class="nav-link"
                >
                  <p>{{ $t("Trial Balance") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('profit-loss') &&
                  ($canAccessModule('accounting') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'reports.profitLoss' }"
                  class="nav-link"
                >
                  <p>{{ $t("Profit/Loss Report") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('summary-report') &&
                  ($canAccessModule('accounting') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link :to="{ name: 'reports.summary' }" class="nav-link">
                  <p>{{ $t("Summary Report") }}</p>
                </router-link>
              </li>
              <!-- Transaction Reports -->
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.invoiceSummary' }"
                  class="nav-link"
                >
                  <p>{{ $t("Invoice Summary") }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.purchaseSummary' }"
                  class="nav-link"
                >
                  <p>{{ $t("Purchase Summary") }}</p>
                </router-link>
              </li>
              <li v-if="$can('expense-report')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.expenses' }"
                  class="nav-link"
                >
                  <p>{{ $t("Expense Report") }}</p>
                </router-link>
              </li>
              <li
                v-if="
                  $can('vat-report') &&
                  ($canAccessModule('accounting') || $canAccessModule('both'))
                "
                class="nav-item"
              >
                <router-link
                  :to="{ name: 'reports.vatReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("VAT Report") }}</p>
                </router-link>
              </li>
              <!-- Receivables & Payables -->
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.clientReceivableReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("Client Receivable Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.supplierPayableReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("Supplier Payable Report") }}</p>
                </router-link>
              </li>
              <!-- Sales & Performance Reports -->
              <li v-if="$can('today-profit')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.todayReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("Today Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('sales-by-user-report')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.salesByUserReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("Sales By User Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('collection-by-user-report')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.collectionByUserReport' }"
                  class="nav-link"
                >
                  <p>{{ $t("Collection By User Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('invoice-list')" class="nav-item">
                <router-link
                  :to="{ name: 'reports.posSessions' }"
                  class="nav-link"
                >
                  <p>{{ $t("POS Sessions") }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- System Settings -->
          <li class="nav-header text-bold" v-if="!$isPOS()">
            {{ $t("System Settings") }}
          </li>
          <li
            v-if="
              !$isPOS() &&
              ($can('branches-list') ||
                $can('branches-create') ||
                $can('branches-edit') ||
                $can('branches-delete'))
            "
            class="nav-item"
          >
            <router-link :to="{ name: 'branches.index' }" class="nav-link">
              <i class="nav-icon fas fa-sitemap"></i>
              <p>{{ $t("Branches") }}</p>
            </router-link>
          </li>

          <li
            v-if="
              $can('role-permissions') ||
              $can('units') ||
              $can('currencies') ||
              $can('general-settings')
            "
            class="nav-item"
          >
            <router-link :to="{ name: 'setup.index' }" class="nav-link">
              <i class="nav-icon fas fa-cogs" />
              <p>{{ $t("Setup") }}</p>
            </router-link>
          </li>
          <li v-if="!$isPOS() && $can('print-templates')" class="nav-item">
            <router-link :to="{ name: 'print-templates' }" class="nav-link">
              <i class="nav-icon fas fa-print" />
              <p>{{ $t("Print Templates") }}</p>
            </router-link>
          </li>
          <li class="nav-item" v-if="!$isPOS()">
            <router-link :to="{ name: 'activity.log' }" class="nav-link">
              <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
              {{ $t("Activity log") }}
            </router-link>
          </li>
          <li class="nav-item has-treeview" v-if="!$isPOS()">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user" />
              <p>
                {{ $t("Account") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'settings.billing' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-money-check-alt"></i>
                  {{ $t("Billing") }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'settings.profile' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-user-circle"></i>
                  {{ $t("Profile") }}
                </router-link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link admin-logout"
                  href="#"
                  @click.prevent="logout"
                >
                  <i class="nav-icon fas fa-power-off" />
                  {{ $t("Logout") }}
                </a>
              </li>
            </ul>
          </li>
          <li
            v-if="!$isPOS() && $can('domain-management')"
            class="nav-item has-treeview"
            :class="
              menuOpen('domain') ||
              menuOpen('domains') ||
              menuOpen('domain-requests')
                ? 'menu-is-opening menu-open'
                : ''
            "
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-database" />
              <p>
                {{ $t("Domain") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="
                menuOpen('domain') ||
                menuOpen('domains') ||
                menuOpen('domain-requests')
                  ? 'display: block'
                  : 'display: none'
              "
            >
              <li class="nav-item">
                <router-link :to="{ name: 'domains.index' }" class="nav-link">
                  <i class="nav-icon fas fa-server" />
                  <p>{{ $t("Domain Management") }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'domain-requests.index' }"
                  class="nav-link"
                >
                  <i class="nav-icon fas fa-file-import" />
                  <p>{{ $t("Domain Request") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li
            v-if="!$isPOS()"
            class="nav-item has-treeview"
            :class="menuOpen('backup') ? 'menu-is-opening menu-open' : ''"
          >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user" />
              <p>
                {{ $t("Resources") }}
                <span class="toggle-icon"></span>
              </p>
            </a>
            <ul
              class="nav nav-treeview"
              :style="menuOpen('backup') ? 'display: block' : 'display: none'"
            >
              <li v-if="$can('database-backup')" class="nav-item">
                <router-link :to="{ name: 'backup' }" class="nav-link">
                  <i class="nav-icon fas fa-download" />
                  <p>{{ $t("Database Backup") }}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    appName: window.config.appName,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo"]),
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === "SA";
    },
  },
  mounted() {
    // Initialize AdminLTE 3.2.0 Treeview functionality
    $('[data-widget="treeview"]').Treeview("init");
  },
  methods: {
    menuOpen(routeName) {
      if (this.$route.name) {
        return this.$route.name.indexOf(routeName) > -1 ? true : false;
      }
      return false;
    },

    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");
      // Redirect to login.
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.main-sidebar {
  max-height: 100vh;
  overflow-y: auto;
  font-family: "DINNextLTArabic", sans-serif;
}

.sidebar {
  padding: 0;
  border-top: 1px solid #dee2e6;
}

.main-sidebar .brand-link {
  border-bottom: 0 !important;
}

/* Sidebar link spacing */
.main-sidebar .nav-sidebar .nav-link {
  margin: 0;
}

.nav-link {
  padding: 0.5rem 0.75rem;
}

/* Icon alignment (FA <i> and inline <svg>) consistent for LTR/RTL */
.main-sidebar .nav-sidebar .nav-link i.nav-icon,
.main-sidebar .nav-sidebar .nav-link svg {
  position: relative;
  top: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  min-width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 8px;
  color: #0775af;
  background-color: #0775af1a;
  border-radius: 5px;
  padding: 10px 6px;
}

[dir="rtl"] .main-sidebar .nav-sidebar .nav-link i.nav-icon,
[dir="rtl"] .main-sidebar .nav-sidebar .nav-link svg {
  margin-right: 0;
  margin-left: 8px;
}

/* Add border-top to nav headers except the first one */
.main-sidebar .nav-sidebar .nav-header:not(:first-child) {
  border-top: 1px solid #e6eaed;
  margin-top: 20px;
  padding: 10px 0px !important;
}

.nav-header {
  color: #212b36;
  font-size: 16px;
}

/* Make only first character uppercase for nav headers */
.main-sidebar .nav-sidebar .nav-header {
  text-transform: lowercase;
}

.main-sidebar .nav-sidebar .nav-header::first-letter {
  text-transform: uppercase;
}

/* Simple and professional submenu styling */
.main-sidebar .nav-sidebar .nav-treeview {
  background-color: transparent;
  margin: 0;
  margin-left: 20px;
  padding: 10px 12px 10px 8px;
  border-left: 1px solid #e6eaed;
  border-right: 1px solid #e6eaed;
  border-bottom: 1px solid #e6eaed;
  border-top: none;
  border-radius: 0 0 10px 10px;
}

/* RTL: place the separator on the right side */
[dir="rtl"] .main-sidebar .nav-sidebar .nav-treeview {
  margin-left: 0;
  margin-right: 0;
  padding: 10px 8px 10px 12px;
  border-left: 1px solid #e6eaed;
  border-right: 1px solid #e6eaed;
  border-bottom: 1px solid #e6eaed;
  border-top: none;
  border-radius: 0 0 10px 10px;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-item {
  margin: 0;
  position: relative;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link {
  padding: 0.5rem 0.75rem;
  margin: 10px 0;
  color: #586687;
  font-size: 13px;
  font-weight: 400;
  transition: all 0.2s ease;
  position: relative;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover {
  background-color: #f8fafc;
  color: #374151;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active {
  background-color: #0775af !important;
  color: #fff !important;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link i {
  margin-top: 2px;
  width: 14px;
  text-align: center;
  font-size: 12px;
}

.main-sidebar
  .nav-sidebar
  .nav-treeview
  .nav-link.router-link-exact-active::before,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active::before {
  background-color: #fff;
}

/* Custom navigation padding */
.custom-nav-padding {
  padding: 12px;
}

/* Keep link labels' original casing; header capitalization handled separately */

/* Keep POS in all uppercase */
.main-sidebar .nav-sidebar .pos-link p {
  text-transform: uppercase !important;
}

/* Active menu styles */
.main-sidebar .nav-sidebar .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-link.active {
  background-color: #0775af !important;
  color: #fff !important;
  border-radius: 10px;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active {
  background-color: #0775af !important;
  color: #fff !important;
  border-radius: 10px;
  padding: 6px 16px;
}

/* Ensure all links (parents and children) have the same height */
.main-sidebar .nav-sidebar .nav-link,
.main-sidebar .nav-sidebar .nav-treeview .nav-link {
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: #586687;
}

/* Ensure icon/text remain visible on active */
.main-sidebar .nav-sidebar .nav-link.router-link-exact-active i,
.main-sidebar .nav-sidebar .nav-link.active i,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active i,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active i,
.main-sidebar .nav-sidebar .nav-link.router-link-exact-active p,
.main-sidebar .nav-sidebar .nav-link.active p,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active p,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active p {
  color: #ffffff !important;
}

/* Active icon background override */
.main-sidebar .nav-sidebar .nav-link.router-link-exact-active i.nav-icon,
.main-sidebar .nav-sidebar .nav-link.active i.nav-icon,
.main-sidebar
  .nav-sidebar
  .nav-treeview
  .nav-link.router-link-exact-active
  i.nav-icon,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active i.nav-icon {
  background-color: #ffffff !important;
  color: #0775af !important;
}

/* LTR chevron: point right when collapsed, rotate -90deg when open */
html[dir="ltr"] .main-sidebar .nav-sidebar .fa-angle-left {
  display: inline-block;
  transform: scaleX(-1);
  transition: transform 0.2s ease;
}

html[dir="ltr"] .main-sidebar .nav-sidebar .menu-open > a .fa-angle-left,
html[dir="ltr"] .main-sidebar .nav-sidebar .menu-is-opening > a .fa-angle-left {
  transform: scaleX(-1) rotate(-90deg);
}

/* Lower the submenu arrow to align with text */
[dir="rtl"] .main-sidebar .nav-sidebar .nav-link .fa-angle-left {
  left: 0px;
}

/* Chevron toggle icon */
.main-sidebar .nav-sidebar .toggle-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 11px;
  font-weight: 400;
  color: #0775af;
  font-family: "Font Awesome 7 Free", "Font Awesome 6 Free",
    "Font Awesome 5 Free", "FontAwesome", sans-serif;
}

/* RTL override */
:dir(rtl) .main-sidebar .nav-sidebar .toggle-icon {
  right: auto;
  left: 10px;
}

.main-sidebar .nav-sidebar .nav-item.has-treeview > a .toggle-icon::before {
  /* chevron-up when collapsed */
  content: "\f077";
  font-family: "Font Awesome 7 Free", "Font Awesome 6 Free",
    "Font Awesome 5 Free", "FontAwesome", sans-serif;
  font-weight: 900;
}

.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  > a
  .toggle-icon::before,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  > a
  .toggle-icon::before {
  /* chevron-down when expanded */
  content: "\f078";
  font-family: "Font Awesome 7 Free", "Font Awesome 6 Free",
    "Font Awesome 5 Free", "FontAwesome", sans-serif;
  font-weight: 900;
}

/* Make toggle icon white on active/open headers */
.main-sidebar .nav-sidebar .menu-open > a .toggle-icon,
.main-sidebar .nav-sidebar .menu-is-opening > a .toggle-icon {
  color: #fff !important;
}

/* Remove all borders for nav items */
.main-sidebar .nav-sidebar .nav-item,
.main-sidebar .nav-sidebar .nav-link,
.main-sidebar .nav-sidebar .nav-treeview .nav-item,
.main-sidebar .nav-sidebar .nav-treeview .nav-link {
  border: none !important;
  border-left: none !important;
  border-right: none !important;
  border-top: none !important;
  border-bottom: none !important;
}

/* Professional hover styles for all sidebar elements */
.main-sidebar .nav-sidebar .nav-link:hover {
  background-color: #f8fafc !important;
  color: #374151 !important;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform: translateX(2px);
}

/* RTL: Mirror hover transform */
[dir="rtl"] .main-sidebar .nav-sidebar .nav-link:hover {
  transform: translateX(-2px);
}

.main-sidebar .nav-sidebar .nav-link:hover i {
  color: #0775af !important;
  transform: scale(1.1);
  transition: all 0.3s ease;
}

.main-sidebar .nav-sidebar .nav-link:hover p {
  color: #374151 !important;
  font-weight: 500;
}

/* Professional hover for submenu items */
.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover {
  background-color: #fff !important;
  color: #0775af !important;
  transform: translateX(4px);
  transition: all 0.3s ease;
}

/* RTL: Mirror submenu hover transform */
[dir="rtl"] .main-sidebar .nav-sidebar .nav-treeview .nav-link:hover {
  transform: translateX(-4px);
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover i {
  color: #0775af !important;
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover::before {
  background-color: #0775af !important;
  transform: scale(1.2);
  transition: all 0.3s ease;
}

/* Professional hover for nav headers */
.main-sidebar .nav-sidebar .nav-header:hover {
  background-color: #f8fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #0775af;
  font-weight: 600;
}

/* Professional hover for brand link */
.main-sidebar .brand-link:hover {
  background-color: #f8fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Opened menu styles */
.main-sidebar .nav-sidebar .menu-open,
.main-sidebar .nav-sidebar .menu-is-opening {
  background-color: transparent;
  border-radius: 0;
  border: none !important;
  border-left: none !important;
  border-right: none !important;
}

.main-sidebar .nav-sidebar .menu-open > a,
.main-sidebar .nav-sidebar .menu-is-opening > a {
  background-color: #0775af !important;
  color: #fff !important;
  border-radius: 10px;
  border: none !important;
  border-left: none !important;
  border-right: none !important;
}

/* Active menu header styling */
.main-sidebar .nav-sidebar .menu-open > a i,
.main-sidebar .nav-sidebar .menu-is-opening > a i {
  color: #fff !important;
}

.main-sidebar .nav-sidebar .menu-open > a p,
.main-sidebar .nav-sidebar .menu-is-opening > a p {
  color: #fff !important;
}

/* Keep parent <a> content (icon + title + +/-) aligned on one line */
.main-sidebar .nav-sidebar .nav-item.has-treeview > a.nav-link {
  display: flex;
  align-items: baseline;
}

.main-sidebar .nav-sidebar .nav-item.has-treeview > a.nav-link > p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  margin: 0;
  white-space: nowrap;
}

/* Ensure alignment persists when parent is active/open */
.main-sidebar .nav-sidebar .nav-item.has-treeview.menu-open > a.nav-link,
.main-sidebar .nav-sidebar .nav-item.has-treeview.menu-is-opening > a.nav-link {
  display: flex;
  align-items: center;
}

/* Keep parent header in default active style (blue bg, white content) */

/* Active child under an open parent: light bg + blue content (override any defaults) */
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  ul.nav-treeview
  a.nav-link.active,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  ul.nav-treeview
  a.nav-link.active,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview
  ul.nav-treeview
  a.nav-link.router-link-exact-active {
  background-color: #d7dbdd59 !important;
  color: #0775af !important;
}

.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  ul.nav-treeview
  a.nav-link.active
  i,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  ul.nav-treeview
  a.nav-link.active
  svg,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  ul.nav-treeview
  a.nav-link.active
  p,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-open
  ul.nav-treeview
  a.nav-link.active
  .toggle-icon,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  ul.nav-treeview
  a.nav-link.active
  i,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  ul.nav-treeview
  a.nav-link.active
  svg,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  ul.nav-treeview
  a.nav-link.active
  p,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview.menu-is-opening
  ul.nav-treeview
  a.nav-link.active
  .toggle-icon,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview
  ul.nav-treeview
  a.nav-link.router-link-exact-active
  i,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview
  ul.nav-treeview
  a.nav-link.router-link-exact-active
  svg,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview
  ul.nav-treeview
  a.nav-link.router-link-exact-active
  p,
.main-sidebar
  .nav-sidebar
  .nav-item.has-treeview
  ul.nav-treeview
  a.nav-link.router-link-exact-active
  .toggle-icon {
  color: #0775af !important;
}

.nav-sidebar .nav-header {
  margin: 0;
}

[dir="ltr"] .main-sidebar .nav-sidebar .nav-link .fa-angle-left {
  right: 0px;
}

/* RTL Sidebar positioning and transitions */
[dir="rtl"] .main-sidebar {
  transition: transform 0.3s ease-in-out, margin-right 0.3s ease-in-out;
}

[dir="rtl"] .main-sidebar .nav-sidebar .nav-link {
  transition: all 0.3s ease;
}

[dir="rtl"] .main-sidebar .nav-sidebar .nav-treeview .nav-link {
  transition: all 0.3s ease;
}

/* Inline add button styling */
.add-btn-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: #0775af;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 12px;
}

[dir="rtl"] .add-btn-inline {
  margin-left: 0;
  margin-right: 8px;
}

.add-btn-inline:hover {
  background-color: #2a8bc7;
  transform: scale(1.1);
  color: #fff;
}

.add-btn-inline i {
  font-size: 10px;
  line-height: 1;
}

.nav-link p {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
