import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawDecisionsService = {
  async listDecisions(params?: { outcome?: string; cursor?: string; limit?: number }) {
    const q = new URLSearchParams();
    if (params?.outcome) q.set("outcome", params.outcome);
    if (params?.cursor) q.set("cursor", params.cursor);
    if (params?.limit) q.set("limit", String(params.limit));
    const qs = q.toString();
    return apiClient.get(`/v1/decisions${qs ? `?${qs}` : ""}`);
  },
  async createDecision(warningId: string, body: unknown) {
    return apiClient.post(`/v1/warnings/${warningId}/decision`, body);
  },
  async listDeferralsDue(params?: { onOrBefore?: string }) {
    const q = new URLSearchParams();
    if (params?.onOrBefore) q.set("onOrBefore", params.onOrBefore);
    const qs = q.toString();
    return apiClient.get(`/v1/decisions/deferrals/due${qs ? `?${qs}` : ""}`);
  },
};

export const decisionsService = makeService(rawDecisionsService, "decisions");

