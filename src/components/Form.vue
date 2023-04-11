<template>
    <form>
      <div>
        <h2>Code: </h2>
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
        <Button label="Validate"/>
      </div>
      <div>
        <h2>Name: </h2>
        <pv-inputText placeholder="Product name"/>
      </div>
      <div>
        <h2>Category: </h2>
        <pv-dropdown v-model="selectedCat" :options="categorias" optionLabel="name" placeholder="Category" class="w-full md:w-14rem" />
      </div>
        
        <!-- calendario -->
        <label for="date">Date added:</label>
        <Calendar id="date" v-model="date" dateFormat="dd/mm/yy" />
        
        <!--Numero cantidad-->
        <label for="inputnumber">Cuantity:</label>
        <InputNumber id="inputnumber" v-model="value2" inputId="withoutgrouping" :useGrouping="false" />

        <!--Area de texto-->
        <label for="description">Description:</label>
        <Textarea v-model="value" rows="5" cols="30" />


        
    
    </form>
</template>

<script>
    export default {
        name: 'Form',
      data() {
          return {
            selectedCat: null,
            categorias : [
              { name: 'Food', code: '001' },
              { name: 'Appliances', code: '002' },
              { name: 'Electronics', code: '003' }
            ]
          }
      }
    }

</script>


<style>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
    height: 100%;
}
</style>