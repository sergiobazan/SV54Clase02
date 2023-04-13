import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:"es",
    messages :{
        en:{ "Code":'Code',"Name" :"Name", "Category": "Category"
        },
        es:{"Code":'Código',"Name" :"Nombre", "Category": "Categoría"
        },
        fr:{"Code":'Code',"Name" :"Nom", "Category": "Catégorie"
        }
    }
})


export  default  i18n;