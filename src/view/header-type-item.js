export const createHeaderTypeItem = (typeItemData) => {
  const lowerCaseType = new String(typeItemData).toLowerCase();
  return `<div class="event__type-item">
    <input id="event-type-${lowerCaseType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${lowerCaseType}">
    <label class="event__type-label  event__type-label--${lowerCaseType}" for="event-type-${lowerCaseType}-1">${typeItemData}</label>
  </div>`;
};
