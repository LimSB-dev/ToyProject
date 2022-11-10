<template>
  <div>
    <HitForm/>
    
    <HitItem/>

  </div>
</template>

<script>
import HitForm from '@/components/HitForm'
import HitItem from '@/components/HitItem'

export default {
  name: 'NumberBallView',
  components: {
    HitForm,
    HitItem,
  },
  data() {
    return {
      inputNumber: null,
    }
  },
  methods: {
    hit() {
      console.log(this.inputNumber)

    }
  },
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>