export const calculateJobLength = (startDate: string, endDate: string) => {
  const parseDate = (dateStr: string) => {
    const [month, year] = dateStr.split(" ");
    return new Date(parseInt(year), new Date(`${month} 1, 2000`).getMonth());
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths === 0) {
    return "Less than a month";
  } else if (diffMonths === 1) {
    return "1 month";
  } else if (diffMonths > 12) {
    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears} years and ${diffMonths % 12} months`;
  } else {
    return `${diffMonths}`;
  }
};
