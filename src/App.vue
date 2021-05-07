
<template>
<div id = "app" >
    <mdb-container >
    <mdb-row >
      <mdb-col col="sm"><navbar id ="nav"/> 
      <hr class="my-3" /> 
      </mdb-col>  
    </mdb-row>
    <mdb-row >
      <mdb-col       
      col="sm"><router-view/></mdb-col>               
    </mdb-row>
    <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->   
    </mdb-container>
     
</div>
</template>

<script>


import Navbar from '@/components/Navbar';
import { mdbRow, mdbCol, mdbContainer, mdbFooter} from 'mdbvue';

export default {
  // components: { Navbar },

  name: 'App',
   components: {
      mdbFooter,
      Navbar,
      mdbContainer,
      mdbRow,
      mdbCol,
      
       
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

</style>
