<template>
  <div>
    <!-- trigger modal button -->
    <mdb-btn rounded color="default" @click.native="danger = true">launch modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <!-- Central Modal Medium Success -->
    <mdb-modal :show="danger" @close="danger = false" danger>
      <!--Header-->
      <mdb-modal-header>
        <mdb-modal-title>Quiz Completed</mdb-modal-title>
      </mdb-modal-header>
      <!--Body-->
      <mdb-modal-body>
        <mdb-row>
          <mdb-col col="3" class="text-center"><mdb-icon icon="frown" size="4x"/></mdb-col>
          <mdb-col col="9">
           <h1>{{subheader}}</h1>
           <h2>{{header}}</h2>
           
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer center>
         <mdb-btn rounded outline="danger" @click.native="backToQuiz()"><mdb-icon icon="angle-double-left" />Try Again </mdb-btn>
        <mdb-btn outline="danger" @click.native="danger = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>
<script>
  import { mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbRow, mdbCol, mdbModalFooter } from 'mdbvue';
  export default {
    name:'ModalStylesPage',
    components: {
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbRow,
      mdbCol,
      mdbModalFooter,
    },
    data() {
      return {
        danger: true,
        subheader: 'Try Harder!!',
        header: 'Better luck Next Time'
      };
    },
     methods: {
          backToQuiz: function(){
              this.$router.push({ name: 'Quiz' })
          }
      }
  }
</script>