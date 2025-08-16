export const TableHelpers = {
    data() {
        return {
            tableColumns: [
                {
                    title: this.$t('name'),
                    type: 'custom-html',
                    key: 'name',
                    isVisible: true,
                    modifier: (value, row) => {
                        // Get current locale from localStorage or default to 'en'
                        const currentLocale = window.localStorage.getItem('app-language') || 'en';
                        
                        // Check if there's a translation for the current locale
                        if (row.translations && row.translations.length > 0) {
                            const translation = row.translations.find(t => t.locale === currentLocale);
                            if (translation && translation.name) {
                                return `<span title="${value} (${currentLocale.toUpperCase()})">${translation.name}</span>`;
                            }
                        }
                        
                        // Fallback to original name
                        return value;
                    }
                },
                {
                    title: this.$t('type'),
                    type: 'custom-html',
                    key: 'type',
                    isVisible: true,
                    modifier: (value) => {
                        if (value === 1) {
                            return `<span class="badge badge-sm badge-pill badge-info">${this.$t('individual')}</span>`;
                        } else if (value === 2) {
                            return `<span class="badge badge-sm badge-pill badge-primary">${this.$t('company')}</span>`;
                        }
                        return `<span class="badge badge-sm badge-pill badge-secondary">${this.$t('unknown')}</span>`;
                    }
                },
                {
                    title: this.$t('emails'),
                    type: 'custom-html',
                    key: 'client_emails',
                    isVisible: true,
                    modifier: (emails) => {
                        if (!emails || emails.length === 0) {
                            return `<span class="badge badge-sm badge-pill badge-secondary">${this.$t('no_emails')}</span>`;
                        }
                        
                        let html = '';
                        const maxDisplay = 3;
                        
                        for (let i = 0; i < emails.length && i < maxDisplay; i++) {
                            const email = emails[i];
                            const badgeClass = email.is_primary ? 'badge-primary' : 'badge-info';
                            const primaryText = email.is_primary ? ` (${this.$t('primary')})` : '';
                            const verifiedIcon = email.is_verified ? ' <i class="fas fa-check-circle text-success"></i>' : '';
                            
                            html += `<span class="badge badge-sm badge-pill ${badgeClass} mr-1" title="${email.email}${primaryText}">
                                ${email.email}${verifiedIcon}
                            </span>`;
                        }
                        
                        // Add count indicator if there are more emails
                        if (emails.length > maxDisplay) {
                            html += `<span class="badge badge-sm badge-pill badge-secondary">+${emails.length - maxDisplay}</span>`;
                        }
                        
                        return html;
                    }
                },
                {
                    title: this.$t('mobiles'),
                    type: 'custom-html',
                    key: 'client_mobiles',
                    isVisible: true,
                    modifier: (mobiles) => {
                        if (!mobiles || mobiles.length === 0) {
                            return `<span class="badge badge-sm badge-pill badge-secondary">${this.$t('no_mobiles')}</span>`;
                        }
                        
                        let html = '';
                        const maxDisplay = 3;
                        
                        for (let i = 0; i < mobiles.length && i < maxDisplay; i++) {
                            const mobile = mobiles[i];
                            const badgeClass = mobile.is_primary ? 'badge-success' : 'badge-info';
                            const primaryText = mobile.is_primary ? ` (${this.$t('primary')})` : '';
                            const verifiedIcon = mobile.is_verified ? ' <i class="fas fa-check-circle text-success"></i>' : '';
                            const fullNumber = `${mobile.country_code} ${mobile.mobile_number}`;
                            
                            html += `<span class="badge badge-sm badge-pill ${badgeClass} mr-1" title="${fullNumber}${primaryText}">
                                ${fullNumber}${verifiedIcon}
                            </span>`;
                        }
                        
                        // Add count indicator if there are more mobiles
                        if (mobiles.length > maxDisplay) {
                            html += `<span class="badge badge-sm badge-pill badge-secondary">+${mobiles.length - maxDisplay}</span>`;
                        }
                        
                        return html;
                    }
                },
                {
                    title: this.$t('cr_number'),
                    type: 'text',
                    key: 'cr_number',
                    isVisible: true,
                },
                {
                    title: this.$t('vat_number'),
                    type: 'text',
                    key: 'vat_number',
                    isVisible: true,
                },
                {
                    title: this.$t('status'),
                    type: 'custom-html',
                    key: 'is_active',
                    isVisible: true,
                    modifier: (value) => {
                        if (value) {
                            return `<span class="badge badge-sm badge-pill badge-success">${this.$t('active')}</span>`;
                        } else {
                            return `<span class="badge badge-sm badge-pill badge-danger">${this.$t('inactive')}</span>`;
                        }
                    }
                },
                {
                    title: this.$t('created_at'),
                    type: 'custom-html',
                    key: 'created_at',
                    isVisible: true,
                    modifier: (value) => {
                        console.log('Created at value:', value, typeof value);
                        
                        if (!value) {
                            return `<span class="text-muted">${this.$t('not_provided')}</span>`;
                        }
                        
                        try {
                            let date;
                            
                            // Handle different date formats
                            if (typeof value === 'string') {
                                date = new Date(value);
                            } else if (value instanceof Date) {
                                date = value;
                            } else if (typeof value === 'object' && value.date) {
                                // Handle Carbon date objects
                                date = new Date(value.date);
                            } else {
                                date = new Date(value);
                            }
                            
                            if (isNaN(date.getTime())) {
                                console.warn('Invalid date value:', value);
                                return `<span class="text-muted">${this.$t('invalid_date')}</span>`;
                            }
                            
                            // Format the date nicely
                            const options = { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            };
                            
                            return date.toLocaleDateString(undefined, options);
                        } catch (error) {
                            console.error('Date parsing error:', error, value);
                            return `<span class="text-muted">${this.$t('invalid_date')}</span>`;
                        }
                    }
                }
            ],
            actionObj: {
                title: this.$t('action'),
                type: 'action',
                actions: [
                   
                    {
                        title: this.$t('edit'),
                        icon: 'edit',
                        type: 'edit',
                        modifier: () => {
                            return true;
                        }
                    },
                   
                  
                    {
                        title: this.$t('delete'),
                        icon: 'trash',
                        type: 'delete',
                        modifier: () => {
                            return true;
                        }
                    }
                ]
            }
        }
    },
}