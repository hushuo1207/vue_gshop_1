/*直接更新多个方法的对象 */
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_FOOD_COUNT,
    RECEIVE_SEARCH_SHOPS

} from './mutation-types'
  

export default {
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },

    [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
    },
 
    [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
    },
    
    [RECEIVE_USER_INFO] (state, {userInfo}) {
        state.userInfo = userInfo
    },

    [RESET_USER_INFO] (state) {
        state.userInfo = {}
    },

    [RECEIVE_INFO](state, {info}) {
        state.info = info
    },

    [RECEIVE_RATINGS](state, {ratings}) {
        state.ratings = ratings
    },

    [RECEIVE_GOODS](state, {goods}) {
        state.goods = goods
    },

    [INCREMENT_FOOD_COUNT](state, {food}) {
        //由于开始时food内部没有count属性，当添加此属性时，
        //无法给food内部数据添加监听用vue中的方法添加  
        //Vue.set()  三个参数
        // 对象
        // 属性名
        // 属性值


        if(!food.count){
            Vue.set(food, 'count', 1)
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },

    [DECREMENT_FOOD_COUNT](state, {food}) {
        if(food.count){
            food.count --
            if(food.count === 0 ){
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },

    [CLEAR_FOOD_COUNT](state) {
        state.cartFoods.forEach(element => {
            element.count = 0
        })
        state.cartFoods = []
    },

    [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
        state.searchShops = searchShops

    },
    
}