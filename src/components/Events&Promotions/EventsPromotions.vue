<template>
     <div class="mb-5" >
        <div class="mb-2 mt-5">
            <div class="col-md-12 text-center mb-4">
                <h1>Events & Promotions</h1>
            </div>
            <EndingSoonPromotions />
            <ExclusivePromotions />
            <InHousePromotions />
            <div class="container mb-5">
                <hr/>
            </div>
            <EventsHappeningSoon />
            <MoreEvents />
        </div>
    </div>
</template>

<script>
import EndingSoonPromotions from './EndingSoonPromotions';
import ExclusivePromotions from './ExclusivePromotions';
import InHousePromotions from './InHousePromotions';
import EventsHappeningSoon from './EventsHappeningSoon';
import MoreEvents from './MoreEvents';

export default {
    name: 'EventsPromotions',
    components: {
        EndingSoonPromotions,
        ExclusivePromotions,
        InHousePromotions,
        EventsHappeningSoon,
        MoreEvents
    }
}
</script>

<style scoped>
h1 
{
    text-transform: capitalize;
    color: #26140E;
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 30px;
}

</style>
