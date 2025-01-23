export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
};

export function convertDate(time: string, duration: number) {
  // Преобразуем время в объект Date
  const departureTime = new Date(time);

  // Форматируем время отправления в "HH:MM"
  const formatTime = (date: any) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Получаем время отправления
  const departure = formatTime(departureTime);

  // Рассчитываем время прибытия
  const arrivalTime = new Date(departureTime.getTime() + duration * 60000); // duration в миллисекундах
  const arrival = formatTime(arrivalTime);

  // Возвращаем результат в формате "HH:MM - HH:MM"
  return `${departure} - ${arrival}`;
}


