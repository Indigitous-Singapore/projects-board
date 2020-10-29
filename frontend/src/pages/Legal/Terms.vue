<template>
<q-page class="container">

  <DashboardHeader
    title="Website Terms of Use"
    />

  <h4>1. Terms</h4>

  <p>By accessing this Website, accessible from {{ config.appUrl }}, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

  <h4>2. Use License</h4>

  <p>Permission is granted to temporarily download one copy of the materials on {{ config.organisation }}'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

  <ul>
      <li>modify or copy the materials;</li>
      <li>use the materials for any commercial purpose or for any public display;</li>
      <li>attempt to reverse engineer any software contained on {{ config.organisation }}'s Website;</li>
      <li>remove any copyright or other proprietary notations from the materials; or</li>
      <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
  </ul>

  <p>This will let {{ config.organisation }} to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>

  <h4>3. Disclaimer</h4>

  <p>All the materials on {{ config.organisation }}’s Website are provided "as is". {{ config.organisation }} makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, {{ config.organisation }} does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

  <h4>4. Limitations</h4>

  <p>{{ config.organisation }} or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on {{ config.organisation }}’s Website, even if {{ config.organisation }} or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

  <h4>5. Revisions and Errata</h4>

  <p>The materials appearing on {{ config.organisation }}’s Website may include technical, typographical, or photographic errors. {{ config.organisation }} will not promise that any of the materials in this Website are accurate, complete, or current. {{ config.organisation }} may change the materials contained on its Website at any time without notice. {{ config.organisation }} does not make any commitment to update the materials.</p>

  <h4>6. Links</h4>

  <p>{{ config.organisation }} has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by {{ config.organisation }} of the site. The use of any linked website is at the user’s own risk.</p>

  <h4>7. Site Terms of Use Modifications</h4>

  <p>{{ config.organisation }} may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

  <h4>8. Your Privacy</h4>

  <p>Please read our Privacy Policy.</p>

  <h4>9. Governing Law</h4>

  <p>Any claim related to {{ config.organisation }}'s Website shall be governed by the laws of sg without regards to its conflict of law provisions.</p>
</q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DashboardHeader from 'components/Structure/DashboardHeader.vue'
import config from '../../config/config'

export default defineComponent({
  name: 'LegalTerms',
  components: {
    DashboardHeader,
  },
  setup() {
    return {
      config
    }
  }
})
</script>
