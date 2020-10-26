<template>
<q-form
  @submit.prevent="onSubmit"
  >
  <div class="row">
    <div class="col-12">
      <h4 class="text-bold">About Me</h4>
    </div>
  </div>
  <div class="row q-gutter-sm">
    <div class="col">
      <q-input
        filled
        v-model="formUser.firstName"
        label="First Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div>
    <div class="col">
      <q-input
        filled
        v-model="formUser.lastName"
        label="Last Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div>
  </div>
  <div class="row q-gutter-sm">
    <div class="col">
      <q-input
        filled
        type="email"
        v-model="formUser.email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    </div>
  </div>


  <div class="row q-gutter-sm">
    <div class="col text-right">
      <q-btn
        type="submit"
        :loading="submitting"
        color="accent"
        label="Save Profile"
        class="q-px-md q-py-xs"
        rounded
        unelevated
        no-caps
      >
        <template v-slot:loading>
          <q-spinner-tail />
        </template>
      </q-btn>
    </div>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, Ref } from '@vue/composition-api'
import { AxiosError } from 'axios'
import { useUser } from '../../../services/user'

export default defineComponent({
  name: 'ComponentDashboardProfilePersonal',
  setup (props, ctx) {
    const submitting: Ref<boolean> = ref(false)
    const formUser: Record<string, string> = reactive({
      firstName: '',
      lastName:'',
      email: ''
    })
    const { user, updateProfile } = useUser()

    onMounted(() => {
      if (user.value) {
        formUser.firstName = user.value.firstName || ''
        formUser.lastName = user.value.lastName || ''
        formUser.email = user.value.email || ''
      }
    })

    /**
     * On Submit
     */
    const onSubmit = async () => {
      submitting.value = true

      //  Update user
      try {
        await updateProfile(formUser)
      } catch (error) {
        const err: AxiosError = (error as AxiosError)
        alert('An error occurred.')
      }
      submitting.value = false
    }

    return {
      formUser,
      onSubmit,
      submitting,
      user
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
