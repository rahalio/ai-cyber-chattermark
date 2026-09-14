import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawEstateService = {
  async listEstateItems() {
    return apiClient.get(`/v1/estate/items`);
  },
  async listEstateMatches(params?: { vulnerabilityId?: string; applicableOnly?: boolean }) {
    const q = new URLSearchParams();
    if (params?.vulnerabilityId) q.set("vulnerabilityId", params.vulnerabilityId);
    if (params?.applicableOnly != null) q.set("applicableOnly", String(params.applicableOnly));
    const qs = q.toString();
    return apiClient.get(`/v1/estate/matches${qs ? `?${qs}` : ""}`);
  },
};

export const estateService = makeService(rawEstateService, "estate");

