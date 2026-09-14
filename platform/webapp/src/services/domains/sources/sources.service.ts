import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawSourcesService = {
  async listSources(params?: { trustState?: string }) {
    const q = new URLSearchParams();
    if (params?.trustState) q.set("trustState", params.trustState);
    const qs = q.toString();
    return apiClient.get(`/v1/sources${qs ? `?${qs}` : ""}`);
  },
  async getSourceReliability(sourceId: string) {
    return apiClient.get(`/v1/sources/${sourceId}/reliability`);
  },
  async listManipulationFindings(params?: { vulnerabilityId?: string }) {
    const q = new URLSearchParams();
    if (params?.vulnerabilityId) q.set("vulnerabilityId", params.vulnerabilityId);
    const qs = q.toString();
    return apiClient.get(`/v1/sources/manipulation-findings${qs ? `?${qs}` : ""}`);
  },
};

export const sourcesService = makeService(rawSourcesService, "sources");

