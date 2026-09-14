import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawForecastsService = {
  async listForecasts(params?: { minScore?: number }) {
    const q = new URLSearchParams();
    if (params?.minScore != null) q.set("minScore", String(params.minScore));
    const qs = q.toString();
    return apiClient.get(`/v1/forecasts${qs ? `?${qs}` : ""}`);
  },
  async getForecast(vulnerabilityId: string) {
    return apiClient.get(`/v1/forecasts/${encodeURIComponent(vulnerabilityId)}`);
  },
  async listScoringVersions() {
    return apiClient.get(`/v1/scoring-versions`);
  },
};

export const forecastsService = makeService(rawForecastsService, "forecasts");

