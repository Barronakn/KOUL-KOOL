import Image from 'next/image';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialOrders = [
  { id: '1', username: 'Petit KoulPanier', type: 'Small', price: 1000, percent: '20%' },
  { id: '2', username: 'Moyen KoulPanier', type: 'Medium', price: 1500, percent: '20%' },
  { id: '3', username: 'Grand KoulPanier', type: 'Large', price: 2000, percent: '20%' },
];

export default function BasketsTable() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; 

    const items = Array.from(orders);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOrders(items);
  };

  
  const handleCheckboxChange = (id) => {
    setSelectedOrders((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((orderId) => orderId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="orders">
          {(provided) => (
            <div {...provided.droppableProps} 
            {...provided.draggableProps}
            {...provided.dragHandleProps} ref={provided.innerRef}>
              <div className="grid grid-cols-5 gap-2 p-3 text-sm font-medium text-gray-300">
                <div>Panier surprise</div>
                <div>Type</div>
                <div>Price</div>
                <div>Pourcentage</div>
                <div>Action</div>
              </div>
              {orders.map((order, index) => (
                <Draggable key={order.id} draggableId={order.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="grid grid-cols-5 gap-2 text-gray-400 bg-white p-3 mb-2 rounded shadow"
                    >
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex flex-row items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedOrders.includes(order.id)}
                            onChange={() => handleCheckboxChange(order.id)}
                          />
                          <Image
                            src="/assets/icons/dragdrog.png"
                            alt="dragdrog-icon"
                            width={10}
                            height={10}
                          />
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <p className="font-medium">{order.username}</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.type}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.price} DA</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.percent}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <button className="bg-gray-white p-2 rounded">
                          Modifier
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex justify-between mt-6">
        <p className="mb-4 text-gray-5">
          {selectedOrders.length} of {orders.length} row(s) selected.
        </p>
        <div className="flex gap-2">
          <button className="text-chocolate-red hover:text-opacity-100 text-opacity-60 border border-gray-75 px-4 py-2 rounded-md">Previous</button>
          <button className="bg-orange px-4 py-2 text-white hover:text-orange hover:bg-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
