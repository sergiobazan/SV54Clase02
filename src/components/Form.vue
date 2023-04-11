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