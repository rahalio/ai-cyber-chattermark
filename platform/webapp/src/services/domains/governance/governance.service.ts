import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawGovernanceService = {
  async getEscalationPolicy() {
    return apiClient.get(`/v1/governance/escalation-policy`);
  },
  async updateEscalationPolicy(body: unknown) {
    return apiClient.put(`/v1/governance/escalation-policy`, body);
  },
  async listAuditEvents() {
    return apiClient.get(`/v1/governance/audit-events`);
  },
};

export const governanceService = makeService(rawGovernanceService, "governance");

