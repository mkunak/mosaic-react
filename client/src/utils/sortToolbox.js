export const sortToolbox = {
  AZ: {
    icon: "change_history",
    fn: (a, b) => a - b,
    sFn: (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  },

  ZA: {
    icon: "details",
    fn: (a, b) => b - a,
    sFn: (a, b) => {
      if (b > a) return 1;
      if (b < a) return -1;
      return 0;
    }
  },

  default: {
    icon: "unfold_more",
    fn: (a, b) => a,
    sFn: (a, b) => a
  },

  sort: {
    byDay: (colName, sortType) => (a, b) => {
      const dayA = Number(a[colName].split("-")[2]);
      const dayB = Number(b[colName].split("-")[2]);
      return sortToolbox[sortType].fn(dayA, dayB);
    },

    byMonth: (colName, sortType) => (a, b) => {
      const monthA = Number(a[colName].split("-")[1]);
      const monthB = Number(b[colName].split("-")[1]);
      return sortToolbox[sortType].fn(monthA, monthB);
    },

    byDate: (colName, sortType) => (a, b) => {
      const dateA = Date.parse(a[colName]);
      const dateB = Date.parse(b[colName]);
      return sortToolbox[sortType].fn(dateA, dateB);
    },

    numbers: (colName, sortType) => (a, b) => {
      return sortToolbox[sortType].fn(+a[colName], +b[colName]);
    },

    strings: (colName, sortType) => (a, b) => {
      return sortToolbox[sortType].sFn(a[colName], b[colName]);
    }
  }
};
