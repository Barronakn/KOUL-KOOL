import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const initialOrders = [
  {
    id: "1",
    username: "Company",
    adressCity: "Adress.city.home",
    contact: "FirstLastname",
    phone: "06 00 00 00 00",
    email: "sample@email.com",
  },
  {
    id: "2",
    username: "Company",
    adressCity: "Adress.city.home",
    contact: "FirstLastname",
    phone: "06 00 00 00 00",
    email: "sample@email.com",
  },
  {
    id: "3",
    username: "Company",
    adressCity: "Adress.city.home",
    contact: "FirstLastname",
    phone: "06 00 00 00 00",
    email: "sample@email.com",
  },
  {
    id: "4",
    username: "Company",
    adressCity: "Adress.city.home",
    contact: "FirstLastname",
    phone: "06 00 00 00 00",
    email: "sample@email.com",
  },
  {
    id: "5",
    username: "Company",
    adressCity: "Adress.city.home",
    contact: "FirstLastname",
    phone: "06 00 00 00 00",
    email: "sample@email.com",
  },
];

export default function RetailerTable() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(null);


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

  const toggleMenu = (id) => {
    setIsMenuOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="orders">
          {(provided) => (
            <div {...provided.droppableProps}
            {...provided.draggableProps}
            {...provided.dragHandleProps} ref={provided.innerRef}>
              <div className="grid grid-cols-5 gap-2 p-3 z-0 text-sm font-medium text-gray-300">
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
                      className="grid grid-cols-5 gap-2 bg-white text-gray-400 p-3 mb-2 rounded shadow"
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
                        <p>{order.adressCity}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.contact}</p>
                      </div>

                      <div className="flex flex-row items-center gap-2">
                        <p>{order.phone}</p>
                      </div>

                      <div className="flex flex-row items-center gap-7 relative">
                        <p>{order.email}</p>
                        <Image
                          src="/assets/icons/more-horizontal.png"
                          width={15}
                          height={15}
                          className="cursor-pointer"
                          onClick={() => toggleMenu(order.id)}
                        />

                        {isMenuOpen === order.id && (
                          <div className="absolute right-0 top-8 bg-transparent z-50 shadow-md rounded-lg">
                            <ul className="text-sm text-gray-700 bg-white p-2">
                              <li className="p-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                              <li className="p-2 hover:bg-gray-100 cursor-pointer">Voir l’historique</li>
                              <li className="p-2 hover:bg-gray-100 cursor-pointer">Voir le relevé</li>
                              <li className="p-2 hover:bg-gray-100 cursor-pointer">Block</li>
                              <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                Delete
                                <span className="text-gray-500">⌘ ⌫</span>
                              </li>
                            </ul>
                          </div>
                        )}
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
          <button className="text-chocolate-red hover:text-opacity-100 text-opacity-60 border border-gray-75 px-4 py-2 rounded-md">
            Previous
          </button>
          <button className="bg-orange px-4 py-2 text-white hover:text-orange hover:bg-white rounded-md">
            Next
          </button>
        </div>
      </div>

      <Link href="/userstory" className="flex justify-end mt-12">
        <button className="bg-orange p-3 text-white rounded-full">
          <Image
            src="/assets/icons/white-plus.png"
            alt="white-plus-icon"
            width={15}
            height={15}
          />
        </button>
      </Link>
    </div>
  );
}
