/**
 * Postman-collection 1:1 Vitest tests for governance (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  limit: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / governance (1:1 generated)", () => {

  it("getEscalationPolicy", async () => {
    const url = sub("{{baseUrl}}/v1/governance/escalation-policy");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateEscalationPolicy", async () => {
    const url = sub("{{baseUrl}}/v1/governance/escalation-policy");
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"minimumScore\": 0,\n  \"minimumIndependentSources\": 0,\n  \"manipulationTolerance\": 0,\n  \"minimumSourceEvaluatedWarnings\": 5,\n  \"suppressNonApplicable\": true,\n  \"deferralMaxDays\": 0,\n  \"updatedBy\": \"\",\n  \"updatedAt\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['escalationPolicyId'] = j.data.id;
  });

  it("listAuditEvents", async () => {
    const url = sub("{{baseUrl}}/v1/governance/audit-events?cursor={{cursor}}&limit={{limit}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
