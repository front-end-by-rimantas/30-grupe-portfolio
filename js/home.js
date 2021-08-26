// import JS modules

import { featuresList } from "./components/features-list/featuresList.js";
import { pricing } from "./components/pricing/pricing.js";
import { services } from "./components/services/services.js";
import { achievementsFeaturesData } from "./data/achievementsFeaturesData.js";
import { pricingData } from "./data/pricingData.js";
import { servicesData } from "./data/servicesData.js";

// execute JS modules

/* header start */
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
/* achievements end */

/* blog start */
/* blog end */

/* see everything start */
/* see everything end */

/* footer start */
/* footer end */