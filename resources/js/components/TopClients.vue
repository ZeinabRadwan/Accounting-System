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
              <DefaultImage
                :src="topClients[1].client.image_path ? clientImagePath(topClients[1].client.image_path) : ''"
                type="client"
                size="medium"
                shape="circle"
                :alt="topClients[1].client.name"
                class="circle-img mb-2"
              />
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
              <DefaultImage
                :src="topClients[0].client.image_path ? clientImagePath(topClients[0].client.image_path) : ''"
                type="client"
                size="medium"
                shape="circle"
                :alt="topClients[0].client.name"
                class="circle-img mb-2"
              />
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
              <DefaultImage
                :src="topClients[2].client.image_path ? clientImagePath(topClients[2].client.image_path) : ''"
                type="client"
                size="medium"
                shape="circle"
                :alt="topClients[2].client.name"
                class="circle-img mb-2"
              />
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
                  <DefaultImage
                    :src="topClients[index + 2].client.image_path ? clientImagePath(topClients[index + 2].client.image_path) : ''"
                    type="client"
                    size="small"
                    shape="circle"
                    :alt="topClients[index + 2].client.name"
                    class="circle-img circle-img--small mr-2"
                  />
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
import DefaultImage from './DefaultImage.vue'

export default {
  name: 'TopClients',
  components: {
    DefaultImage,
  },
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
      this.topClients = data
    },

    // get image
    clientImagePath(imageName) {
      return window.location.origin + '/' + imageName
    },
  },
}
</script>
