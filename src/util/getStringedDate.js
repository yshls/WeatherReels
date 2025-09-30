// YYYY-MM-DD 형식으로 날짜를 변환하는 헬퍼 함수
export const getStringedDate = (targetDate) => {
  const d = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const date = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
};
