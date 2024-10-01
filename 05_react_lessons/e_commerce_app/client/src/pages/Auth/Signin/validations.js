import * as yup from "yup"
const validationSchema = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin").required(),
    password: yup.string().min(5,"Parolanız en az 5 karakter olmalıdır.").required(),
})
export default validationSchema 