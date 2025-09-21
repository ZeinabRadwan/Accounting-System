<template>
  <div v-if="topClients && topClients.length > 0" class="card">
    <div class="card-header">
      <h3 class="card-title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {{ $t('Top 5 Clients') }} ({{ year }})
      </h3>
    </div>
    <div class="card-body">
      <div class="clients-container">
        <!-- Top 3 Clients Podium -->
        <div class="podium-container">
          <div v-if="topClients[1] && topClients[1].client" class="podium-item podium-second">
            <div class="podium-card" v-tooltip="getClientTooltip(topClients[1])">
              <div class="podium-rank">2</div>
              <div class="podium-avatar">
                <img :src="topClients[1].client.image || '/images/default-avatar.jpeg'"
                  class="avatar-img" alt="Client Avatar" 
                  @error="$event.target.src = '/images/default-avatar.jpeg'" />
                <div class="avatar-ring"></div>
              </div>
              <div class="podium-info">
                <h6 class="client-name">{{ topClients[1].client.name }}</h6>
                <p class="client-company">{{ topClients[1].client.company_name }}</p>
                <div class="client-stats">
                  <span class="revenue">{{ topClients[1].invoice_total | withCurrency }}</span>
                  <span class="sales-count">{{ topClients[1].total_invoice }} {{ $t('Sales') }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="topClients[0] && topClients[0].client" class="podium-item podium-first">
            <div class="podium-card winner-card" v-tooltip="getClientTooltip(topClients[0])">
              <div class="podium-rank winner-rank">1</div>
              <div class="podium-avatar winner-avatar">
                <img :src="topClients[0].client.image || '/images/default-avatar.jpeg'"
                  class="avatar-img" alt="Client Avatar" 
                  @error="$event.target.src = '/images/default-avatar.jpeg'" />
                <div class="avatar-ring winner-ring"></div>
                <div class="crown-icon">👑</div>
              </div>
              <div class="podium-info">
                <h6 class="client-name winner-name">{{ topClients[0].client.name }}</h6>
                <p class="client-company">{{ topClients[0].client.company_name }}</p>
                <div class="client-stats winner-stats">
                  <span class="revenue">{{ topClients[0].invoice_total | withCurrency }}</span>
                  <span class="sales-count">{{ topClients[0].total_invoice }} {{ $t('Sales') }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="topClients[2] && topClients[2].client" class="podium-item podium-third">
            <div class="podium-card" v-tooltip="getClientTooltip(topClients[2])">
              <div class="podium-rank">3</div>
              <div class="podium-avatar">
                <img :src="topClients[2].client.image || '/images/default-avatar.jpeg'"
                  class="avatar-img" alt="Client Avatar" 
                  @error="$event.target.src = '/images/default-avatar.jpeg'" />
                <div class="avatar-ring"></div>
              </div>
              <div class="podium-info">
                <h6 class="client-name">{{ topClients[2].client.name }}</h6>
                <p class="client-company">{{ topClients[2].client.company_name }}</p>
                <div class="client-stats">
                  <span class="revenue">{{ topClients[2].invoice_total | withCurrency }}</span>
                  <span class="sales-count">{{ topClients[2].total_invoice }} {{ $t('Sales') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Clients List -->
        <div v-if="topClients.length > 3" class="additional-clients">
          <div class="clients-list-header">
            <h6 class="list-title">{{ $t('Other Top Clients') }}</h6>
          </div>
          <div class="clients-list">
            <div v-for="(client, index) in topClients.slice(3)" :key="index + 4" 
                 class="client-item" v-tooltip="getClientTooltip(client)">
              <div class="client-rank">{{ index + 4 }}</div>
              <div class="client-avatar">
                <img :src="client.client.image || '/images/default-avatar.jpeg'"
                  class="avatar-img-small" alt="Client Avatar" 
                  @error="$event.target.src = '/images/default-avatar.jpeg'" />
              </div>
              <div class="client-details">
                <h6 class="client-name-small">{{ client.client.name }}</h6>
                <p class="client-company-small">{{ client.client.company_name }}</p>
              </div>
              <div class="client-metrics">
                <span class="revenue-small">{{ client.invoice_total | withCurrency }}</span>
                <span class="sales-small">{{ client.total_invoice }} {{ $t('Sales') }}</span>
              </div>
            </div>
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

    // Generate professional tooltip for clients
    getClientTooltip(client) {
      if (!client || !client.client) return ''
      
      const clientData = client.client
      const revenue = client.invoice_total
      const salesCount = client.total_invoice
      
      return `
        <div style="padding: 16px; text-align: left; max-width: 280px;">
          <div style="display: flex; align-items: center; margin-bottom: 12px;">
            <img src="${clientData.image || '/images/default-avatar.jpeg'}" 
                 style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px; border: 2px solid #33A0D9;" 
                 onerror="this.src='/images/default-avatar.jpeg'" />
            <div>
              <div style="font-weight: 700; color: #1b3c71; font-size: 16px; margin-bottom: 4px;">${clientData.name}</div>
              <div style="color: #64748b; font-size: 14px;">${clientData.company_name || 'No Company'}</div>
            </div>
          </div>
          <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 12px; border-radius: 8px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="color: #64748b; font-size: 13px; font-weight: 600;">Total Revenue:</span>
              <span style="color: #1b3c71; font-size: 16px; font-weight: 700;">${revenue}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: #64748b; font-size: 13px; font-weight: 600;">Total Sales:</span>
              <span style="color: #33A0D9; font-size: 14px; font-weight: 600;">${salesCount} transactions</span>
            </div>
          </div>
          <div style="text-align: center; color: #64748b; font-size: 12px; font-style: italic;">
            Click to view detailed client information
          </div>
        </div>
      `
    },

  },
}
</script>

<style scoped>
/* Card styling to match dashboard */
.card {
  margin-top: 30px;
  margin-bottom: 0;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 0 0 20px 20px;
  position: relative;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #33A0D9, transparent);
  opacity: 0.3;
}

/* SVG Icon styling in card header */
.card-header h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1.25rem;
  color: #023033;
  margin: 0;
}

.card-header h3 svg {
  width: 44px;
  height: 44px;
  background: #33A0D91A;
  color: #33A0D9;
  border-radius: 10px;
  padding: 8px;
  margin-right: 12px;
  font-weight: bold;
  box-sizing: border-box;
}

/* Professional Clients Container */
.clients-container {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Podium Container */
.podium-container {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 16px;
  margin-bottom: 24px;
  min-height: 240px;
}

.podium-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Podium Cards */
.podium-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  min-width: 150px;
}

.podium-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.winner-card {
  background: linear-gradient(135deg, #2ab930 0%, #239a26 100%);
  color: white;
  transform: scale(1.1);
  z-index: 2;
  box-shadow: 0 8px 32px rgba(42, 185, 48, 0.3);
}

.winner-card:hover {
  transform: scale(1.15) translateY(-8px);
}

/* Podium Ranks */
.podium-rank {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background: #1B3C71;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(27, 60, 113, 0.3);
}

.winner-rank {
  background: linear-gradient(135deg, #f6fef4 0%, #e8f5e8 100%);
  color: #2ab930;
  width: 40px;
  height: 40px;
  font-size: 16px;
  box-shadow: 0 6px 12px rgba(42, 185, 48, 0.3);
  border: 2px solid #2ab930;
}

/* Avatar Styling */
.podium-avatar {
  position: relative;
  margin: 0 18px 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 36px);
}

.avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.avatar-ring {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 3px solid #33A0D9;
  border-radius: 50%;
  opacity: 0.6;
  z-index: 1;
}

.winner-ring {
  border-color: #2ab930;
  opacity: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.crown-icon {
  position: absolute;
  top: -8px;
  right: -3px;
  font-size: 20px;
  animation: bounce 2s infinite;
  z-index: 3;
  transform: rotate(45deg);
  color: #FFD700;
  filter: drop-shadow(0 2px 4px rgba(42, 185, 48, 0.3));
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
  40% { transform: rotate(45deg) translateY(-10px); }
  60% { transform: rotate(45deg) translateY(-5px); }
}

/* Podium Info */
.podium-info {
  text-align: center;
}

.client-name {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
  color: #1b3c71;
}

.winner-name {
  color: white;
  font-size: 16px;
}

.client-company {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 8px;
  font-style: italic;
}

.winner-card .client-company {
  color: rgba(255, 255, 255, 0.8);
}

.client-stats {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.revenue {
  font-size: 16px;
  font-weight: 700;
  color: #1b3c71;
}

.winner-stats .revenue {
  color: white;
  font-size: 18px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.sales-count {
  font-size: 10px;
  color: #33A0D9;
  font-weight: 600;
  background: rgba(51, 160, 217, 0.1);
  padding: 3px 6px;
  border-radius: 10px;
}

.winner-stats .sales-count {
  background: rgba(246, 254, 244, 0.3);
  color: #f6fef4;
  border: 1px solid rgba(42, 185, 48, 0.5);
}

/* Additional Clients */
.additional-clients {
  margin-top: 30px;
}

.clients-list-header {
  margin-bottom: 16px;
  text-align: center;
}

.list-title {
  color: #1b3c71;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  position: relative;
}

.list-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #2ab930, #f6fef4);
  border-radius: 1px;
}

.clients-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.client-item {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  cursor: pointer;
}

.client-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-color: #33A0D9;
}

.client-rank {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #33A0D9, #2a8bc7);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  margin-right: 16px;
  flex-shrink: 0;
}

.client-avatar {
  margin-right: 12px;
}

.avatar-img-small {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}

.client-details {
  flex: 1;
  margin-right: 16px;
}

.client-name-small {
  font-size: 14px;
  font-weight: 600;
  color: #1b3c71;
  margin: 0 0 2px 0;
}

.client-company-small {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

.client-metrics {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.revenue-small {
  font-size: 14px;
  font-weight: 700;
  color: #1b3c71;
}

.sales-small {
  font-size: 11px;
  color: #33A0D9;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .podium-container {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    min-height: auto;
  }
  
  .podium-item {
    width: 100%;
    max-width: 300px;
  }
  
  .winner-card {
    transform: none;
  }
  
  .winner-card:hover {
    transform: translateY(-4px);
  }
  
  .card-body {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 576px) {
  .podium-card {
    min-width: 120px;
    padding: 12px;
  }
  
  .podium-avatar {
    margin: 0 12px 8px 12px;
    width: calc(100% - 24px);
  }
  
  .avatar-img {
    width: 50px;
    height: 50px;
  }
  
  .client-item {
    padding: 12px;
  }
  
  .card-body {
    padding: 1rem 0.75rem;
  }
  
  .podium-container {
    min-height: 200px;
    gap: 12px;
  }
}
</style>
