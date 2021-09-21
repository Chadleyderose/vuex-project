import Api from "./Api";

export default{
    all(){
        return Api.get('cart')
    },
    store(data){
        return Api.post('cart', data)
    }
}