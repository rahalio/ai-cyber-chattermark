import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawWarningsService = {
  async listWarnings(params?: { status?: string; cursor?: string; limit?: number }) {
    const q = new URLSearchParams();
    if (params?.status) q.set("status", params.status);
    if (params?.cursor) q.set("cursor", params.cursor);
    if (params?.limit) q.set("limit", String(params.limit));
    const qs = q.toString();
    return apiClient.get(`/v1/warnings${qs ? `?${qs}` : ""}`);
  },
  async getWarningShortlist(params?: { period?: string; capacity?: number }) {
    const q = new URLSearchParams();
    if (params?.period) q.set("period", params.period);
    if (params?.capacity) q.set("capacity", String(params.capacity));
    const qs = q.toString();
    return apiClient.get(`/v1/warnings/shortlist${qs ? `?${qs}` : ""}`);
  },
  async validateWarning(warningId: string, body: unknown) {
    return apiClient.post(`/v1/warnings/${warningId}/validation`, body);
  },
};

export const warningsService = makeService(rawWarningsService, "warnings");

