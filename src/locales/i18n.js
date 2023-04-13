import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:"en",
    messages :{
        en:{ "Code":'Code',"Name" :"Name", "Category": "Category" , "Date":'Date', "Cuantity":'Cuantity' , "Description":'Description'
        },
        es:{"Code":'Código',"Name" :"Nombre", "Category": "Categoría" , "Date":'Fecha', "Cuantity":'Cantidad' , "Description":'Descripcion'
        },
        fr:{"Code":'Code',"Name" :"Nom", "Category": "Catégorie", "Date":'Date', "Cuantity":'Montant' , "Description":'Descripcion'
        }
    }
})


export  default  i18n;