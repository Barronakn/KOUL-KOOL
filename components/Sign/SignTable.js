import Image from 'next/image';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const initialOrders = [
  { id: '1', username: 'Commerçant', adressCity: 'Adress', contact: 'FirstLastname', phone:"06 00 00 00 00", email: "sample@email.com", },
  { id: '2', username: 'Commerçant', adressCity: 'Adress', contact: 'FirstLastname', phone:"06 00 00 00 00", email: "sample@email.com", },
  { id: '3', username: 'Commerçant', adressCity: 'Adress', contact: 'FirstLastname', phone:"06 00 00 00 00", email: "sample@email.com", },
  { id: '4', username: 'Commerçant', adressCity: 'Adress', contact: 'FirstLastname', phone:"06 00 00 00 00", email: "sample@email.com", },
  { id: '5', username: 'Commerçant', adressCity: 'Adress', contact: 'FirstLastname', phone:"06 00 00 00 00", email: "sample@email.com", },
];

export default function SignTable() {
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
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className="grid grid-cols-6 gap-2 p-3 font-bold">
                <div>Nom de commerçant</div>
                <div>Adresse</div>
                <div>Contact principal</div>
                <div>Phone</div>
                <div>Email</div>
                <div></div>
              </div>
              {orders.map((order, index) => (
                <Draggable key={order.id} draggableId={order.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="grid grid-cols-6 gap-2 bg-white p-3 mb-2 rounded shadow"
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
                            <p className="font-semibold">{order.username}</p>
                        </div>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.adressCity}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.contact}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.phone}</p>
                      </div>

                      <div className="flex flex-row items-center gap-7">
                        <p>{order.email}</p>
                      </div>

                      <div className="flex flex-row items-center gap-7">
                      <button className="bg-gray-white p-2 rounded">
                          Modifier
                        </button>

                        <button className="bg-gray-white p-2 rounded">
                          Rejeter
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
        <p className="mb-4">
          {selectedOrders.length} of {orders.length} row(s) selected.
        </p>
        <div className="flex gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded-md">Previous</button>
          <button className="bg-orange px-4 py-2 text-white hover:text-orange hover:bg-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
