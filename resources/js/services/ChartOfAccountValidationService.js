/**
 * Chart of Account Validation Service
 * Provides validation methods for ensuring proper chart of account assignments
 */
class ChartOfAccountValidationService {
  /**
   * Validate that a client has a chart of account assigned
   */
  static validateClientChartOfAccount(client) {
    if (!client) {
      return {
        isValid: false,
        message: 'Client is required'
      }
    }

    if (!client.chart_of_account_id) {
      return {
        isValid: false,
        message: 'Client must have a Chart of Account assigned for journal entries',
        field: 'chart_of_account_id',
        type: 'error'
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  /**
   * Validate that a supplier has a chart of account assigned
   */
  static validateSupplierChartOfAccount(supplier) {
    if (!supplier) {
      return {
        isValid: false,
        message: 'Supplier is required'
      }
    }

    if (!supplier.chart_of_account_id) {
      return {
        isValid: false,
        message: 'Supplier must have a Chart of Account assigned for journal entries',
        field: 'chart_of_account_id',
        type: 'error'
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  /**
   * Validate that a product has required chart of accounts assigned
   */
  static validateProductChartOfAccounts(product, context = 'both') {
    if (!product) {
      return {
        isValid: false,
        message: 'Product is required'
      }
    }

    const errors = []

    if (context === 'sales' || context === 'both') {
      if (!product.sales_account_id) {
        errors.push({
          field: 'sales_account_id',
          message: this.$t ? this.$t('Product must have a Sales Account assigned for journal entries') : 'Product must have a Sales Account assigned for journal entries'
        })
      }
    }

    if (context === 'purchase' || context === 'both') {
      if (!product.purchase_account_id) {
        errors.push({
          field: 'purchase_account_id',
          message: 'Product must have a Purchase Account assigned for journal entries'
        })
      }
    }

    if (errors.length > 0) {
      return {
        isValid: false,
        message: errors.map(e => e.message).join('; '),
        errors: errors,
        type: 'error'
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  /**
   * Validate that a payment method (account) has a chart of account assigned
   */
  static validatePaymentMethodChartOfAccount(account) {
    if (!account) {
      return {
        isValid: false,
        message: 'Payment method is required'
      }
    }

    if (!account.chart_of_account_id) {
      return {
        isValid: false,
        message: 'Payment method must be connected to a Chart of Account for journal entries',
        field: 'chart_of_account_id',
        type: 'error'
      }
    }

    return {
      isValid: true,
      message: ''
    }
  }

  /**
   * Validate all required chart of accounts for an invoice
   */
  static validateInvoiceChartOfAccounts(invoice) {
    const errors = []

    // Validate client
    const clientValidation = this.validateClientChartOfAccount(invoice.client)
    if (!clientValidation.isValid) {
      errors.push(clientValidation)
    }

    // Validate products
    if (invoice.products && invoice.products.length > 0) {
      invoice.products.forEach((product, index) => {
        const productValidation = this.validateProductChartOfAccounts(product, 'sales')
        if (!productValidation.isValid) {
          errors.push({
            ...productValidation,
            context: `Product ${index + 1}: ${product.name || 'Unknown'}`
          })
        }
      })
    }

    return {
      isValid: errors.length === 0,
      message: errors.length > 0 ? 'Chart of Account validation failed' : '',
      errors: errors
    }
  }

  /**
   * Validate all required chart of accounts for a purchase
   */
  static validatePurchaseChartOfAccounts(purchase) {
    const errors = []

    // Validate supplier
    const supplierValidation = this.validateSupplierChartOfAccount(purchase.supplier)
    if (!supplierValidation.isValid) {
      errors.push(supplierValidation)
    }

    // Validate products
    if (purchase.products && purchase.products.length > 0) {
      purchase.products.forEach((product, index) => {
        const productValidation = this.validateProductChartOfAccounts(product, 'purchase')
        if (!productValidation.isValid) {
          errors.push({
            ...productValidation,
            context: `Product ${index + 1}: ${product.name || 'Unknown'}`
          })
        }
      })
    }

    return {
      isValid: errors.length === 0,
      message: errors.length > 0 ? 'Chart of Account validation failed' : '',
      errors: errors
    }
  }

  /**
   * Get validation summary for display
   */
  static getValidationSummary(validationResult) {
    if (validationResult.isValid) {
      return {
        type: 'success',
        message: 'All Chart of Account validations passed',
        icon: 'check-circle'
      }
    }

    return {
      type: 'error',
      message: validationResult.message,
      icon: 'exclamation-circle',
      details: validationResult.errors
    }
  }

  /**
   * Format validation errors for display
   */
  static formatValidationErrors(errors) {
    if (!errors || errors.length === 0) return []

    return errors.map(error => ({
      message: error.context ? `${error.context}: ${error.message}` : error.message,
      field: error.field,
      type: error.type || 'error'
    }))
  }
}

export default ChartOfAccountValidationService
