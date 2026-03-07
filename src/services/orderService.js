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

export async function putOrders(data){
    // Doing the put code with a mapping on the body json
    const { numeroPedido, valorTotal, dataCriacao, items} = data;

    await orderRepository.putOrders(numeroPedido, valorTotal, dataCriacao);

    // Removing all the older items in the order
    await orderRepository.deleteItemsByOrder(numeroPedido);

    for(const item of items){
        await orderRepository.postItem(
            numeroPedido,
            item.idItem,
            item.quantidadeItem,
            item.valorItem
        )
    }
}

export async function deleteOrder(id){
    await orderRepository.deleteItemsByOrder(id);
    await orderRepository.deleteOrderById(id);
}