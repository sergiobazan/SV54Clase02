<template>
    
    <footer class="footer-component">
    
    <section>
    <a  href="">venta@library.com</a> 
    <a  href="">981622558</a>
    <a  href="">Los Manzanos 398</a>
    </section>
    

    </footer>
  
</template>


  
  
<script>
  
  export default {
      name:"footer"
      
  }
  
</script>
  
  
<style scoped>
footer{
    background-color: black;
    padding: 3rem;
    color:white;
    margin-top: 380px;
    
    
    
}

footer section{
    /* float:right; */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
} 


footer a{
    transition: color 0.3s ease;
    color:white;
    text-decoration: none;


}

footer a:hover{
    color:cornflowerblue
}


  
</style>