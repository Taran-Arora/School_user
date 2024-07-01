import React, { useState, useEffect } from "react";

const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Calendar = () => {
  const current = new Date();
  const todaysDate = current.getDate();
  const currentYear = current.getFullYear();
  const currentMonth = current.getMonth();

  const [date, setDate] = useState(current);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendarDays(date);
  }, [date]);

  const generateCalendarDays = (currentDate) => {
    const newDate = new Date(currentDate);
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const totalDaysInMonth = getTotalDaysInAMonth(year, month);
    const firstDayOfWeek = getFirstDayOfWeek(year, month);

    let calendarDays = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push("");
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      calendarDays.push(day);
    }

    setDays(calendarDays);
  };

  const getTotalDaysInAMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
    setDate(new Date(selectedYear, e.target.value, 1));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
    setDate(new Date(e.target.value, selectedMonth, 1));
  };

  const handleTodayClick = () => {
    setDate(new Date());
  };

  const handleLeftArrowClick = () => {
    const newMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    const newYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
    setDate(new Date(newYear, newMonth, 1));
  };

  const handleRightArrowClick = () => {
    const newMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
    const newYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
    setDate(new Date(newYear, newMonth, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-month-arrow-container">
        <div className="calendar-month-year-container">
          <select className="calendar-years" value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 121 }, (_, i) => currentYear - 60 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select className="calendar-months" value={selectedMonth} onChange={handleMonthChange}>
            {monthArray.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="calendar-arrow-container">
          <button className="calendar-today-button" onClick={handleTodayClick}>
            Today {todaysDate}
          </button>
          <button className="calendar-left-arrow" onClick={handleLeftArrowClick}>
            ←
          </button>
          <button className="calendar-right-arrow" onClick={handleRightArrowClick}>
            →
          </button>
        </div>
      </div>
      <ul className="calendar-week">
        {weekArray.map((week) => (
          <li key={week} className="calendar-week-day">
            {week}
          </li>
        ))}
      </ul>
      <ul className="calendar-days">
        {days.map((day, index) => (
          <li
            key={index}
            className={`calendar-day ${
              day === todaysDate && selectedMonth === currentMonth && selectedYear === currentYear
                ? "calendar-day-active"
                : ""
            }`}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
