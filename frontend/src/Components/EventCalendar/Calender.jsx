import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import classNames from "classnames";
import Modalcom from "./Modalcom";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex  justify-between items-center py-2">
        <button
          className="text-gray-600 pb-10 hover:text-gray-800"
          onClick={() => prevMonth()}
        >
          <img
            src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
            className="w-6 h-6"
            alt="right"
          />
        </button>
        <div className="text-lg pb-10 heading font-bold text-gray-800">
          {format(currentDate, dateFormat)}
        </div>
        <button
          className="text-gray-600 pb-10 hover:text-gray-800"
          onClick={() => nextMonth()}
        >
          <img
            src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
            className="w-6 h-6"
            alt="right"
          />
        </button>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-xs heading px-6 pb-4 text-gray-600 font-semibold"
        >
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="flex justify-between ">{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={classNames(
              "flex heading items-center justify-center w-10 h-10 mx-auto cursor-pointer rounded-full transition duration-300 ease-in-out",
              {
                "text-gray-400": !isSameMonth(day, monthStart),
                "text-black": isSameDay(day, new Date()),
                "hover:bg-gray-200": !isSameMonth(day, monthStart),
                "bg-gray-200": isSameDay(day, new Date()),
              }
            )}
            onClick={() => openModal(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="flex justify-between w-full">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const openModal = (day) => {
    setIsModalOpen(true);
    // Optionally, you can handle the selected day here
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitEvent = (eventData) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...eventData, date: currentDate },
    ]);
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className="mx-auto grid gap-20 grid-cols-2 lg:grid-cols-2 max-w-7xl p-4 bg-white rounded-md">
      <div className="lg:w-[40svw] w-full py-12 rounded-[20px] border px-10">
        {header()}
        {daysOfWeek()}
        {cells()}
      </div>
      <Modalcom
        isOpen={isModalOpen}
        closeModal={closeModal}
        onSubmit={onSubmitEvent}
      />
      <div className="rounded-[20px] border p-4 ">
        <h2 className="text-xl font-semibold text-center heading my-4">
          Events
        </h2>
        <ul className=" rounded-xl px-4">
          {/* {events.map((event, index) => (
            <li key={index} className=" py-2">
              <div><strong>Date:</strong> {format(event.date, 'MMMM d, yyyy')}</div>
              <div><strong>Name:</strong> {event.name}</div>
              <div><strong>Description:</strong> {event.description}</div>
              <div><strong>Place:</strong> {event.place}</div>
              <div><strong>Time:</strong> {event.time}</div>
              <div><strong>Host:</strong> {event.host}</div>
            </li>
          ))} */}
          {events.map((event, index) => (
             <li key={index} className=" py-2">
          <div
            className="relative block overflow-hidden rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg heading font-bold text-gray-900 sm:text-xl">
                {event.name}
                </h3>

                <p className="mt-1 text-xs Paras font-medium text-gray-600">
                {event.host}
                </p>
              </div>

              {/* <div className="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="size-16 rounded-lg object-cover shadow-sm"
                />
              </div> */}
            </div>

            <div className="mt-4">
              <p className="text-pretty Paras text-sm text-gray-500">
              {event.description}
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600 heading">{format(event.date, 'MMMM d, yyyy')}</dt>
                <dd className="text-xs text-gray-500 Paras">Date</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600 heading">{event.time}</dt>
                <dd className="text-xs text-gray-500 Paras">Time</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium heading text-gray-600">
                {event.place}
                </dt>
                <dd className="text-xs text-gray-500 Paras">Place</dd>
              </div>
            </dl>
          </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
