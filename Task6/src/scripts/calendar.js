function renderCalendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let activeDate = currentDate;
  let activeYear = currentYear;
  let activeMonth = currentMonth;
  let activeDay = currentDay;

  let days = [];

  function createAndAddElementToElement(tag, className, parentElement, text) {
    const element = document.createElement(tag.toString());
    element.className = className;
    if (text) {
      element.appendChild(document.createTextNode(text));
    }
    if (parentElement) {
      parentElement.appendChild(element);
    }
    return element;
  }

  const calendar = createAndAddElementToElement('div', 'calendar', document.body);
  const timeNavigation = createAndAddElementToElement('nav', 'calendar__time-navigation', calendar);

  const decreaseMonth = createAndAddElementToElement('i', 'fa fa-angle-left fa-lg', timeNavigation);
  const month = createAndAddElementToElement('div', 'calendar__month', timeNavigation);
  const increaseMonth = createAndAddElementToElement('i', 'fa fa-angle-right fa-lg', timeNavigation);

  const decreaseYear = createAndAddElementToElement('i', 'fa fa-angle-left fa-lg', timeNavigation);
  const year = createAndAddElementToElement('div', 'calendar__year', timeNavigation);
  const increaseYear = createAndAddElementToElement('i', 'fa fa-angle-right fa-lg', timeNavigation);

  const daysOfWeekContainer = createAndAddElementToElement('div', 'calendar__days-of-week', calendar);
  const daysContainer = createAndAddElementToElement('div', 'calendar__days-container', calendar);

  daysOfWeek.forEach(x => createAndAddElementToElement('div', 'days-container__day days-container__day_name', daysOfWeekContainer, x));


  function renderActiveMonth() {
    // find last days of current and previous months
    const lastDayOfCurrentMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
    const lastDayOfPreviousMonthDate = new Date(activeYear, activeMonth, 0);
    let lastDayOfPreviousMonthDay = lastDayOfPreviousMonthDate.getDate();
    const lastDayOfPreviousMonthWeekDay = lastDayOfPreviousMonthDate.getDay();

    days = [];
    // create rest of the previous month on
    // the same week with the beginning of current month
    for (let i = lastDayOfPreviousMonthWeekDay; i > 0; i--) {
      days.unshift(lastDayOfPreviousMonthDay--);
    }
    // append dates of current month
    for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
      days.push(i);
    }
    // find rest of the last week of current month in next month
    const lastWeekNextMonthDays = 7 - (days.length % 7 || 7);

    for (let i = 1; i < lastWeekNextMonthDays + 1; i++) {
      days.push(i);
    }

    daysContainer.innerHTML = '';
    year.innerText = `${activeYear}`;
    month.innerText = `${monthsNames[activeMonth]}`;

    for (let i = 0; i < days.length; i++) {
      const day = createAndAddElementToElement('div', 'days-container__day', daysContainer, days[i]);
      if ((i < 6) && (days[i] > 20)
                || (i > 20 && days[i] < 7)
      ) {
        day.classList.add('days-container__day_other-month');
      }
      if ((days[i] === currentDay)
                && (activeMonth === currentMonth)
                && (activeYear === currentYear)
      ) {
        if (
          (currentDay > 22) && (days.lastIndexOf(currentDay) === i)
                    || (currentDay < 7) && (days.indexOf(currentDay) === i)
                    || (currentDay > 6) && (currentDay < 23)
        ) {
          day.classList.add('days-container__day_current');
        }
      }
      if (days[i] === activeDay) {
        if (
          (activeDay > 22) && (days.lastIndexOf(activeDay) === i)
                    || (activeDay < 7) && (days.indexOf(activeDay) === i)
                    || (activeDay > 6) && (activeDay < 23)
        ) {
          day.classList.add('days-container__day_active');
        }
      }
    }
  }

  function changeActiveDate(newYear, newMonth, newDate) {
    activeDate = new Date(newYear, newMonth, newDate);
    activeYear = activeDate.getFullYear();
    activeMonth = activeDate.getMonth();
    activeDay = activeDate.getDate();
  }

  function goToNextYear() {
    changeActiveDate(activeYear + 1, activeMonth, activeDay);
    renderActiveMonth();
  }

  function goToPreviousYear() {
    changeActiveDate(activeYear - 1, activeMonth, activeDay);
    renderActiveMonth();
  }

  function goToNextMonth() {
    // make sure that active date not exceeds next month maximum
    const nextMonthMaximum = new Date(activeYear, activeMonth + 2, 0).getDate();
    if (activeDay > nextMonthMaximum) {
      changeActiveDate(activeYear, activeMonth + 1, nextMonthMaximum);
    } else {
      changeActiveDate(activeYear, activeMonth + 1, activeDay);
    }
    renderActiveMonth();
  }

  function goToPreviousMonth() {
    changeActiveDate(activeYear, activeMonth - 1, activeDay);
    renderActiveMonth();
  }

  renderActiveMonth();
  decreaseMonth.addEventListener('click', goToPreviousMonth);
  increaseMonth.addEventListener('click', goToNextMonth);
  decreaseYear.addEventListener('click', goToPreviousYear);
  increaseYear.addEventListener('click', goToNextYear);
  daysContainer.addEventListener('click', (event) => {
    const previousActiveDay = daysContainer.getElementsByClassName('days-container__day_active')[0];
    if (previousActiveDay) {
      previousActiveDay.classList.remove('days-container__day_active');
    }
    event.target.classList.add('days-container__day_active');
    activeDay = +event.target.innerText;
    if (event.target.classList.contains('days-container__day_other-month')) {
      if (+event.target.innerText < 7) {
        goToNextMonth();
      } else if (+event.target.innerText > 21) {
        goToPreviousMonth();
      }
    }
  });
}

renderCalendar();
