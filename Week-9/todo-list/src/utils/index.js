export const todoStatus = {
  PENDING: "PENDING",
  DONE: "DONE"
};

export const getListItem = (
  title,
  key = null,
  status = todoStatus.PENDING
) => ({
  title,
  status,
  id: key
});
