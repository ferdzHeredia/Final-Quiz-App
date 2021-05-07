<template>
  <mdb-container >
    <hr class="my-3" />
    <mdb-row>
      <mdb-col lg="5">
        <mdb-view class="rounded" hover>
          <img class="img-fluid" src="mpitub.png" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>University Of Belize</strong>
        </h3>
        <p>The national autonomous, and multi-location institution committed to 
          excellence in higher education, research and service for national development.</p>
          <p>
            The University of Belize Associates’ in Information Technology Program entailed me
    to Complete a 9-week internship program. The overarching goal of this internship
    was to implement my web development and programming skills to a real time project.
          </p>
      </mdb-col>
    </mdb-row>
<hr class="my-3" />
    <!-- First row-->
   

             
  <hr class="my-5" />
  </mdb-container> 
</template>
<script>
  import {mdbContainer, mdbRow, mdbCol, animateOnScroll} from 'mdbvue';
  export default {
    name: 'Home',
    components: {  
      mdbContainer,
      mdbRow,
      mdbCol, 
    },
    directives: {
      animateOnScroll
    }
  }
</script>