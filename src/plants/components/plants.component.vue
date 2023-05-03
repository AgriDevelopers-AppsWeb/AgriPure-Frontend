<template>
    <div class="plants-view">
        <div class="header-container">
            <h2 style="color: white">Good morning User</h2>
            <span class="p-input-icon-right">
        <i class="pi pi-search" :style="iconStyle" />
        <PvInputText
                v-model="value1"
                type="text"
                placeholder="Search for plants"
                :style="inputStyle"
                class="custom-input"
        />
      </span>
        </div>
        <h2 style="display: flex; color: white; margin-left: 5%">Your plants:</h2>
        <div class="cards-container">
            <div class="row" v-for="(row, rowIndex) in groupedPlants" :key="'row-' + rowIndex">
                <plants-card-component v-for="plant in row" :key="plant.id" :plantData="plant" />
            </div>
        </div>
        <plants-details-component ref="detailsComponent" />
    </div>
</template>

<style>
.header-container {
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.plants-view {
    max-width: 70%;
    border-radius: 20px;
    background-color: #242424;
}

.cards-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 50px 50px 50px;
}

.row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
.custom-input {
    width: 400px;
    border-radius: 20px !important;
    height: 40px;
}
.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
    margin: auto;
}
</style>

<script>
import InputText from "primevue/inputtext";
import plantsCardComponent from "@/plants/components/plants-card.component.vue";
import "primeicons/primeicons.css";
import {PlantsApiService} from "@/plants/services/plants-api.service";
const plantsApiService = new PlantsApiService();
export default {
    components: {
        plantsCardComponent,
        PvInputText: InputText,
    },
    data() {
        return {
            iconStyle: {
                color: "white",
            },
            inputStyle: {
                backgroundColor: "#373737",
            },
            groupedPlants:[],
        };
    },
    async created() {
        const response = await plantsApiService.getAll();
        this.plants = response.data;
        this.groupedPlants = this.chunkArray(this.plants, 3);
    },
    methods: {
        chunkArray(array, chunkSize) {
            const result = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                result.push(array.slice(i, i + chunkSize));
            }
            return result;
        },
       
    },
};
</script>



