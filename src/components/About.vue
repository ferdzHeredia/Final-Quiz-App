<template>
  <mdb-container>
    <!-- <h2 class="h1-responsive font-weight-bold text-center my-5">Recent posts</h2> -->
    <!-- <p class="text-center w-responsive mx-auto mb-5">PSE: The Primary School Examinations (PSE) is a final school leaving examination.
       The Contents Included in the national primary school curriculum. Following competencies are assisted: Math, English, Language,
        Social Studies and Science.</p> -->
    <mdb-row>
      <mdb-col lg="5">
        <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
          <img class="img-fluid" src="ubit.jpg" alt="Sample image" 
           v-animateOnScroll="{animation: 'fadeInLeft', delay: 300}"/>
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>PSE</strong>
        </h3>
        <p>PSE: The Primary School Examinations (PSE) is a final school leaving examination.
       The Contents Included in the national primary school curriculum. Following competencies are assisted: Math, English, Language,
        Social Studies and Science.</p>

         <p>I was appointed under the supervision of Dr. Kieran Ryan to do my internship at the University of Belize. The main objective of this Placement was to continue the development of a PSE Quiz application with the intent that Primary Level students can 
        use it as a practical quiz to prepare for their actual PSE examination.</p>
         <mdb-btn @click="goToTeam()" color="indigo" size="md" class="waves-light ">Team</mdb-btn>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col lg="7">
        <a class="pink-text">
          <h6 class="font-weight-bold mb-3">
          </h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
        </h3>
          
      </mdb-col>
    </mdb-row>
   
  </mdb-container>
</template>
<script>
  
  import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbView, mdbMask, animateOnScroll} from 'mdbvue';
  export default {
    name: 'About',
    components: {
       // mdbFooter,
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbBtn,
        mdbView,
        mdbMask,
       // mdbIcon,
     
      //mdbCard,
    //   mdbCardBody,
     
    },
     directives: {
      animateOnScroll
    },

    methods:{
      goToTeam: function(){
        this.$router.push({ name: 'Team' })
      }

    }
  }
</script>