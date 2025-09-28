<template>
  <div v-if="topClients && topClients.length > 0" class="card">
    <div class="card-header">
      <h3 class="card-title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {{ $t('Top Clients') }} ({{ year }})
      </h3>
    </div>
    <div class="card-body">
      <div class="clients-list">
        <div v-for="(client, index) in topClients" :key="index" 
             class="client-item" 
             :class="{ 'top-client': index === 0 }"
             v-tooltip="getClientTooltip(client)">
          <div class="client-rank">
            <span class="rank-number">{{ index + 1 }}</span>
            <div v-if="index === 0" class="crown-icon">👑</div>
          </div>
          <div class="client-avatar">
            <img :src="client.client.image || '/images/default-avatar.jpeg'"
              class="avatar-img" alt="Client Avatar" 
              @error="$event.target.src = '/images/default-avatar.jpeg'" />
          </div>
          <div class="client-details">
            <h6 class="client-name">{{ client.client.name }}</h6>
            <p class="client-company">{{ client.client.company_name || 'No Company' }}</p>
          </div>
          <div class="client-metrics">
            <div class="revenue">{{ parseFloat(client.invoice_total).toFixed(2) }} <span class="saudi-riyal">ê</span></div>
            <div class="sales-count">{{ parseFloat(client.total_invoice).toFixed(2) }} {{ $t('Sales') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TopClients',
  data: () => ({
    topClients: '',
    year: new Date().getFullYear(),
  }),

  created() {
    this.getTopClients()
  },
  methods: {
    // get top clients
    async getTopClients() {
      const { data } = await axios.get(
        window.location.origin + '/api/dashboard/top-clients'
      )
      console.log('TopClients data received:', data)
      if (data && data.length > 0) {
        console.log('First client data:', data[0].client)
        console.log('First client image:', data[0].client?.image)
      }
      this.topClients = data
    },

    // Generate branded tooltip for clients
    getClientTooltip(client) {
      if (!client || !client.client) return ''
      
      const clientData = client.client
      const revenue = parseFloat(client.invoice_total).toFixed(2)
      const salesCount = parseFloat(client.total_invoice).toFixed(2)
      
      // Create a branded tooltip matching Sales vs Purchases style
      const clientName = clientData.name
      const companyName = clientData.company_name || this.$t('No Company')
      const revenueText = this.$t('Revenue')
      const salesText = this.$t('Sales')
      
      return `
        <div style="padding: 12px; font-weight: 600; color: #33a0d9; margin-bottom: 8px; border-bottom: 1px solid #e2e8f0;">
          ${clientName}
        </div>
        <div style="margin-bottom: 8px;">
          <div style="color: #64748b; font-size: 12px; margin-bottom: 4px;">${companyName}</div>
          <div style="display: flex; align-items: center; margin-bottom: 6px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: #16a34a; border-radius: 50%; margin-right: 8px;"></span>
            <span style="color: #64748b; font-size: 12px; margin-right: 8px;">${revenueText}:</span>
            <span style="color: #33a0d9; font-weight: 700; font-size: 14px;">${revenue}</span>
          </div>
          <div style="display: flex; align-items: center;">
            <span style="display: inline-block; width: 12px; height: 12px; background: #33A0D9; border-radius: 50%; margin-right: 8px;"></span>
            <span style="color: #64748b; font-size: 12px; margin-right: 8px;">${salesText}:</span>
            <span style="color: #33a0d9; font-weight: 700; font-size: 14px;">${salesCount}</span>
          </div>
        </div>
      `
    },

  },
}
</script>

<style scoped>
/* Card styling */
.card {
  margin-top: 30px;
  margin-bottom: 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.card-header {
  border-bottom: 1px solid #f1f5f9;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-radius: 12px 12px 0 0;
}

.card-body {
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header styling */
.card-header h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 1.125rem;
  color: #1e293b;
  margin: 0;
}

.card-header h3 svg {
  width: 20px;
  height: 20px;
  color: #64748b;
}

/* Clients list */
.clients-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.client-item {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}

.client-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
  transform: translateY(-1px);
}

.client-item.top-client {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-color: #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
}

/* Client rank */
.client-rank {
  position: relative;
  width: 32px;
  height: 32px;
  background: #64748b;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  margin-right: 16px;
  flex-shrink: 0;
}

.client-item.top-client .client-rank {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.crown-icon {
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 12px;
  color: #fbbf24;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

/* Client avatar */
.client-avatar {
  margin-right: 16px;
  flex-shrink: 0;
}

.avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
  transition: border-color 0.2s ease;
}

.client-item:hover .avatar-img {
  border-color: #3b82f6;
}

/* Client details */
.client-details {
  flex: 1;
  margin-right: 16px;
  min-width: 0;
}

.client-name {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.client-company {
  font-size: 12px;
  color: #64748b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Client metrics */
.client-metrics {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
}

.revenue {
  font-size: 14px;
  font-weight: 600;
  color: #16a34a;
  white-space: nowrap;
}

.sales-count {
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
}

.client-item.top-client .revenue {
  color: #16a34a;
  font-weight: 700;
}

.client-item.top-client .sales-count {
  background: #dbeafe;
  color: #3b82f6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-body {
    padding: 1rem;
  }
  
  .client-item {
    padding: 12px;
  }
  
  .client-avatar {
    margin-right: 12px;
  }
  
  .client-details {
    margin-right: 12px;
  }
  
  .avatar-img {
    width: 36px;
    height: 36px;
  }
  
  .client-rank {
    width: 28px;
    height: 28px;
    font-size: 12px;
    margin-right: 12px;
  }
}

@media (max-width: 576px) {
  .card-header {
    padding: 1rem 1rem 0.75rem 1rem;
  }
  
  .card-header h3 {
    font-size: 1rem;
  }
  
  .client-item {
    padding: 10px;
  }
  
  .client-name {
    font-size: 13px;
  }
  
  .client-company {
    font-size: 11px;
  }
  
  .revenue {
    font-size: 13px;
  }
  
  .sales-count {
    font-size: 10px;
  }
}

/* Custom branded tooltip styling */
.tooltip-vue .tooltip-vue-inner {
  background: rgba(255, 255, 255, 0.95) !important;
  color: #33a0d9 !important;
  border: 2px solid #33A0D9 !important;
  border-radius: 12px !important;
  padding: 0 !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  max-width: 280px !important;
}

.tooltip-vue .tooltip-vue-arrow {
  border-color: #33A0D9 !important;
}
</style>
