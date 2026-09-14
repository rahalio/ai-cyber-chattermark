import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawSignalsService = {
  async listSignals(params?: { vulnerabilityId?: string; bindingStatus?: string }) {
    const q = new URLSearchParams();
    if (params?.vulnerabilityId) q.set("vulnerabilityId", params.vulnerabilityId);
    if (params?.bindingStatus) q.set("bindingStatus", params.bindingStatus);
    const qs = q.toString();
    return apiClient.get(`/v1/signals${qs ? `?${qs}` : ""}`);
  },
  async getSignal(signalId: string) {
    return apiClient.get(`/v1/signals/${signalId}`);
  },
};

export const signalsService = makeService(rawSignalsService, "signals");

