<template>
    <div class="plants-detail">
        <h1 style="color: white; display:flex; margin-left: 5%;">Cauliflower Details</h1>
      <h4 style="display: flex; color: white; margin-left: 5%">
        Scientific name:
      </h4>
      <h4 style="display: flex; color: white; margin-left: 5%">Variety:</h4>
      <div class="img-container">
        <img src="src/assets/coliflor.jpg" alt="Plant Image" />
        <img src="src/assets/coliflor.jpg" alt="Plant Image" />
      </div>
        <div class="accordion-container">
        <PVAccordion :activeIndex="0">
            <PVAccordionTab header="Land type">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Planting distance between plants">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Ideal depth for planting">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Weather conditions">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </PVAccordionTab>
            <PVAccordionTab header="Fertilization and Fumigation">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </PVAccordionTab>
        </PVAccordion>
            <div class="buttons-container">
  
            </div>
        </div>
    </div>
  </template>
  
  <style>
  .plants-detail {
    max-width: 70%;
    border-radius: 20px;
    background-color: #242424;
  }
  
  .img-container {
    display: flex;
    justify-content: center;
  }
  
  .p-image {
    width: 45%;
    height: 40%;
  }
  
  .accordion-container{
      margin: 5% 5% 0 5%;
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
  
  </style>
  
  <script>
  import Accordion from "primevue/accordion";
  import AccordionTab from "primevue/accordiontab";
  
  export default {
    components: {
      PVAccordion: Accordion,
      PVAccordionTab: AccordionTab,
    },
    data() {
      return {};
    },
  };
  </script>
  