import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawAssuranceService = {
  async listBacktests() {
    return apiClient.get(`/v1/assurance/backtests`);
  },
  async getAccuracyReport(period: string) {
    return apiClient.get(`/v1/assurance/accuracy-report?period=${encodeURIComponent(period)}`);
  },
  async assembleEvidentiaryTimeline(body: unknown) {
    return apiClient.post(`/v1/assurance/evidentiary-timeline`, body);
  },
};

export const assuranceService = makeService(rawAssuranceService, "assurance");

