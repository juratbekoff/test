import api from "./api";

export default class Years {
  getYears = async () => {
    return await api.get("/year");
  };
  getYearsContent = async (id) => {
    return await api.get(`/year/content/${id}`);
  };
}
