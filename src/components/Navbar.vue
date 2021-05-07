<template>

  <mdb-navbar color="blue-gradient color-block-5 " dark>
    <mdb-navbar-brand :to="{ name: 'Home' }" > 
      PSE
    </mdb-navbar-brand>
    <mdb-navbar-toggler>           
      <mdb-navbar-nav center >
        <mdb-nav-item :to="{ name: 'Home' }"><mdb-icon icon="home" />Home</mdb-nav-item>
        <mdb-nav-item :to="{ name: 'Quiz' }"><mdb-icon icon="th-list" />Quiz</mdb-nav-item>
        <mdb-nav-item :to="{ name: 'About' }"><mdb-icon icon="info" />About</mdb-nav-item>
        <!-- <mdb-nav-item :to="{ name: 'Team' }"><mdb-icon icon="users" />Team</mdb-nav-item> -->
          
      </mdb-navbar-nav>
    </mdb-navbar-toggler> 
  </mdb-navbar>
</template>
<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';
  export default {
    name: 'Navbar',
    components: {
     // mdbView,
      //mdbMask,
      mdbIcon,
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      //mdbTooltip,
    
     
    },
     
  }
</script>
<style scoped>
.tooltip { top: 0; }
</style>