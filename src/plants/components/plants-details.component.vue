<template>
    <div class="plants-detail">
        <h1 style="color: white; display:flex; margin-left: 5%;">{{ plantData.name }} Details</h1>
      <h4 style="display: flex; color: white; margin-left: 5%">
        Scientific name: {{ plantData.scientifistname }}
      </h4>
      <h4 style="display: flex; color: white; margin-left: 5%">Variety:{{ plantData.variety }}</h4>
      <div class="img-container">
        <img :src="plantData.image" alt="Plant Image" />
        <img :src="plantData.image2" alt="Plant Image" />
      </div>
        <div class="accordion-container">
        <PVAccordion :activeIndex="0">
            <PVAccordionTab header="Land type">
                <p>
                    {{ plantData.infolandType }}
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Planting distance between plants">
                <p>
                    {{ plantData.infoDistanceBetween }}
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Ideal depth for planting">
                <p>
                    {{ plantData.infoIdealDepth }}
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Weather conditions">
                <p>
                    {{ plantData.infoWeatherConditions }}
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Fertilization and Fumigation">
                <p>
                    {{ plantData.infoFertFumig }}
                </p>
            </PVAccordionTab>
        </PVAccordion>
            <div class="buttons-container">
                <PVButton label="To return" @click="$emit('backButtonClick')" />
            </div>
        </div>
    </div>
  </template>
  
  <style>
  .plants-detail {
    border-radius: 20px;
    background-color: #242424;
  }
  
  .img-container {
    display: flex;
    justify-content: center;
  }
  
  .img-container img {
    width: 45%;
    height: 40%;
      border-radius: 20px;
  }

  .accordion-container{
      margin: 5% 5% 0 5%;
      justify-content: center;
  }
  .img-container img:not(:first-child) {
      margin-left: 1rem;
  }

  .accordion-container .p-accordion .p-accordion-header .p-accordion-header-link {
      background-color:  #242424;
      color: white;
  }
  
  .accordion-container .p-accordion .p-accordion-content {
      background-color: #242424;
      color: white;
  }
  
  .accordion-container .p-accordion:hover .p-accordion-header .p-accordion-header-link {
      background-color: #242424 !important;
      color: white;
  }
  
  .accordion-container .p-accordion:focus .p-accordion-header .p-accordion-header-link {
      background-color: #242424 !important;
      color: white;
  }
  .accordion-container .p-accordion .p-accordion-tab:not(.p-accordion-tab-active) .p-accordion-header-link:focus {
      background-color: #242424 !important;
      color: white;
  }

  .buttons-container {
      margin-top: 2rem;
      justify-content: center;
      margin-bottom: 1rem;
      text-align: center;
  }
  
  </style>
  
  <script>
  import Accordion from "primevue/accordion";
  import AccordionTab from "primevue/accordiontab";
  import Button from "primevue/button";
  export default {
      props: {
          plantData: {
              type: Object,
              required: true,
          }
      },
    components: {
      PVAccordion: Accordion,
      PVAccordionTab: AccordionTab,
        PVButton: Button,
    },
    data() {
      return {};
    },
  };
  </script>