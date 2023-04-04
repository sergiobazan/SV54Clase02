<template>
    
    <footer class="footer-component">
    
        <section>
            <div class="container">
                <a  href="mailto:venta@library.com">venta@library.com</a> 
                <img src="src/img/email.png" /> 
            </div>

            <div class="container">
                <a  href="">981622558</a>
                <img src="src/img/telefono.png" />
            </div>

            <div class="container">
                <a  href="">Los Manzanos 398</a>
                <img src="src/img/map.png" />
            </div>
        
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
    font-size: 1.2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: black;
    padding: 2rem;
    color:white;
    margin-top: 390px;
    
    
    
}

footer section{
    /* float:right; */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
} 

.container img{
    float: left;
    margin-top: -10px;
    margin-right: 10px;
    border-radius: 50%;



}


footer a{
    transition: color 0.3s ease;
    color:white;
    text-decoration: none;


}
img{
    width: 60px;
    height: 60px;
    float: left;
}

footer a:hover{
    color:cornflowerblue
}


  
</style>