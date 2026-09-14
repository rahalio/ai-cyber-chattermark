# Chattermark — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### Vulnerability manager

- As a vulnerability manager, I want a shortlist capped at the number of emergency windows I actually have this month, so that prioritisation produces a decision rather than another ranked spreadsheet.
- As a vulnerability manager, I want warnings filtered to software and versions we genuinely run, so that I stop spending analyst time dismissing findings about products we retired two years ago.
- As a vulnerability manager, I want to see how many days ahead of the vendor advisory each of last quarter's warnings arrived, so that I can defend the subscription at renewal with our own numbers.
- As a vulnerability manager, I want a warning that we deferred to reappear at its review date with its original evidence intact, so that a deferral is a scheduled decision and not a quiet drop.

### Threat intelligence analyst

- As a threat intelligence analyst, I want to read the exact messages behind a warning alongside each source's historical accuracy, so that I can distinguish a respected researcher's alarm from an aggregator repeating a press release.
- As a threat intelligence analyst, I want the platform to show me what the score would be with suspected inauthentic accounts removed, so that I can tell whether a warning is being manufactured.
- As a threat intelligence analyst, I want to raise or lower a warning with a recorded rationale, so that my judgement enters the record rather than being applied verbally in a stand-up.
- As a threat intelligence analyst, I want to see how a message was bound to a vulnerability identifier and how confident that binding is, so that I never escalate on a mislinked advisory.

### Change advisory board chair

- As a change manager, I want each escalated warning to arrive with a named asset owner, an affected system list, and an expected outage profile, so that it can be scheduled instead of debated.
- As a change manager, I want to see the platform's realised accuracy over the last two quarters before I approve out-of-cycle changes on its recommendation, so that emergency capacity is allocated on evidence.
- As a change manager, I want warnings that were escalated but never implemented flagged with their reason, so that the board can see where our own process, not the signal, is the bottleneck.

### Asset and platform owner

- As a platform owner, I want to see the quoted practitioner language that justified an out-of-hours patch on my system, so that I can explain the disruption to my business stakeholders.
- As a platform owner, I want to record that a compensating control already mitigates a warned-about vulnerability, so that the same warning does not force an outage I do not need.

### CISO, audit and insurance liaison

- As a CISO, I want an exportable timeline of what we were warned about, when, and what we decided, so that a post-incident review or an insurance claim meets a documented control rather than an anecdote.
- As an audit liaison, I want the platform to show its own back-tested precision including its bad quarters, so that our reliance on a third-party signal is itself an auditable control decision.
- As a governance administrator, I want to configure escalation thresholds, minimum independent-source counts, and manipulation tolerances as policy, and to see every change to those settings logged, so that nobody can quietly loosen the gate that triggers emergency changes.
