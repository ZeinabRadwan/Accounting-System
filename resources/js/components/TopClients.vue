<template>
  <div v-if="topClients && topClients.length > 0" class="card">
    <div class="card-header">
      <h3 class="card-title">
        {{ $t('Top 5 Clients') }} ({{ year }})
      </h3>
    </div>
    <div class="card-body row">
      <div v-if="topClients[1] && topClients[1].client" class="col-sm-4">
        <div class="leaderboard-card">
          <div class="leaderboard-card__top text-center">
            <h5 class="text-center">
              {{ topClients[1].invoice_total | withCurrency }}
            </h5>
            <span class="badge badge-primary">{{ topClients[1].total_invoice }} {{ $t('Sales') }}</span>
          </div>
          <div class="leaderboard-card__body">
            <div class="text-center">
              <img :src="topClients[1].client.image || '/images/default-avatar.jpeg'"
                class="circle-img mb-2" alt="User Img" 
                @error="$event.target.src = '/images/default-avatar.jpeg'" />
              <h6 class="mb-0">{{ topClients[1].client.name }}</h6>
              <p class="text-muted mb-0">
                {{ topClients[1].client.company_name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="topClients[0] && topClients[0].client" class="col-sm-4">
        <div class="leaderboard-card leaderboard-card--first">
          <div class="leaderboard-card__top text-center">
            <h5 class="text-center">
              {{ topClients[0].invoice_total | withCurrency }}
            </h5>
            <span class="badge badge-primary">{{ topClients[0].total_invoice }} {{ $t('Sales') }}</span>
          </div>
          <div class="leaderboard-card__body">
            <div class="text-center">
              <img :src="topClients[0].client.image || '/images/default-avatar.jpeg'"
                class="circle-img mb-2" alt="User Img" 
                @error="$event.target.src = '/images/default-avatar.jpeg'" />
              <h6 class="mb-0">{{ topClients[0].client.name }}</h6>
              <p class="text-muted mb-0">
                {{ topClients[0].client.company_name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="topClients[2] && topClients[2].client" class="col-sm-4">
        <div class="leaderboard-card">
          <div class="leaderboard-card__top text-center">
            <h5 class="text-center">
              {{ topClients[2].invoice_total | withCurrency }}
            </h5>
            <span class="badge badge-primary">{{ topClients[2].total_invoice }} {{ $t('Sales') }}</span>
          </div>
          <div class="leaderboard-card__body">
            <div class="text-center">
              <img :src="topClients[2].client.image || '/images/default-avatar.jpeg'"
                class="circle-img mb-2" alt="User Img" 
                @error="$event.target.src = '/images/default-avatar.jpeg'" />
              <h6 class="mb-0">{{ topClients[2].client.name }}</h6>
              <p class="text-muted mb-0">
                {{ topClients[2].client.company_name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="topClients.length > 2" class="table-responsive">
        <table v-show="topClients.length > 2" class="clients-table table mb-0">
          <tbody>
            <tr v-for="index in 2" :key="index">
              <td>
                <div v-if="topClients[index + 2] && topClients[index + 2].client" class="d-flex align-items-center">
                  <img :src="topClients[index + 2].client.image || '/images/default-avatar.jpeg'"
                    class="circle-img circle-img--small mr-2" loading="lazy" 
                    @error="$event.target.src = '/images/default-avatar.jpeg'" />
                  <div class="user-info__basic">
                    <h6 class="mb-0">
                      {{ topClients[index + 2].client.name }}
                    </h6>
                    <p class="text-muted mb-0">
                      {{ topClients[index + 2].client.company_name }}
                    </p>
                  </div>
                </div>
              </td>
              <td v-if="topClients[index + 2]">
                <div class="d-flex align-items-baseline">
                  {{ topClients[index + 2].total_invoice }}
                  {{ $t('Sales') }}
                </div>
              </td>
              <td v-if="topClients[index + 2]">
                {{ topClients[index + 2].invoice_total | withCurrency }}
              </td>
            </tr>
          </tbody>
        </table>
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

  },
}
</script>
