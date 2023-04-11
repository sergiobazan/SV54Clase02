<template>
    <form>
        <!-- Inputs van aqui -->
        
        <!-- calendario -->
        <label for="date">Date added:</label>
        <Calendar id="date" v-model="date" dateFormat="dd/mm/yy" />
        
        <!--Numero cantidad-->
        <label for="inputnumber">Cuantity:</label>
        <InputNumber id="inputnumber" v-model="value2" inputId="withoutgrouping" :useGrouping="false" />

        <!--Area de texto-->
        <label for="description">Description:</label>
        <Textarea v-model="value" rows="5" cols="30" />
      <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Digital Version </label>
      </div>
      <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center">
          <RadioButton v-model="Status" inputId="Status1" name="status" value="Active" />
          <label for="ingredient1" class="ml-2">Active</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="Status" inputId="Status2" name="status" value="Suspended" />
          <label for="ingredient2" class="ml-2">Suspended</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="Status" inputId="Status3" name="status" value="Inactive" />
          <label for="ingredient3" class="ml-2">Inactive</label>
        </div>
        <Button label="Save" />
        <Button label="Cancel" />
      </div>




        
    
    </form>
</template>

<script>
    export default {
        name: 'Form'
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