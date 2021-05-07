<template>
  <div>
    <!-- trigger modal button -->
    <mdb-btn rounded color="default" @click.native="success = true">launch modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <!-- Central Modal Medium Success -->
    <mdb-modal :show="success" @close="success = false" success>
      <!--Header-->
      <mdb-modal-header>
        <mdb-modal-title>Quiz Completed</mdb-modal-title>
      </mdb-modal-header>
      <!--Body-->
      <mdb-modal-body  class="text-center">
        <mdb-icon icon="check" size="4x" class="mb-3 animated rotateIn"/>
          <h1>{{header}}</h1>
          <h2>{{subheader}}</h2>

      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer center>
        <mdb-btn rounded outline="success" @click.native="backToQuiz()"><mdb-icon icon="angle-double-left" />Play Again </mdb-btn>
        <mdb-btn outline="success" @click.native="success = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
  import { mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbIcon, mdbModalFooter } from 'mdbvue';
  export default {
    name: 'Result',
    components: {
      mdbModalFooter,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalBody, 
      mdbIcon
    },
    data() {
      return {
        avatar: true,
        success: true,
        header: 'Congratulation!!',
    subheader: 'Quiz Completed!!',

      }      
    },
    methods: {
          backToQuiz: function(){
              this.$router.push({ name: 'Quiz' })
          }
      }
  }
</script>