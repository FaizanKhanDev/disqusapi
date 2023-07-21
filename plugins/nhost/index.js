import { NhostClient } from '@nhost/vue'
export default (context, inject) => {
    const nhost = new NhostClient({
        subdomain: '', // add Your nhost SubDomain
        region: ''// add Your nhost region
    })

    // Inject the nhost instance into Vue components as $nhost
    inject('nhost', nhost)
}



