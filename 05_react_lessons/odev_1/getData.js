import axios from "axios"
const getData = async (user_id) =>{
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    const post = posts.filter((item) => item.id === user_id)
    return {user , post}
}

export default getData