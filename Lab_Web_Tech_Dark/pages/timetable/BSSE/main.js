fetch("../../../db/bsse-timetable.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Timetable data fetch failed");
    }
    return response.json();
  })
  .then((data) => {
    buildTimetables(data);
  })
  .catch((error) => console.error("Error fetching timetable data:", error));

function buildTimetables(timetablesData) {
  const timetableWrapper = document.querySelector(".timetable-wrapper");

  timetablesData.forEach((timetable) => {
    const timetableContainer = document.createElement("div");
    timetableContainer.classList.add("timetable");

    const heading = document.createElement("h2");
    heading.classList.add("batch");
    heading.textContent = timetable.batch;

    const table = document.createElement("table");
    table.innerHTML = createTableHeaders();

    timetable.schedule.forEach((timeSlot) => {
      const row = table.insertRow();
      const timeCell = row.insertCell();
      timeCell.textContent = timeSlot.time;
      row.insertCell().textContent = timeSlot.monday;
      row.insertCell().textContent = timeSlot.tuesday;
      row.insertCell().textContent = timeSlot.wednesday;
      row.insertCell().textContent = timeSlot.thursday;
      row.insertCell().textContent = timeSlot.friday;
    });

    timetableContainer.appendChild(heading);
    timetableContainer.appendChild(table);
    timetableWrapper.appendChild(timetableContainer);
  });
}

function createTableHeaders() {
  return `
  <thead>
    <tr>
      <th></th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  <tbody>`;
}
