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

        
        <label for="date">Date added:</label>
        <Calendar id="date" v-model="date" dateFormat="dd/mm/yy" />
        
        <label for="inputnumber">Cuantity:</label>
        <InputNumber id="inputnumber" v-model="value2" inputId="withoutgrouping" :useGrouping="false" />

        <label for="description">Description:</label>
        <Textarea v-model="value" rows="5" cols="30" />

      <div class="digital-version">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Digital Version </label>
      </div>

      <div class="radio-container">
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
      </div>

      <div class="btn-container">
        <Button label="Save" />
        <Button label="Cancel" />
      </div>



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
    .digital-version {
        width: 100%;
    }
    .radio-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: .75rem;
    }
</style>