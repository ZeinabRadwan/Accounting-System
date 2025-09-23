<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar">
    <!-- Brand Logo -->
    <router-link :to="{ name: 'home' }" class="brand-link">
      <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName" class="lg-logo light-logo" />
      <img v-if="appInfo" :src="appInfo.logo" :alt="appInfo.companyName" class="lg-logo dark-logo" />
      <img v-if="appInfo" :src="appInfo.smallLogo" alt="appInfo.companyName" class="sm-logo" />
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar custom-sidebar">
      <!-- Sidebar Menu -->
      <nav class="custom-nav-padding">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <!-- لوحة التحكم -->
          <li class="nav-header text-bold">
            {{ $t('Dashboard') }}
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">
              <i class="nav-icon fas fa-home" />
              <p>{{ $t('Dashboard') }}</p>
            </router-link>
          </li>
          
          <!-- المبيعات -->
          <li class="nav-header text-bold">{{ $t('Sales') }}</li>
          <li v-if="$can('quotation-list') ||
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
            $can('invoice-return-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('quotations') || menuOpen('invoices') || menuOpen('invoiceReturns') || menuOpen('pos') || menuOpen('clients') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-shopping-bag" />
              <p>
                {{ $t('Sales') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('quotations') ||
              menuOpen('invoices') ||
              menuOpen('invoiceReturns') ||
              menuOpen('pos') ||
              menuOpen('clients')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('quotation-list') ||
                $can('quotation-create') ||
                $can('quotation-view') ||
                $can('quotation-edit') ||
                $can('quotation-delete') ||
                $can('quotation-to-invoice')
                " class="nav-item">
                <router-link :to="{ name: 'quotations.index' }" class="nav-link">
                  <i class="fas fa-th-list nav-icon" />
                  <p>{{ $t('Quotations List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('invoice-list') ||
                $can('invoice-create') ||
                $can('invoice-view') ||
                $can('invoice-edit') ||
                $can('invoice-delete')
                " class="nav-item">
                <router-link :to="{ name: 'invoices.index' }" class="nav-link">
                  <i class="fas fa-file-invoice nav-icon" />
                  <p>{{ $t('Invoices List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('invoice-list') ||
                $can('invoice-create') ||
                $can('invoice-view') ||
                $can('invoice-edit') ||
                $can('invoice-delete')
                " class="nav-item">
                <router-link :to="{ name: 'pos.create' }" class="nav-link pos-link">
                  <i class="fas fa-cash-register nav-icon"></i>
                  <p>{{ $t('POS') }}</p>
                </router-link>
              </li>
              <li v-if="$can('invoice-return-list') ||
                $can('invoice-return-create') ||
                $can('invoice-return-view') ||
                $can('invoice-return-edit') ||
                $can('invoice-return-delete')
                " class="nav-item">
                <router-link :to="{ name: 'invoiceReturns.index' }" class="nav-link">
                  <i class="fas fa-undo-alt nav-icon" />
                  <p>{{ isSaudiArabia ? $t('Credit notes') : $t('Returns List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('client-list') ||
                $can('client-create') ||
                $can('client-view') ||
                $can('client-edit') ||
                $can('client-delete')
                " class="nav-item">
                <router-link :to="{ name: 'clients.index' }" class="nav-link">
                  <i class="fas fa-users nav-icon" />
                  <p>{{ $t('Clients') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- المشتريات -->
          <li class="nav-header text-bold">{{ $t('Purchases') }}</li>
          <li v-if="$can('purchase-list') ||
            $can('purchase-create') ||
            $can('purchase-edit') ||
            $can('purchase-view') ||
            $can('purchase-delete') ||
            $can('purchase-return-list') ||
            $can('purchase-return-create') ||
            $can('purchase-return-edit') ||
            $can('purchase-return-view') ||
            $can('purchase-return-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('purchases') || menuOpen('purchaseReturns') || menuOpen('purchase-order') || menuOpen('suppliers') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-shopping-basket" />
              <p>
                {{ $t('Purchases') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('purchases') || menuOpen('purchaseReturns') || menuOpen('purchase-order') || menuOpen('suppliers')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('purchase-order-list') ||
                $can('purchase-order-create') ||
                $can('purchase-order-edit') ||
                $can('purchase-order-view') ||
                $can('purchase-order-delete')
                " class="nav-item">
                <router-link :to="{ name: 'purchase-order.index' }" class="nav-link">
                  <i class="fas fa-file-invoice nav-icon" />
                  <p>{{ $t('Purchase Orders') }}</p>
                </router-link>
              </li>
              <li v-if="$can('purchase-list') ||
                $can('purchase-create') ||
                $can('purchase-edit') ||
                $can('purchase-view') ||
                $can('purchase-delete')
                " class="nav-item">
                <router-link :to="{ name: 'purchases.index' }" class="nav-link">
                  <i class="fas fa-truck-loading nav-icon" />
                  <p>{{ $t('Purchases List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('purchase-return-list') ||
                $can('purchase-return-create') ||
                $can('purchase-return-edit') ||
                $can('purchase-return-view') ||
                $can('purchase-return-delete')
                " class="nav-item">
                <router-link :to="{ name: 'purchaseReturns.index' }" class="nav-link">
                  <i class="fas fa-undo-alt nav-icon" />
                  <p>{{ isSaudiArabia ? $t('Debit notes') : $t('Returns List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('supplier-list') ||
                $can('supplier-create') ||
                $can('supplier-view') ||
                $can('supplier-edit') ||
                $can('supplier-delete')
                " class="nav-item">
                <router-link :to="{ name: 'suppliers.index' }" class="nav-link">
                  <i class="fas fa-people-carry nav-icon" />
                  <p>{{ $t('Suppliers') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- الموظفين -->
          <li class="nav-header text-bold">{{ $t('Employees') }}</li>
          <li v-if="$can('department-list') ||
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
            " class="nav-item has-treeview"
            :class="menuOpen('departments') || menuOpen('employees') || menuOpen('increments') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users-cog" />
              <p>
                {{ $t('Employees') }}
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('departments') ||
              menuOpen('employees') ||
              menuOpen('increments')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('department-list') ||
                $can('department-create') ||
                $can('department-edit') ||
                $can('department-delete')
                " class="nav-item">
                <router-link :to="{ name: 'departments.index' }" class="nav-link">
                  <i class="fas fa-server nav-icon" />
                  <p>{{ $t('Departments') }}</p>
                </router-link>
              </li>
              <li v-if="$can('employee-list') ||
                $can('employee-create') ||
                $can('employee-edit') ||
                $can('employee-delete') ||
                $can('employee-view')
                " class="nav-item">
                <router-link :to="{ name: 'employees.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Employees List') }}</p>
                </router-link>
              </li>
              <li v-if="$can('increment-list') ||
                $can('increment-create') ||
                $can('increment-edit') ||
                $can('increment-view') ||
                $can('increment-delete')
                " class="nav-item">
                <router-link :to="{ name: 'increments.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Increments') }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- المحاسبة -->
          <li class="nav-header text-bold">{{ $t('ACCOUNTING') }}</li>
          <li v-if="$can('account-list') ||
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
            $can('transaction-history')
            " class="nav-item has-treeview"
            :class="menuOpen('accounts') || menuOpen('balances') || menuOpen('transferBalances') || menuOpen('transactions') || menuOpen('chart-of-accounts') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book" />
              <p>
                {{ $t('Cashbook & Accounts') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('accounts') ||
              menuOpen('balances') ||
              menuOpen('transferBalances') ||
              menuOpen('transactions') ||
              menuOpen('chart-of-accounts')
              ? 'display: block'
              : 'display: none'
              ">

              <li v-if="$can('chart-of-account-list') ||
                $can('chart-of-account-create') ||
                $can('chart-of-account-edit') ||
                $can('chart-of-account-view') ||
                $can('chart-of-account-delete')
                " class="nav-item">
                <router-link :to="{ name: 'chart-of-accounts.index' }" class="nav-link">
                  <i class="fas fa-chart-line nav-icon" />
                  <p>{{ $t('Chart of Accounts') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-list') ||
                $can('account-create') ||
                $can('account-view') ||
                $can('account-edit') ||
                $can('account-delete')
                " class="nav-item">
                <router-link :to="{ name: 'accounts.index' }" class="nav-link">
                  <i class="fas fa-university nav-icon" />
                  <p>{{ $t('Bank Accounts') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-balance-list') ||
                $can('account-balance-create') ||
                $can('account-balance-edit') ||
                $can('account-balance-delete')
                " class="nav-item">
                <router-link :to="{ name: 'balances.index' }" class="nav-link">
                  <i class="fas fa-sliders-h nav-icon" />
                  <p>{{ $t('Balance Adjustments') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-transfer-balance-list') ||
                $can('account-transfer-balance-create') ||
                $can('account-transfer-balance-edit') ||
                $can('account-transfer-balance-view') ||
                $can('account-transfer-balance-delete')
                " class="nav-item">
                <router-link :to="{ name: 'transferBalances.index' }" class="nav-link">
                  <i class="fas fa-exchange-alt nav-icon" />
                  <p>{{ $t('Balance Transfers') }}</p>
                </router-link>
              </li>
              <li v-if="$can('transaction-history')" class="nav-item">
                <router-link :to="{ name: 'transactions.index' }" class="nav-link">
                  <i class="fas fa-history nav-icon" />
                  <p>{{ $t('Transaction History') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- القيود المحاسبية -->
          <li v-if="$can('journal-entry-list') ||
            $can('journal-entry-create') ||
            $can('journal-entry-view') ||
            $can('journal-entry-edit')
            " class="nav-item has-treeview"
            :class="menuOpen('journal-entries')
              ? 'menu-is-opening menu-open'
              : ''
              ">
            <a href="#" class="nav-link">
              <i class="fas fa-book nav-icon" />
              <p>
                {{ $t('Journal Entries') }}
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('journal-entries')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('journal-entry-list')" class="nav-item">
                <router-link :to="{ name: 'journal-entries.index' }" class="nav-link">
                  <i class="fas fa-list nav-icon" />
                  <p>{{ $t('All Entries') }}</p>
                </router-link>
              </li>
              <li v-if="$can('journal-entry-create')" class="nav-item">
                <router-link :to="{ name: 'journal-entries.create' }" class="nav-link">
                  <i class="fas fa-plus nav-icon" />
                  <p>{{ $t('New Entry') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          
          <!-- المصروفات -->
          <li v-if="$can('expense-category-list') ||
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
            $can('expense-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('expenseCats') || menuOpen('expenseSubCats') || menuOpen('expenses') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-calculator" />
              <p>
                {{ $t('Expenses') }}
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('expenseCats') ||
              menuOpen('expenseSubCats') ||
              menuOpen('expenses')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('expense-category-list') ||
                $can('expense-category-create') ||
                $can('expense-category-edit') ||
                $can('expense-category-delete')
                " class="nav-item">
                <router-link :to="{ name: 'expenseCats.index' }" class="nav-link">
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t('Categories') }}</p>
                </router-link>
              </li>
              <li v-if="$can('expense-sub-category-list') ||
                $can('expense-sub-category-create') ||
                $can('expense-sub-category-edit') ||
                $can('expense-sub-category-delete')
                " class="nav-item">
                <router-link :to="{ name: 'expenseSubCats.index' }" class="nav-link">
                  <i class="fas fa-code-branch nav-icon" />
                  <p>{{ $t('Sub Categories') }}</p>
                </router-link>
              </li>
              <li v-if="$can('expense-list')" class="nav-item">
                <router-link :to="{ name: 'expenses.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Expenses List') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          
          <li v-if="$can('non-purchase-payment-list') ||
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
            " class="nav-item has-treeview"
            :class="menuOpen('nonInvoicePayments') || menuOpen('invoicePayments') || menuOpen('purchasePayments') || menuOpen('nonPurchasePayments') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-receipt" />
              <p>
                {{ $t('Payments') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('nonInvoicePayments') ||
              menuOpen('invoicePayments') ||
              menuOpen('purchasePayments') ||
              menuOpen('nonPurchasePayments')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('non-invoice-payment-list') ||
                $can('non-invoice-payment-create') ||
                $can('non-invoice-payment-edit') ||
                $can('non-invoice-payment-view') ||
                $can('non-invoice-payment-delete') ||
                $can('invoice-payment-list') ||
                $can('invoice-payment-create') ||
                $can('invoice-payment-view') ||
                $can('invoice-payment-edit') ||
                $can('invoice-payment-delete')
                " class="nav-item has-treeview"
                :class="menuOpen('nonInvoicePayments') || menuOpen('invoicePayments') ? 'menu-is-opening menu-open' : ''">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-users" />
                  <p>
                    {{ $t('Clients') }}
                    <i class="fas fa-angle-left right" />
                  </p>
                </a>
                <ul class="nav nav-treeview" :style="menuOpen('nonInvoicePayments') ||
                  menuOpen('invoicePayments')
                  ">
                  <li v-if="$can('invoice-payment-list') ||
                    $can('invoice-payment-create') ||
                    $can('invoice-payment-view') ||
                    $can('invoice-payment-edit') ||
                    $can('invoice-payment-delete')
                    " class="nav-item">
                    <router-link :to="{ name: 'invoicePayments.index' }" class="nav-link">
                      <i class="fas fa-file-invoice nav-icon" />
                      <p>{{ $t('Invoice') }}</p>
                    </router-link>
                  </li>
                  <li v-if="$can('non-invoice-payment-list') ||
                    $can('non-invoice-payment-create') ||
                    $can('non-invoice-payment-edit') ||
                    $can('non-invoice-payment-view') ||
                    $can('non-invoice-payment-delete')
                    " class="nav-item">
                    <router-link :to="{ name: 'nonInvoicePayments.index' }" class="nav-link">
                      <i class="fas fa-file-alt nav-icon" />
                      <p>{{ $t('Non Invoice') }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>

              <li v-if="$can('purchase-payment-list') ||
                $can('purchase-payment-create') ||
                $can('purchase-payment-edit') ||
                $can('purchase-payment-view') ||
                $can('purchase-payment-delete') ||
                $can('non-purchase-payment-list') ||
                $can('non-purchase-payment-create') ||
                $can('non-purchase-payment-edit') ||
                $can('non-purchase-payment-view') ||
                $can('non-purchase-payment-delete')
                " class="nav-item has-treeview"
                :class="menuOpen('nonPurchasePayments') || menuOpen('purchasePayments') ? 'menu-is-opening menu-open' : ''">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-people-carry" />
                  <p>
                    {{ $t('Suppliers') }}
                    <i class="fas fa-angle-left right" />
                  </p>
                </a>
                <ul class="nav nav-treeview" :style="menuOpen('nonPurchasePayments') ||
                  menuOpen('purchasePayments')
                  ? 'display: block'
                  : 'display: none'
                  ">
                  <li v-if="$can('purchase-payment-list') ||
                    $can('purchase-payment-create') ||
                    $can('purchase-payment-edit') ||
                    $can('purchase-payment-view') ||
                    $can('purchase-payment-delete')
                    " class="nav-item">
                    <router-link :to="{ name: 'purchasePayments.index' }" class="nav-link">
                      <i class="fas fa-plane-departure nav-icon" />
                      <p>{{ $t('Purchase') }}</p>
                    </router-link>
                  </li>
                  <li v-if="$can('non-purchase-payment-list') ||
                    $can('non-purchase-payment-create') ||
                    $can('non-purchase-payment-edit') ||
                    $can('non-purchase-payment-view') ||
                    $can('non-purchase-payment-delete')
                    " class="nav-item">
                    <router-link :to="{ name: 'nonPurchasePayments.index' }" class="nav-link">
                      <i class="fas fa-truck-pickup nav-icon" />
                      <p>{{ $t('Non Purchase') }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li v-if="$can('loan-authority-list') ||
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
            $can('loan-payment-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('authorities') || menuOpen('loans') || menuOpen('loanPayments') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-piggy-bank" />
              <p>
                {{ $t('Loan Management') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('authorities') ||
              menuOpen('loans') ||
              menuOpen('loanPayments')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('loan-authority-list') ||
                $can('loan-authority-create') ||
                $can('loan-authority-view') ||
                $can('loan-authority-edit') ||
                $can('loan-authority-delete')
                " class="nav-item">
                <router-link :to="{ name: 'authorities.index' }" class="nav-link">
                  <i class="fas fa-building nav-icon" />
                  <p>{{ $t('Authorities') }}</p>
                </router-link>
              </li>
              <li v-if="$can('loan-list') ||
                $can('loan-create') ||
                $can('loan-view') ||
                $can('loan-edit') ||
                $can('loan-delete')
                " class="nav-item">
                <router-link :to="{ name: 'loans.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Loans') }}</p>
                </router-link>
              </li>
              <li v-if="$can('loan-payment-list') ||
                $can('loan-payment-create') ||
                $can('loan-payment-view') ||
                $can('loan-payment-edit') ||
                $can('loan-payment-delete')
                " class="nav-item">
                <router-link :to="{ name: 'loanPayments.index' }" class="nav-link">
                  <i class="fas fa-receipt nav-icon" />
                  <p>{{ $t('Payments') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li v-if="$can('asset-type-list') ||
            $can('asset-type-create') ||
            $can('asset-type-edit') ||
            $can('asset-type-delete') ||
            $can('asset-list') ||
            $can('asset-create') ||
            $can('asset-view') ||
            $can('asset-edit') ||
            $can('asset-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('assetTypes') || menuOpen('assets') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-couch" />
              <p>
                {{ $t('Asset Management') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('assetTypes') || menuOpen('assets')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('asset-type-list') ||
                $can('asset-type-create') ||
                $can('asset-type-edit') ||
                $can('asset-type-delete')
                " class="nav-item">
                <router-link :to="{ name: 'assetTypes.index' }" class="nav-link">
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t('Types') }}</p>
                </router-link>
              </li>
              <li v-if="$can('asset-list') ||
                $can('asset-create') ||
                $can('asset-view') ||
                $can('asset-edit') ||
                $can('asset-delete')
                " class="nav-item">
                <router-link :to="{ name: 'assets.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Assets') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li v-if="$can('payroll-list') ||
            $can('payroll-create') ||
            $can('payroll-view') ||
            $can('payroll-edit') ||
            $can('payroll-delete')
            " class="nav-item">
            <router-link :to="{ name: 'payroll.index' }" class="nav-link">
              <i class="nav-icon fas fa-clipboard-list" />
              <p>{{ $t('Payroll') }}</p>
            </router-link>
          </li> 

          <li class="nav-header text-bold">
            {{ $t('INVENTORY') }}
          </li>
          <li v-if="$can('product-category-create') ||
            $can('product-category-edit') ||
            $can('product-category-delete') ||
            $can('product-sub-category-create') ||
            $can('product-sub-category-edit') ||
            $can('product-sub-category-delete') ||
            $can('product-create') ||
            $can('product-view') ||
            $can('product-edit') ||
            $can('product-delete') ||
            $can('print-barcode')
            " class="nav-item has-treeview"
            :class="menuOpen('productCats') || menuOpen('productSubCats') || menuOpen('products') || menuOpen('barcode') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-boxes" />
              <p>
                {{ $t('Items') }}
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('productCats') ||
              menuOpen('productSubCats') ||
              menuOpen('products') ||
              menuOpen('barcode')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('product-category-create') ||
                $can('product-category-edit') ||
                $can('product-category-delete')
                " class="nav-item">
                <router-link :to="{ name: 'productCats.index' }" class="nav-link">
                  <i class="fas fa-tags nav-icon" />
                  <p>{{ $t('Categories') }}</p>
                </router-link>
              </li>
              <li v-if="$can('product-sub-category-create') ||
                $can('product-sub-category-edit') ||
                $can('product-sub-category-delete')
                " class="nav-item">
                <router-link :to="{ name: 'productSubCats.index' }" class="nav-link">
                  <i class="fas fa-code-branch nav-icon" />
                  <p>{{ $t('Sub Categories') }}</p>
                </router-link>
              </li>
              <li v-if="$can('product-create') ||
                $can('product-view') ||
                $can('product-edit') ||
                $can('product-delete')
                " class="nav-item">
                <router-link :to="{ name: 'products.index' }" class="nav-link">
                  <i class="fas fa-list-ul nav-icon" />
                  <p>{{ $t('Item List') }}</p>
                </router-link>
              </li>

              <li v-if="$can('print-barcode')" class="nav-item">
                <router-link :to="{ name: 'barcode.print' }" class="nav-link">
                  <i class="fas fa-barcode nav-icon" />
                  <p>{{ $t('Barcode') }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li v-if="$can('inventory') ||
            $can('adjustment-create') ||
            $can('adjustment-view') ||
            $can('adjustment-edit') ||
            $can('adjustment-delete')
            " class="nav-item has-treeview"
            :class="menuOpen('inventory') || menuOpen('adjustments') ? 'menu-is-opening menu-open' : ''">
            <a href="" class="nav-link">
              <i class="nav-icon fas fa-warehouse" />
              <p>
                {{ $t('Inventory') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('inventory') || menuOpen('adjustments')
              ? 'display: block'
              : 'display: none'
              ">
              <li v-if="$can('inventory-history')" class="nav-item">
                <router-link :to="{ name: 'inventory.index' }" class="nav-link">
                  <i class="fas fa-pallet nav-icon" />
                  <p>{{ $t('View Inventory') }}</p>
                </router-link>
              </li>
              <li v-if="$can('adjustment-create') ||
                $can('adjustment-view') ||
                $can('adjustment-edit') ||
                $can('adjustment-delete')
                " class="nav-item">
                <router-link :to="{ name: 'adjustments.index' }" class="nav-link">
                  <i class="fas fa-sliders-h nav-icon" />
                  <p>{{ $t('Inventory Adjustment') }}</p>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header text-bold">{{ $t('REPORTS') }}</li>
          <li v-if="$can('account-statement') ||
            $can('balance-sheet') ||
            $can('vat-report') ||
            $can('today-profit') ||
            $can('summary-report') ||
            $can('profit-loss') ||
            $can('expense-report') ||
            $can('item-report') ||
            $can('inventory-report') ||
            $can('sales-by-user-report') ||
            $can('collection-by-user-report')
            " class="nav-item has-treeview"
            :class="menuOpen('reports') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-bar" />
              <p>
                {{ $t('Reports') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('reports') ? 'display: block' : 'display: none'">
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link :to="{ name: 'reports.accountStatement' }" class="nav-link">
                  <p>{{ $t('Account Statement') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link :to="{ name: 'reports.groupAccountStatement' }" class="nav-link">
                  <p>{{ $t('Group Account Statement') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link :to="{ name: 'reports.invoiceSummary' }" class="nav-link">
                  <p>{{ $t('Invoice Summary') }}</p>
                </router-link>
              </li>
              <li v-if="$can('account-statement')" class="nav-item">
                <router-link :to="{ name: 'reports.purchaseSummary' }" class="nav-link">
                  <p>{{ $t('Purchase Summary') }}</p>
                </router-link>
              </li>
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link :to="{ name: 'reports.balanceSheet' }" class="nav-link">
                  <p>{{ $t('Balance Sheet') }}</p>
                </router-link>
              </li>
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link :to="{ name: 'reports.trialBalance' }" class="nav-link">
                  <p>{{ $t('Trial Balance') }}</p>
                </router-link>
              </li>
              <li v-if="$can('vat-report')" class="nav-item">
                <router-link :to="{ name: 'reports.vatReport' }" class="nav-link">
                  <p>{{ $t('VAT Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('today-profit')" class="nav-item">
                <router-link :to="{ name: 'reports.todayReport' }" class="nav-link">
                  <p>{{ $t("Today Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('summary-report')" class="nav-item">
                <router-link :to="{ name: 'reports.summary' }" class="nav-link">
                  <p>{{ $t('Summary Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('profit-loss')" class="nav-item">
                <router-link :to="{ name: 'reports.profitLoss' }" class="nav-link">
                  <p>{{ $t('Profit/Loss Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('expense-report')" class="nav-item">
                <router-link :to="{ name: 'reports.expenses' }" class="nav-link">
                  <p>{{ $t('Expense Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('item-report')" class="nav-item">
                <router-link :to="{ name: 'reports.items' }" class="nav-link">
                  <p>{{ $t('Item Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('inventory-report')" class="nav-item">
                <router-link :to="{ name: 'reports.inventory' }" class="nav-link">
                  <p>{{ $t('Inventory Report') }}</p>
                </router-link>
              </li>
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link :to="{ name: 'reports.supplierPayableReport' }" class="nav-link">
                  <p>{{ $t("Supplier Payable Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('balance-sheet')" class="nav-item">
                <router-link :to="{ name: 'reports.clientReceivableReport' }" class="nav-link">
                  <p>{{ $t("Client Receivable Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('sales-by-user-report')" class="nav-item">
                <router-link :to="{ name: 'reports.salesByUserReport' }" class="nav-link">
                  <p>{{ $t("Sales By User Report") }}</p>
                </router-link>
              </li>
              <li v-if="$can('collection-by-user-report')" class="nav-item">
                <router-link :to="{ name: 'reports.collectionByUserReport' }" class="nav-link">
                  <p>{{ $t("Collection By User Report") }}</p>
                </router-link>
              </li>
            </ul>
          </li>



          <li class="nav-header text-bold">{{ $t('Others') }}</li>
          <li v-if="$can('role-permissions') ||
            $can('units') ||
            $can('currencies') ||
            $can('general-settings')
            " class="nav-item">
            <router-link :to="{ name: 'setup.index' }" class="nav-link">
              <i class="nav-icon fas fa-cogs" />
              <p>{{ $t('Setup') }}</p>
            </router-link>
          </li>
          <li v-if="$can('print-templates')" class="nav-item">
            <router-link :to="{ name: 'print-templates' }" class="nav-link">
              <i class="nav-icon fas fa-print" />
              <p>{{ $t('Print Templates') }}</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'activity.log' }" class="nav-link">
              <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
              {{ $t('Activity log') }}
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user" />
              <p>
                {{ $t('Account') }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'settings.billing' }" class="nav-link">
                  <i class="nav-icon  fas fa-money-check-alt"></i>
                  {{ $t('Billing') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'settings.profile' }" class="nav-link">
                  <i class="nav-icon  fas fa-user-circle"></i>
                  {{ $t('Profile') }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link admin-logout" href="#" @click.prevent="logout">
                  <i class="nav-icon fas fa-power-off" />
                  {{ $t('Logout') }}
                </a>
              </li>
            </ul>
          </li>
          <li v-if="$can('domain-management')" class="nav-item has-treeview" :class="menuOpen('domain') || menuOpen('domains') || menuOpen('domain-requests')
            ? 'menu-is-opening menu-open'
            : ''
            ">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-database" />
              <p>
                {{ $t('Domain') }}
                <i class="fas fa-angle-left right" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('domain') || menuOpen('domains') || menuOpen('domain-requests')
              ? 'display: block'
              : 'display: none'
              ">
              <li class="nav-item">
                <router-link :to="{ name: 'domains.index' }" class="nav-link">
                  <i class="nav-icon fas fa-server" />
                  <p>{{ $t('Domain Management') }}</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'domain-requests.index' }" class="nav-link">
                  <i class="nav-icon fas fa-file-import" />
                  <p>{{ $t('Domain Request') }}</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview" :class="menuOpen('backup') ? 'menu-is-opening menu-open' : ''">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user" />
              <p>
                {{ $t("Resources") }}
                <i class="right fas fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview" :style="menuOpen('backup') ? 'display: block': 'display: none'">
              <li v-if="$can('database-backup')" class="nav-item">
                <router-link :to="{ name: 'backup' }" class="nav-link">
                  <i class="nav-icon fas fa-download" />
                  <p>{{ $t('Database Backup') }}</p>
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
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    appName: window.config.appName,
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
  },
  mounted() {
    // Initialize AdminLTE 3.2.0 Treeview functionality
    $('[data-widget="treeview"]').Treeview('init');
  },
  methods: {
    menuOpen(routeName) {
      if (this.$route.name) {
        return this.$route.name.indexOf(routeName) > -1 ? true : false
      }
      return false
    },

    async logout() {
      // Log out the user.
      await this.$store.dispatch('auth/logout')
      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style>
.main-sidebar {
  max-height: 100vh;
  overflow-y: auto;
  font-family: 'DINNextLTArabic', sans-serif;
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
  padding: 0.5rem 0.25rem;
}

/* Add border-top to nav headers except the first one */
.main-sidebar .nav-sidebar .nav-header:not(:first-child) {
  border-top: 1px solid #E6EAED;
  margin-top: 20px;
  padding: 10px 0px !important;
}

.nav-header {
  color: #212B36;
  font-size: 16px;
}

/* Make only first character uppercase for all nav headers */
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
  padding: 0;
  margin-left: 20px;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-item {
  margin: 0;
  position: relative;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link {
  padding: 8px;
  margin: 10px 0;
  color: #6B7280;
  font-size: 13px;
  font-weight: 400;
  transition: all 0.2s ease;
  position: relative;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover {
  background-color: #F8FAFC;
  color: #374151;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active {
  background-color: #33a0d9 !important;
  color: #fff !important;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link i {
  margin-right: 10px;
  width: 14px;
  text-align: center;
  font-size: 12px;
}

/* Add a small dot indicator for submenu items */
.main-sidebar .nav-sidebar .nav-treeview .nav-link::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 3px;
  background-color: #D1D5DB;
  border-radius: 50%;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active::before,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active::before {
  background-color: #fff;
}

/* Custom navigation padding */
.custom-nav-padding {
  padding: 24px;
}

/* Make only first character uppercase for all nav links except POS */
.main-sidebar .nav-sidebar .nav-link p,
.main-sidebar .nav-sidebar .nav-treeview .nav-link p {
  text-transform: lowercase;
}

.main-sidebar .nav-sidebar .nav-link p::first-letter,
.main-sidebar .nav-sidebar .nav-treeview .nav-link p::first-letter {
  text-transform: uppercase;
}

/* Keep POS in all uppercase */
.main-sidebar .nav-sidebar .pos-link p {
  text-transform: uppercase !important;
}

/* Active menu styles */
.main-sidebar .nav-sidebar .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-link.active {
  background-color: #33a0d9 !important;
  color: #fff !important;
  border-radius: 10px;
  padding: 10px;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link.router-link-exact-active,
.main-sidebar .nav-sidebar .nav-treeview .nav-link.active {
  background-color: #33a0d9 !important;
  color: #fff !important;
  border-radius: 6px;
  padding: 4px 16px;
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
  color: #fff !important;
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
  background-color: #F8FAFC !important;
  color: #374151 !important;
  border-radius: 8px;
  transition: all 0.3s ease;
  transform: translateX(2px);
}

.main-sidebar .nav-sidebar .nav-link:hover i {
  color: #33a0d9 !important;
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
  color: #33a0d9 !important;
  transform: translateX(4px);
  transition: all 0.3s ease;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover i {
  color: #33a0d9 !important;
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.main-sidebar .nav-sidebar .nav-treeview .nav-link:hover::before {
  background-color: #33a0d9 !important;
  transform: scale(1.2);
  transition: all 0.3s ease;
}

/* Professional hover for nav headers */
.main-sidebar .nav-sidebar .nav-header:hover {
  background-color: #F8FAFC;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #33a0d9;
  font-weight: 600;
}

/* Professional hover for brand link */
.main-sidebar .brand-link:hover {
  background-color: #F8FAFC;
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
  background-color: #33a0d9 !important;
  color: #fff !important;
  border-radius: 8px;
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

.nav-sidebar .nav-header {
  margin: 0;
}
</style>