import * as orderRepository from "../repositories/orderRepository.js";

export async function postOrder(data){
    // Doing the post code with a mapping on the body json
    const { numeroPedido, valorTotal, dataCriacao, items } = data;

    await orderRepository.insertOrder(numeroPedido, valorTotal, dataCriacao);

    for(const item of items){
        await orderRepository.insertItem(
            numeroPedido,
            item.idItem,
            item.quantidadeItem,
            item.valorItem
        );
    }
}

export async function getOrders(){
    return orderRepository.getOrders();
}

export async function getOrderById(id){
    return orderRepository.getOrderById(id);
}