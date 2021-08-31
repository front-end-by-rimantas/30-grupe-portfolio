// import JS modules

import { featuresList } from "./components/features-list/featuresList.js";
import { mosaic } from "./components/mosaic/mosaic.js";
import { nav } from "./components/nav/nav.js";
import { pricing } from "./components/pricing/pricing.js";
import { services } from "./components/services/services.js";
import { achievementsFeaturesData } from "./data/achievementsFeaturesData.js";
import { mosaicData } from "./data/mosaicData.js";
import { pricingData } from "./data/pricingData.js";
import { servicesData } from "./data/servicesData.js";

// execute JS modules

/* header start */
nav('header nav');

const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('header nav');
hamburgerDOM.addEventListener('click', () => {
    navDOM.classList.toggle('hidden');
})

/* header end */

/* hero start */
/* hero end */

/* what we do start */
services('#services_block', servicesData);
/* what we do end */

/* stop leaving start */
/* stop leaving end */

/* pricing start */
pricing('#pricing_block', pricingData);
/* pricing end */

/* achievements start */
const achievementsDOM = document.querySelector('#achievements .section-header');
const achievementsFeaturesHTML = featuresList(achievementsFeaturesData);
achievementsDOM.insertAdjacentHTML('afterend', achievementsFeaturesHTML);

mosaic('#mosaic_block', mosaicData);
/* achievements end */

/* blog start */
/* blog end */

/* see everything start */
/* see everything end */

/* footer start */
/* footer end */